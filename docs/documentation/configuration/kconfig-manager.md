---
sidebar_position: 1
---
# Kconfig Manager

The Kconfig Manager is a `menuconfig`/`guiconfig` style editor that runs directly inside VS Code. It edits the Kconfig options of one application and one build configuration, with a searchable option tree, an info pane, and undo/redo.

Its key advantage over the classic interactive tools: it keeps track of the values that only live in the build's `.config` and can turn them into `prj.conf` or config fragment content in one click. With `menuconfig` or `guiconfig`, those changes stay in the build directory and are silently lost on the next pristine build unless you copy them by hand. See [Make changes permanent](#make-changes-permanent).

![Kconfig Manager](/img/zw/kconfig-manager.png)

:::tip
Prefer the classic tools? [Menuconfig](menuconfig.md) (terminal) and [GUI Config](guiconfig.md) (external window) are still available in the same "Configure" submenu.
:::

## Open the Kconfig Manager

In the "Applications" view, right-click on the application > Configure > Kconfig Manager. You can also right-click on a specific build configuration to open it for that configuration.

![Kconfig Manager in the Configure submenu](/img/zw/configuration/zw_kconfig_menu.png)

- The panel opens as an editor tab named "Kconfig: `<app>` [`<config>`]". Each build configuration gets its own tab.
- If the application has several build configurations and none is active, a picker "Kconfig Manager: choose a build configuration" lets you pick one.

:::note
If the build directory is not configured yet, the panel first runs the CMake configure stage automatically (the same preparation `west build -t menuconfig` does). If that step fails, check the task output and click "Retry". Panel messages are also logged in the "Zephyr Workbench: Kconfig" output channel.
:::

## Layout

- **Toolbar**: a "Filter tree…" box (space separates terms that must all match, regex allowed), a jump button (also `/` or `Ctrl+F`) to search a symbol by name or prompt, and two toggles:
  - "name": show the `CONFIG_` symbol names next to the prompts.
  - "all": also show invisible options, dimmed.
- **Action row**: undo/redo, the pending-changes pill, the save and export buttons (see below), and a "● Modified" marker when there are unsaved changes.
- **Path bar**: a breadcrumb of the current menu location. Click a parent to go back up.
- **Option tree** (left): the same menu hierarchy as `menuconfig`. Options that have never been assigned show a "NEW" badge.
- **Info pane** (right): details for the selected symbol: its name, type and current value, then "Prompt", "Blocked by (unmet dependencies)" when it is locked, "Help", "Direct dependencies", "Defaults", "Choice symbols", and "Definition" with a clickable `file:line` that opens the Kconfig source in an editor.

## Edit values

- **bool / tristate**: click the checkbox to cycle the value (checked = `y`, "M" = module, empty = `n`), or press `y`, `m`, `n` on the selected row.
- **choice**: click the radio ring of the option you want to select.
- **string / int / hex**: type in the inline editor. The expected range is hinted and invalid values are rejected with an error.
- Options whose dependencies are not met show a lock icon ("Locked by dependencies") and cannot be changed. Select the option and read "Blocked by (unmet dependencies)" in the info pane to see which symbols to enable first.
- Use undo/redo (`Ctrl+Z` / `Ctrl+Y`) to step through your edits.

## Pending changes

Every edit is tracked before it is saved:

- The "`<n>` changed" pill in the toolbar opens the changes panel: each row shows the symbol, its old and new value, and a "Revert" button.
- The tab title and the toolbar show "● Modified" while changes are unsaved.
- If you close the tab with unsaved changes, a dialog asks whether to save them to the build's `.config` ("Save" / "Don't Save"). Cancel reopens the panel with your changes intact.

## Save and load

- **Save**: writes the build configuration's `.config` in the build directory. A notification offers "Build now" to rebuild so the change takes effect.
- **Save As…**: saves a copy of the full configuration to a file of your choice.
- **Save minimal…**: saves a minimal `defconfig` containing only the options that differ from their defaults.
- **Open…**: loads a configuration file, replacing the current values.

:::note
If the `.config` file changes on disk (for example after a build), the panel reloads it automatically when you have no local edits. With unsaved edits, your changes are kept; use "Open…" to reload from disk.
:::

## Make changes permanent

This is the feature that sets the Kconfig Manager apart. Saving to `.config` only affects the current build directory: a pristine build regenerates `.config` from the project's config files (`prj.conf` and fragments) and discards anything else. The "`<n>` temporary" pill counts the options that currently differ from those files, automatically, including values you set earlier with `menuconfig`, `guiconfig` or scripts.

To persist them:

- **To prj.conf**: writes the temporary values to the application's `prj.conf`.
- **To fragment…**: writes them to an extra config fragment file (`.conf`) of your choice. If the fragment is not part of the build yet, the confirmation notification offers "Add to build config", which registers it in the build configuration's `EXTRA_CONF_FILE`.

Both open the "Make temporary values permanent" overlay first:

1. Review the list: each entry shows the old and new value, with a checkbox to include or exclude it. A warning icon flags values that a later fragment would override.
2. Use the "all" / "none" links to adjust the selection.
3. Click "Write to `<file>`". The options are written to a managed region of the target file, so re-exporting later updates the same block.

### Disabled options and default values

The export only writes the lines the next build needs to give your values:

- A line is written when, without it, the config files (the board defconfig, `prj.conf` and the fragments) would give the option another value. A disabled bool is written as `CONFIG_FOO=n`.
- A line of the managed region that is no longer needed is removed. When you set an option back to the value it gets without that line, from the other config files or from its Kconfig default, the line goes and nothing is written in its place.

For example, the `stm32f4_disco` board defconfig sets `CONFIG_HW_STACK_PROTECTION=y`, and the Kconfig default of `HW_STACK_PROTECTION` is `n`: to turn it off, `CONFIG_HW_STACK_PROTECTION=n` is written, because the board defconfig would turn it on again. If an earlier export enabled `CONFIG_ASSERT` (default `n`) and you turn it off, its `CONFIG_ASSERT=y` line is removed, and no `CONFIG_ASSERT=n` is added.

| Type | Kconfig default | Old value set by | Change | Managed region after the export |
| --- | --- | --- | --- | --- |
| bool | `y` | No config file (default) | `y` → `n` | `CONFIG_FOO=n` is written |
| bool | `n` | The board defconfig | `y` → `n` | `CONFIG_FOO=n` is written |
| bool | `n` | A line you wrote in `prj.conf` | `y` → `n` | `CONFIG_FOO=n` is written |
| bool | `n` | An earlier export | `y` → `n` | The `CONFIG_FOO=y` line is removed |
| bool | `n` | An earlier export (`n`), over the board defconfig (`y`) | `n` → `y` | The `CONFIG_FOO=n` line is removed |
| int | `1024` | The board defconfig (`2048`) | `2048` → `1024` | `CONFIG_FOO=1024` is written |
| int | `1024` | An earlier export (`2048`) | `2048` → `1024` | The `CONFIG_FOO=2048` line is removed |
| choice | Member `A` | The board defconfig (member `B`) | `B` → `A` | `CONFIG_FOO_A=y` is written |
| choice | Member `A` | An earlier export (member `B`) | `B` → `A` | The `CONFIG_FOO_B=y` line is removed |

The Kconfig Manager never changes the lines outside the managed region. When one of your own lines in `prj.conf` sets the option, a line is written in the managed region, which wins as long as the region comes after your line, and a notification lists the options that are also set outside the region. You can delete your own line instead.

Options that only change as a result of your edits are not written, since the next build gives them the same value:

- Options that depend on an option you turned off: they are turned off with it.
- Options whose default follows an option you changed.
- The members of a choice that are no longer selected: the line of the selected member is enough.

If a fragment merged after the target file sets the option, that fragment wins and the line has no effect. The overlay flags these entries with a warning icon: use "To fragment…" and select that fragment instead.

:::note
In a config file, `# CONFIG_FOO is not set` is not a plain comment: Zephyr reads this exact form as `CONFIG_FOO=n` (see [Setting Kconfig configuration values](https://docs.zephyrproject.org/latest/build/kconfig/setting.html#setting-symbols-in-configuration-files)). It is the form used in `.config`, and the one earlier versions of the Kconfig Manager wrote in the managed region. These lines still work, and the export handles them like `CONFIG_FOO=n`.
:::

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `↑` / `↓` (or `k` / `j`) | Move the selection |
| `PageUp` / `PageDown`, `Home` / `End` | Move faster / jump to start or end |
| `Space` | Toggle the selected option (or enter a menu) |
| `Enter` / `→` | Enter or expand |
| `←` | Collapse or go to the parent |
| `y` / `m` / `n` | Set the value directly |
| `/` or `Ctrl+F` | Jump to a symbol |
| `Shift+C` | Toggle `CONFIG_` symbol names |
| `Shift+A` | Toggle invisible options |
| `s` | Save |
| `Shift+S` | Save As… |
| `d` | Save minimal… |
| `o` | Open… |
| `Ctrl+Z` / `Ctrl+Y` | Undo / Redo |
