<script setup>
import { ArrowLeftStartOnRectangleIcon, PencilSquareIcon } from "@heroicons/vue/24/solid";
import { ClockIcon, HomeIcon, BookOpenIcon } from "@heroicons/vue/24/outline";
import imageUrl from "@/assets/images/clock.png";

const logout = () => {};
</script>

<template>
  <div>
    <h1
      class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-700 cursor-pointer flex items-center justify-center py-6 md:py-10"
    >
      <img :src="imageUrl" alt="Logo" class="w-10 md:w-12" />
      Our <span class="text-cyan-800 underline">HRMS</span>
    </h1>
    <div class="text-base sm:text-lg md:text-xl font-semibold">
      <NuxtLink
        to="/"
        class="px-3 md:px-5 py-3 md:py-4 cursor-pointer flex hover:text-cyan-600 hover:bg-white"
      >
        <HomeIcon class="mr-1 sm:mr-2 w-6 md:w-8" /> Home
      </NuxtLink>
      <NuxtLink
        to="/log-history"
        class="px-3 md:px-5 py-3 md:py-4 cursor-pointer flex hover:text-cyan-600 hover:bg-white"
      >
        <BookOpenIcon class="mr-1 sm:mr-2 w-6 md:w-8" /> History </NuxtLink
      ><NuxtLink
        to="/log"
        class="px-3 md:px-5 py-3 md:py-4 cursor-pointer flex hover:text-cyan-600 hover:bg-white"
      >
        <ClockIcon class="mr-1 sm:mr-2 w-6 md:w-8" /> Logs
      </NuxtLink>
      <NuxtLink
        to="/task"
        class="px-3 md:px-5 py-3 md:py-4 cursor-pointer flex hover:text-cyan-600 hover:bg-white"
      >
        <PencilSquareIcon class="mr-1 sm:mr-2 w-6 md:w-8" /> Task
      </NuxtLink>
      <NuxtLink
        @click="logout()"
        class="px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 cursor-pointer flex hover:text-cyan-600 hover:bg-white"
      >
        <ArrowLeftStartOnRectangleIcon class="mr-1 sm:mr-2 w-6 md:w-8" />
        Logout
      </NuxtLink>
    </div>
  </div>
</template>
