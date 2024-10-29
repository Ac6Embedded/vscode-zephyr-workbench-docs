---
sidebar_position: 3
---
# West Workspace

The **West Workspace** is a folder with the **.west** subdirectory and west manifest repository in it. It indicates to location to clone the Zephyr sources as well as the module and application projects. The West Workspace is created using **west init** and populated using **west update**.

For more information about west workspaces and its topology, please refer the Zephyr Project [documentation](https://docs.zephyrproject.org/latest/develop/west/workspaces.html).

## Import West Workspace

To import a new "West Workspace", click on the "New West Workspace" button or the "Initialize workspace" button

![New West Workspace](/img/zw/workspace/zw_west_workspace_new.png)

### Source location:

- **Minimal from template**:
Import the west workspace from internal templates provided by Zephyr Workbench.
The sources are fetched from repositories.

  * Most of the time, you won't need to change the Path value. It indicated the parent URL where every Zephyr related repositories are.
  * Select which base template you need
  * Select the version
  * Enter the location with the name of the west-workspace (eg. /home/user/workdir/westworkspace/zephyr-v3.7.0)

- **Repository**:
Clone Zephyr and its every modules
  * Enter the URL of the Zephyr repository (by default, it is set to https://github.com/zephyrproject-rtos/zephyr) 
  * Select the version
  * Enter the location with the name of the west-workspace

- **Local folder**:
Import a local Wesk Workspace that has already been initialized and updated

- **Local manifest**:
Import a west workspace using your own manifest file
Enter the location with the name of the west-workspace

The import process runs west init and update to get the sources

![New West Workspace](/img/zw/workspace/zw_west_workspace_import.png)

## Manage West Workspace

After importing a West Workspace, it appears in the **WEST WORKSPACES** panel on the left. The folder is also added to your VS Code multi-root workspace to access to the sources.

![Manage West Workspace](/img/zw/workspace/zw_west_workspace_manage-context.png)

In the **WEST WORKSPACES** panel, you can:

- **Update**: Run *west update* command on the selected west workspace.
- **Delete from Disk**: Permanently delete the SDK folder from your system (this action is irreversible).
- **Open Terminal**: Open a terminal instance with the build environment and the environment variables
- **Edit variables**: On the west workspace, you can set the *ARCH_ROOT*, *SOC_ROOT*, *BOARD_ROOT* and *DTS_ROOT* variables to customize the
the target definition location. Click on the [+] icon to add a value. The environment variable are stored in the `west_workspace/.vscode/settings.json` of your west workspace folder.

![Manage West Workspace Add Env](/img/zw/workspace/zw_west_workspace_manage-env1.png)
![Manage West Workspace Edit Env](/img/zw/workspace/zw_west_workspace_manage-env2.png)

