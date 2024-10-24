---
sidebar_position: 5
---
# Applications

## Create New Application
Before creating an application, it is mandatory to have a Zephyr SDK and a West workspace.
The creation process is based on sample provided by Zephyr.

1. Click on "New Application"
2. Select a parent west workspace, the workspace folder is scanned to detect the available boards and samples
3. Select a SDK (if your use a minimal SDK, not every boards are compatible)
4. Select the target board
5. Select the sample that serve as base project
6. Enter your project name
7. Enter your project location
8. Select the pristine build mode (this option indicated if the build folder must be clean before each build)
9. Click on "Import" 

## Import Application
If you already have an application sources, you can import and configure it for Zephyr Workbench

1. Click on "Import Application" button
2. Enter the application directory or click on the folder icon to open file browser
3. Select the west workspace to attach your application to
4. Select SDK to use
5. Select the target board

## Application structure
The application consists on:
  .vscode/
  src/
  CMakeLists.txt
  prj.conf


## Build Application
To build from the "Applications" panel
- Right-click on your project > Build
   \<or\>
- Click on the build button right next to the project

On the "Explorer" view, if a source file of your project is opened in the editor, a Build shortcut button is displayed in the status bar on the bottom.
