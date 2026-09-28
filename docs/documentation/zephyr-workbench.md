---
sidebar_position: 1
---

# Workbench for Zephyr (VS Code)

Workbench for Zephyr is a VS Code extension that adds full Zephyr development support to Visual Studio Code: host tools and toolchain installation, west workspace management, an application wizard, build, flash and debug, plus configuration and analysis tools.

Install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Ac6.zephyr-workbench) or follow the [installation guide](installation.md).

## Features

* Install the native host tools (Python, CMake, Ninja, ...) required to build Zephyr ([Installation](installation.md), [Host Tools Manager](host-tools-manager.md))
* Install and manage toolchains: Zephyr SDK (local or global), ARM GNU Toolchain, IAR ARM Toolchain and Rust Toolchain ([Toolchains](sdk.md))
* Create or import west workspaces and maintain them with the [West Manager](west-manager.md) ([West Workspaces](west-workspace.md))
* Create or import applications and manage multiple [build configurations](multibuild.md) per application ([Applications](application.md))
* Configure your application with the [Kconfig Manager](configuration/kconfig-manager.md), Menuconfig or Gui Config
* Edit the devicetree visually with the [Devicetree Manager](devicetree-manager.md)
* Build, [flash](flash-run.md) and [debug](debug-session.md) applications, with one-click [runner installation](install-runners.md) and multiple debug backends in the Debug Manager
* Inspect build results in the [Workbench Dashboard](analysis/workbench-dashboard.md) and run [memory analysis](analysis/memory-analysis/ram-report.md) reports and plots
* Generate and verify SPDX SBOMs ([SPDX / SBOM](analysis/spdx/index.md))
* Run static analysis with the [ECLAIR Manager](analysis/static-code-analysis/eclair-manager.md) and diagnose devicetree build errors with [DT Doctor](analysis/static-code-analysis/dt-doctor.md)
* Connect AI coding agents (Claude Code, OpenAI Codex, GitHub Copilot, Cursor, ...) to build, flash and debug your applications, with the permissions you choose ([AI Manager](ai-manager.md))

![Workbench for Zephyr Overview](/img/update/wfz_overview.png)

:::note
Workbench for Zephyr automatically installs a small set of companion extensions (devicetree tooling, serial monitor, C/C++ and debug support). See the [installation guide](installation.md) for details.
:::

## Open Source
The Workbench for Zephyr extension is a fully open-source project, built to provide an IDE for the Zephyr community and to introduce Zephyr to newcomers. It is designed to enhance your development experience by providing tools and features that are easy to use. The source code is available on [GitHub](https://github.com/Ac6Embedded/vscode-zephyr-workbench), and we actively encourage developers to contribute, review, and improve the project. By sharing the code openly, we aim to continuously evolve the tool through collaboration, transparency, and user feedback.

## Contribute
We welcome contributions from developers of all skill levels! Whether you're fixing bugs, adding new features, or improving documentation, your efforts help make this extension better for everyone. Here's how you can get involved:

- Reporting Issues: Found a bug or have a feature request? Please check existing issues and, if needed, open a new one to let us know.
- Improving Documentation: Clear documentation is crucial for user experience. If you spot something unclear or missing, feel free to suggest improvements!

## Roadmap
Development is driven by community feedback. To see what is planned, or to suggest a feature, visit the [GitHub issues](https://github.com/Ac6Embedded/vscode-zephyr-workbench/issues) and [discussions](https://github.com/Ac6Embedded/vscode-zephyr-workbench/discussions).

## Useful links
- [Zephyr Training Program](https://zephyrproject.org/training-partner-program)
- [Zephyr Documentation](https://docs.zephyrproject.org/latest/index.html)
- [Awesome Zephyr](https://github.com/zephyrproject-rtos/awesome-zephyr-rtos)
