---
title: Topics
metadata:
  title: Topics
  description: The Topics section provides in-depth insights and practical tips for developers working with libregl.
---

The Topics section provides in-depth insights and practical tips for developers working with LibreGL.

## Layer exposes

Each layer provides a variety of useful methods and properties, allowing for greater control and customization.

Below is a list of the available methods exposed by the layers.

```markup
<CircleLayer ref="circleLayer" />

<button @click="onEvent">
...
</button>

<script>
import { useTemplateRef } from 'vue'

const circleLayerRef = useTemplateRef('circleLayer')

const onEvent = () => {
  // Gets the id.
  console.log(circleLayerRef.value.getId())

  // Gets the layer instance.
  console.log(circleLayerRef.value.getLayer())

  // Sets the layout option.
  circleLayerRef.value.layout(...)

  // Sets the paint option.
  circleLayerRef.value.paint(...)

  // Hides the layer.
  circleLayerRef.value.hide()

  // Shows the layer option.
  circleLayerRef.value.show()

  // Toggles visibility.
  circleLayerRef.value.toggle()
}
</script>
```

## Layer Id

In LibreGL, while MapLibre typically requires an id for each layer, the */Layer components automatically generate a unique ID if none is provided.

This allows for quick and easy setup without needing to specify an id each time.

```markup
<!-- Explicitly set ID. -->
<LineLayer id="lines" />

<!-- Automatically generated ID. -->
<LineLayer />

<script>
// If you need to access the auto-generated ID for a specific layer,
// you can retrieve it programmatically.

import { useTemplateRef } from 'vue'

const lineLayer = useTemplateRef('lineLayer')

const getId = () => {
  lineLayer.value.getId()
}
</script>
```

## layers without source

In LibreGL, layers can be used without a parent source component by utilizing the source prop directly in the layer.

This approach offers flexibility when you need to manage sources and layers independently.

Instead of always nesting layers within a source component, you can define the source directly in the layer itself, allowing for cleaner, more modular code.

```markup
<CircleLayer
  :source="{
    'type': 'geojson',
    'data': YourGeojsonData,
  }"
  :paint="{
    'circle-color': '#f00',
    'circle-radius': 5,
  }"
></CircleLayer>
```
