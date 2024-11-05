---
sidebar_position: 3
---

# Installation

## Requirements

* VS Code
* On Linux: Bash, Package manager
* On macOS: Bash, Homebrew

## Installation

The installation consists on installing the VSCode extension then the host tools required for the Zephyr build system

1. Open Visual Studio Code then enter the Extension Marketplace
2. Search for "Zephyr Workbench" extension
3. Click on Install

![Install from Marketplace](/img/zw/installation/zw_install-market.png)

## Host Tools Installation

Zephyr requires you to install some host dependencies. Zephyr Workbench provides ZInstaller to easily set up the build system.

To complete the host tools installation, go the Zephyr Workbench tab then click on "Install Host Tools". This process takes several minutes to install some tools locally and some on your system.

![Install host tools](/img/zw/installation/zw_host_tools.png)

| Windows              | Linux               | MacOSX (using brew)  |
| -------------------- | ------------------- | -------------------- |
| Python-portable      | Python-portable     | Python & Python-tk   |
| 7z                   | OpenSSL-portable    | Wget                 |
| CMake-portable       | CMake-portable      | Cmake                |
| Ninja-portable       | Ninja-portable      | Ninja                |
| Git-portable         | Git                 | Git                  |
| GPerf                | GPerf               | Gperf                |
|                      | CCache              | Ccache               |
|                      | Dfu-utils           | Dfu-util             |
|                      | Xz-utils            | Xz                   |
|                      | Unzip               | Yq                   |
|                      | File                | Libmagic             |
|                      | Make                |                      |
|                      | Libsdl2-dev         |                      |
|                      | Libmagic1           |                      |

For more information about the Zephyr dependencies, refer to the [documentation](https://docs.zephyrproject.org/latest/develop/getting_started/index.html#install-dependencies).

:::note
The portable tools are installed under `$USERDIR/.zinstaller` or under `$VSCODE_PORTABLE/data/.zinstaller` if your are using VSCode in [portable mode](https://code.visualstudio.com/docs/editor/portable/).

Uninstalling Zephyr Workbench does not uninstall the host tools. You can manually delete the `.zinstaller` folder.
:::

## Debug Requirements

On every platform, you might need to install the debug server and the JTAG probe driver to be able to debug on Zephyr Workbench. For example:
* LinkServer Debug Host Tools
* J-Link Debug Host Tools

:::info
On **Linux** and **MacOSX**, the Host tools and Debug tools are installed from a **BASH** script. Ensure bash is installed on your system.
:::

On MacOSX, Homebrew is mandatory to install required tools (such as python3, CMake or Ninja) for the build system. To install Homebrew, please refer to the official [documentation](https://brew.sh/). 

:::danger[Note]
On Linux, if you use the pyOCD debug server, the version provided with Zephyr Workbench has dependency with libffi7, you might need to install this package using the following commands: 

wget http://archive.ubuntu.com/ubuntu/pool/main/libf/libffi/libffi7_3.3-4_amd64.deb

sudo dpkg -i libffi7_3.3-4_amd64.deb
:::