---
sidebar_position: 12
---
# DTS LSP Integration

This page explains how Zephyr Workbench integrates with the DeviceTree Language Server by Kyle Bonnici([DTS-LSP](https://github.com/kylebonnici/dts-lsp)), what it does for you, and what to expect when working with `.dts` and `.overlay` files.

---

## Overview

- Provides on-the-fly DTS language features (go-to, hover, diagnostics, formatting) by talking to the external `dts-lsp` VS Code extension.
- Automatically creates and selects DTS contexts based on the file you open:
  - Application overlays (`.overlay`) use the app build directory’s `build_info.yml` to derive include paths, bindings, the main `dtsFile`, overlays, and compile commands.
  - Workspace DeviceTree files (`.dts` in the Zephyr tree) use the Zephyr kernel tree to derive include and bindings paths.
- Keeps contexts in sync as files change and removes them when files close or are deleted.

---

## How It Works

- On activation, the integration locates and activates the `dts-lsp` extension API.
- It sets default server settings:
  - `allowAdhocContexts: false` (prevents server from creating implicit contexts)
  - `defaultShowFormattingErrorAsDiagnostics: false` (reduces noise from formatting diagnostics)
- It listens to editor events and updates contexts as you open or focus `.overlay` or `.dts` files.

### Application Overlay Contexts (`*.overlay`)

![DTS-LSP-Overlays](/img/zw/dts-lsp/dts-lsp-overlay.gif)

When an overlay is opened:

1. The extension finds the parent Zephyr application folder and its active (or first) build configuration.
2. It parses `<build_dir>/build_info.yml` to collect:
   - `include-dirs`, `bindings-dirs`, `files`, `user-files` and `compile_commands.json`.
3. It builds a DTS context payload and requests/activates it on the DTS server.
4. If `build_info.yml` changes, the extension removes the existing context first, then recreates it to avoid stale state.

What to expect
- The correct app DTS roots and bindings are used, including overlays and the main `dtsFile`.
- Formatting errors are not shown as diagnostics by default for a calmer experience.

### Workspace DTS Contexts (`zephyr/**/*.dts`)

![DTS-LSP-Overlays](/img/zw/dts-lsp/dts-lsp-workspace.gif)

When a DTS file inside the Zephyr tree is opened:

1. The extension detects the containing west workspace and Zephyr kernel directory.
2. It constructs include paths from `zephyr/include`, `zephyr/include/zephyr`, `zephyr/dts` and common DTS subfolders.
3. It adds `zephyr/dts/bindings` for bindings.
4. Vendor HAL roots: the workspace context unconditionally appends several vendor HAL roots found under `modules/hal` (sibling of `zephyr`). The integration keeps only those that actually exist on disk:
   - `modules/hal/adi`
   - `modules/hal/atmel`
   - `modules/hal/microchip`
   - `modules/hal/nuvoton`
   - `modules/hal/gigadevice`
   - `modules/hal/stm32`
   - `modules/hal/nxp`
   - `modules/hal/espressif`

What to expect
- The current `.dts` file is treated as the `dtsFile` of the context.
- Include paths cover Zephyr core DTS folders plus the detected `modules/hal/...` vendor roots present in your workspace.
- Bindings are sourced from `zephyr/dts/bindings` when present.
- Contexts are recreated only when their meaningful signature changes (include paths, bindings, `dtsFile`, overlays, compile commands), minimizing churn.

---

## Working With .dtsi Files

- `.dtsi` include files do not create their own full context. For include resolution and language features to work, keep the related parent `.dts` file open so its DTS context remains active in the environment.

---
## Known Limitations / TODOs

- Vendor module detection is hard-coded. A future version should parse `west.yml` and each `zephyr/module.yml` to auto-discover `dts_root` entries.
- `.dtsi` files are intentionally skipped; the server relies on their parent `.dts` context.
- For custom DTS-LSP configuration, you can always configure it manually inside `settings.json` as mentioned in [usage guide](https://github.com/kylebonnici/dts-lsp?tab=readme-ov-file#usage).
---

## Troubleshooting

- Ensure the `KyleMicallefBonnici.dts-lsp` [extension](https://marketplace.visualstudio.com/items?itemName=KyleMicallefBonnici.dts-lsp) is installed and enabled.
- If overlays don’t resolve correctly, run a build to ensure `build_info.yml` and `compile_commands.json` exist.
- If contexts appear stale after changing `build_info.yml`, the integration removes and recreates the context automatically. If issues persist, close and reopen the file.
- Restart VSCode