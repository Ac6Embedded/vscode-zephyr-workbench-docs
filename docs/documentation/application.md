---
sidebar_position: 7
---
# Applications

## Create New Application
Before creating an application, it is mandatory to have a Zephyr SDK and a West workspace.
The creation process is based on sample provided by Zephyr.

![Create New Application](/img/update/applications/zw_app_create.png)

1. Click on "New Application"
2. Select a parent west workspace, the workspace folder is scanned to detect the available boards and samples
3. Select a SDK (if your use a minimal SDK, not every boards are compatible)
4. Select the target board
5. Select the sample that serve as base project
6. Enter your project name
7. Select the application type
8. Enter your project location
9. Select the debug preset
10. Advanced options : You can select the python environment, the settings path and enter the application subfolder name
11. Click on "Import" 

## Import Application
If you already have an application sources, you can import and configure it for Workbench for Zephyr

1. Click on "Add Application" button and select "Import existing application"
![Import Application](/img/update/applications/zw_app_import.png)

2. Enter the application directory or click on "Browse" to open file browser
3. Select the west workspace to attach your application to
4. Select SDK to use
5. Select the target board

## Application structure
The application consists at least on:
```
application
├── src               // Source directory
├── CMakeLists.txt    // Link the application to the Zephyr's CMake build system
├── prj.conf          // KConfig fragment
└── build             // Build directory (generated)

```
Other optional files and overlay can be added. For more information, refer to the Zephyr [Application Development](https://docs.zephyrproject.org/latest/develop/application/index.html).

## Build Application
To build from the "Applications" panel
- Right-click on your project > Build
    - or
- Click on the build button right next to the project

On the "Explorer" view, if a source file of your project is opened in the editor, a Build shortcut button is displayed in the status bar on the bottom.

![Import Application Wizard](/img/zw/applications/zw_build.png)

## Manage Application

After creating or importing an Application, it appears in the **APPLICATIONS** panel on the left. The folder is also added to your VS Code multi-root workspace an you can open the code editor from the "Explorer" view.

In the **APPLICATIONS** panel, you can:
- **Build**
- **Clean**
  - Rebuild/ Pristine: Fully clean the items from the build folder then build the project.
  - Delete Build: Delete the *build* directory.
  - Ninja clean: Delete the objects and binary only.
- **Configure**
  - GUI Config: Open the Gui Config in new window to configure the Zephyr kernel.
  - Menuconfig: Open the Menuconfig in terminal to configure the Zephyr kernel.
  - Harden Config: Run config hardening tools.
  - Change Board.
  - Change West Workspace: Associate the Application to another west workspace.
- **Analysis**
  - **Workbench Dashboard**: Opens the workbenche dashboard that provides an overview of the current application, workspace status, build information, and project-related details.
  - **West Dashboard**: Displays information related to the West workspace, including repositories, manifest configuration, modules, and dependency status.
  - **Memory Analysis**
    - RAM Report: List compiled object and their RAM usage.
    - ROM Report: List compiled object and their ROM usage.
    - RAM Plot: Generates a graphical visualization of RAM usage.
    - ROM Plot: Generates a graphical visualization of ROM usage.
    - Puncover: Start puncover webserver, page displayed in web navigator.
  - **Static Code Analysis**
    - DT Doctor: Analyzes the Device Tree configuration and helps identify potential errors, inconsistencies, or missing definitions.
    - ECLAIR Manager: Provides access to ECLAIR static analysis tools for code quality checking and compliance verification.
  - **SPDX**
    - **Install dependencies:** Installs the required packages and external tools needed for SPDX generation and analysis features.
    - **Build SPDX:** Generates an SPDX Software Bill of Materials (SBOM) for the current application and its dependencies.
    - **Analysis SPDX**
      - **ntia-checker:** Verifies whether the generated SBOM complies with NTIA minimum requirements for software supply chain transparency.
      - **sbom2doc:** Converts the generated SBOM into a human-readable documentation format.
      - **cve-bin-tool:** Scans software components and binaries for known Common Vulnerabilities and Exposures (CVEs).
- **Flash/Run**
- **Debug**: Search for existing debug session or open Debug Manager.
- **Python Environment**
  - Create local Python Virtual environment: Generate a venv for the application only.
  - Set Python virtual environment: Set your own venv, enter the path to the activate script.
- **Set Default Runner:** Sets the default runner used for flashing and debugging operations for the selected application.
- **Add Multibuild:** Creates a multibuild configuration that allows building the same application for multiple boards or targets simultaneously.
- **Add Custom Task:** Creates a user-defined task that can execute custom commands or workflows within the project.
- **Select Application:** Sets the active application to be used for build, flash, debug, and analysis operations.
- **Open Containing folder**: Open the application folder on your File Explorer.
- **Open in Explorer**: Open the folder in the "Explorer" view.
- **Open Terminal**: Open a local terminal for the application.

![Import Application Wizard](/img/update/applications/zw_app_manage.png)

Additionally, you can set some Zephyr Build System Variables:
- **EXTRA_CONF_FILE**: Additional Kconfig configuration fragment files.
- **EXTRA_DTC_OVERLAY_FILE**: Additional devicetree overlay files.
- **EXTRA_ZEPHYR_MODULES**: Absolute paths to the additional modules.
- **SHIELD**: Select from available shields.

Click on the [+] icon to add a value. 

You can also set:
- **WEST ARGUMENTS**: Additional argument to west build command (affect the tasks.json)

The environment variable values and west arguments are stored in the `application/.vscode/settings.json` 
of your west workspace folder. West arguments can be used to enable Sysbuild by adding `--sysbuild` in
value.