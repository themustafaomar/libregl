export function createGeometry(doesCrossAntimeridian: boolean) {
  const geometry: GeoJSON.Geometry = {
    type: 'LineString',
    coordinates: [[-72.42187, -16.59408], [140.27343, 35.67514]],
  }

  // To draw a line across the 180th meridian,
  // if the longitude of the second point minus
  // the longitude of original (or previous) point is >= 180,
  // subtract 360 from the longitude of the second point.
  // If it is less than 180, add 360 to the second point.
  if (doesCrossAntimeridian) {
    const startLng = geometry.coordinates[0][0]
    const endLng = geometry.coordinates[1][0]

    if (endLng - startLng >= 180) {
      geometry.coordinates[1][0] -= 360
    } else if (endLng - startLng < 180) {
      geometry.coordinates[1][0] += 360
    }
  }

  return geometry
}
