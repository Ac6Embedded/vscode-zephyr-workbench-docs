---
sidebar_position: 8
---
# Custom Boards, Devicetree and SOC Definitions

Zephyr Workbench supports the definitions of your custom boards, devicetree or soc. The list of boards is return by the `west boards` command.

The custom definitions can be whether on the:
- **West workspace**: The definition directories are under the workspace root directory or they are set into the **ARCH_ROOT**, **SOC_ROOT** **BOARD_ROOT** or **DTC_ROOT** variables.
- **Application**: The definition directories are under the application root directory
- **Modules**: The definition directories are under the module directory. As the module linked to the project from the variable *EXTRA_ZEPHYR_MODULE*. To extract the modules location, a dry-build is run to generate the west settings.

For more information on custom boards, please refer to Zephyr [documentation](https://docs.zephyrproject.org/latest/develop/application/index.html#custom-board-devicetree-and-soc-definitions).