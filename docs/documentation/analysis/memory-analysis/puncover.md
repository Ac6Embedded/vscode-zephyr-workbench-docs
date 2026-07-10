---
sidebar_position: 5
---
# Puncover

Based on the third-party tool [puncover](https://github.com/HBehrens/puncover), this feature runs a local web server
that provides a webpage view of the RAM, ROM and stack usage.

To run Puncover, right-click on the application > Analysis > Memory Analysis > Puncover.

![Puncover menu](/img/zw/memory-analysis/zw_puncover-menu.png)

When the local web server is started, the webpage should automatically be opened.

![Puncover webpage](/img/zw/memory-analysis/zw_puncover-webpage.png)

To stop Puncover local server, click on the "Terminate" button on the bottom-right notification. 

![Puncover terminate](/img/zw/memory-analysis/zw_puncover-terminate.png)

:::note
The notification may disappear after a short time. To display it again, click the notification bell button in the status bar.
:::

:::tip
For memory usage visualization inside VS Code, see the [Workbench Dashboard](../workbench-dashboard.md). For hierarchical memory charts, see [RAM Plot](ram-plot.md) and [ROM Plot](rom-plot.md).
:::
