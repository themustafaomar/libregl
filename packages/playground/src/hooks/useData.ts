import { onMounted, ref, shallowRef } from 'vue'

export function useData<T>(endpoint: string) {
  const data = shallowRef<T>()
  const isFetching = ref(true)
  onMounted(async () => {
    const response = await fetch(endpoint, {})
    data.value = await response.json()
    isFetching.value = false
  })

  const refetch = async (newUrl: string = endpoint) => {
    isFetching.value = true
    const response = await fetch(newUrl, {})
    data.value = await response.json()
    isFetching.value = false
  }

  return { data, refetch, isFetching }
}
