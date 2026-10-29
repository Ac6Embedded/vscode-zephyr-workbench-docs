---
sidebar_label: PWM
description: "Set up PWM outputs in Zephyr with the Devicetree Manager: pick the pin, set period and polarity, and read it from your app with PWM_DT_SPEC_GET."
keywords: [Zephyr PWM, PWM devicetree, PWM overlay, PWM pinctrl, pwms property, pwm-leds, PWM period, PWM_DT_SPEC_GET, pwm_dt_spec, timer channel, Zephyr Workbench]
image: /img/zw/devicetree-manager-pwm-table.png
---
# PWM outputs in the Devicetree Manager

A Zephyr PWM output is a pin driven by a timer channel. A node uses it through its `pwms` property: the PWM controller, the channel, the period and the flags. Here is an LED of the STM32F4 Discovery:

```dts
red_pwm_led: red_pwm_led {
    pwms = <&pwm4 3 PWM_USEC(100) PWM_POLARITY_NORMAL>;
};
```

The Devicetree Manager lets you pick the pin by name and writes the rest to your devicetree overlay. The screenshots use the STM32F4 Discovery board (`stm32f4_disco`). The steps are the same on the other [supported vendors](devicetree-manager.md).

## The pwms table

Each `pwms` property opens as a table, one row per output:

1. **Pin**: pick the pin by name. Each pin shows the timer channel it drives, for example `PD14 · tim4 CH3`. Free pins come first.
2. **Period**: a number and a unit (ms, µs, ns, s, Hz or kHz). The line under it shows the period and the frequency, for example "100 µs (10 kHz)". Changing the unit keeps the period.
3. **Polarity**: "Normal" or "Inverted".
4. **✕** removes the output. **+ Add pin** adds one.

![The pwms table of a PWM LED](/img/zw/devicetree-manager-pwm-table.png)

You never type the channel number: the manager writes it from the pin, with each vendor's numbering. Picking a pin also stages what the output needs:

- The pin, routed to the timer.
- The timer, turned on.
- A label for the timer's PWM node when the board has none (for example `pwm3`), so the `pwms` entry can point to it.
- On ESP32 LEDC, the channel node the driver needs.

Picking the previous pin again takes all of it back.

## The Outputs tab

Open the PWM controller (click its chip in the table, for example `&pwm4`), then its **Outputs** tab. Each channel shows its pin, the nodes that use it with their period, and **Use in app**. "+ Route a pin…" routes one more of its pins.

![The Outputs tab of pwm4](/img/zw/devicetree-manager-pwm-outputs.png)

## Read the output in your application

**Use in app** adds the output to the `pwms` property of `zephyr,user`. Your code reads it by its position there, as the button's tooltip shows:

```c
static const struct pwm_dt_spec pwm_output =
    PWM_DT_SPEC_GET_BY_IDX(DT_PATH(zephyr_user), 0);
```

## What the manager checks

The header flags:

- An output on a disabled controller.
- Channel 0 on an STM32 timer: its channels start at 1.
- A channel with no pin routed. The message names the pins that can carry it.
- Two periods on one timer. Most timers share one period across their channels, and the last one set wins.
- An STM32 complementary pin (`CH1N`) without its flag, or the flag without the pin.
- An ESP32 LEDC channel without its channel node.
- `pwm-names` in `zephyr,user` that do not match `pwms` one for one.

## Write the overlay

Click "Generate" to write your changes to the overlay, then rebuild the application. The overlay includes the header that defines `PWM_USEC` and the other names it uses. See [Generate the overlay](devicetree-manager.md#generate-the-overlay).
