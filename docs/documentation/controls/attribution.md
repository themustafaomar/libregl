---
title: AttributionControl
metadata:
  title: AttributionControl
  description: The AttributionControl provides a way to display attribution information for the map's data sources.
---

The *AttributionControl* provides a way to display attribution information for the map's data sources.

This control is essential for properly crediting the map providers and adhering to licensing requirements.

The *AttributionControl* appears as a small text box, typically located in the bottom-right corner of the map, listing the sources of the map data.

**Reference**: [AttributionControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/AttributionControl)

## Usage

The *AttributionControl* component is easy to add to your map and automatically generates the necessary attributions based on the data sources you use.

You can also customize its position and toggle whether users can collapse the control.

<example id="controls/attribution" />

## API

### Props

The *AttributionControl* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| compact | If true, the attribution control will always collapse when moving the map. If false, force the expanded attribution control. The default is a responsive attribution that collapses when the user moves the map on maps less than 640 pixels wide. Attribution should not be collapsed if it can comfortably fit on the map. compact should only be used to modify default attribution when map size makes it impossible to fit default attribution and when the automatic compact resizing for default settings are not sufficient. | *Optional* `boolean` default is `true` |
| customAttribution | Attributions to show in addition to any other attributions. | *Optional* `string \| string[]` |
