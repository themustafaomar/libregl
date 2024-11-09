---
title: BackgroundLayer
metadata:
  title: BackgroundLayer
  description: The BackgroundLayer component is used to style the base background of a map.
---

The *BackgroundLayer* component is used to style the base background of a map.

Unlike other layers that display data like lines or points, the *BackgroundLayer* provides a solid or patterned fill that can be customized with paint properties such as color, opacity, and pattern.

This layer is useful for setting the map's base appearance, which serves as the visual backdrop for all other layers.

**Reference**: [Background](https://maplibre.org/maplibre-style-spec/layers/#background)

## Usage

The *BackgroundLayer* doesn’t require a data source and is typically added to control the visual background of the map, here is an example using an image pattern.

<example id="layers/background" />

## API

### Props

The *BackgroundLayer* component's props.

:::info
While an id is typically required for MapLibre layers, the *BackgroundLayer* component automatically generates a unique id if none is provided.
:::

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| id    | The id for the source. Must not be used by any existing source.                                                                            | *Optional* `string` |
| metadata | Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'. | *Optional* |
| minzoom | The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| maxzoom | The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| layout | Layout properties for the layer. | *Optional* [BackgroundLayerSpecification['layout']](https://maplibre.org/maplibre-style-spec/layers/#background) |
| paint | Default paint properties for this layer. | *Optional* [BackgroundLayerSpecification['paint']](https://maplibre.org/maplibre-style-spec/layers/#background-color) |
