---
sidebar_position: 3
---

# Zephyr SDK

The Zephyr Software Development Kit (SDK) contains toolchains for Zephyr’s supported architectures. Zephyr Workbench allows you to import the full SDK or only some components. Alternatively you can also import your own SDK.

To import a new SDK, click on the "New Zephyr SDK" button.

![New Zephyr SDK](/img/zw/sdk/zw_sdk_new.png)

## Source location: 

- **Official SDK**:
Import a full or minimal SDK from official sources
You can select the SDK version (warning some versions might be removed from official sources) and select which toolchains you need.
If you select "full" SDK, every supported toolchains are installed.
Enter the directory where to install the SDK.

- **Remote archive**:
Enter the URL to download the Zephyr SDK and the location to install it

- **Local folder**:
If you already have a Zephyr SDK installed on your system, you can enter it location to register it into Zephyr Workbench

![New Zephyr SDK](/img/zw/sdk/zw_sdk_import.png)

## Supported Toolchains

On the current version, the supported toolchains are:
- aarch64-zephyr-elf
- arc64-zephyr-elf
- arc-zephyr-elf
- arm-zephyr-eabi
- microblazeel-zephyr-elf
- mips-zephyr-elf
- nios2-zephyr-elf
- riscv64-zephyr-elf
- sparc-zephyr-elf
- x86_64-zephyr-elf
- xtensa-dc233c_zephyr-elf
- xtensa-espressif_esp32_zephyr-elf
- xtensa-espressif_esp32s2_zephyr-elf
- xtensa-espressif_esp32s3_zephyr-elf
- xtensa-intel_ace15_mtpm_zephyr-elf
- xtensa-intel_tgl_adsp_zephyr-elf
- xtensa-mtk_mt8195_adsp_zephyr-elf
- xtensa-nxp_imx_adsp_zephyr-elf
- xtensa-nxp_imx8m_adsp_zephyr-elf
- xtensa-nxp_imx8ulp_adsp_zephyr-elf
- xtensa-nxp_rt500_adsp_zephyr-elf
- xtensa-nxp_rt600_adsp_zephyr-elf
- xtensa-sample_controller_zephyr-elf

## Manage Zephyr SDK

After importing a Zephyr SDK, it appears in the **ZEPHYR SDK** panel on the left. SDKs are registered globally in VS Code settings, making them accessible across any VS Code instance.

![New Zephyr SDK](/img/zw/sdk/zw_sdk_manage.png)

In the **ZEPHYR SDK** panel, you can:

- **Add Zephyr SDK**: Register a new SDK to the list.
- **Remove Zephyr SDK**: Unregister the SDK from the list without deleting its files.
- **Delete from Disk**: Permanently delete the SDK folder from your system (this action is irreversible).



