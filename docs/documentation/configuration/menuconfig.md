---
sidebar_position: 2
---
# Menuconfig

To edit the application Kconfig using `menuconfig` (a text-based interface that runs in the terminal), go to the "Applications" view, right-click on the application > Configure > Menuconfig. With several build configurations, the tool edits the active one: use Set Active on the target configuration first (see [Multibuild](../multibuild.md)).

![Menuconfig](/img/zw/configuration/zw_menuconfig.png)

The command runs `west build -t menuconfig` in the application's terminal.

:::tip
Prefer a graphical editor integrated in VS Code? Use the [Kconfig Manager](kconfig-manager.md), first entry of the same "Configure" submenu.
:::
