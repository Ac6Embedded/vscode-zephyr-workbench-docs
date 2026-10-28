---
sidebar_label: Renesas RA
description: "Renesas RA and RA0 pinctrl in Zephyr with the Devicetree Manager: install the pin data, route SCI pins by mode, and set drive strength or open drain."
keywords: [Renesas RA pinctrl, Zephyr Renesas pins, RA_PSEL, psels, Renesas SCI UART, RA8M1 pins, Renesas drive-strength, Zephyr Workbench]
image: /img/zw/devicetree-manager-pins-renesas.png
---
# Renesas RA pinctrl in the Devicetree Manager

On Renesas RA and RA0, a peripheral points to a pin node of its own, and the node's groups list the pins in a `psels` property. Each pin is written `RA_PSEL(<function>, <port>, <pin>)`: `RA_PSEL(RA_PSEL_SCI_4, 2, 5)` is SCI4 on P205.

The screenshot uses the EK-RA8M1 board.

## Install the pin data

Renesas publishes which functions each pin of each package offers. The first time you open the chip view on a Renesas board, it asks you to install that data: click **Install** (once). If the installed data has nothing for your chip, the button reads **Update**.

## SCI: pick the mode first

An SCI runs as a UART, an I2C or a SPI, depending on which of its child nodes is enabled: `uart`, `i2c` or `spi`. Set the SCI and the child of the mode you want to `okay` before you route pins: the pin settings and the checks follow that mode.

On the RA SPI peripheral, the clock pin is named RSPCK: the header flags MOSI or MISO without it.

## What Generate writes

When the peripheral has no pin node, the manager creates `<peripheral>_default`. For SCI4 as a UART on P205 and P206:

```dts
&pinctrl {
    sci4_default: sci4_default {
        group1 {
            psels = <RA_PSEL(RA_PSEL_SCI_4, 2, 5)>, <RA_PSEL(RA_PSEL_SCI_4, 2, 6)>;
            drive-strength = "low";
        };
    };
};
```

The settings follow Renesas's own boards:

| Pins | Settings |
| --- | --- |
| IIC | `drive-strength = "medium"` |
| SCI in I2C mode | `drive-open-drain`, `drive-strength = "medium"` |
| ADC, DAC | `renesas,analog-enable` |
| USB, Ethernet, SD card, OSPI, SDRAM, CAN-FD | `drive-strength = "high"` |
| UART, SPI, timers, QSPI | `drive-strength = "low"` |

On RA0, a UART's TX goes in `group1` with `output-enable`, and its RX in `group2`.

## Change pin settings

Open the `pinctrl` node, then its **Pin Groups** tab:

![The new pin node of sci4 and its settings](/img/zw/devicetree-manager-pins-renesas.png)

:::note
The RA pin driver applies only `bias-pull-up`, `drive-open-drain`, `drive-strength` and `renesas,analog-enable`. The binding also accepts `input-enable` and `bias-disable`, but they have no effect, and RA pins have no pull-down.
:::

Functions that Zephyr's pin header has no name for (key interrupts, segment LCD, trace and a few others) are not offered.
