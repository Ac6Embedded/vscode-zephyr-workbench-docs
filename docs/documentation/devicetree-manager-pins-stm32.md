---
sidebar_label: STM32
description: "STM32 pinctrl in Zephyr with the Devicetree Manager: route pins with ST's pin nodes, and change pull-up, open drain and slew rate per pin."
keywords: [STM32 pinctrl, Zephyr STM32 pins, STM32 pinmux, STM32_PINMUX, STM32 alternate function, STM32 pull-up, STM32 slew-rate, Zephyr Workbench]
image: /img/zw/devicetree-manager-pins-stm32.png
---
# STM32 pinctrl in the Devicetree Manager

On STM32, every pin function has a ready-made pin node in ST's pin file for your chip: `usart3_tx_pd8` is USART3 TX on PD8, alternate function 7. The node also holds the pin settings ST chose for that signal:

```dts
usart3_tx_pd8: usart3_tx_pd8 {
    pinmux = <STM32_PINMUX('D', 8, AF7)>;
    bias-pull-up;
};
```

The screenshot uses the STM32F4 Discovery board (`stm32f4_disco`).

:::note
STM32 F1 is not supported: its pins use remaps, which the chip view doesn't read yet. See [Supported devices](devicetree-manager-support.md).
:::

## Route a pin

Click a pad, then the signal in the Functions card (see [Pin configuration](devicetree-manager-pins.md)). The manager adds the pin node to the peripheral's `pinctrl-0`:

```dts
&usart3 {
    status = "okay";
    pinctrl-0 = <&usart3_tx_pd8 &usart3_rx_pd9>;
    pinctrl-names = "default";
};
```

Timer pins (`CH1`, `CH2N`, ...) go to the timer's `pwm` node, which is where Zephyr expects them (see [PWM](devicetree-manager-pwm.md)).

## Change pin settings

ST's pin files already set what most signals need: a pull-up on a UART TX, open drain and pull-up on I2C, a high slew rate on SPI clocks. To change a pin:

1. Open the peripheral and click the pin in its `pinctrl-0`, for example `&usart2_tx_pa2`.
2. Its pin node opens. Check or uncheck `bias-pull-up`, `bias-pull-down`, `bias-disable`, `drive-push-pull`, `drive-open-drain`, `output-low` or `output-high`, and pick a `slew-rate`.

![The pin node of USART2 TX on PA2](/img/zw/devicetree-manager-pins-stm32.png)

The overlay then overrides that pin node:

```dts
&usart2_tx_pa2 {
    /delete-property/ bias-pull-up;
    bias-pull-down;
};
```

:::note
ST's pin files keep only the pin nodes a build uses. A pin you just routed shows as "(not found)" in `pinctrl-0` until you generate the overlay and rebuild. After the rebuild, you can open it and change its settings.
:::
