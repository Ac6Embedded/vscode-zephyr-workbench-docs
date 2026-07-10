---
sidebar_position: 14
---
# Advanced Host Tools Installation

The **Advanced Host Tools Installation** page lets you install or repair individual parts of the host tools, instead of the one-click **Install Host Tools**. Use it to skip tools you already have, choose which Python is used, or fix a single broken tool without reinstalling everything.

## Open the page

- Before the first installation: click **Install Host Tools (Advanced)** in the Workbench for Zephyr view, or the **Advanced installation** link in the **Host tools** view.
- After installation: click the **Advanced installation** button in the [Host Tools Manager](host-tools-manager.md).
- From the Command Palette: **Zephyr Workbench: Install Host Tools (Advanced)**.
- The **Reinstall host tools** confirmation dialog also offers an **Advanced** choice that opens this page.

## Python and virtual environment

Python and the global virtual environment are always installed, even when every tool is skipped: the selected Python is used by the tools and to create the virtual environment.

Choose where Python comes from:

- The default source depends on your OS:
  - Windows: **Zinstaller**, a portable Python downloaded automatically.
  - Linux: **Portable AppImage**, downloaded automatically, no sudo needed.
  - macOS: **Homebrew**, the `python@3.13` formula installed with brew.
- **System (detected from PATH)**: use the Python already installed on your machine.
- **Custom**: enter the path to a Python executable (or its folder), or browse for it. A detection line below the field shows the detected path and version.

:::note
Current Zephyr requirements recommend Python 3.12 or newer. A warning is shown if the selected Python is older.
:::

A status line indicates whether the global virtual environment is already present, or will be created on the next run.

**Zephyr requirements version:** selects the Zephyr version whose pip requirements are installed into the virtual environment. Tags and branches are fetched from GitHub, with the latest release selected by default. If the list cannot be fetched (offline), type a tag or branch manually (for example `v4.2.0` or `main`).

## Tools

The table lists each installable tool with its **Status** (**Installed**, **System only**, or **Not installed**), the **Detected** version, and the **Available** version. **System only** means the tool was found on your system but was not installed by Workbench.

The rows depend on your OS:

- **Windows**: CMake, Ninja, gperf, Device Tree Compiler, Git, wget. Everything is a portable download, nothing is installed system-wide.
- **Linux**: CMake and Ninja are direct downloads (no sudo). The **System packages** row installs the remaining dependencies (git, gperf, dtc, gcc, make, ccache, dfu-util, wget, xz, file, SDL2, hidapi, libmagic, unzip, python3 support packages) with your distribution's package manager. It carries a **sudo** badge: your password is requested only when this row is selected.
- **macOS**: CMake, Ninja, gperf, Device Tree Compiler, and Git install as Homebrew formulas. The **Utilities** row installs the remaining packages (ccache, libmagic, wget, yq, xz, dfu-util, libftdi, hidapi) in one go.

:::warning
On macOS, everything installs through Homebrew. If Homebrew is not detected, the page shows an error and the install actions stay disabled until you install it from [brew.sh](https://brew.sh) and refresh.
:::

To install:

1. Tick the tools you want, or use **Select missing** (selects everything not yet installed), **Select all**, or **Unselect all**.
2. Click **Install selected**. You can also click the **Install** button of a single row.
3. A result line summarizes what was installed. If a part failed, click **Open terminal output** to see the log.

:::note
If a download fails or its checksum does not match, it is retried automatically from the Ac6 mirror.
:::

## Other actions

Once at least one part is installed, two more buttons appear at the bottom of the page:

- **Reinstall everything**: removes the installed host tools and the global virtual environment, then reinstalls everything with the selected Python source. A confirmation is shown first. On Linux, your sudo password is requested.
- **Rebuild virtual environment**: recreates only the global Python virtual environment.
