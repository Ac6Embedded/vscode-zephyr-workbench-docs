---
sidebar_position: 11
---
# Custom Boards, Devicetree and SOC Definitions

Workbench for Zephyr supports custom board, devicetree, and SOC definitions. The list of available boards is returned by the `west boards` command.

There are three ways to make a custom board visible to the extension:

- **Option 1**: Set the `BOARD_ROOT` variable on the west workspace.
- **Option 2**: Package the board as a Zephyr module, referenced via `EXTRA_ZEPHYR_MODULES` or the west manifest.
- **Option 3**: Place a `boards/` folder directly inside the application.

For more information, refer to the Zephyr [Board Porting Guide](https://docs.zephyrproject.org/latest/hardware/porting/board_porting.html).

---

## Creating a Custom Board

Before using any of the options below, you need to create the board definition files. A custom board is a folder with a fixed structure that describes the hardware to Zephyr (SoC, memory, peripherals, default config).

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

**board.yml**: board identity and target SoC:
```yaml
board:
  name: myboard
  full_name: Ac6 My Board
  vendor: ac6
  socs:
    - name: stm32f4_disco
```

**\<board_name\>.yaml**: metadata used by `west boards` to list and filter boards:
```yaml
identifier: myboard
name: Ac6 My Board
type: mcu
arch: arm
toolchain:
  - zephyr
  - gnuarmemb
ram: 128
flash: 1024
vendor: ac6
```

**\<board_name\>.dts**: devicetree source describing the hardware. Must include the SoC dtsi and define the `chosen` node.

**Kconfig.\<board_name\>**: selects the SoC Kconfig symbol:
```kconfig
config BOARD_MYBOARD
    select SOC_STM32F407XG
```

**\<board_name\>\_defconfig**: default Kconfig fragment for this board:
```kconfig
CONFIG_ARM_MPU=y
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_GPIO=y
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

### Option 2.2: West manifest (west.yml)

Add the module as a project in the workspace `west.yml` so it is fetched automatically with `west update`:

```yaml
manifest:
  projects:
    - name: my-module
      url: https://github.com/my-org/my-module
      revision: main
      path: modules/my-module
```

---

## Option 3: Application boards/ Folder

Place the board definitions directly inside the application:

```
my_app/
├── boards/
│   └── <vendor>/
│       └── <board_name>/
├── src/
├── CMakeLists.txt
└── prj.conf
```

### Option 3.1: Importing an existing application

When importing an application that already contains a `boards/` folder, the extension detects it automatically.

:::note
Board selection happens **after** the application is parsed, so the boards defined inside it are available in the selector during the import wizard.
:::

1. Click **Import Application** and enter the application directory.
2. The extension parses the folder and detects the `boards/` subdirectory.
3. Select the west workspace, SDK, and target board: your custom board will appear in the list.

### Option 3.2: Changing the board of an existing application

When using **Change Board**, the extension includes any boards found in the application's `boards/` folder alongside the standard workspace boards.

Right-click the board and select **Change Board**.

![Change Board menu](/img/zw/configuration/zw_change-board-menu.png)

A notification appears in the bottom-right corner of VS Code while the board list is being updated.

![Updating boards notification](/img/zw/configuration/zw_change-board-parsing.png)

Once ready, the board selector opens with all available boards.

![Change board list](/img/zw/configuration/zw_change-board-list.png)
