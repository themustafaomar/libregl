export default {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        title: 'Germany',
      },
      geometry: {
        type: 'Point',
        coordinates: [10.4515, 51.1657],
      },
    },
    {
      type: 'Feature',
      properties: {
        title: 'Romania',
      },
      geometry: {
        type: 'Point',
        coordinates: [24.9668, 45.9432],
      },
    },
    {
      type: 'Feature',
      properties: {
        title: 'Switzerland',
      },
      geometry: {
        type: 'Point',
        coordinates: [8.2275, 46.8182],
      },
    },
    {
      type: 'Feature',
      properties: {
        title: 'France',
      },
      geometry: {
        type: 'Point',
        coordinates: [2.2137, 46.2276],
      },
    },
    {
      type: 'Feature',
      properties: {
        title: 'Ukraine',
      },
      geometry: {
        type: 'Point',
        coordinates: [31.1656, 48.3794],
      },
    },
    {
      type: 'Feature',
      properties: {
        title: 'Poland',
      },
      geometry: {
        type: 'Point',
        coordinates: [19.1451, 51.9194],
      },
    },
  ],
} as GeoJSON.FeatureCollection
