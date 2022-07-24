<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z- w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">存款</span>
      <span class="ml-6 text-gray-200 text-sm tracking-wide font-bold">存款金额会存入中心钱包</span>
    </div>
    <div class="mt-2 mx-auto h-fit w-full">
      <TabGroup>
        <TabList class="bg-gray-700 shadow-lg flex justify-center sticky top-0">
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">虚拟币存款</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">虚拟币存款</div>
          </Tab>
        </TabList>
        <TabPanels class="my-2">
          <TabPanel>
            <div class="px-2 py-2 text-sm font-normal leading-3 text-gray-100">付款方式</div>
            <div class="grid grid-cols-3 gap-y-0 gap-3 px-2 mx-2 rounded shadow-lg bg-gray-700">
              <div v-for="mma in 5" :key="mma" class="text-center flex flex-col justify-center items-center rounded-md shadow-lg px-3 py-3 bg-slate-600 my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="h-8 w-8 text-gray-100">
                  <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039" />
                  <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z" />
                  <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z" />
                </svg>
                <span class="text-sm pt-2 leading-tight text-gray-200">币汇虚拟币</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel class="my-2">
            <div class="mx-auto h-fit w-full">
              <div class="mx-2 px-5 py-2 bg-slate-700 shadow-lg rounded-lg">
                <div class="flex justify-around items-center">
                  <div class="flex flex-col">
                    <span class="text-gray-300 text-md">USDT，最好的保值数字货币！</span>
                    <span class="text-gray-400 text-sm">价格稳定 流通性高 不受机构监管</span>
                  </div>
                  <div class="text-blue-400 text-sm font-bold tracking-wide cursor-pointer">了解更多</div>
                </div>
                <div class="px-3 pt-3">
                  <span class="inline-block rounded-min text-white bg-purple-500 px-2 py-1 text-xs font-bold mr-3">Primary</span>
                  <span class="inline-block rounded-min text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">Success</span>
                  <span class="inline-block rounded-min text-white bg-blue-500 px-2 py-1 text-xs font-bold mr-3">Info</span>
                  <span class="inline-block rounded-min text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3">Warning</span>
                </div>
              </div>
              <!--  -->
              <div class="mx-2 my-2 px-5 py-2 bg-slate-700 shadow-lg rounded-lg">
                <div class="flex flex-col">
                  <span class="text-gray-300 py-2 text-md">交易所推荐</span>
                  <div class="py-2 px-6 w-fit rounded-md shadow-lg bg-slate-500">
                    <span class="text-gray-300 text-md">币汇</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="h-8 w-8 text-gray-100">
                      <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039" />
                      <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z" />
                      <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z" />
                    </svg>
                  </div>
                </div>
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
import { ChevronLeftIcon,EmojiSadIcon } from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const router = useRouter();
const store = useStore();

const goBack = () => {
  router.go(-1);
};
const goHome = () => {
  router.push('/');
};

onMounted(() => {
  if (window.innerWidth > 768) {
    router.push("/");
  }
});
</script>

<style lang="scss" scoped>
</style>