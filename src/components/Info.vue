<template>
  <div class="md:pt-7 pt-3 sm:py-3 md:py-0 px-2 ">
    <div class="mx-auto w-full lg:max-w-7xl md:max-w-7xl h-full
     shadow-lg rounded-lg flex items-center relative overflow-x-hidden bg-HomecardBg  py-2 md:py-3">
      <div class="px-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      <div class=" text-sm tracking-wide w-full font-bold cursor-pointer overflow-hidden text-white   whitespace-nowrap">
        <span class=" inline-block pl-[100%] animate-marquee">{{marquee}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  marquee: {
    type: String,
    default: '',
  },
});
</script>

<style  scoped>
.animate-marquee:hover {
  -moz-animation-play-state: paused;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
</style>