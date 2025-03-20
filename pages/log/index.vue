<script setup lang="ts">
import { CheckCircleIcon, EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/solid";
const totalTime = ref("00:08");
</script>

<template>
  <div>
    <ElementsTitle title="Clock In Out">
      <ElementsCalendar />
    </ElementsTitle>

    <div class="px-4 sm:px-6 md:px-10">
      <ElementsSubTitle date="Mar 12, 2025" :totalTime="totalTime" />

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
            <EllipsisHorizontalCircleIcon class="w-5 sm:w-6 mr-1 sm:mr-2 text-blue-600" />
            4:50 PM
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
