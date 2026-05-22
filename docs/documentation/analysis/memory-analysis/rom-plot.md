---
sidebar_position: 4
---

# ROM Plot

The **ROM Plot** generates a graphical visualization of ROM/Flash memory usage for the selected application.

![ROM Plot Menu](/img/zw/memory-analysis/romplot_menu.png)

It displays how the generated binary is distributed among source files, libraries, drivers, dependencies, and system components.

## Overview

The ROM Plot provides a hierarchical view of Flash memory usage and helps users understand which components contribute to the final binary size.

The visualization may include:

- **Kernel modules**
- **Drivers**
- **Architecture components**
- **Libraries**
- **Dependencies**
- **Generated files**
- **Application code**

![ROM Plot](/img/zw/memory-analysis/romplot.png)

Each section represents its contribution to the overall binary size.

## Features

- Visual representation of Flash/ROM usage
- Hierarchical organization of components
- Binary size analysis
- Identification of large code contributors