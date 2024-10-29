---
sidebar_position: 11
---
# Views

## Zephyr Workbench Shortcuts
This panel gives your shortcut to the most used features of Zephyr Workbench

- New West Workspace
- New Application
- New Zephyr SDK
- Debug Manager

## Applications
This panel lists the applications detected in your multi-root workspace.
Many actions and configuration on the application project can be run here:

- Build
- Clean
  - Pristine (fully clean the item from the build folder)
  - Delete Build (delete the whole 'build' directory)
  - Ninja clean (delete the objects and binary only)
- Configure
  - GUI Config (open the Gui Config in new window to configure the Zephyr kernel)
  - Menuconfig (open the Menuconfig in terminal to configure the Zephyr kernel)
  - Change Board
  - Change West Workspace
  - Change Build Pristine Setting
- Memory Analysis
  - RAM Report
  - ROM Report
  - Puncover (Start puncover webserver, page displayed in web navigator)
- Run
- Debug (search for existing debug session or open Debug Manager)
- Generate SPDX (Generate SPDX 2.3 tag-value document)
- Delete from disk (fully delete the application folder from the system (irreversible))
- Local Environment
  - Create local Python Virtual environment (generate a venv for the application only)
  - Set Python virtual environment (set your own venv, enter the path to the activate script)
- Open Containing folder (open the application folder on your File Explorer)
- Open in Explorer (open the folder in the Explorer view)
- Open Terminal (open a local terminal for the application)

## West Workspaces
This panel lists the west workspace imported into your multi-root workspace.

The actions on the west workspace are:
- Update (runs "west update" on the west workspace)
- Delete from disk (fully delete the west workspace folder from the system (irreversible))
- Open Terminal (open a local terminal for the west workspace)


## Zephyr SDK
This panel lists the SDK saved in Zephyr Workbench settings

The actions on this panel are:
- Add Zephyr SDK
- Remove Zephyr SDK (remove from the list without deleting the files)
- Delete from disk (fully delete the SDK folder from the system (irreversible))

## Host Tools
Hub panel to manage external tools
- Install/Reinstall Host Tools (install the required tools to use Zephyr Workbench)
- Reinstall Virtual Environment (reset the initial venv)
- Verify Host Tools (check the status and version of installed tools)
- Install Debug Tools (check the status and get the link to install external debug tools)
- Debug Manager (configure the debug session)

## Other Resources
Several links to Zephyr documentation and other useful resources
