<template>
  <div class="hidden md:block w-full h-screen">
    <div class="flex justify-between items-center py-3">
      <div>
        <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">我的钱包</span>
        <span class="text-sm text-gray-300">您的总资产在这里一览无余</span>
      </div>
      <div class="px-2">
        <ul class="flex cursor-pointer">
          <li @click="TabClick(1)" :class="activeTab === 1 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-6 hover:bg-gray-900 text-white rounded-l-md">Personal</li>
          <li @click="TabClick(2)" :class="activeTab === 2 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-6 hover:bg-gray-900 rounded-r-md text-white">Akun</li>
        </ul>
      </div>
    </div>
    <!-- two card -->
    <div v-if="activeTab === 1">
      <div class="grid grid-cols-2 gap-4 w-full px-2">
        <div v-for="max in 4" :key="max" class="w-full">
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
      <!-- multiple card -->
      <div class="py-2 text-gray-200 font-sans leading-tight text-md px-2">场馆钱包</div>
      <div class="grid grid-cols-6 gap-4 py-2 px-2">
        <div class="w-full" v-for="gap in 1" :key="gap">
          <div class="w-full flex flex-col rounded-lg items-center shadow-lg bg-slate-600 py-2 px-3">
            <span class="text-md text-gray-100 py-2 leading-tight">OB体育</span>
            <span class="text-md font-bold text-gray-300">0.00</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 2">
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
      <div class="w-full py-2 h-auto">
        <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myWallet/banner@2x.e3f22d118a5d09705365c8aa2beba33f.png?x-oss-process=image/resize,m_fixed,w_1840,h_320/quality,Q_70/format,webp" alt="unknowimg" class="object-fill w-full h-fit" />
      </div>
      <div class="flex justify-center py-3 items-center">
        <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myWallet/title-xunibi@2x.25da907cbfdba1cbdf155457034a1eab.png?x-oss-process=image/resize,m_fixed,w_908,h_48/quality,Q_70/format,webp" alt="info" class="w-[454px] h-[24px] object-cover" />
      </div>
      <div class="py-3 px-2 flex justify-center mx-auto w-full">
        <div  class="grid grid-cols-3 gap-6 place-items-center w-fit px-2">
          <div v-for="info in 3" :key="info" class="px-4 py-2 space-y-3 flex flex-col
           items-center justify-center rounded-lg shadow-lg bg-slate-700">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myWallet/xunibiqianbao@2x.22f085b46c84c6d986fe184a9d0c1ebc.png?x-oss-process=image/resize,m_fixed,w_200,h_200/quality,Q_70/format,webp" class="object-cover w-24 h-24" alt="infoimage" />
            <p class="text-gray-300 tracking-wide font-normal text-sm">USDT可存放在虚拟币钱包</p>
            <p class="text-gray-300 tracking-wide font-normal text-sm">也可从虚拟币钱包提取</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let activeTab = ref(1);
const TabClick = (n) => {
  activeTab.value = n;
};
</script>

<style  scoped>
</style>