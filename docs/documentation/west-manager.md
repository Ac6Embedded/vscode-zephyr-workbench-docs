---
sidebar_position: 6
---
# West Manager

Workbench for Zephyr provides a **West Manager** interface that simplifies the management of Zephyr workspaces and manifest projects directly from Visual Studio Code.

The West Manager allows users to:

- Select an existing **Workspace**
- Choose the **Zephyr revision**
- Browse and filter available **Manifest projects**
- Enable or disable specific modules
- Apply changes to the workspace configuration
- Update workspace dependencies and repositories

:::tip
Use the filter field to quickly find specific modules or repositories within large Zephyr manifests.
:::

![West Manager](/img/zw/west_manager.png)

## Interface Overview

The West Manager interface contains the following sections:

- **Workspace:** Select the active Zephyr workspace to manage.
- **Zephyr revision:** Select the Zephyr version or branch used by the workspace.
- **Refresh button:** Reload available revisions.
- **Filter projects:** Search for projects or modules inside the manifest.
- **Project list:** Displays available repositories and modules that can be enabled or disabled.

Examples of commonly available projects:

- cmsis
- cmsis-dsp
- hal_stm32
- hal_nordic
- hal_nxp
- fatfs
- littlefs

### Workspace Information

The information panel displays:

- Zephyr version
- Zephyr base path
- Git repository URL
- Manifest location
- Project source paths
- Submanifest information

## Available Actions

### Apply

Applies selected changes to the current workspace configuration without updating repositories.

### Update

Updates repositories and dependencies based on the current workspace configuration.

### Apply + Update

Applies configuration changes and immediately updates workspace dependencies.

### Refresh

Reloads workspace data and project information.