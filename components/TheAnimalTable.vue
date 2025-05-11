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
      <tr class="bg-green-200 text-center border-4">
        <th class="border-x-4">Index</th>
        <th class="border-x-4">Species</th>
        <th class="border-x-4">Name</th>
        <th class="border-x-4">Gender</th>
        <th class="border-x-4">Age (yrs)</th>
        <th class="border-x-4">Weight (kg)</th>
        <th class="border-x-4">Height (m)</th>
        <th class="border-x-4">Favourite Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ species,name, gender, birthdate, weight, height, favouriteFruit }, animalIndex) in animalsSortedByName" :key="animalIndex"  class="hover:bg-gray-200 hover:text-green-800 hover:text-green-800 bg-gray-100 capitalize text-center border-4">
        <td class="cursor-pointer">{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ useCalculateAgeInYears(birthdate) }}</td>
        <td>{{ weight }}</td>
        <td>{{ height }}</td>
         <td>{{ favouriteFruit }}</td>
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
