---
sidebar_position: 21
---

# Installing Workbench for Zephyr in VS Code Portable Mode

This guide explains how to install **Workbench for Zephyr** in a fully isolated, portable Visual Studio Code environment.

Portable mode allows you to evaluate or use Workbench for Zephyr without affecting your existing VS Code installation, extensions, SDKs, or system-wide tools.

This setup works on **Windows, Linux, and macOS**, with platform-specific notes where required.

Portable mode is also useful in situations where your user name contains spaces. In such cases, you can install the environment in any directory of your choice, avoiding path-related issues.

---

## Why Use VS Code Portable Mode?

Portable mode provides full isolation:

- No impact on system-wide VS Code installations
- No changes to global PATH, registry, or user profiles
- Workbench for Zephyr installs its own private Python and tools
- Safe coexistence with other embedded extensions (e.g. STM32)
- Easy cleanup by deleting a single folder

---

## How Portable Mode Works

On Windows and Linux, VS Code runs in portable mode when it detects a `data` directory next to its executable.
On macOS, the directory must be named `code-portable-data` and placed next to the `Visual Studio Code.app` application.

In portable mode:

- Extensions are stored in `data/extensions` (`code-portable-data/extensions` on macOS)
- User settings are stored in `data/user-data` (`code-portable-data/user-data` on macOS)
- Workbench for Zephyr installs all tools into `data/.zinstaller` (`code-portable-data/.zinstaller` on macOS)
- Nothing is written to system locations

---

## Windows

### Download and Extract
1. Download the ZIP archive using the following link:
   https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-archive

2. Extract the archive into a directory of your choice
   (for example, `D:\Tools\VSCode-Zephyr-Portable`).

3. Create an empty folder named `data` in the root of the extracted directory.
   This enables Visual Studio Code **Portable Mode**, ensuring that all settings,
   extensions, and user data remain fully isolated.

Your final directory layout should look like this:
```
D:\Tools\VSCode-Zephyr-Portable
├─ Code.exe
├─ data/
├─ bin/
├─ resources/
└─ ...
```
4. Launch VS Code by running `Code.exe`.

---

## Linux

### Download and Extract
1. Download the Linux archive (for example, x64):
   https://code.visualstudio.com/sha/download?build=stable&os=linux-x64

2. Extract the archive into a directory of your choice
   (for example, `/opt/vscode-zephyr-portable`).

3. Create an empty `data` directory inside the extracted folder.

Directory layout:

```
/opt/vscode-zephyr-portable
├─ code
├─ data/
├─ bin/
├─ resources/
└─ ...
```

4. Launch VS Code:
`./code`
---

## macOS

macOS also supports a portable setup, but the layout differs from Windows and Linux:
the portable directory must be named `code-portable-data` and placed **next to the
`Visual Studio Code.app` application**, not inside it.

### Download (choose one)

- **Apple Silicon (ARM64)**  
  https://code.visualstudio.com/sha/download?build=stable&os=darwin-arm64

- **Intel (x64)**  
  https://code.visualstudio.com/sha/download?build=stable&os=darwin

- **Universal (ARM64 + Intel)**  
  https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal

### Extract and Set Up

1. Extract the downloaded archive. You get `Visual Studio Code.app`.

2. Move `Visual Studio Code.app` into a directory of your choice
   (for example, `~/VSCode-Zephyr-Portable`).

3. Create an empty folder named `code-portable-data` next to the application.

Directory layout:

```
~/VSCode-Zephyr-Portable
├─ Visual Studio Code.app
└─ code-portable-data/
```

4. Launch VS Code by opening `Visual Studio Code.app`.

:::note
If portable mode does not activate (settings and extensions are still stored in your user profile), clear the macOS quarantine attribute and relaunch:

```
xattr -dr com.apple.quarantine "Visual Studio Code.app"
```
:::

---

## Removing Workbench for Zephyr Completely

Delete the portable directories. No system state is modified.

---

## References

https://code.visualstudio.com/docs/editor/portable
