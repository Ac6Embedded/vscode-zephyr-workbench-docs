---
sidebar_position: 4
---
# ROM Plot

The ROM Plot shows the application ROM/Flash usage as an interactive hierarchical chart in your browser. It reveals how the final binary size is distributed among application code, drivers, libraries and dependencies.

To run it, right-click on the application > Analysis > Memory Analysis > ROM Plot.

![ROM Plot in the Memory Analysis submenu](/img/zw/memory-analysis/romplot_menu.png)

The command runs `west build -t rom_plot` in the terminal. It starts a local web server and opens the plot page in your default browser. Navigate the hierarchy by clicking the chart elements: each branch's size is proportional to its contribution to the binary size.

The server keeps running while you browse the plot. To stop it, click the "Terminate" button on the bottom-right notification ("ROM Plot server is running...").

:::note
The notification may disappear after a short time. To display it again, click the notification bell button in the status bar.
:::

:::tip
The [Workbench Dashboard](../workbench-dashboard.md) Memory Plot tab shows a similar interactive chart directly inside VS Code, without starting a server. For a plain table in the terminal, use the [ROM Report](rom-report.md).
:::
