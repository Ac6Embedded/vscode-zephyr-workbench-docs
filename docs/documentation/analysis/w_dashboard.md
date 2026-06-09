---
sidebar_position: 2
---

# West Dashboard

The **West Dashboard** provides a web-based summary of the selected Zephyr application and its build environment.

![West Dashboard Menu](/img/zw/analysis/w_dashboard_menu.png)

It gives access to useful project information such as build attributes, memory reports, Kconfig data, system initialization details, device tree information, and ELF statistics.

![West Dashboard](/img/zw/analysis/w_dashboard.png)

## Overview

The West Dashboard contains several pages:

- **Home:** Displays the build summary, including Zephyr version, board, application path, build date, and selected toolchain.
- **Memory Report:** Shows detailed memory usage information for the application.
- **Kconfig:** Provides information about the application configuration.
- **Sys Init:** Displays system initialization information.
- **Device Tree:** Shows device tree-related information used by the build.
- **ELF Stats:** Displays statistics extracted from the generated ELF file.

## Build Summary

The main page displays:

- **Build Attributes:** Zephyr version, board, application path, build date, and toolchain.
- **Memory Summary:** Binary size, code size, read-only data, read/write data, and BSS.
- **Build Command:** Output directory and command used to build the application.