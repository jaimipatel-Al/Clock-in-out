<script setup lang="ts">
import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/solid";
const totalTime = ref("00:08");
</script>

<template>
  <div>
    <div class="flex items-center justify-between px-10 py-5 shadow-lg">
      <h2 class="text-2xl font-bold text-cyan-800">Clock In Out</h2>
    </div>
    <div class="px-10">
      <p class="flex justify-between px-10 pt-10 pb-5">
        <span class="text-cyan-600 font-bold text-xl">Mar 12, 2025</span>
        <span class="text-red-600 font-semibold text-base"
          >Total Spend Time : {{ totalTime }} Hours</span
        >
      </p>
      <table class="w-full bg-slate-100 text-gray-700 text-lg">
        <tr class="font-bold">
          <td>In</td>
          <td>Out</td>
          <td>Time</td>
        </tr>
        <tr>
          <td class="flex">
            <EllipsisHorizontalCircleIcon class="w-6 mr-2 text-blue-600" /> 4:50
            PM
          </td>
          <td>--</td>
          <td>00:50</td>
        </tr>
        <tr>
          <td class="flex">
            <CheckCircleIcon class="w-6 mr-2 text-green-600" />4:10 PM
          </td>
          <td>4:30 PM</td>
          <td>00:20</td>
        </tr>
        <tr>
          <td class="flex">
            <CheckCircleIcon class="w-6 mr-2 text-green-600" />1:00 PM
          </td>
          <td>2:30 PM</td>
          <td>02:45</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
table tr {
  border-bottom: 1px solid #ccc;
}
table tr td {
  padding: 10px 40px;
}
</style>
