<script lang="ts" setup>
import { computed } from 'vue'
import type { Animal } from '~/types'

const props = defineProps<{
  animals: Animal[]
}>()

const animalsSortedByName = computed(() =>
  props.animals.slice().sort((animalA, animalB) =>
    animalA.weight - animalB.weight,
  ),
)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ species, gender, birthdate, weight }, animalIndex) in animalsSortedByName" :key="animalIndex">
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ gender }}</td>
        <td>{{ birthdate }}</td>
        <td>{{ weight }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply table-auto w-full text-left
}
td {
  @apply w-40
}
tr {
  @apply border-b-2
}
tbody tr {
  @apply hover:bg-gray-200
}
</style>
