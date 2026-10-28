---
sidebar_label: I2C
description: "Set up an I2C bus in Zephyr with the Devicetree Manager: SCL and SDA pins, bus speed and the devices on the bus, written to a devicetree overlay."
keywords: [Zephyr I2C, I2C devicetree, I2C overlay, I2C pinctrl, SCL SDA pins, I2C clock-frequency, I2C sensor node, Zephyr Workbench]
image: /img/zw/devicetree-manager-i2c-pins.png
---
# I2C in the Devicetree Manager

A Zephyr I2C bus is a controller node with two pins, SCL (clock) and SDA (data), plus one child node per device on the bus. The Devicetree Manager sets up the controller, checks its pins and writes the result to your devicetree overlay.

The screenshots use the STM32F4 Discovery board (`stm32f4_disco`). The steps are the same on the other [supported vendors](devicetree-manager.md).

## Set up the controller

1. Select the controller in the Device Tree list, for example `i2c2`.
2. If its `status` is `disabled`, set it to `okay`.
3. Type the controller in the "Find feature" box (`i2c2`). The pads that can carry its signals light up on the chip.
4. Click a pad, then click SCL in the Functions card. Do the same for SDA. Until both are set, the header shows an issue: "i2c2 validation error: SDA signal is missing."
5. Set the bus speed in `clock-frequency`, in Hz: `100000` (standard mode), `400000` (fast mode) or `1000000` (fast mode plus).

![i2c2 with SCL on PB10: the header says SDA is missing](/img/zw/devicetree-manager-i2c-pins.png)

## Devices on the bus

Each device on the bus is a child node of the controller, and its `reg` is its address on the bus. Open the controller's Children tab to edit them.

![The audio codec on i2c1, in the Children tab](/img/zw/devicetree-manager-i2c-devices.png)

The Children tab lists the devices the board or your overlay already puts on the bus. To add a device, write its node in the overlay, outside the generated block, then rebuild:

```dts
&i2c1 {
    temp_sensor: tmp112@48 {
        compatible = "ti,tmp112";
        reg = <0x48>;
    };
};
```

## Write the overlay

Click "Generate" to write your changes to the overlay, then rebuild the application. See [Generate the overlay](devicetree-manager.md#generate-the-overlay).
