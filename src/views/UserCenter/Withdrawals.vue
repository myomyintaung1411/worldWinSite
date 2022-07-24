<template>
  <div class="hidden md:block w-full py-4">
    <div class="flex text-center items-center px-4">
      <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">取款</span>
      <span class="text-sm text-gray-300">通常您的提款只需3 - 15分钟即可到账，若超过30分钟仍未到账，请联系在线客服核查</span>
    </div>

    <div class="w-full px-7">
      <TabGroup>
        <TabList class="border-b border-gray-700">
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">极速取款</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">USDT提币</div>
          </Tab>
        </TabList>
        <TabPanels class="my-3">
          <TabPanel>
            <div class="grid grid-cols-2 gap-4 w-full px-2">
              <div v-for="max in 2" :key="max" class="w-full">
                <div class="w-full flex rounded-lg justify-between items-center shadow-lg bg-slate-600 py-2 px-3">
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
            </div>
            <!--  -->
            <div class="py-2 text-gray-200 font-sans leading-tight text-md px-2">场馆钱包</div>
            <div class="grid grid-cols-6 gap-4 py-2 px-2">
              <div class="w-full" v-for="gap in 20" :key="gap">
                <div class="w-full flex flex-col rounded-lg items-center shadow-lg bg-slate-600 py-2 px-3">
                  <span class="text-md text-gray-100 py-2 leading-tight">OB体育</span>
                  <span class="text-md font-bold text-gray-300">0.00</span>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="py-2 text-gray-200 font-sans leading-tight text-md px-2">取款至银行卡</div>
            <div class="py-2 px-2">
              <button class="bg-slate-500 hover:bg-slate-600 text-grey-darkest font-bold py-2 px-6 rounded inline-flex items-center">
                <PlusCircleIcon class="w-7 h-7 mr-2 text-white hover:text-blue-300" />
                <span class="font-medium tracking-wider text-md text-gray-100">添加银行卡</span>
              </button>
            </div>
            <span class="px-2 py-2 tracking-wide font-medium text-sm text-gray-50">您还没绑定银行卡，为了您的资金安全，绑定银行卡时，需要填写您的个人信息</span>
            <div class="flex justify-center items-center py-3">
              <button class="bg-blue-600 hover:bg-blue-700 w-1/2 text-grey-darkest font-bold py-2 px-6 rounded">
                <span class="font-medium tracking-wider text-md text-center text-gray-100">添加银行卡</span>
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="grid grid-cols-2 gap-4 w-full px-2">
              <div v-for="max in 2" :key="max" class="w-full">
                <div class="w-full flex rounded-lg justify-between items-center shadow-lg bg-slate-600 py-2 px-3">
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
            </div>
            <div class="py-4 px-2">
              <button  class="z-10 bg-slate-500 hover:bg-slate-600 text-grey-darkest font-bold py-2 px-6 rounded inline-flex items-center">
                <PlusCircleIcon class="w-7 h-7 mr-2 text-white hover:text-blue-300" />
                <span class="font-medium tracking-wider text-base text-gray-100">添加虚拟币地址</span>
              </button>
            </div>
            <span class="px-2 py-2 tracking-wide font-medium text-sm text-gray-50">您还没绑定虚拟币提币地址，为了你的资金安全，请先绑定虚拟币提币地址</span>
            <div class="flex justify-center items-center py-3">
              <button class="bg-blue-600 hover:bg-blue-700 w-1/2 text-grey-darkest font-bold py-2 px-6 rounded">
                <span class="font-medium tracking-wider text-md text-center text-gray-100">立即提币</span>
              </button>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <!-- modal -->
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import { onMounted, computed,ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import ModalDialog from "@/components/ModalDialog.vue";

const showModal = ref(false);

</script>

<style lang="scss" scoped>
</style>