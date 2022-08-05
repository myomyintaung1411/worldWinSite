<template>
  <div class="w-full py-4 hidden md:block">
    <div class="flex text-center items-center px-4">
      <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">存款</span>
      <span class="text-sm text-gray-300">存款金额会存入中心钱包</span>
    </div>

    <div class="w-full px-7">
      <TabGroup>
        <TabList class="border-b border-gray-700">
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">人民币存款</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">虚拟币存款</div>
          </Tab>
        </TabList>
        <TabPanels class="my-3">
          <TabPanel>
            <div class="px-2 text-sm font-normal leading-3 text-gray-100">付款方式</div>
            <div class="grid grid-cols-6 gap-4 px-2">
              <div v-for="mma in 6" :key="mma" class="text-center flex flex-col justify-center items-center rounded-md shadow-lg px-3 py-4 bg-slate-600 my-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="h-8 w-8 text-gray-100">
                  <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039" />
                  <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z" />
                  <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z" />
                </svg>
                <span class="text-md pt-2 leading-tight text-gray-200">币汇虚拟币</span>
              </div>
            </div>
            <div class="px-2 text-sm font-normal leading-3 text-gray-100">协议：</div>
            <div class="px-2 flex text-center items-center py-2">
              <div @click="selectCoin(1)" class="cursor-pointer relative px-5 py-3 rounded-md bg-slate-900 shadow-lg text-center">
                <span class="text-md text-gray-50">TRC20</span>
                <div class="absolute right-0 bottom-0 rounded-tl-md bg-blue-500">
                  <svg v-show="cointype == 1" xmlns="http://www.w3.org/2000/svg" class="text-white bottom-0 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div @click="selectCoin(2)" class="cursor-pointer relative px-5 py-3 ml-3 rounded-md bg-slate-900 shadow-lg text-center">
                <span class="text-md text-gray-50">ERC20</span>
                <div class="absolute right-0 bottom-0 rounded-tl-md bg-blue-500">
                  <svg v-show="cointype == 2" xmlns="http://www.w3.org/2000/svg" class="text-white bottom-0 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <a class="text-blue-300 tracking-wide self-end font-medium text-sm px-4">协议的区别</a>
            </div>
            <div class="px-2 py-2 text-sm font-normal tracking-wide leading-3 text-gray-100">中等额度常规交易推荐</div>
            <form @click.prevent class="py-5 px-2">
              <div class="flex text-center items-center">
                <input autocomplete="off" name="password" class="text-sm placeholder-gray-400 text-gray-300 px-5 border border-gray-400 max-w-sm w-80 py-2 focus:outline-none focus:border-blue-400 bg-slate-800" placeholder="请输入 100.00元-500,000.00元" />
                <span class="text-gray-300 tracking-wide text-sm font-normal px-4">建议您存入带尾数的金额（例101、503），以便存款后能更快匹配到账</span>
              </div>
            </form>
            <div class="px-2">
              <button class="px-2 max-w-sm w-80 py-2 tracking-wider text-gray-300 bg-blue-600 shadow-lg rounded-md hover:bg-blue-700 outline-none focus:outline">立即存款</button>
            </div>
            <div class="grid grid-cols-2 gap-4 px-2">
              <div v-for="card in 2" :key="card" class="rounded-md shadow-lg px-3 py-4 bg-slate-900 my-3">
                <div class="flex justify-around">
                  <div class="flex flex-col">
                    <span class="text-gray-300 text-lg">USDT存款，最佳的选择！</span>
                    <span class="text-gray-400 text-md">价格稳定 流通性高 不受机构监管</span>
                  </div>
                  <div class="text-blue-400 font-bold tracking-wide cursor-pointer">了解更多</div>
                </div>
                <div class="px-9 pt-3">
                  <span class="inline-block rounded-min text-white bg-purple-500 px-2 py-1 text-xs font-bold mr-3">选择协议 发起存款</span>
                  <span class="inline-block rounded-min text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">交易所购买并划转USDT</span>
                  <span class="inline-block rounded-min text-white bg-blue-500 px-2 py-1 text-xs font-bold mr-3">完成存款</span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="grid grid-cols-2 gap-4 px-2">
              <div v-for="card in 2" :key="card" class="rounded-md shadow-lg px-3 py-4 bg-slate-600 my-3">
                <div class="flex justify-around">
                  <div class="flex flex-col">
                    <span class="text-gray-300 text-lg">USDT，最好的保值数字货币！</span>
                    <span class="text-gray-400 text-md">价格稳定 流通性高 不受机构监管</span>
                  </div>
                  <div class="text-blue-400 font-bold tracking-wide cursor-pointer">了解更多</div>
                </div>
                <div class="px-9 pt-3">
                  <span class="inline-block rounded-min text-white bg-purple-500 px-2 py-1 text-xs font-bold mr-3">Primary</span>
                  <span class="inline-block rounded-min text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">Success</span>
                  <span class="inline-block rounded-min text-white bg-blue-500 px-2 py-1 text-xs font-bold mr-3">Info</span>
                  <span class="inline-block rounded-min text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3">Warning</span>
                </div>
              </div>
            </div>
            <div class="px-2 flex text-center items-center py-2">
              <span class="text-gray-300 tracking-wide font-normal">使用的协议：</span>
              <div @click="selectCoin(1)" class="cursor-pointer relative px-5 py-3 rounded-md bg-slate-900 shadow-lg text-center">
                <span class="text-md text-gray-50">TRC20</span>
                <div class="absolute right-0 bottom-0 rounded-tl-md bg-blue-500">
                  <svg v-show="cointype == 1" xmlns="http://www.w3.org/2000/svg" class="text-white bottom-0 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div @click="selectCoin(2)" class="cursor-pointer relative px-5 py-3 ml-3 rounded-md bg-slate-900 shadow-lg text-center">
                <span class="text-md text-gray-50">ERC20</span>
                <div class="absolute right-0 bottom-0 rounded-tl-md bg-blue-500">
                  <svg v-show="cointype == 2" xmlns="http://www.w3.org/2000/svg" class="text-white bottom-0 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <a class="text-blue-300 tracking-wide self-end font-medium text-sm px-4">协议的区别</a>
            </div>
            <span class="text-gray-300 text-xs px-2 py-1 tracking-wide font-normal">最少需要充入10.00USDT，否则会导致充币无法到账</span>
            <div class="w-full flex flex-col items-center py-3 justify-center">
              <p class="tracking-wide py-1 text-gray-200 font-normal text-md">无需填写充币金额，充币成功</p>
              <p class="tracking-wide py-1 text-gray-200 font-normal text-md">后款项自动添加到账</p>
              <div class="py-2 px-2 my-2 bg-slate-400">
                <img
                  src="data:image/png;base64,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"
                  alt="qrcode"
                  class="w-28 h-28 object-cover"
                />
              </div>
              <button class="px-6 py-2 tracking-wider text-gray-300 bg-blue-600 shadow-lg rounded-md hover:bg-blue-700 outline-none focus:outline">保存二维码</button>
              <div class="flex items-center">
                <span class="text-gray-300">钱包地址:</span>
                <span class="text-gray-200 text-sm tracking-wide font-normal px-3">TWvyA5ARmsfRwsMuxdgAgASTjRe9NKiARL</span>
                <a class="text-blue-300 font-normal tracking-wide text-md">复制</a>
              </div>
              <div class="px-2 flex flex-col text-left py-4">
                <span class="text-gray-300 text-sm tracking-wider text-left">1、建议使用冷钱包进行中转操作，不要直接使用交易所；</span>
                <span class="text-gray-300 text-sm tracking-wider text-left">2、冷钱包不需要开通法币交易，不用注册个人资料。</span>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const cointype = ref(1);
const selectCoin = (num) => {
  cointype.value = num;
};
</script>

<style lang="scss" scoped>
</style>