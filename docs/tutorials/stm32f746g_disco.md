# Getting Started with STM32F746G-DISCO

This page will guide you step-by-step to create your first Zephyr application on the **STM32F746G-DISCO** board.

The **STM32F746G-DISCO** Discovery kit is a powerful development board featuring an STM32F746NGH6 microcontroller with an ARM Cortex-M7 core. It includes a wide array of peripherals such as a TFT LCD, audio codec, camera interface, and onboard ST-LINK/V2-1 debugger/programmer.

- **Vendor:** STMicroelectronics  
- **Architecture:** ARM  
- **SoC:** STM32F746xx  

![STM32F746G-DISCO](/img/tutorials/stm32f746g-disco/STM32F746G-DISCO-TOP.jpg)

---

## Installation

Follow the general [Installation Guide](/docs/documentation/installation) to set up your environment.


---

## Import an SDK

Import an minimal Zephyr SDK suitable for ARM targets:

* Click on **"Import Toolchain"** or **"New Toolchain"**
* Fill out the fields:
  - Source location: Official SDK  
  - SDK Type: Minimal  
  - Version: `v0.17.0` (or newer)  
  - Toolchains: `arm`  
  - Location: e.g., `path/to/sdk/arm-zephyr-sdk-0.17.0`
* Click **"Import"**

![Import SDK](/img/tutorials/stm32f746g-disco/zw_import_sdk.gif)

:::warning
The minimal SDK is fine for most base projects, but for graphical demos or advanced peripherals, a full SDK may be required.
:::

---

## Import ST Minimal West Workspace

* Click **"Initialize workspace"** or **"New West Workspace"**
* Use the following settings:
  - Source location: Minimal from template  
  - Path: https://github.com/zephyrproject  
  - Template: ST  
  - Tag: `v4.1.0`  
  - Location: e.g., `path/to/workspace/stm-zephyr-4.1.0`
* Click **"Import"**

![Import SDK](/img/tutorials/stm32f746g-disco/zw_import_westworkspace.gif)

:::info
Workspace initialization includes fetching modules and dependencies. This may take a few minutes.
:::

---

## Create a New Blinky Project

* Click **"Create New Application"**
* Select your West Workspace and Toolchain
* Set the **Board** to `stm32f746g_disco`
* Choose the `blinky` sample
* Configure the project name and location
* Enable **Pristine Build** ([What is this?](https://docs.zephyrproject.org/latest/develop/west/build-flash-debug.html#pristine-builds))
* Click **"Create"**

![Create blinky](/img/tutorials/stm32f746g-disco/zw_create_app.gif)

Right-click your new project and click **"Build"**.

![Build](/img/tutorials/stm32f746g-disco/zw_build_app.gif)

:::warning
Ensure your board is correctly set as `stm32f746g_disco` or the build may fail.
:::

---

## Flash and Debug Project

### Requirements

The STM32F746G-DISCO includes an ST-LINK/V2-1 programmer/debugger that supports:

* **OpenOCD** (Recommended)  
* **pyOCD**  
* **J-Link** (if used externally)

:::note
Zephyr Workbench includes pyOCD, but OpenOCD is often preferred for STM32 targets.
:::
:::info
Make sure to install the [ST-LINK USB drivers](https://www.st.com/en/development-tools/st-link-v2.html) to enable communication with the debugger.
:::
---

### Flash and Debug

* Connect via USB ST-LINK port (CN5)
* Open **Debug Manager**
* Select the `blinky` project
* Set the **Runner** to `openocd` (or `pyocd`)
* If the runner is not detected automatically, enter its full path
* Click **"Apply"**
* Click **"Debug"**

![Debug configuration](/img/tutorials/stm32f746g-disco/zw_debug_config.gif)

:::tip
Close other ST-LINK tools (like STM32CubeProgrammer) before flashing, as they can block the interface.
:::