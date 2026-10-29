---
sidebar_label: Supported devices
description: "Which chips the Devicetree Manager supports for pin configuration and clocks: STM32, NXP, Microchip, ESP32, Silicon Labs, Renesas and Infineon."
keywords: [Zephyr supported boards, pin configuration support, pinctrl support, clock tree support, STM32, NXP MCX, ESP32, Silicon Labs, Renesas RA, Infineon PSoC, Zephyr Workbench]
---
# Supported devices

Browsing the devicetree, editing node properties and generating the overlay work on every board, whatever its vendor.

Two parts of the Devicetree Manager depend on the chip family:

- **Pin configuration**: the chip view and its Functions panel. See [Pin configuration](devicetree-manager-pins.md).
- **Clocks**: the Clocks view. See [Clock configuration](devicetree-manager-clocks.md).

In the table:

- **Yes**: it works.
- **Partial**: it works, without what the note says.
- **No**: the view says the board is not supported. The rest of the manager keeps working.

| Vendor | Family | Pin configuration | Clocks |
| --- | --- | --- | --- |
| STMicroelectronics | STM32 C0, F0, F2, F3, F4, F7, G0, G4, H5, L0, L1, L4, L5, U0, U3, U5, WB, WBA, WL | Yes | Yes |
| | STM32 H7 | Yes | Partial (note 1) |
| | STM32 F1 | No | Yes |
| | STM32 C5, H7RS, N6, WB0, WL3 | Yes | No |
| | STM32 MP1, MP13, MP2 | Yes | No |
| Silicon Labs | Series 2 (xG21 to xG29, BGM and MGM modules) | Yes | Yes |
| | Series 3 (SiXG301) | No | Yes |
| | Series 0 and 1, SiWx91x | No | No |
| NXP | MCX N, A, C and W | Yes | No |
| | Kinetis KE1x (KE14Z, KE15Z, KE16Z, KE17Z, KE14F, KE16F, KE18F) | Yes | Partial (note 2) |
| | Kinetis K, KL, KV, KW and K32L | Yes | No (note 3) |
| | S32K1 | Yes | No |
| | LPC51U68, LPC54114, LPC55 | Yes | No |
| | i.MX RT, i.MX, RW61x, S32K3 | No | No |
| Microchip | SAM D2x, D5x, E5x, C2x, L2x, R2x, R3x, SAM3, SAM4, SAM E7x, V7x and PIC32C | Yes | No |
| | SAMA7 | No | No |
| Espressif | ESP32, ESP32-S2, S3, C2, C3, C5, C6 and H2 | Yes | No |
| Renesas | RA (RA2, RA4, RA6, RA8) and RA0 | Yes (note 4) | Yes |
| | RZ, RX, SmartBond | No | No |
| Infineon | PSoC 4, PSoC 6, PSoC Control C3, CYW20829, XMC7000, TRAVEO T2G, PSoC Edge | Yes | No |
| | XMC4500, XMC4700 | Partial (note 5) | No |
| | Older PSoC 6 kits (CY8CKIT-062-BLE, CY8CKIT-062-WIFI-BT) | No | No |
| Nordic | nRF | No | No |
| Others | | No | No |

Notes:

1. **STM32 H7**: the view does not check the PLL input and VCO ranges. Zephyr 4.5 checks them when the board starts, and its clock setup fails when a PLL is outside them.
2. **Kinetis KE1x**: a KE1xZ peripheral whose clock source is the LPFLL shows no frequency.
3. **Kinetis K, KL, KV, KW, K32L**: the PLL is set in Kconfig, not in the devicetree, so the view can't show the clock tree.
4. **Renesas**: the chip view asks you to install Renesas's pin data once (click **Install**).
5. **Infineon XMC4**: the functions come from Zephyr's pin table. Functions only Infineon's XMCLib lists, such as the USIC chip-select outputs, are not offered.

The vendor pages under [Pin configuration](devicetree-manager-pins.md) say what each vendor's pin configuration sets and checks.

To request a family, or to contribute one, open an issue or a pull request on the [companion extension's GitHub repository](https://github.com/Ac6Embedded/vscode-devicetree-manager-for-zephyr).
