<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div>
    <ElementsTitle title="Clock In Out History" />

    <div class="p-4 sm:p-6 md:p-10">
      <table class="w-full bg-slate-100 text-gray-700 text-sm sm:text-base md:text-lg">
        <tr class="font-bold border-b border-gray-300">
          <th class="text-start py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">Date</th>
          <th class="text-start py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            Effective hr.
          </th>
          <th class="text-start py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            Gross hr.
          </th>
          <th class="text-start py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5"></th>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="font-medium py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            Mar 12, 2025
          </td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">00:50</td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">00:50</td>
          <td class="w-10 sm:w-12 py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <ChevronRightIcon
              class="w-7 sm:w-10 p-1 sm:p-2 rounded-full text-cyan-500 hover:text-cyan-900 cursor-pointer bg-white hover:bg-slate-300 shadow-xl"
              @click="router.push('/log')"
            />
          </td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="font-medium py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            Mar 11, 2025
          </td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">00:20</td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">00:20</td>
          <td class="w-10 sm:w-12 py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <ChevronRightIcon
              class="w-7 sm:w-10 p-1 sm:p-2 rounded-full text-cyan-500 hover:text-cyan-900 cursor-pointer bg-white hover:bg-slate-300 shadow-xl"
              @click="router.push('/log')"
            />
          </td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="font-medium py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            Mar 10, 2025
          </td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">00:20</td>
          <td class="py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">02:45</td>
          <td class="w-10 sm:w-12 py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-5">
            <ChevronRightIcon
              class="w-7 sm:w-10 p-1 sm:p-2 rounded-full text-cyan-500 hover:text-cyan-900 cursor-pointer bg-white hover:bg-slate-300 shadow-xl"
              @click="router.push('/log')"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
