---
title: LogoControl
metadata:
  title: LogoControl
  description: The LogoControl component is used to display a logo or attribution on the map, typically for branding or compliance purposes.
---

The *LogoControl* component is used to display a logo or attribution on the map, typically for branding or compliance purposes.

It ensures that the necessary logos or credits are shown on the map interface, which is important when using data or services that require attribution.

**Reference**: [LogoControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/LogoControl)

## Usage

Adding the *LogoControl* to your map ensures proper branding or attribution of the map data source, which is often a requirement when using specific map tiles or services.

The logo can be positioned anywhere on the map inerface using the position prop.

<example id="controls/logo" />

## API

### Props

The *LogoControl* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| position | A position defintion for the control to be placed, can be in one of the corners of the map. When two or more controls are places in the same location they are stacked toward the center of the map. | *Optional* [ControlPosition](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/ControlPosition) |
| compact | If `true`, force a compact logo. If `false`, force the full logo. The default is a responsive logo that collapses when the map is less than 640 pixels wide. | *Optional* `boolean` default is `false` |
