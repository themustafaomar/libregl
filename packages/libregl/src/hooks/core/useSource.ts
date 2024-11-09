import { inject } from 'vue'
import { SourceSpecification } from 'maplibre-gl'
import { sourceKey } from '../../types'

export function useSource(source?: SourceSpecification | string) {
  const sourceId = inject(sourceKey, null)
  if (!source && sourceId === null) {
    throw new Error(
      'Missing a parent <MlSource> component, are you sure you are inside a <MlSource>.'
    )
  }
  return source || sourceId
}
