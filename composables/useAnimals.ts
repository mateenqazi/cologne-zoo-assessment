import type { Animal } from '~/types'

export default () => {
  const animals = ref<Animal[]>([])

  const fetch = async (): Promise<Animal[]> => {
    animals.value = await $fetch('/api/animals')
    return animals.value
  }

  onMounted(fetch)

  return {
    animals,
    fetch,
  }
}
