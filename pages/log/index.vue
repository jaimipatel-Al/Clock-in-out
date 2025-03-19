<script setup lang="ts">
import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/solid";
const totalTime = ref("00:08");
</script>

<template>
  <div>
    <div
      class="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-lg"
    >
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-cyan-800">
        Clock In Out
      </h2>
    </div>
    <div class="px-4 sm:px-6 md:px-10">
      <p
        class="flex items-center justify-between px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10 pb-3 sm:pb-4 md:pb-5"
      >
        <span class="text-cyan-600 font-bold sm:text-lg md:text-xl"
          >Mar 12, 2025</span
        >
        <span class="text-red-600 font-semibold text-xs sm:text-sm md:text-base"
          >Total Spend Time : {{ totalTime }} Hours</span
        >
      </p>
      <table
        class="text-center w-full bg-slate-100 text-gray-700 text-sm sm:text-base md:text-lg"
      >
        <tr class="border-b border-gray-300">
          <th class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">In</th>
          <th class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">Out</th>
          <th class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">Time</th>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="flex py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <EllipsisHorizontalCircleIcon class="w-5 sm:w-6 mr-1 sm:mr-2 text-blue-600" /> 4:50
            PM
          </td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">--</td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">00:50</td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="flex py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <CheckCircleIcon class="w-5 sm:w-6 mr-1 sm:mr-2 text-green-600" />4:10 PM
          </td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">4:30 PM</td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">00:20</td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="flex py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <CheckCircleIcon class="w-5 sm:w-6 mr-1 sm:mr-2 text-green-600" />1:00 PM
          </td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">2:30 PM</td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">02:45</td>
        </tr>
      </table>
    </div>
  </div>
</template>
