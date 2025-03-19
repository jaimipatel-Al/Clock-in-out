<script setup lang='ts'>
import imageUrl from "@/assets/images/clock.png";

const props = defineProps(["title"]);
</script>

<template>
  <div>
    <h1
      class="text-4xl font-extrabold text-gray-700 cursor-pointer flex items-center justify-center bg-slate-100"
    >
      <img :src="imageUrl" alt="Logo" class="w-12" />
      Our <span class="text-cyan-800 underline">HRMS</span>
    </h1>
    <h2 class="text-2xl text-center font-semibold my-4 text-gray-700">
      {{ title }}
    </h2>
  </div>
</template>