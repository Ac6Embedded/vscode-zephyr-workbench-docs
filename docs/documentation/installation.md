---
sidebar_position: 3
---

# Installation

## Requirements

- Visual Studio Code
- **Windows**: nothing to install beforehand. All tools are downloaded automatically as portable versions.
- **Linux**: Bash and your distribution's package manager. Some packages are installed with sudo, so administrator rights are required.
- **macOS**: Bash and [Homebrew](https://brew.sh). Homebrew is mandatory: without it, the host tools installation stops with the error "Homebrew is not installed. Install it from https://brew.sh, then retry."

## Install the extension

1. Open Visual Studio Code and go to the Extension Marketplace.
2. Search for the "Workbench for Zephyr" extension.
3. Click **Install**.

![Install from Marketplace](/img/zw/installation/zw_install-market.png)

### Companion extensions

Installing Workbench for Zephyr automatically installs a few companion extensions:

- **Devicetree Manager for Zephyr** (Ac6): visual editor for the devicetree and pin muxing of your application.
- **Serial Monitor** (Microsoft): view the serial output of your board.
- **C/C++** (Microsoft): IntelliSense and debugging support for C and C++ code.
- **Cortex-Debug**: debug backend for ARM Cortex-M targets.
- **File Downloader** (Microsoft DevLabs): used internally to download tools.
- **DeviceTree Language Server** (by Kyle Bonnici): language features for `.dts` and `.overlay` files (see [DTS LSP Integration](dts-lsp.md)).

## Host Tools Installation

Zephyr requires several host dependencies (CMake, Ninja, Python, and more). Workbench for Zephyr installs them for you:

1. Open the Workbench for Zephyr tab in the activity bar.
2. Click **Install Host Tools**.

![Install host tools](/img/update/install-host-tools.png)

The installation takes several minutes and runs in a terminal. A progress notification is shown, and you can cancel it at any time.

What gets installed depends on your OS:

- **Windows**: portable versions of Python, CMake, Ninja, gperf, Device Tree Compiler, Git, and wget, all placed in the `.zinstaller` folder.
- **Linux**: Python (portable AppImage), CMake, and Ninja are direct downloads. The remaining dependencies (git, gperf, dtc, gcc, make, ccache, dfu-util, wget, xz, file, SDL2, hidapi, libmagic, unzip, python3 support packages) are installed with your distribution's package manager. You will be asked for your sudo password.
- **macOS**: everything installs through Homebrew: Python, CMake, Ninja, gperf, Device Tree Compiler, Git, plus utilities (ccache, libmagic, wget, yq, xz, dfu-util, libftdi, hidapi).

For more information about the Zephyr dependencies, refer to the [Zephyr documentation](https://docs.zephyrproject.org/latest/develop/getting_started/index.html#install-dependencies).

:::tip
Prefer to skip tools you already have, pick which Python is used, or repair a single tool? Use the [Advanced Host Tools Installation](advanced-host-tools.md) instead. After installation, the [Host Tools Manager](host-tools-manager.md) lets you verify the tools and switch each one between the bundled and the system version.
:::

:::note
The portable tools are installed under `$USERDIR/.zinstaller`, or under `$VSCODE_PORTABLE/.zinstaller` if you are using VS Code in [portable mode](https://code.visualstudio.com/docs/editor/portable/).

Uninstalling Workbench for Zephyr does not uninstall the host tools. You can manually delete the `.zinstaller` folder.
:::

## After the installation

Once the host tools are installed, Workbench for Zephyr automatically installs the OpenOCD runner and sets it as the default. A message then proposes to install additional runners: click **Install Runners** to open the runners page.

Runners are the debug servers and flashing tools used to program and debug your board (J-Link, STM32CubeProgrammer, pyOCD, and more). Depending on your hardware, you may also need the driver of your JTAG probe. See [Install Runners](install-runners.md) to install what your board needs.
