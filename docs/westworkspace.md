---
sidebar_position: 3
---
# West Workspace

## New West Workspace

Source location:

- Minimal from template
Import the west workspace from internal templates provided by Zephyr Workbench.
The sources are fetched from repositories.

1. Most of the time, you won't need to change the Path value. It indicated the parent URL where every Zephyr related repositories are.
2. Select which base template you need
3. Select the version
4. Enter the location with the name of the west-workspace (eg. /home/user/workdir/westworkspace/zephyr-v3.7.0)

- Repository
Clone Zephyr and its every modules
1. Enter the URL of the Zephyr repository (by default, it is set to https://github.com/zephyrproject-rtos/zephyr) 
2. Select the version
3. Enter the location with the name of the west-workspace

- Local folder
Import a local Wesk Workspace that has already been initialized and updated

- Local manifest
Import a west workspace using your own manifest file
Enter the location with the name of the west-workspace

The import process runs west init and update to get the sources


