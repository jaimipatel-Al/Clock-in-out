<script setup lang="ts">
const props = defineProps(["date", "totalTime"]);
</script>

<template>
  <p
    class="flex items-center justify-between px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10 pb-3 sm:pb-4 md:pb-5"
  >
    <span class="text-cyan-600 font-bold sm:text-lg md:text-xl">{{ date }}</span>
    <span class="text-red-600 font-semibold text-xs sm:text-sm md:text-base"
      >Total Spend Time : {{ totalTime }} Hours</span
    >
  </p>
</template>
