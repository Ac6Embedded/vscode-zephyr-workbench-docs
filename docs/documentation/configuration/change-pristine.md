---
sidebar_position: 5
---
# Change pristine build option

The pristine build mode indicated if the build folder must be clean before each build.

To change the pristine build option mode, right-click on the application > Configure > Change Pristine Build then select
the option mode:

![Pristine Build](/img/zw/configuration/zw_change-pristine.png)

- **auto**: The `west build` command auto-detects situations when build directory needs to be made clean. 
- **always**: Always clean the build directory before build
- **none**: No attempt to detect if build directory needs to be made clean before build.

