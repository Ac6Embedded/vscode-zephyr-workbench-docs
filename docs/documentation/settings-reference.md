---
sidebar_position: 22
---
# Settings Reference

All the extension settings live under the **Zephyr Workbench** section of the VS Code settings. The wizards and tree actions write them for you; you rarely need to edit them by hand. This page lists them for reference, along with the task types and the debugger type you can use in your own `tasks.json` and `launch.json`.

## Global settings

These settings are set in your User settings.

| Setting | Default | Description |
| --- | --- | --- |
| `zephyr-workbench.pathToEnvScript` | (none) | Path to the environment script that loads the Zephyr environment. Set by the host tools installation. |
| `zephyr-workbench.venv.path` | (empty) | Path to the Python virtual environment root. Empty: use the default environment installed with the host tools. Can also be set per workspace or application folder, see [Python Environments](python-environments.md). |
| `zephyr-workbench.venv.activatePath` | (empty) | Deprecated. Use `zephyr-workbench.venv.path` instead. |
| `zephyr-workbench.listSDKs` | `[]` | Registered Zephyr SDKs. Managed by the [Add Toolchain](sdk.md) wizard. |
| `zephyr-workbench.listIARs` | `[]` | Registered IAR toolchains. |
| `zephyr-workbench.listArmGnuToolchains` | `[]` | Registered Arm GNU toolchains. |
| `zephyr-workbench.listRustToolchains` | `[]` | Registered Rust toolchains. |
| `zephyr-workbench.sbomTotal.baseUrl` | `https://sbomtotal.com` | Base URL of the SBOM Total verification service. Change it for a self-hosted instance. See [SPDX](analysis/spdx/index.md). |
| `zephyr-workbench.sbomTotal.spdxVersion` | `auto` | SPDX version generated and analyzed by Full SBOM Total: `auto`, `2.3` or `3.0`. `auto` uses SPDX 3.0 when the Zephyr tree can generate it, SPDX 2.3 otherwise. |
| `zephyr-workbench.sbomTotal.failOn` | `actionable` | When the SBOM verification is reported as failed: `actionable` (any actionable vulnerability), `risk` (risk verdict only) or `never` (always informational). |
| `zephyr-workbench.sbomTotal.includeSdk` | `false` | Also generate `sdk.spdx` and scan it separately as build environment information. It never changes the firmware verdict. |

## Per-project settings

These settings are stored per folder (Workspace Folder scope): on the application folder, or on the west workspace folder for the `westWorkspace.*` keys. Prefer changing them through the **Applications** view (Change Board, Change Toolchain, the "Arguments & Environment" group, and so on, see [Applications](application.md)).

| Setting | Default | Description |
| --- | --- | --- |
| `zephyr-workbench.westWorkspace` | (empty) | Path of the west workspace the application is attached to. |
| `zephyr-workbench.westWorkspace.applications` | `[]` | Applications declared by a west workspace, with their own application settings. |
| `zephyr-workbench.westWorkspace.selectedApplication` | (empty) | Selected application of the workspace, used when it declares several applications. |
| `zephyr-workbench.sdk` | (empty) | Path of the Zephyr SDK used by the project. The special value `global` lets the build system auto-discover a globally installed SDK. |
| `zephyr-workbench.toolchain` | `zephyr` | Toolchain variant used for the build (`ZEPHYR_TOOLCHAIN_VARIANT`): `zephyr`, `zephyr/gnu`, `zephyr/llvm`, `gnuarmemb` or `iar`. The legacy value `zephyr_sdk` is migrated to `zephyr` automatically. |
| `zephyr-workbench.intellisense.provider` | `cpptools` | IntelliSense provider for the application: `cpptools` (C/C++ extension) or `clangd`. |
| `zephyr-workbench.gnuarmemb` | (empty) | Selected Arm GNU toolchain path (`GNUARMEMB_TOOLCHAIN_PATH`). Must match a registered entry. |
| `zephyr-workbench.iar` | (empty) | IAR toolchain used by this project. Must match a registered entry. |
| `zephyr-workbench.rust` | (empty) | Optional Rust toolchain path, independent of the C toolchain selection. |
| `zephyr-workbench.env.BOARD_ROOT` | (empty) | Additional custom board definitions. |
| `zephyr-workbench.env.SOC_ROOT` | (empty) | Additional custom SoC definitions. |
| `zephyr-workbench.env.DTS_ROOT` | (empty) | Additional custom devicetree sources. |
| `zephyr-workbench.env.ARCH_ROOT` | (empty) | Additional custom architecture definitions. |
| `zephyr-workbench.env.EXTRA_CONF_FILE` | (empty) | Additional Kconfig fragment files. |
| `zephyr-workbench.env.EXTRA_DTC_OVERLAY_FILE` | (empty) | Additional devicetree overlay files. |
| `zephyr-workbench.env.EXTRA_ZEPHYR_MODULES` | (empty) | Additional Zephyr modules. |
| `zephyr-workbench.build.west-args` | (empty) | Additional arguments appended to the west command. |
| `zephyr-workbench.build.active` | `0` | Index of the active build configuration. |
| `zephyr-workbench.sysbuildEnabled` | `false` | Append the `--sysbuild` flag to west build commands. |
| `zephyr-workbench.build.configurations` | | The build configurations of the application (see below). |

Each entry of `zephyr-workbench.build.configurations` describes one build configuration:

| Key | Description |
| --- | --- |
| `name` | Name of the build configuration (required). |
| `board` | Identifier of the target board. |
| `default-runner` | Preferred west runner, used for Flash/Run without prompting. |
| `custom-args` | Custom arguments passed to the runner (for example `--erase`). |
| `west-args` | Additional arguments for the west command. |
| `west-flags` | Additional CMake `-D` flags appended to `west build` after `--`. |
| `sysbuild` | When `"true"`, append `--sysbuild` to west build commands. |
| `env.EXTRA_CONF_FILE` | Additional Kconfig fragment files. |
| `env.EXTRA_DTC_OVERLAY_FILE` | Additional devicetree overlay files. |
| `env.EXTRA_ZEPHYR_MODULES` | Additional modules. |
| `env.FILE_SUFFIX` | Optional suffix added to Kconfig fragment and devicetree overlay filenames. |

## Task types

The extension registers two task types you can use in a `tasks.json`:

- **`west`**: runs a west command in the Zephyr environment. The `command` field is one of: `init`, `update`, `list`, `manifest`, `compare`, `diff`, `status`, `forall`, `boards`, `build`, `sign`, `flash`, `debug`, `debugserver`, `attach`, `zephyr-export`.
- **`zephyr-workbench`**: runs any command line in the application's Zephyr environment. Fields: `command`, `args` (list of arguments), `config` (optional: name of the build configuration whose environment is loaded), and `options` (`cwd`, `env`).

Example:

```json
{
  "label": "West Size",
  "type": "zephyr-workbench",
  "command": "west",
  "args": ["build -t rom_report"],
  "config": "primary"
}
```

The easiest way to create such a task is right-click on the application > Build Configuration > Add Custom Task (see [Applications](application.md#add-a-custom-task)).

:::warning Migrating applications created before version 3.0.3
Since version 3.0.3, build, flash and debug no longer use `tasks.json`: the build arguments are managed by the extension (the "Arguments & Environment" group and the build configurations). Applications created with older versions still carry a generated `.vscode/tasks.json` that can conflict with the current extension. Delete the `.vscode/tasks.json` file from those applications, or re-import them with the Add Application wizard. Only keep the custom tasks you wrote yourself.
:::

## Debugger type

The extension contributes the `zephyr-workbench` debugger type ("Zephyr Workbench (west debugserver)"): it starts the GDB server through `west debugserver` and runs the session with Cortex-Debug. The [Debug Manager](debug-session.md) generates these `launch.json` entries for you (named "Zephyr Workbench Debug [configuration]"). If you edit them by hand, the attributes are:

| Attribute | Default | Description |
| --- | --- | --- |
| `program` | | ELF file to debug (`zephyr.elf`). Required. |
| `debugServerArgs` | | Arguments passed to west to start the GDB server, for example `debugserver --build-dir ... --runner jlink --gdb-port 2331`. Required. |
| `gdbTarget` | `localhost:3333` | GDB server address as `host:port`. Must match the port in `debugServerArgs`. |
| `gdbMode` | `program` | `program`: flash and run to main. `attach`: connect only. |
| `miDebuggerPath` | | GDB executable to use. |
| `svdPath` | | SVD file for the peripheral registers view. |
| `cwd` | `${workspaceFolder}` | Working directory. |
| `serverReadyTimeout` | `15000` | Milliseconds to wait for the GDB server to become ready. |

:::note
This debugger type requires the Cortex-Debug extension. The Debug Manager also supports the `cppdbg` and `cortex-debug` types directly; see [Debug Session](debug-session.md).
:::

## Command Palette commands

Some commands are only reachable (or simply handy) from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

| Command | Description |
| --- | --- |
| Zephyr Workbench: Verify Host Tools | Check the installed host tools. See [Host Tools Manager](host-tools-manager.md). |
| Zephyr Workbench: Reinstall VENV | Recreate the global Python virtual environment. See [Python Environments](python-environments.md). |
| Zephyr Workbench: Install Host Tools | Run the host tools installation again. |
| Zephyr Workbench: Install Host Tools (Advanced) | Open the [advanced installation](advanced-host-tools.md) panel. |
| Zephyr Workbench: Host Tools Manager | Open the [Host Tools Manager](host-tools-manager.md). |
| Zephyr Workbench: Install Runners | Open the [Install Runners](install-runners.md) panel. |
| Zephyr Workbench: Build Application | Build the application of the file open in the editor, or ask which application to build. |
| Zephyr Workbench: Rebuild Application | Pristine rebuild of the application. |
| Zephyr Workbench: Debug Application | Start a debug session for the application. |
| Zephyr Workbench: Debug Manager | Open the [Debug Manager](debug-session.md). |
| Zephyr Workbench: Devicetree Manager | Open the [Devicetree Manager](devicetree-manager.md). |
| Zephyr Workbench: Set SBOM Total API Token | Store the API token used by the [SPDX analysis](analysis/spdx/index.md). |
| West: Get a west version | Print the west version in the Zephyr terminal. |
