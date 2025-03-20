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
    <ElementsTitle title="Task Time Log">
      <ElementsCalendar />
    </ElementsTitle>

    <div class="px-4 sm:px-6 md:px-10">
      <ElementsSubTitle date="Mar 12, 2025" :totalTime="totalTime" />

      <table
        class="w-full bg-slate-100 text-gray-700 text-sm sm:text-base md:text-lg"
      >
        <tr class="font-bold border-b border-gray-300">
          <th class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 text-start">
            Task
          </th>
          <th
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 text-start hidden sm:table-cell"
          >
            Time
          </th>
          <th
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 text-start hidden sm:table-cell"
          >
            Duration
          </th>
          <th class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 text-start">
            Action
          </th>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            The best to-do list app on the market
            <p class="block sm:hidden text-xs text-gray-500">5:55 PM - --</p>
            <p class="block sm:hidden text-xs text-gray-500">00:50</p>
          </td>
          <td
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 hidden sm:table-cell"
          >
            5:55 PM - --
          </td>
          <td
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 hidden sm:table-cell"
          >
            00:50
          </td>
          <td class="flex py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <StopCircleIcon
              class="w-5 sm:w-6 mr-1 sm:mr-2 text-blue-600 cursor-pointer"
            />
            <TrashIcon
              class="w-5 sm:w-6 mr-1 sm:mr-2 text-red-600 cursor-pointer"
            />
          </td>
        </tr>
        <tr class="border-b border-gray-300">
          <td
            v-if="isInput"
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5"
          >
            <input
              type="text"
              class="border px-2 py-1 border-cyan-600 outline-cyan-800"
            />
          </td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5" v-else>
            Simple, straightforward, and super powerful
            <p class="block sm:hidden text-xs text-gray-500">
              4:30 PM - 5:30 PM
            </p>
            <p class="block sm:hidden text-xs text-gray-500">00:20</p>
          </td>
          <td
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 hidden sm:table-cell"
          >
            4:30 PM - 5:30 PM
          </td>
          <td
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 hidden sm:table-cell"
          >
            00:20
          </td>
          <td class="flex py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <PencilSquareIcon
              class="w-5 sm:w-6 mr-1 sm:mr-2 text-green-600 cursor-pointer"
              @click="isInput = !isInput"
            />
            <TrashIcon
              class="w-5 sm:w-6 mr-1 sm:mr-2 text-red-600 cursor-pointer"
            />
          </td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            Nothing short of stellar
            <p class="block sm:hidden text-xs text-gray-500">
              2:30 PM - 3:43 PM
            </p>
            <p class="block sm:hidden text-xs text-gray-500">02:45</p>
          </td>
          <td
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 hidden sm:table-cell"
          >
            2:30 PM - 3:43 PM
          </td>
          <td
            class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5 hidden sm:table-cell"
          >
            02:45
          </td>
          <td class="flex py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <PencilSquareIcon
              class="w-5 sm:w-6 mr-1 sm:mr-2 text-green-600 cursor-pointer"
            />
            <TrashIcon
              class="w-5 sm:w-6 mr-1 sm:mr-2 text-red-600 cursor-pointer"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>