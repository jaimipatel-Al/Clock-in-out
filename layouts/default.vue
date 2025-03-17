<script setup>
import { ArrowLeftStartOnRectangleIcon, PencilSquareIcon } from "@heroicons/vue/24/solid";
import { ClockIcon, HomeIcon } from "@heroicons/vue/24/outline";
import imageUrl from "@/assets/images/clock.png";

const logout = () => {};
</script>

<template>
  <div>
    <div class="flex justify-between items-center p-8 bg-slate-100">
      <h1 class="text-4xl font-extrabold text-gray-700 cursor-pointer flex items-center">
        <img :src="imageUrl" alt="Logo" class="w-12" />
        Our <span class="text-cyan-800 underline">HRMS</span>
      </h1>
      <div class="flex justify-end text-xl font-semibold">
        <NuxtLink
          to="/"
          class="px-2 sm:px-3 md:px-4 lg:px-5 cursor-pointer flex hover:text-cyan-600"
        >
          <HomeIcon class="w-8" /> Home </NuxtLink
        ><NuxtLink
          to="/log"
          class="px-2 sm:px-3 md:px-4 lg:px-5 cursor-pointer flex hover:text-cyan-600"
        >
          <ClockIcon class="w-8" /> Logs
        </NuxtLink>
        <NuxtLink
          to="/task"
          class="px-2 sm:px-3 md:px-4 lg:px-5 cursor-pointer flex hover:text-cyan-600"
        >
          <PencilSquareIcon class="w-8" /> Task
        </NuxtLink>
        <NuxtLink
          @click="logout()"
          class="px-2 sm:px-3 md:px-4 lg:px-5 cursor-pointer flex hover:text-cyan-600"
        >
          <ArrowLeftStartOnRectangleIcon class="w-8" /> Logout
        </NuxtLink>
      </div>
    </div>
    <slot />
  </div>
</template>
