<script setup lang="ts">
import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  StopCircleIcon,
} from "@heroicons/vue/24/solid";

const totalTime = ref("00:08");
const isInput = ref(false);
</script>

<template>
  <div>
    <div class="flex items-center justify-between px-10 py-5 shadow-lg">
      <h2 class="text-2xl font-bold text-cyan-800">Task Time Log</h2>
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
          <td>Task</td>
          <td>Time</td>
          <td>Duration</td>
          <td>Action</td>
        </tr>
        <tr>
          <td>The best to-do list app on the market</td>

          <td>5:55 PM - --</td>
          <td>00:50</td>
          <td class="flex">
            <StopCircleIcon class="w-6 mr-2 text-blue-600 cursor-pointer" />
            <TrashIcon class="w-6 mr-2 text-red-600 cursor-pointer" />
          </td>
        </tr>
        <tr>
          <td v-if="isInput">
            <input
              type="text"
              class="border px-2 py-1 border-cyan-600 outline-cyan-800"
            />
          </td>
          <td v-else>Simple, straightforward, and super powerful</td>
          <td>4:30 PM - 5:30 PM</td>
          <td>00:20</td>
          <td class="flex">
            <PencilSquareIcon
              class="w-6 mr-2 text-green-600 cursor-pointer"
              @click="isInput = !isInput"
            />
            <TrashIcon class="w-6 mr-2 text-red-600 cursor-pointer" />
          </td>
        </tr>
        <tr>
          <td>Nothing short of stellar</td>
          <td>2:30 PM - 3:43 PM</td>
          <td>02:45</td>
          <td class="flex">
            <PencilSquareIcon class="w-6 mr-2 text-green-600 cursor-pointer" />
            <TrashIcon class="w-6 mr-2 text-red-600 cursor-pointer" />
          </td>
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
