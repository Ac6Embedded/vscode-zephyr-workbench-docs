---
sidebar_position: 8
---
# Debug Tools

## Install Debug Tools

This page list the packs and the external debug tools that can be installed to support remote debug for your target. Not every target board 
are supported, please refer to the manufacturer user manual.

![Debug tools](/img/zw/debug-tools/zw_install_debug_tools.png)

### Packs

Some targets requires multiple tools for the debug. The tools are grouped in pack and can be installed in one click.

### Tools

For some tools, you can installed them by click on the install button.
Other ones requires you to register to the editor website and to accept license. Click on the URL icon to be redirected the tool download page then install it manually.

**OpenOCD** (Open On-Chip Debugger ) is an open source project that provides on-chip programming and debugging support with a
layered architecture of JTAG interface and TAP support. OpenOCD can be installed from the "Debug Tools" page.

**STM32CubeProgrammer** is a programming tool for STM32 products. It is not used for debug but for STM32 targets with an integrated ST-Link or to use an external ST-Link probe, a driver is required for identifying ST-Link as a USB device:
On Windows, **STM32CubeProgrammer** provides a ST-Link driver installer.
On Linux, **STM32CubeProgrammer** provides the necessary udev rules. If you already have the udev rules set up under `/etc/udev/rules.d`, installing STM32CubeProgrammer is not necessary otherwise after installing **STM32CubeProgrammer**, find the rules files under `PATH_TO\STM32CubeProgrammer\Drivers\rules` and copy them into `/etc/udev/rules.d`:
```
cp <PATH_TO>\STM32CubeProgrammer\Drivers\rules\*.conf /etc/udev/rules.d
```

**J-Link** is a external debug probe from SEGGER. It supports a large number of devices from different hardware architectures and vendors.
It is not provided with Zephyr Workbench. Please refer to [SEGGER website](https://www.segger.com/downloads/jlink/) to download and to install 
J-Link driver and JLinkServer.

**LinkServer** is a utility for launching and managing GDB servers for NXP debug probes. It is not provided with Zephyr Workbench. 
Please refer to [NXP website](https://www.nxp.com/design/design-center/software/development-software/mcuxpresso-software-and-tools-/linkserver-for-microcontrollers:LINKERSERVER) to download and to install LinkServer for Microcontrollers.

**pyOCD** is an open source project and is a Python based tool and API for debugging, programming, and exploring Arm Cortex microcontrollers. 
pyOCD is installed with the Host Tools. By default, pyOCD does not support every target but target packs must be installed. If the target is
not supported, Zephyr Workbench install it on the first time the debug is launch. 

:::note 
Uninstalling tools is not supported yet.
:::