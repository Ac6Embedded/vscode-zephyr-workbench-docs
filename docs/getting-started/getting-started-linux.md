---
sidebar_position: 2
---

# Getting Started on Linux

This section is a tutorial to guide to you the Zephyr Workbench usage on Linux and shows
you the steps to follow to create your first "hello_world" application for the STM32F4_DISCOVERY board.

### Setting Up the Zephyr environment
1. Click on "Zephyr Workbench" button on the VSCode activity bar
2. Click on "Install Host Tools" to download and to install the native tools locally (takes ~5mins)
   1. This process downloads and installs every tools required in the Zephyr buildsystem
      - python3 (and several python packages like west or gitpython)
      - cmake
      - ninja
   2. It also generates a python virtual environment

3. Import a West Workspace
   1. Click on "Initialize workspace" button
   2. Open the newly opened page, enter information about your west workspace instance.
   3. For example:
        Source location: Minimal from template
        Path: https://github.com/zephyrproject-
        Template: STM32
        Branch: v3.7.0
        Location: enter the directory where the west workspace will be imported (the directory name will serve as workspace name)
      (takes ~10mins to init then update the workspace)
   4. Click on "Import"

4. Import a Zephyr SDK
   1. Click on "Import SDK" button
   2. Open the newly opened page, enter information about your Zephyr SDK.
      1. For example:
           Source location: Official SDK
           SDK Type: Minimal
           Version: v0.16.8
           Toolchains: aarch64 arm
           Location: enter the parent location where to import the Zephyr SDK
   3. Click on "Import"   

### Creating and building the project
1. Create a new application project based from samples
   1. Click on "Create New Application"
   2. Select the **West Workspace** to attach to
   3. Select the **Zephyr SDK** to use
   4. Select the target **Board** (eg. ST STM32F4 Discovery)
   5. Select the **Sample** project as based (eg. blinky)
   6. Enter the project name
   7. Enter the project location
   8. Select the Pristine Build option (More information on [Pristine Builds](https://docs.zephyrproject.org/latest/develop/west/build-flash-debug.html#pristine-builds))

2. Edit your project if needed

3. Build the application
   1. Click on the "Build" button in the status bar below.
      Alternatively, Use command key Ctrl+B then select the folder to build.
   2. The build output is display in the Terminal

### Debugging the application
1. Configure the debug session
   1. Click on "Debug Manager" to open a debug configuration form
   2. Select the application to debug. Some settings are automatically filled.
   3. If needed, enter another Program Path (the generated ELF image)
   4. If needed, enter the SVD file for your target
   5. If needed, enter another GDB debugger
   6. If needed, enter the address of your target
   7. If needed, enter the GDB port (useful when running multiple debug session on the same machine)
   8. Select the debug server (also called runner)
   9. Enter the path to the debug server binary if not auto-detected
   10. Additional argument only for advanced user (values can be found in the help of west for each runner)
   11. Press "Apply" to save the configuration into the .vscode/launch.json or "Debug" to apply then run the debug session

2. Launch the debug session
   1. Go to the "Run and Debug" (Ctrl+Shift+D) activity panel
   2. Select the launch configuration for your project
   3. Click on the Run button

3. Debug the code
   1. 
