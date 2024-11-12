---
sidebar_position: 8
---
# Debug Tools

## Install Debug Tools

This page list the external tools that can be installed to support remote debug.
For some tools, you can installed them by click on the install button.
Other tools needs the user to register to the editor website and accept license. Click on the URL icon to be redirected the tool download or home page.

![Debug tools](/img/zw/debug-tools/zw_install_debug_tools.png)

**OpenOCD** (Open On-Chip Debugger ) is an open source project that provides on-chip programming and debugging support with a
layered architecture of JTAG interface and TAP support. OpenOCD can be installed from the "Debug Tools" page.

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