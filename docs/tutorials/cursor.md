---
sidebar_position: 1.5
---
# Getting started with Cursor

Workbench for Zephyr also runs in [Cursor](https://cursor.com), the AI code editor built on VS Code. This tutorial covers what is specific to Cursor: getting to the editor window, installing the extension from the Cursor marketplace, opening the Workbench for Zephyr view, and replacing the companion extensions that Cursor does not provide. It then walks through the first setup (host tools, Zephyr SDK, west workspace) and builds a first application. After that, the steps are the same as in VS Code, except for reading the serial output (see [Companion extensions in Cursor](#companion-extensions-in-cursor)).

The screenshots were taken with Cursor 3.22 on macOS and Workbench for Zephyr 4.2.1. On Windows and Linux, use Ctrl instead of Cmd in the shortcuts.

## What you will do

1. Open the Cursor editor window.
2. Install Workbench for Zephyr from the Cursor marketplace.
3. Open the Workbench for Zephyr view.
4. Install the host tools.
5. Add the Zephyr SDK.
6. Add a west workspace.
7. Install the C/C++ extension for Cursor, or Cortex-Debug and clangd.
8. Create a `hello_world` application.
9. Build it.

## Before you start

- Cursor installed. On first launch, Cursor asks you to log in or sign up with a Cursor account.
- The requirements of your operating system, listed on the [Installation](../documentation/installation.md#requirements) page. On macOS, [Homebrew](https://brew.sh) must be installed.
- An internet connection: the host tools, the SDK and the Zephyr sources are downloaded during the setup.

## Step 1: open the editor window

Cursor 3 opens in the **Agents** window. Extensions such as Workbench for Zephyr live in the classic editor window: click **IDE** at the top of the Agents window to open it.

![IDE button in the Cursor Agents window](/img/tutorials/cursor/open-ide.png)

## Step 2: install Workbench for Zephyr

Cursor has its own extension marketplace.

1. Open the Extensions view (*Cmd+Shift+X*).
2. Search for `Ac6.zephyr-workbench`.
3. Click on **Workbench for Zephyr** (publisher **Ac6**), then click **Install**.

![Workbench for Zephyr in the Cursor marketplace](/img/tutorials/cursor/install-extension.png)

:::tip
Search with the identifier `Ac6.zephyr-workbench`. A search for "Workbench for Zephyr" also works, but in Cursor the Ac6 extension is listed far down the results.
:::

Once installed, Workbench for Zephyr shows a "Host tools are missing, please install them first" notification. You can click **Install Host Tools** in it, or follow [Step 4](#step-4-install-the-host-tools).

### Companion extensions in Cursor

Workbench for Zephyr installs its [companion extensions](../documentation/installation.md#companion-extensions) automatically. In Cursor, two of them are not available in the marketplace and are skipped without an error message:

- **C/C++** (Microsoft, `ms-vscode.cpptools`): replace it with the C/C++ extension for Cursor, or with Cortex-Debug and clangd, see [Step 7](#step-7-install-the-cc-extension-for-cursor).
- **Serial Monitor** (Microsoft): to read the serial output of your board, use a serial terminal or another serial monitor extension from the Cursor marketplace.

Devicetree Manager for Zephyr, Cortex-Debug, File Downloader and the DeviceTree Language Server install as in VS Code.

## Step 3: open the Workbench for Zephyr view

In Cursor, the activity bar is displayed as a row of icons at the top of the side bar, instead of on the left edge of the window. The Workbench for Zephyr icon is in its overflow menu:

1. Click on the arrow at the end of the icon row.
2. Hover over **Workbench for Zephyr** and click on its pin icon to keep it in the row.
3. Click on **Workbench for Zephyr** to open the view.

![Open and pin the Workbench for Zephyr view](/img/tutorials/cursor/pin-workbench-view.png)

The Workbench for Zephyr icon now stays in the side bar:

![Workbench for Zephyr view in Cursor](/img/tutorials/cursor/workbench-view.png)

## Step 4: install the host tools

1. Click on **Install Host Tools**.
2. The installation runs in the terminal, with a progress notification you can cancel.

![Install Host Tools](/img/tutorials/cursor/install-host-tools.png)

When it completes, two notifications confirm it: "Setup Zephyr environment successful" and "OpenOCD runner installation successful". The tools installed on each operating system are listed in [Installation](../documentation/installation.md#host-tools-installation). To choose which tools to install, use **Install Host Tools (Advanced)** instead, see [Advanced Host Tools](../documentation/advanced-host-tools.md).

## Step 5: add the Zephyr SDK

1. Click on **Add Toolchain**.
2. Keep **Toolchain family** set to "Zephyr SDK" and **Source** set to "Official".
3. **Destination**: select "Global (auto-discovered)". The SDK is installed in your home folder (the **Install location** default) and the Zephyr build system finds it automatically.
4. **SDK Type**: select "Minimal" to install only the toolchains you need, or keep "Full" to install all of them.
5. **Version**: keep the latest release.
6. With "Minimal", check the toolchains you need in the list below **Version**, for example **arm** for STM32 boards.
7. Scroll down and click on **Import**.

![Add Toolchain in Cursor](/img/tutorials/cursor/add-toolchain.png)

When the notification "Zephyr SDK ... installed globally" appears, the SDK is listed in the Toolchains view with a **[global]** badge.

![Zephyr SDK in the Toolchains view](/img/tutorials/cursor/toolchain-installed.png)

The other sources and destinations are described in [Toolchains](../documentation/sdk.md#zephyr-sdk).

## Step 6: add a west workspace

1. Click on **Add West Workspace**.
2. Keep **Source location** set to "From template" and keep "Minimal" selected.
3. **Template**: pick the template of your board vendor, for example "STM32".
4. **Revision**: keep the latest Zephyr tag.
5. **Location**: enter or browse to the parent folder of the workspace.
6. **Subfolder**: name of the workspace folder (default "zephyrproject").
7. Click on **Import**.

![Add West Workspace in Cursor](/img/tutorials/cursor/add-west-workspace.png)

The Zephyr sources and modules are downloaded; it takes several minutes. When it completes, the workspace is listed in the West workspaces view and its folder is added to the Cursor window. The task terminals on the right of the Terminal panel may show a yellow warning icon: it does not mean that the setup failed.

If the notification "Zephyr Workbench recommends applying CMake settings to prevent popup conflicts (e.g., sourceDirectory). Apply now?" appears, click **Yes**: it sets CMake Tools options for this workspace so that CMake Tools does not configure the folder on its own.

![West workspace ready](/img/tutorials/cursor/west-workspace-ready.png)

For all the options of this form, see [West Workspace](../documentation/west-workspace.md).

## Step 7: install the C/C++ extension for Cursor

The default debug backend of Workbench for Zephyr, "C/C++ Debug (cppdbg)", needs the `cppdbg` debugger. In Cursor, it is provided by the C/C++ extension published by Anysphere, the maker of Cursor. You can also use Cortex-Debug and clangd instead, see [Alternative: Cortex-Debug and clangd](#alternative-cortex-debug-and-clangd).

1. In the Extensions view, search for `@id:anysphere.cpptools`.
2. Click on **C/C++** (publisher **Anysphere**), then click **Install**.

![C/C++ extension for Cursor](/img/tutorials/cursor/install-cpptools.png)

This extension is an extension pack: it also installs **clangd**, **CodeLLDB** and **CMake Tools**.

- Since Microsoft's C/C++ extension is not installed and clangd is, Workbench for Zephyr sets the IntelliSense provider of new applications to **clangd** (see "IntelliSense provider" in [Applications](../documentation/application.md#create-a-new-application)).
- CMake Tools may show a "Select a Kit for zephyrproject" list as soon as it is installed. Press *Escape*: Workbench for Zephyr builds with west and does not use CMake Tools kits.

### Alternative: Cortex-Debug and clangd

If you prefer, use **Cortex-Debug** and **clangd** instead of the C/C++ extension for Cursor. Together they replace what Microsoft's C/C++ extension does in VS Code, without installing CMake Tools and CodeLLDB:

| Role | C/C++ extension for Cursor | Alternative |
| --- | --- | --- |
| Debugging | "C/C++ Debug (cppdbg)" backend | **Cortex-Debug** (`@id:marus25.cortex-debug`) |
| IntelliSense | clangd, installed with the pack | **clangd** (`@id:llvm-vs-code-extensions.vscode-clangd`) |

1. Cortex-Debug is normally installed with Workbench for Zephyr. If it is missing, search for `@id:marus25.cortex-debug` in the Extensions view and install it. When you debug, select one of the Cortex-Debug backends in the [Debug Manager](../documentation/debug-session.md#choose-the-debug-backend).
2. Search for `@id:llvm-vs-code-extensions.vscode-clangd` and install **clangd** before you create your application: Workbench for Zephyr then selects clangd as its IntelliSense provider. For an application that already exists, right-click on it > Build Configuration > Change IntelliSense Provider (see [Applications](../documentation/application.md#manage-applications)).

:::note
Install at least one of the two options. Without the C/C++ extension for Cursor or clangd, no C/C++ language server is installed and your application gets no IntelliSense.
:::

## Step 8: create an application

1. Click on **Add Application**.
2. **Select West Workspace**: the workspace created in Step 6.
3. **Select Toolchain**: "Global Zephyr SDK".
4. **Select Board**: type part of the board name or identifier to filter the list, for example `stm32f4_disco` for "ST STM32F4 Discovery".
5. Keep "Create new application" selected.
6. **Select template**: type `hello_world` and pick the first entry, `deps/zephyr/samples/hello_world` (not the `cpp` or `sysbuild` variants).
7. **Project Name**: the name of your application.
8. Keep "West workspace application" and **Debug preset** checked.
9. Click on **Create**.

![Add Application in Cursor](/img/tutorials/cursor/add-application.png)

The application appears in the Applications view. See [Applications](../documentation/application.md) for the other fields.

## Step 9: build the application

Hover over the application in the Applications view and click on the **Build** (gear) button. You can also right-click on the application > Build.

![Build button of the application](/img/tutorials/cursor/build-inline.png)

The build runs in the terminal and prints the memory usage of the image. To edit the code, open the source files from the **Code Explorer** node of the application. When a file of the application is open, the status bar also shows the Workbench for Zephyr **Build** and **Debug** buttons, next to the application name.

![Source file and build output](/img/tutorials/cursor/build-output.png)

:::warning
CMake Tools, installed in Step 7 with the C/C++ extension for Cursor, adds its own **Build** and run buttons to the status bar (tooltip "Build the selected target"). When no file of the application is open, it is the only Build button in the status bar. Use the Workbench for Zephyr **Build** button (its tooltip reads "Zephyr: Build" followed by the application name), not the CMake Tools one.
:::

:::note
The Problems view may show clangd errors such as "Unknown argument: '-fno-reorder-functions'". clangd does not recognize some GCC options of the Zephyr build. These errors only affect the editor: the build itself is not impacted.
:::

## Next steps

From here on, Workbench for Zephyr works in Cursor as in VS Code, apart from the [companion extensions](#companion-extensions-in-cursor) described above. Follow the documentation:

- Flash your board and view its output: [Flash and Run](../documentation/flash-run.md) and the "Running the application" section of the [macOS](../documentation/getting-started/getting-started-macosx.md#running-the-application), [Linux](../documentation/getting-started/getting-started-linux.md#running-the-application) or [Windows](../documentation/getting-started/getting-started-win.md#running-the-application) getting started guide. That section uses the Serial Monitor extension, which is not available in Cursor: read the output with a serial terminal or another serial monitor extension instead.
- Install the flash and debug tools of your board: [Install Runners](../documentation/install-runners.md).
- Debug: [Debug Session](../documentation/debug-session.md). In Cursor, the default "C/C++ Debug (cppdbg)" backend is provided by the C/C++ extension for Cursor (Step 7) instead of Microsoft's C/C++ extension. With the Cortex-Debug and clangd alternative, select a Cortex-Debug backend in the Debug Manager.
- Configure your application: [Kconfig](../documentation/configuration/kconfig-manager.md), [Devicetree Manager](../documentation/devicetree-manager.md), [Multibuild](../documentation/multibuild.md).
