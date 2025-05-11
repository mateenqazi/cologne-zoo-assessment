<script setup lang="ts">
const { animals } = useAnimals()

</script>

<template>
  <div class="my-10 container mx-auto">
    <h1 class="text-4xl">
      Cologne Zoo
    </h1>
    <div class="my-2">
      <p>
        This is the overview board of the Cologne Zoo. It can be used by zookeepers to get an overview of the animals and their relevant health data.
      </p>
      <p>
        Please contact the zoo admin at <a href="mailto:admin@zoo-cologne.de" class="text-blue-500 underline">admin@zoo-cologne.de</a> for support with the dashboard. Cyber-Attacks from the Duisburg Zoo have become more frequent on the past, so be on the lookout.
      </p>
    </div>
    <div class="mt-6 py-4 border-t border-gray-300">
      <h2 class="text-2xl font-semibold text-gray-700">
        Our (lovely) Animals:
      </h2>
    </div>
    <the-animal-table v-if="animals" :animals="animals" />
  </div>
</template>


<style scoped>
h1 {
  @apply text-4xl font-bold text-center text-gray-800;
}
p {
  @apply text-lg text-gray-600;
}
a {
  @apply text-blue-500 underline;
}
h2 {
  @apply text-2xl font-semibold text-gray-700;
}
</style>
