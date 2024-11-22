# Getting started with NXP FRDM-MCXN947

This page objective is to guide you step by step on how to create your first Zephyr application on the NXP FRDM-MCXN947 board.

The FRDM-MCXN947 is a compact and scalable development board for rapid prototyping of MCX N94. It offers industry standard headers 
for easy access to the MCU’s I/Os, integrated open-standard serial interfaces, external flash memory and an on-board MCU-Link debugger. 
It provides several extension headers (such as Arduino or FRDM).

- Vendor: NXP Semiconductors
- Architecture: arm
- SoC: mcxn947

![FRDM-MCXN947](/img/tutorials/frdm-mcxn947/FRDM-MCXN947-TOP.png)

## Import a SDK

Import a minimal SDK for ARM target. 

* Click on "Import SDK" or "Add Zephyr SDK" button
* Open the newly opened page, enter information about your Zephyr SDK.
  - For example:
    - Source location: Official SDK
    - SDK Type: Minimal
    - Version: v0.17.0
    - Toolchains: arm
    - Location: enter the parent location where to import the Zephyr SDK (eg. `path/to/sdk/arm-zephyr-sdk-0.17.0`)
* Click on "Import" 

![Import SDK](/img/tutorials/frdm-mcxn947/zw_import_sdk.gif)

After the **SDK** is download and installed, it is listed in the **ZEPHYR SDK** view.

## Import NXP minimal west workspace

Import a minimal west workspace for NXP.

* Click on "Initialize workspace" or "New West Workspace" button
* Open the newly opened page, enter information about your west workspace instance.
  - For example:
    - Source location: Minimal from template
    - Path: https://github.com/zephyrproject
    - Template: NXP
    - Branch: v3.7.0
    - Location: enter the directory where the west workspace will be imported 
(the directory name will serve as workspace name, eg. `path/to/workspace/nxp-zephyr-v3.7.0`).
(it takes several minutes to init then update the workspace)
* Click on "Import"
* 
![Init workspace](/img/tutorials/frdm-mcxn947/zw_import_westworkspace.gif)
  
After the **Workspace** is download and installed, it is listed in the **WEST WORKSPACES** view.

## Create a new blinky project
The environment set up complete. We are now going to create a `blinky` project for the FRDM-MCXN947 board.

* Click on "Create New Application"
* Select the **West Workspace** previously init
* Select the **Zephyr SDK** previously imported
* Select `FRDM-MCXN947` as the target **Board**
* Select `blinky` as **Sample** project
* Keep `blinky` as the project name or change it
* Enter the project location
* Select the Pristine Build option (More information on [Pristine Builds](https://docs.zephyrproject.org/latest/develop/west/build-flash-debug.html#pristine-builds))
* Click on "Create"

![Create blinky](/img/tutorials/frdm-mcxn947/zw_create_app.gif)

When the project creation is done, it appears on the **APPLICATIONS** view.

To build the project, right-click on it, then select "Build". The build output is displayed in the *Terminal*.

![Build](/img/tutorials/frdm-mcxn947/zw_build_app.gif)

## Flash and Debug project

Before debugging the project, we must ensure the debug tools are installed on your system.

The development board has a MCU-Link CMSIS-DAP Onboard Debug Probe. It is compatible the following runners:
* LinkServer - https://www.nxp.com/design/design-center/software/development-software/mcuxpresso-software-and-tools-/linkserver-for-microcontrollers:LINKERSERVER
* J-Link - https://www.segger.com/downloads/jlink/
* pyOCD

pyOCD is provided with Zephyr Workbench, unlike LinkServer or J-Link. 

Connect your machine with the FRDM-MCXN947 on the USB-C MCU Link port.

* Open the "Debug Manager" 
* Select the `blinky` application (The page takes several second to auto-complete)
* Select `LinkServer` as runner ("Runner executable found" should be displayed if the probe software is installed on your system)
  
![Debug configuration](/img/tutorials/frdm-mcxn947/zw_debug_config.gif)
