<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-50 w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">取款</span>
    </div>
    <div class="px-2 bg-slate-500 text-center">
      <span class="px-2 font-bold text-gray-50 text-sm tracking-wide">通常您的提款只需3 - 15分钟即可到账，若超过30分钟仍未到账，请联系在线客服核查</span>
    </div>
    <!--  -->
    <div class="mt-2 mx-auto h-fit w-full">
      <TabGroup>
        <TabList class="bg-gray-700 shadow-lg flex justify-center sticky top-0">
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">极速取款</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">USDT提币</div>
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
                    <p>场馆钱包</p>
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
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>

  <!-- desktop  -->
  <div class="w-full hidden md:block h-screen bg-gray-900">
    <div class="flex flex-col justify-center items-center h-full">
      <EmojiSadIcon class="w-52 h-52 text-gray-300" />
      <button class="px-3 py-2 text-gray-200 bg-indigo-500 outline-none hover:bg-indigo-600 shadow-lg rounded-md tracking-wide font-medium" @click="goHome">BackToHome</button>
    </div>
  </div>

</template>

<script setup>
import { ChevronLeftIcon, EmojiSadIcon } from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();

const goBack = () => {
  router.go(-1);
};
const goHome = () => {
  router.push("/");
};

onMounted(() => {
  if (window.innerWidth > 768) {
    router.push("/");
  }
});
</script>

<style lang="scss" scoped>
</style>