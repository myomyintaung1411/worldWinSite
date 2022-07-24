<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z- w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">线上充值</span>
      <span class="ml-6 text-gray-200 text-sm tracking-wide font-bold">场馆钱包和场馆钱包之间不可以互转</span>
    </div>
    <div class="mt-2 mx-auto h-fit w-full">
      <TabGroup>
        <TabList class="bg-gray-700 shadow-lg flex justify-center sticky top-0">
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">中心钱包</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">虚拟币钱包</div>
          </Tab>
        </TabList>
        <TabPanels class="my-2">
          <TabPanel class="my-2">
            <div class="w-full mx-auto">
              <div v-for="mmn in 2" :key="mmn" class="flex mx-2 my-2 rounded-lg justify-between items-center shadow-lg bg-slate-600 py-2 px-3">
                <div class="flex">
                  <div class="m-1 mr-2 w-16 h-16 relative md:flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                    <img src="http://source.unsplash.com/100x100/?girl" class="rounded-full" />
                  </div>
                  <div class="flex flex-col px-2 justify-center text-gray-100">
                    <p>中心钱包</p>
                    <h3 class="text-xl tracking-wide font-bold">0.00</h3>
                  </div>
                </div>
                <ul>
                  <li class="py-2 px-6 bg-gray-800 hover:bg-gray-900 cursor-pointer text-white rounded-md">Click</li>
                </ul>
              </div>
            </div>
            <div class="px-2 py-2 text-sm font-normal leading-3 text-gray-100">场馆钱包</div>
            <div class="grid grid-cols-3 gap-y-0 gap-3 px-2 mx-2 rounded shadow-lg bg-gray-700">
              <div v-for="mma in 5" :key="mma" class="text-center flex flex-col justify-center items-center rounded-md shadow-lg px-3 py-3 bg-slate-600 my-2">
                <span class="text-sm pt-2 leading-tight text-gray-200">OB体育</span>
                <span class="text-sm pt-2 leading-tight text-gray-200">0.00</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="w-full mx-auto">
              <div v-for="mmn in 2" :key="mmn" class="flex mx-2 my-2 rounded-lg justify-between items-center shadow-lg bg-slate-600 py-2 px-3">
                <div class="flex">
                  <div class="m-1 mr-2 w-16 h-16 relative md:flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                    <img src="http://source.unsplash.com/100x100/?girl" class="rounded-full" />
                  </div>
                  <div class="flex flex-col px-2 justify-center text-gray-100">
                    <p>中心钱包</p>
                    <h3 class="text-xl tracking-wide font-bold">0.00</h3>
                  </div>
                </div>
                <ul>
                  <li class="py-2 px-6 bg-gray-800 hover:bg-gray-900 cursor-pointer text-white rounded-md">Click</li>
                </ul>
              </div>
            </div>
            <div class="w-full mx-auto">
              <div class="h-20 mx-1 my-2">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myWallet/banner@2x.e3f22d118a5d09705365c8aa2beba33f.png?x-oss-process=image/resize,m_fixed,w_1840,h_320/quality,Q_70/format,webp" alt="unknown" class="object-fill w-full h-full" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
  <!-- desktop  -->
  <!-- <div class="w-full hidden md:block h-screen bg-gray-900">
    <div class="flex flex-col justify-center items-center h-full">
      <EmojiSadIcon class="w-52 h-52 text-gray-300" />
      <button class="px-3 py-2 text-gray-200 bg-indigo-500 outline-none hover:bg-indigo-600 shadow-lg rounded-md tracking-wide font-medium" @click="goHome">BackToHome</button>
    </div>
  </div>-->
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ChevronLeftIcon, EmojiSadIcon } from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const router = useRouter();

const goBack = () => {
  router.go(-1);
};

let activeTab = ref(1);

const goHome = () => {
  router.push("/");
};

const innerWidth = ref(window.innerWidth);

const changeWindowSize = () => {
  innerWidth.value = window.innerWidth;
};

watch(
  () => innerWidth.value,
  () => {
    if (innerWidth.value > 768) {
      router.push("/wallet");
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  window.addEventListener("resize", changeWindowSize);
});
</script>

<style  scoped>
</style>