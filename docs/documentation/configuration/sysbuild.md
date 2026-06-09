---
sidebar_position: 5
---

# Sysbuild

To enable or disable Sysbuild for your application, right-click on the application > Configure > Sysbuild > Enable (or Disable).

![Enable or Disable Sysbuild](/img/zw/configuration/zw_enable_disable_sysbuild.png)

Enabling Sysbuild activates the Zephyr system build, allowing the application to be built with multiple CMake projects in a single invocation. This is particularly useful when working with MCUboot, multi-image builds, or additional subsystems.

Disabling it will return the application to a single-image build workflow.

:::tip
Only enable Sysbuild if your project structure requires it (e.g., multi-image setups or MCUboot integration).
:::
