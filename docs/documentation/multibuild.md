---
sidebar_position: 8
---
# Multibuild

Multibuild allows you to create multiple build configurations for your application. For instance, you can have build configurations on different
target boards, different project configuration and device tree overlays.

To add a build configuration, right-click on the application > Add multibuild. Then enter a name for the build configuration and select the target board.

![Multibuild](/img/zw/multibuild/zw_add_multibuild.gif)

The **APPLICATIONS** view is updated to display the list of build configurations. Every settings are now under the build configuration.
The default build configuration is named `primary`. You can switch between configurations by set it active. The active build configuration is shown with a tick icon. All the global commands (build, menuconfig...) are now specific to the active configuration.