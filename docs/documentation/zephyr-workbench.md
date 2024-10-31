---
sidebar_position: 1
---

# Zephyr Workbench for VS Code

Ac6 Zephyr Workbench for VS Code extension adds support of Zephyr development to Visual Studio Code, including SDK management, Project wizard, build and debugging features. 


## Features
* Install native Host Tools (python, cmake, ...)
* Install and auto-detect default Zephyr SDK
* Import West workspaces from remote repository using west or from local folder 
* Parse west workspace data from config file
* Create application projects for specific board from sample
* Build/Flash application
* Debug application

![Zephyr Workbench Overview](/img/zw/zw_overview.png)

## Open Source
The Zephyr Workbench extension is a fully open-source project, built to provide an IDE for the Zephyr community and to help and to introduce Zephyr to newcomers. It is designed to enhance your development experience by providing tools and features that are easy to use. The source code is available on [GitHub](https://github.com/Ac6Embedded/vscode-zephyr-workbench), and we actively encourage developers to contribute, review, and improve the project. By sharing the code openly, we aim to continously evolve the tool with collaboration, transparency, and a users/developers feedback.

## Contribute
We welcome contributions from developers of all skill levels! Whether you're fixing bugs, adding new features, or improving documentation, your efforts help make this extension better for everyone. Here's how you can get involved:

- Reporting Issues: Found a bug or have a feature request? Please check existing issues and, if needed, open a new one to let us know.
- Improving Documentation: Clear documentation is crucial for user experience. If you spot something unclear or missing, feel free to suggest improvements!

## Roadmap
Zephyr Workbench development is driven by community-feedback and we planned to release new features as quickly as possible.

- Short-Term goals:
  - Online tutorials and user guide
  - Support custom boards
  - Support West build environment variables (OVERLAYS, ROOT directories)
  - Better support of west workspace topology

- Long-Term goals:
  - Support Application types (repository, workspace, freestanding)
  - Support modules
  - Support testing / code analysis
  - Support signing binaries

If you have ideas or features you’d like to see, feel free to suggest them via GitHub discussions or by opening an issue. We value your input and look forward to add more features according users needs.

## Useful links
- [Zephyr Training Program](https://zephyrproject.org/training-partner-program)
- [Zephyr Documentation](https://docs.zephyrproject.org/latest/index.html)
- [Awesome Zephyr](https://github.com/zephyrproject-rtos/awesome-zephyr-rtos)