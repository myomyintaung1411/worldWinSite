<template>
  <div class="md:pt-7 pt-3 sm:py-3 md:py-0 px-2">
  <section class="text-gray-200 body-font pb-3">
    <div class="container px-5 py-10 mx-auto max-w-7xl shadow-lg rounded-lg bg-HomecardBg">
      <div class="flex flex-wrap w-full mb-4 p-4">
        <div class="w-full mb-6 lg:mb-0">
          <h1 class="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-50">{{t('grid_service')}}</h1>
          <div class="h-1 w-20 bg-primary rounded"></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 sm:w-1/2 p-4 hover:translate-y-2 transition duration-300">
          <div class="bg-slate-700 px-6 py-6 flex flex-col items-center rounded-lg cursor-pointer">
            <img class="md:h-20 sm:h-24 xs:h-24 h-24 rounded w-fit object-cover object-center mb-6"  draggable="false"
            src="@/assets/404/bb02b.png"
             alt="Image Size 720x400" />
            <h2 class="text-lg text-center text-gray-300 font-medium title-font mb-4">{{t('game_exp')}}</h2>
            <p class="leading-relaxed text-base mb-6">{{t('game_exp_t')}}</p>
          </div>
        </div>
        <div class="xl:w-1/4 sm:w-1/2 p-4 hover:translate-y-2 transition duration-300">
          <div class="bg-slate-700 p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <img class="md:h-20 sm:h-24 xs:h-24 h-24 rounded w-fit object-cover object-center mb-6" src="@/assets/404/bb01b.png" alt="Image Size 720x400" />
            <h2 class="text-lg text-center text-gray-300 font-medium title-font mb-4">{{t('exclu')}}</h2>
            <p class="leading-relaxed text-base">{{t('exclue_t')}}</p>
          </div>
        </div>
        <div class="xl:w-1/4 sm:w-1/2 p-4 hover:translate-y-2 transition duration-300">
          <div class="bg-slate-700 p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <img class="md:h-20 sm:h-24 xs:h-24 h-24 rounded w-fit object-cover object-center mb-6" draggable="false" src="@/assets/404/bb03b.png" alt="Image Size 720x400" />
            <h2 class="text-lg text-center text-gray-300 font-medium title-font mb-4">{{t('tech')}}</h2>
            <p class="leading-relaxed text-base">{{t('tech_t')}}</p>
          </div>
        </div>
        <div class="xl:w-1/4 sm:w-1/2 p-4 hover:translate-y-2 transition duration-300">
          <div class="bg-slate-700 p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <img class="md:h-20 sm:h-24 xs:h-24 h-24 rounded w-fit object-cover object-center mb-6" draggable="false" src="@/assets/404/bb04b.png" alt="Image Size 720x400" />
            <h2 class="text-lg text-center text-gray-300 font-medium title-font mb-4">{{t('l_')}}</h2>
            <p class="leading-relaxed text-base">{{t('lasted_')}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n/index";
const { t } = useI18n();
</script>

<style  scoped>

</style>