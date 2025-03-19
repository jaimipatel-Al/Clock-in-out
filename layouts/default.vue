<script setup>
import {
  ArrowLeftStartOnRectangleIcon,
  PencilSquareIcon,
  PlayCircleIcon,
  StopCircleIcon,
  PauseCircleIcon,
  ArrowPathIcon,
  Bars3Icon,
} from "@heroicons/vue/24/solid";
import { ClockIcon, HomeIcon, BookOpenIcon } from "@heroicons/vue/24/outline";

const isDayIn = ref(false);
const isClockIn = ref(false);
const dayInLoading = ref(false);
const clockInLoading = ref(false);

const dayIn = () => {
  dayInLoading.value = true;
  setTimeout(() => {
    isDayIn.value = true;
    dayInLoading.value = false;
  }, 500);
};
const clockIn = () => {
  clockInLoading.value = true;
  setTimeout(() => {
    isClockIn.value = true;
    clockInLoading.value = false;
  }, 500);
};

const openSidebar = () => {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("active");
};

const closeSidebar = () => {
  setTimeout(() => {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");
  }, 200);
};
</script>

<template>
  <div class="flex">
    <div class="block sm:hidden overlay" id="overlay" @click="closeSidebar()"></div>

    <LayoutsMenu
      class="w-56 md:w-64 lg:w-72 bg-slate-100 h-screen flex-none shadow-xl hidden md:block"
    />

    <LayoutsMenu
      class="sidebar bg-slate-100 h-screen shadow-xl"
      style="max-width: 100vw"
      @click="closeSidebar()"
      id="sidebar"
    />
    <div class="w-full">
      <div
        class="flex justify-between bg-orange-200 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5"
      >
        <Bars3Icon
          class="w-8 sm:w-10 cursor-pointer block md:hidden mr-0 sm:mr-10"
          @click="openSidebar()"
        />
        <div
          class="w-full text-xs sm:text-sm md:text-base flex flex-col sm:flex-row justify-between items-end sm:items-center"
        >
          <div class="flex items-center">
            <span class="text-cyan-800 font-bold">Day In/Out </span>
            <div
              v-if="isDayIn && !dayInLoading"
              class="text-gray-800 flex items-center border bg-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-md mx-3 font-semibold"
            >
              <StopCircleIcon class="w-8 sm:w-10 cursor-pointer mr-1 sm:mr-2" />
              08:30
            </div>
            <ArrowPathIcon
              v-else-if="dayInLoading"
              class="w-8 sm:w-10 mx-2 sm:mx-4 animate-spin"
            />
            <PlayCircleIcon
              v-else
              class="w-8 sm:w-10 cursor-pointer mx-1 sm:mx-2"
              @click="dayIn()"
            />
          </div>
          <div class="flex items-center mt-1 sm:mt-0">
            <span class="text-cyan-800 font-bold">Clock In/Out</span>
            <div
              v-if="isClockIn && !clockInLoading"
              class="text-gray-800 flex items-center border bg-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-md mx-3 font-semibold"
            >
              <PauseCircleIcon class="w-8 sm:w-10 cursor-pointer mr-1 sm:mr-2" />
              08:30
            </div>
            <ArrowPathIcon
              v-else-if="clockInLoading"
              class="w-8 sm:w-10 mx-2 sm:mx-4 animate-spin"
            />
            <PlayCircleIcon
              v-else
              class="w-8 sm:w-10 cursor-pointer mx-1 sm:mx-2"
              @click="clockIn()"
            />
            <span class="text-green-800 font-bold">Total Time : 04:30</span>
          </div>
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -200px;
  width: 200px;
  transition: 0.3s;
}

.sidebar.open {
  left: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}

.overlay.active {
  display: block;
}
</style>
