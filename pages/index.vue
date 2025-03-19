<script setup lang="ts">
import {
  ChevronRightIcon,
  PlayCircleIcon,
  PauseCircleIcon,
} from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const router = useRouter();

const isTask = ref(false);
const addTask = () => {};
</script>

<template>
  <div class="md:flex justify-between md:space-x-10 p-4 sm:p-6 md:p-10">
    <div class="flex-1">
      <div
        class="px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 border border-slate-50 shadow-lg"
      >
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-cyan-800">Task</h2>
        <input
          type="text"
          class="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 my-1 sm:my-1.5 md:my-2 w-full border text-sm sm:text-base md:text-lg outline-cyan-700"
        />
        <div>
          <button
            class="flex items-center bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-500 disabled:text-gray-200 disabled:cursor-not-allowed rounded-lg text-white font-bold px-2 py-1 text-base sm:text-lg"
            @click="addTask()"
          >
            <template v-if="isTask">
              <PlayCircleIcon class="w-8 sm:w-10 cursor-pointer mr-1 sm:mr-2" />
              Start Task
            </template>
            <template v-else>
              <PauseCircleIcon class="w-8 sm:w-10 cursor-pointer mr-1 sm:mr-2" />
              00:30
            </template>
          </button>
        </div>
      </div>
      <div
        class="px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 mt-4 sm:mt-6 md:mt-10 border shadow-sm"
      >
        <h3
          class="pb-1 sm:pb-2 text-cyan-800 flex items-center justify-between border-b-2 border-cyan-700"
        >
          <span class="text-base sm:text-lg font-bold">Task History</span>
          <span
            class="text-xs sm:text-sm cursor-pointer hover:underline"
            @click="router.push('/task')"
            >See All</span
          >
        </h3>
        <ul class="py-2">
          <li class="text-xs sm:text-sm md:text-base py-1.5 sm:py-2 border-b">
            Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS. Beautiful
            hand-crafted SVG icons, by the makers of Tailwind CSS.
          </li>
          <li class="text-xs sm:text-sm md:text-base py-1.5 sm:py-2 border-b">
            Available as basic SVG icons and via first-party React and Vue libraries
          </li>
          <li class="text-xs sm:text-sm md:text-base py-1.5 sm:py-2 border-b">
            Basic Usage First, install @heroicons/react from npm
          </li>
          <li class="text-xs sm:text-sm md:text-base py-1.5 sm:py-2 border-b">
            Heroicons is a collection of MIT
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1">
      <div
        class="px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 mt-4 sm:mt-6 md:mt-0 border shadow-sm"
      >
        <h3
          class="pb-1 sm:pb-2 text-cyan-800 flex items-center justify-between border-b-2 border-cyan-700"
        >
          <span class="text-base sm:text-lg font-bold">Log History</span>
          <span
            class="text-xs sm:text-sm cursor-pointer hover:underline"
            @click="router.push('/log')"
            >See All</span
          >
        </h3>
        <table class="w-full mt-5 text-gray-700 text-xs sm:text-sm md:text-base">
          <tr class="font-bold bg-slate-100">
            <th class="text-start py-2 sm:py-3 px-2 sm:px-3">In</th>
            <th class="text-start py-2 sm:py-3 px-2 sm:px-3">Out</th>
            <th class="text-start py-2 sm:py-3 px-2 sm:px-3">Time</th>
          </tr>
          <tr>
            <td class="flex py-1.5 sm:py-2 px-2 sm:px-3">4:50 PM</td>
            <td class="py-1.5 sm:py-2 px-2 sm:px-3">--</td>
            <td class="py-1.5 sm:py-2 px-2 sm:px-3">00:50</td>
          </tr>
          <tr>
            <td class="flex py-1.5 sm:py-2 px-2 sm:px-3">4:10 PM</td>
            <td class="py-1.5 sm:py-2 px-2 sm:px-3">4:30 PM</td>
            <td class="py-1.5 sm:py-2 px-2 sm:px-3">00:20</td>
          </tr>
          <tr>
            <td class="flex py-1.5 sm:py-2 px-2 sm:px-3">1:00 PM</td>
            <td class="py-1.5 sm:py-2 px-2 sm:px-3">2:30 PM</td>
            <td class="py-1.5 sm:py-2 px-2 sm:px-3">02:45</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
