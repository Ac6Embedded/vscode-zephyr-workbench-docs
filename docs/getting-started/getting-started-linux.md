---
sidebar_position: 2
---

# Getting Started on Linux

This section is a tutorial to guide to you the Zephyr Workbench usage on Linux and shows
you the steps to follow to create your first "hello_world" application for the STM32F4_DISCOVERY board 
from the official Zephyr sources.

## Setting Up the Zephyr environment

### Install Host Tools
1. Click on "Zephyr Workbench" button on the VSCode activity bar
2. Click on "Install Host Tools" to download and to install the native tools locally (takes ~5mins).

:::warning
This step requires to install several tools (*git gperf ccache dfu-util wget xz-utils unzip file make 
libsdl2-dev libmagic1*) on your system using the package manager. The **ROOT** password is asked perform the 
installation. If the listed tools are already installed on your system, just cancel when the password prompt
is shown.

![Root Prompt](/img/zw/getting-started/linux/zw_2_install-host-tools-root.png)

:::

   * This process downloads and installs portable version of tools required in the Zephyr buildsystem such as:
      - python3 (and several python packages like west or gitpython)
      - cmake
      - ninja
   * It generates a python virtual environment and an environment script

![Install Host Tools](/img/zw/getting-started/linux/zw_1_install-host-tools.png)

### Import a Zephyr SDK
   * Click on "Import SDK" button
   * Open the newly opened page, enter information about your Zephyr SDK.
      - For example:
        - Source location: Official SDK
        - SDK Type: Minimal
        - Version: v0.16.8
        - Toolchains: aarch64 arm
        - Location: enter the parent location where to import the Zephyr SDK
   * Click on "Import"   

![Import SDK](/img/zw/getting-started/linux/zw_3_sdk-import.png)


### Initialize a West Workspace
   * Click on "Initialize workspace" button
   * Open the newly opened page, enter information about your west workspace instance.
      - For example:
        - Source location: Minimal from template
        - Path: https://github.com/zephyrproject
        - Template: STM32
        - Branch: v3.7.0
        - Location: enter the directory where the west workspace will be imported (the directory name will serve as workspace name)
      (takes ~10mins to init then update the workspace)
   * Click on "Import"

![Import West Workspace](/img/zw/getting-started/linux/zw_4_west-workspace-init.png)


## Creating and building the project

### Create a new application project 
On Zephyr Workbench, new project are based on samples from Zephyr sources.
   * Click on "Create New Application"
   * Select the **West Workspace** to attach to
   * Select the **Zephyr SDK** to use
   * Select the target **Board** (eg. ST STM32F4 Discovery)
   * Select the **Sample** project as based (eg. blinky)
   * Enter the project name
   * Enter the project location
   * Select the Pristine Build option (More information on [Pristine Builds](https://docs.zephyrproject.org/latest/develop/west/build-flash-debug.html#pristine-builds))

![Create New Project](/img/zw/getting-started/linux/zw_5_app-create.png)


### Edit your code
Edit your project if needed, to access to the project sources, go back to the "Explorer" panel

![Edit source code](/img/zw/getting-started/linux/zw_6_app-edit.png)


:::tip
To switch from "Zephyr Workbench" panel to the "Explorer" onto your project, right-click on the application > Open in Explorer.
:::

### Build the application
   * Click on the "Build" button in the status bar below.
      - Alternatively, Use command key *Ctrl+Shift+B* then select the folder to build.
   * The build output is display in the Terminal

![Build Application](/img/zw/getting-started/linux/zw_7_app-build.png)

## Debugging the application
### Install Debug tools
   * Click on "Install Debug Tools" to open the debug tools manager
   * Click on the Install icon of **OpenOCD** and **STM32CubeProgrammer**

![Install Debug Tools](/img/zw/getting-started/linux/zw_8_debug-tools-install.png)

:::info
For STM32 targets with an integrated ST-Link on Linux, **STM32CubeProgrammer** provides the necessary udev rules for 
identifying ST-Link as a USB device. If you already have the udev rules set up under `/etc/udev/rules.d`, installing STM32CubeProgrammer is not necessary.
:::

### Configure the debug session
   * Click on "Debug Manager" to open a debug configuration form
   * Select the application to debug. Some settings are automatically filled.
   * If needed, enter another Program Path (by default, the generated zephyr.elf image under the build directory)
   * If needed, enter the SVD file for your target
   * If needed, enter another GDB debugger (by default, it is the one from the Zephyr SDK)
   * If needed, enter the address of your target  (by default, localhost)
   * If needed, enter the GDB port (useful when running multiple debug session on the same machine, by default 3333)
   * Select the debug server (also called runner)
   * Enter the path to the debug server binary if not auto-detected
   * Additional argument only for advanced user (values can be found in the help of west for each runner)
   * Press **Apply** to save the configuration into the .vscode/launch.json or **Debug** to apply then run the debug session

![Edit Debug Configuration](/img/zw/getting-started/linux/zw_9_debug-manager.png)

### Debug the application

After starting the debug session, the code should breaks on main or early (depends on optimization on your project). 
<!-- 
![Debug application](/img/zw/getting-started/linux/zw_10_debug.png)
-->

The "Debug Toolbar" allows you to **Continue/Pause**, **Step Over**, **Step Into**, **Step Out**, **Restart** or , **Stop**
<!-- 
![Debug Toolbar](/img/zw/getting-started/linux/zw_11_debug-toolbar.png)
-->

More information about [Debugging on VSCODE](https://code.visualstudio.com/docs/editor/debugging)
   
### Launch the debug session
To re-run the debug, you don't have to open the "Debug Manager" again as the launch configuration is already created.
   * Go to the "Run and Debug" (*Ctrl+Shift+D*) activity panel
   * Select the launch configuration for your project
   * Click on the Run button

![Run Debug](/img/zw/getting-started/linux/zw_11_rerun-debug.png)


