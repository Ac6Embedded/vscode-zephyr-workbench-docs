---
sidebar_position: 11
---
# Using Custom Boards

Workbench for Zephyr supports custom board definitions.

There are two ways to make a custom board visible to the extension:

- **Option 1**: Set the `BOARD_ROOT` variable on the west workspace.
- **Option 2**: Package the board as a Zephyr module, referenced via `EXTRA_ZEPHYR_MODULES` or the west manifest.

---

## Creating a Custom Board

Before using any of the options below, you need to create the board definition files. A custom board is a folder with a fixed structure that describes the hardware to Zephyr (SoC, memory, peripherals, default config).

For more information, refer to the Zephyr [Board Porting Guide](https://docs.zephyrproject.org/latest/hardware/porting/board_porting.html).

The minimal required structure is:

```
<board_root>/
└── boards/
    └── <vendor>/
        └── <board_name>/
            ├── board.yml
            ├── <board_name>.yaml
            ├── <board_name>.dts
            ├── Kconfig.<board_name>
            └── <board_name>_defconfig
```
---

## Option 1: BOARD_ROOT (West Workspace variable)

Set `BOARD_ROOT` on the west workspace so the extension searches an additional directory for board definitions.

1. In the **WEST WORKSPACES** panel, expand the workspace and click **[+]** next to `BOARD_ROOT`.

![West Workspace BOARD_ROOT](/img/zw/workspace/zw_board_root.png)

2. Enter the absolute path to the folder that **contains** the `boards/` subdirectory and press `Enter`.

![Enter BOARD_ROOT value](/img/zw/workspace/zw_board_root_dialog.png)

:::info
Example: for the layout `/home/user/my_boards/boards/ac6/myboard/`, set `BOARD_ROOT` to `/home/user/my_boards`.
:::

---

## Option 2: Zephyr Module

Package the board definitions as a Zephyr module: a folder with a `zephyr/module.yml` file that declares the board root:

```
my_module/
├── boards/
│   └── <vendor>/
│       └── <board_name>/
└── zephyr/
    └── module.yml
```

**zephyr/module.yml:**
```yaml
name: my-module
build:
  settings:
    board_root: .
```

Then register the module using one of the two options below.

### Option 2.1: EXTRA_ZEPHYR_MODULES (per application)

1. In the **APPLICATIONS** panel, expand the application and locate **EXTRA_ZEPHYR_MODULES**. Click **[+]**.

![EXTRA_ZEPHYR_MODULES](/img/zw/applications/zw_extra_zephyr_modules.png)

2. Enter the absolute path to the module directory and press `Enter`.

![Enter module path](/img/zw/applications/zw_extra_zephyr_modules_dialog.png)

## Option 2.2: EXTRA_ZEPHYR_MODULES (CMake)

You can also specify `EXTRA_ZEPHYR_MODULES` directly in your application’s `CMakeLists.txt` file. This is useful if you want to ensure the module is always included when building the application, regardless of the workspace configuration.

Add the following line to your `CMakeLists.txt`:

```cmake
set(EXTRA_ZEPHYR_MODULES "<absolute_path_to_module>")
```

Replace `<absolute_path_to_module>` with the absolute path to your module directory.

**Example:**
```cmake
set(EXTRA_ZEPHYR_MODULES "/home/user/my_module")
```
```cmake
set(EXTRA_ZEPHYR_MODULES "$ENV{ZEPHYR_BASE}/../relative/to/zephyr/my_module")
```
This approach ensures the module is included during the CMake configuration phase.

### Option 2.3: West manifest (west.yml)

Add the module as a project in the workspace `west.yml` so it is fetched automatically with `west update`:

```yaml
manifest:
  projects:
    - name: my-module
      url: https://github.com/my-org/my-module
      revision: main
      path: modules/my-module
```
