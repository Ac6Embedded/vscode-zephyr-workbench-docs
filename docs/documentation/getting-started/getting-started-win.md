---
sidebar_position: 3
---

# Getting Started on Windows

This tutorial walks you through Workbench for Zephyr on Windows. You will set up the Zephyr environment,
create your first "hello_world" application for the STM32F4 Discovery board from the latest official Zephyr
sources, then build, flash and debug it.

If you prefer a video walkthrough, see the [Getting Started Video Tutorial](getting-started-video.md).

## Setting Up the Zephyr environment

### Install Host Tools
1. Click on "Workbench for Zephyr" in the VS Code activity bar
2. Click on "Install Host Tools" to download and install the native tools locally (takes a few minutes)

   * This step installs portable versions of the tools required by the Zephyr build system (Python, CMake, Ninja, DTC, gperf, Git, wget)
   * It also creates a Python virtual environment with the Zephyr requirements and installs OpenOCD as the default runner

![Install Host Tools](/img/update/win/install-host-tools.png)

:::warning
To execute tools, Windows asks for permission to be granted.
:::

:::tip
To choose the Python interpreter or install only some of the tools, use "Install Host Tools (Advanced)" instead.
See [Advanced Host Tools](../advanced-host-tools.md).
:::

### Add Toolchain
   * Click on "Add Toolchain"
   * Keep "Toolchain family:" set to "Zephyr SDK" and "Source:" set to "Official"
   * Choose the destination:
      - "Custom location": the SDK is imported under the folder you pick in "Location:"
      - "Global (auto-discovered)": the SDK is installed in a standard location that the Zephyr build system discovers automatically
   * SDK Type: keep "Full" to get every toolchain, or select "Minimal" and check only the toolchains you need (for example "arm" for STM32 boards)
   * Version: keep the latest release (preselected)
   * Click on "Import"

![Import SDK](/img/update/win/toolchain.png)


### Add a West Workspace
   * Click on "Add West Workspace"
   * Keep "Source location:" set to "From template"
   * Keep "Minimal" selected and pick the "STM32" template ("Minimal" fetches only the modules the template needs, "Full" imports every Zephyr module)
   * Revision: select the Zephyr version to work with (the latest tag is preselected)
   * Under "Advanced options", "Fetch west blobs" is checked by default: it downloads the vendor binary blobs (for example HAL firmware) once the workspace is ready
   * Location: choose the parent folder for the workspace
   * Subfolder: name of the workspace folder created under the Location (default "zephyrproject")
   * Click on "Import"

:::note
Initializing then updating the workspace downloads the Zephyr sources and modules. It can take around 10 minutes.
:::

![Import West Workspace](/img/update/win/create-wws.png)


## Creating and building the project

### Add an Application
On Workbench for Zephyr, new projects are based on samples from the Zephyr sources.
   * Click on "Add Application"
   * Select the **West Workspace** to attach to
   * Select the **Toolchain** to use
   * Select the target **Board** (e.g. ST STM32F4 Discovery)
   * Keep "Create new application" selected
   * Select the **template** (e.g. hello_world)
   * Enter the project name
   * Application type: keep "West workspace application" to create the project inside the workspace, or select "Freestanding application" to create it anywhere on disk
   * Keep the "Debug preset" checkbox checked: it enables debug-friendly options in prj.conf
   * Click on "Create"

![Create New Project](/img/update/win/create-app.png)


### Edit your code
To edit the project sources, go back to the "Explorer" panel.

![Edit source code](/img/update/win/edit-code.png)


:::tip
To jump from the "Workbench for Zephyr" panel to your project in the "Explorer", right-click on the application > Open in Explorer.
:::

### Build the application
   * Click on the "Build" button in the status bar below.
      - Alternatively, press *Ctrl+Shift+B* then select the folder to build.
   * The build output is displayed in the Terminal

![Build Application](/img/update/win/build.png)

## Running the application

### Flash the application
   * Connect the board to your computer over USB
   * Hover over the application in the "Applications" view and click on the inline "Flash" button
      - Alternatively, right-click on the application > Flash/Run
   * The "West Flash" task runs `west flash` in the terminal and programs the board with the default runner (OpenOCD was installed with the host tools)

:::note
For STM32 boards with an integrated ST-Link, the ST-LINK USB driver is required. Install the **STM32** pack
from [Install Runners](#install-runners): it provides the driver.
:::

### View the serial output
The hello_world sample prints a message on the board's serial console.
   * The Serial Monitor extension is installed together with Workbench for Zephyr
   * Open the "Serial Monitor" tab in the bottom panel, next to the Terminal
   * Select the serial port of your board (the on-board probe exposes it as a virtual COM port)
   * Keep the default baud rate of 115200 and start monitoring
   * Press the reset button on the board, the output appears:

```
*** Booting Zephyr OS build vX.Y.Z ***
Hello World! stm32f4_disco/stm32f407xx
```

## Debugging the application
### Install Runners
Runners are the host tools used to flash and debug your board. OpenOCD is installed automatically with the
host tools. Install the vendor tools for your target if you need them:
   * Click on "Install Runners" to open the runners manager
   * Click on the Install icon of the **STM32** pack: it installs STM32CubeCLT, OpenOCD and J-Link

![Install Runners](/img/update/win/install-runners.png)

:::info
STM32CubeCLT includes most of the STM32 tools, including the ST-LINK GDB Server, STM32CubeProgrammer and the SVDs.
:::

:::info
In **Extra Runners**, you can add a custom runner if you prefer.
:::

### Configure the debug session
   * Click on "Debug Manager" to open the debug configuration form
   * Select the application to debug, then select the build configuration. The other settings are filled automatically from the build.
   * Debug Backend: keep "C/C++ Debug (cppdbg)" (the default). The two "Cortex-Debug" backends are described in [Debug Session](../debug-session.md).
   * Select the runner: runners detected for your board are marked "(compatible)", and a green line below confirms the selected runner is installed
   * If needed, adjust the Program Path (by default, the zephyr.elf image under the build directory), the SVD File, the GDB settings or the additional arguments
   * Press **Apply** to save the configuration into the .vscode/launch.json or **Debug** to apply then run the debug session

![Edit Debug Configuration](/img/update/win/debug-manager.png)

### Debug the application

After starting the debug session, execution stops on main or earlier (depending on the optimization level of your project).

![Debug application](/img/zw/getting-started/win/zw_10_debug.png)

The "Debug Toolbar" allows you to **Continue/Pause**, **Step Over**, **Step Into**, **Step Out**, **Restart** or **Stop**.

![Debug Toolbar](/img/zw/getting-started/win/zw_11_debug-toolbar.png)

More information: [Debugging in VS Code](https://code.visualstudio.com/docs/editor/debugging)
   
### Launch the debug session
To re-run the debug, you don't have to open the "Debug Manager" again as the launch configuration is already created.
   * Go to the "Run and Debug" (*Ctrl+Shift+D*) activity panel
   * Select the launch configuration for your project
   * Click on the Run button

![Run Debug](/img/zw/getting-started/win/zw_12_rerun-debug.png)
