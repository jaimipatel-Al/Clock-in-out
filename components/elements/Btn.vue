<script setup lang='ts'>
const props = defineProps(["title"]);
</script>

<template>
  <button
    type="submit"
    class="w-full bg-cyan-800 text-white py-2 rounded-md hover:bg-cyan-600"
  >
    {{ title }}
  </button>
</template>