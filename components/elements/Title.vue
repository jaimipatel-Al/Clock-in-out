<script setup lang="ts">
const props = defineProps(["title"]);
</script>

<template>
  <div
    class="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-lg"
  >
    <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-cyan-800">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
