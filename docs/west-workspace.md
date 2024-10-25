---
sidebar_position: 3
---
# West Workspace

The **West Workspace** is a folder with the **.west** subdirectory and west manifest repository in it. It indicates to location to clone the Zephyr sources as well as the module and application projects. The West Workspace is created using **west init** and populated using **west update**.

For more information about west workspaces and its topology, please refer the Zephyr Project [documentation](https://docs.zephyrproject.org/latest/develop/west/workspaces.html).

## New/Import West Workspace

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


