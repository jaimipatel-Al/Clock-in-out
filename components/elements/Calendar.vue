<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import FlatPickr from "vue-flatpickr-component"; // ✅ Import the component
import "flatpickr/dist/flatpickr.css";

const selectedDate = ref(new Date());

const nextDay = () => {
  selectedDate.value = new Date(selectedDate.value);
  selectedDate.value.setDate(selectedDate.value.getDate() + 1);
};

const prevDay = () => {
  selectedDate.value = new Date(selectedDate.value);
  selectedDate.value.setDate(selectedDate.value.getDate() - 1);
};

const config = ref({
  dateFormat: "Y-m-d",
});
</script>

<template>
  <div class="flex items-center space-x-2">
    <ChevronLeftIcon
      class="w-6 sm:w-8 md:w-10 p-1 sm:p-2 bg-slate-200 hover:bg-slate-300 text-gray-800 cursor-pointer rounded-full"
      @click="prevDay"
    />

    <FlatPickr
      v-model="selectedDate"
      :config="config"
      class="p-2 border border-slate-300 rounded w-40"
    />

    <ChevronRightIcon
      class="w-6 sm:w-8 md:w-10 p-1 sm:p-2 bg-slate-200 hover:bg-slate-300 text-gray-800 cursor-pointer rounded-full"
      @click="nextDay"
    />
  </div>
</template>
