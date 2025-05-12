# Getting Started with STM32L562E-DK

This page will guide you step-by-step to create your first Zephyr application on the **STM32L562E-DK** board.

The **STM32L562E-DK** is a Discovery Kit designed for evaluating the features of the STM32L562QEI6QU ultra-low-power microcontroller. It provides multiple connectivity options, an embedded debugger (ST-LINK), and Arduino and STMod+ extension connectors for expansion.

- **Vendor:** STMicroelectronics  
- **Architecture:** ARM  
- **SoC:** STM32L562xx  

![STM32L562E-DK](/img/tutorials/stm32l562e-dk/STM32L562E-DK-TOP.png)

---

## Installation

Follow the general [Installation Guide](/docs/documentation/installation) to set up your environment.

---

## Import a SDK

Import a minimal Zephyr SDK suitable for ARM targets:

* Click on **"Import Toolchain"** or **"New Toolchain"**
* Fill out the fields:
  - Source location: Official SDK  
  - SDK Type: Minimal  
  - Version: `v0.17.0` (or newer)  
  - Toolchains: `arm`  
  - Location: directory path (e.g., `path/to/sdk/arm-zephyr-sdk-0.17.0`)
* Click **"Import"**

![Import SDK](/img/tutorials/stm32l562e-dk/zw_import_sdk.gif)

:::warning
A "Minimal" SDK is sufficient for basic examples, but a full SDK may be needed for advanced features like networking or USB.
:::

---

## Import ST Minimal West Workspace

Import a minimal west workspace for STM32:

* Click **"Initialize workspace"** or **"New West Workspace"**
* Fill in the fields:
  - Source location: Minimal from template  
  - Path: https://github.com/zephyrproject  
  - Template: ST  
  - Tag: `v4.1.0`  
  - Location: e.g., `path/to/workspace/stm-zephyr-4.1.0`
* Click **"Import"**

![Init workspace](/img/tutorials/stm32l562e-dk/zw_import_westworkspace.gif)

:::info
Workspace initialization may take a few minutes, especially on first launch when dependencies are resolved.
:::

---

## Create a New Blinky Project

With everything ready, let's create a `blinky` app:

* Click **"Create New Application"**
* Choose your initialized **West Workspace**
* Select your imported **Zephyr SDK**
* Set the **Board** to `stm32l562e_dk`
* Choose `blinky` as the sample
* Set your project name and location
* Enable **Pristine Build** ([learn more](https://docs.zephyrproject.org/latest/develop/west/build-flash-debug.html#pristine-builds))
* Click **"Create"**

![Create blinky](/img/tutorials/stm32l562e-dk/zw_create_app.gif)

Right-click your new project and select **"Build"**.

![Build](/img/tutorials/stm32l562e-dk/zw_build_app.gif)

:::tip
If the build fails, double-check that your SDK matches the board's architecture and the board name is exactly `stm32l562e_dk`.
:::

---

## Flash and Debug Project

### Requirements

The STM32L562E-DK includes an ST-LINK/V3E probe supporting:

* **OpenOCD** (Recommended)  
* **pyOCD**  
* **J-Link** (external, optional)

:::info
Zephyr Workbench includes pyOCD by default. OpenOCD is supported but may require separate installation.
:::
:::warning
Make sure to install the [ST-LINK USB drivers](https://www.st.com/en/development-tools/st-link-v2.html) to enable communication with the debugger.
:::

---

### Flash and Debug

* Connect your PC to the board using the **USB ST-LINK** port (CN7)
* Open **Debug Manager**
* Select your `blinky` application
* Choose `pyocd` (or `openocd`) as the runner  
  (You should see "Runner executable found" if correctly installed)
* If not found, manually set the path to the runner binary

![Debug configuration](/img/tutorials/stm32l562e-dk/zw_debug_config.gif)

* Click **"Apply"**
* Click **"Debug"**

:::tip
Make sure no other software (like STM32CubeProgrammer) is using the ST-LINK interface.
:::
