# FRDM-MCXN947

- Vendor: NXP Semiconductors
- Architecture: arm
- SoC: mcxn947

This NXP development board has a MCU-Link CMSIS-DAP Onboard Debug Probe.

Compatible runner:
* LinkServer
* J-Link
* PyOCD

LinkServer is the default runner for this board.

LinkServer is a utility for launching and managing GDB servers for NXP debug probes. It is not provided with Zephyr Workbench. 
Please refer to [NXP website](https://www.nxp.com/design/design-center/software/development-software/mcuxpresso-software-and-tools-/linkserver-for-microcontrollers:LINKERSERVER) to download and to install LinkServer for Microcontrollers.


OpenOCD (Open On-Chip Debugger ) is an open source project that provides on-chip programming and debugging support with a
layered architecture of JTAG interface and TAP support. OpenOCD can be installed from the "Debug Tools" page.

pyOCD is an open source project and is a Python based tool and API for debugging, programming, and exploring Arm Cortex microcontrollers. 
pyOCD is installed with the Host Tools. By default, pyOCD does not support every target but target packs must be installed. If the target is
not supported, Zephyr Workbench install it on the first time the debug is launch. 

J-Link is a external debug probe from SEGGER. It supports a large number of devices from different hardware architectures and vendors.
