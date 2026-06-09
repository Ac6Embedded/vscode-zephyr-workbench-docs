---
sidebar_position: 9
---
# Host Tools Manager

The **Host Tools Manager** page shows the status of the host tools installed by Workbench for Zephyr and provides actions to **verify** or **reinstall** them. It also lets you manage **environment variables** and register **custom tool paths**.

![Host Tools Manager](/img/update/host-tools-manager-overview.png)

## Zinstaller

At the top of the page you can find the **Zinstaller** status:

- **Installed**: the Zinstaller version currently installed.
- **Minimum Required**: the minimum Zinstaller version required by the extension.
- **Status**: whether your installation is up to date.

### Actions

- **Reinstall host tools**: reinstalls the bundled host tools.
- **Verify host tools**: checks if the installed tools are present and match expected versions.
- **Reinstall global venv**: recreates the global Python virtual environment used by Workbench.

## Host Tools

This section lists the host tools installed by Workbench (for example **Python**, **CMake**, **DTC**, **Ninja**, **Git**, etc.) and their versions.

Use this list to confirm prerequisites when building, flashing, or debugging.

## Environment Variables

This section lets you view and edit **global environment variables** .

- Click **Edit** to change an existing variable.
- Click **Add variable** to create a new one.

## Extra Tools

**Extra Tools** allows you to configure custom locations to the system PATH.

- Add a custom tool entry and set its **Current Path** to point to your local installation.
- Use **Edit** to update the path or **Remove** to delete the custom entry.

:::note
Uninstalling host tools from this page is not supported yet.
:::