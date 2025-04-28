---
sidebar_position: 4
---

# Toolchains

The **Zephyr Software Development Kit (SDK)** provides toolchains for supported architectures. Zephyr Workbench allows you to:

- Import full or minimal Zephyr SDKs
- Register a locally installed SDK
- Add IAR ARM toolchains

To get started, click on **Toolchains > Import Toolchain** in the sidebar.

![Import Toolchain](/img/zw/sdk/zw_sdk_import.png)

---

## Source Location Options

You can choose from the following source locations when adding a toolchain:

### Official SDK
- Download the SDK from official servers.
- Select full or minimal installation.
- Choose the version and architectures.
- Specify the destination folder.

### Remote Archive
- Provide a URL pointing to a Zephyr SDK archive.
- Set the destination directory where it should be extracted.

### Local Folder
- Register an SDK already installed on your system.


---

## IAR ARM Toolchain Support

Zephyr Workbench supports importing the **IAR ARM Toolchain**, which requires additional input fields:

- **Zephyr SDK Path**: A path to an already installed Zephyr SDK on your host system.
- **Token**: A license token required for IAR tool usage.

:::tip
The **Download binaries** link opens the [Zephyr IAR GitHub Releases page](https://github.com/iarsystems/zephyr-iar/releases/) in your browser.
:::

![Zephyr IAR Toolchain Import](/img/zw/sdk/zw_sdk_import_iar.png)


:::note
The Zephyr SDK is still necessary even if the IAR ARM Toolchain is used for building Zephyr applications. This is because tools such as the **Device Tree Compiler (DTC)**, **QEMU**, and **GNU utilities** like the preprocessor and `objcopy` are still required in the build process. The Zephyr SDK provides these components.
:::

### Steps:
1. Open the **Add Toolchain** panel.
2. Select **IAR ARM Toolchain** as the source.
3. Select the **Zephyr SDK**, **Token**, and **IAR Toolchain folder** location.
4. Click **Import**.

---

## Supported Toolchains

The Zephyr SDK includes support for the following architectures:

- `aarch64-zephyr-elf`
- `arc64-zephyr-elf`
- `arc-zephyr-elf`
- `arm-zephyr-eabi`
- `microblazeel-zephyr-elf`
- `mips-zephyr-elf`
- `nios2-zephyr-elf`
- `riscv64-zephyr-elf`
- `sparc-zephyr-elf`
- `x86_64-zephyr-elf`
- `xtensa-dc233c_zephyr-elf`
- `xtensa-espressif_esp32(_s2/_s3)_zephyr-elf`
- `xtensa-intel_ace15_mtpm_zephyr-elf`
- `xtensa-intel_tgl_adsp_zephyr-elf`
- `xtensa-mtk_mt8195_adsp_zephyr-elf`
- `xtensa-nxp_(imx/imx8m/ulp/rt500/rt600)_adsp_zephyr-elf`
- `xtensa-sample_controller_zephyr-elf`

---

## Manage Toolchains

Once imported, toolchains are listed in the **TOOLCHAINS** panel in the sidebar. They are registered globally in VS Code and are accessible across all projects.

![Manage Toolchains](/img/zw/sdk/zw_sdk_manage_iar.png)

Available actions:

- **Add Toolchain**: Register another SDK or toolchain.
- **Remove Toolchain**: Unregister it without deleting files.
- **Delete Toolchain**: Permanently remove its files from disk.

:::tip
When an **IAR ARM Toolchain** is expanded in the list, the **associated Zephyr SDK** it relies on is also displayed for clarity.
:::

---

:::note
Toolchains are shared across all applications and workspaces within Zephyr Workbench.
:::
