---
sidebar_position: 3
---
# Change board

To change the application target board, right-click on the application > Configure > Change Board.

![Change board menu](/img/zw/configuration/zw_change-board.png)

A Quick picks selector is displayed with the list of boards from the West workspace and the custom board.

:::info
There may be a slight delay before the board selector appears. This delay occur as the extension runs `west boards` to find every boards directories from West workspace and any custom board locations and parses the board definition files (`board.yml` and `<board_identifier>.yaml`).
:::

Use the text area to search your target board then press `ENTER` to confirm change.

![Change board](/img/zw/configuration/zw_change-board-choice.png)

:::note
Changing board also adapts the build directory to `build/<board_identifier>`.
:::