<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-50 w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">MyVip</span>
    </div>
    <div class="mt-2 mx-auto h-fit w-full">
      <div class="mx-2 px-5 py-2 space-y-2 bg-slate-700 shadow-lg rounded-lg">
        <div class="flex justify-around items-center">
          <div class="w-20 h-auto">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/vip/v0.b4a5e03f54cba229e206d74052c89eb4.png?x-oss-process=image/resize,m_fixed,w_236,h_250/quality,Q_70/format,webp" alt="vip" class="w-full h-fit object-cover" />
          </div>
          <div class="cursor-pointer px-3 py-2 text-gray-200 rounded-md shadow-lg bg-indigo-500 hover:bg-indigo-700 w-fit">
            <span class="tracking-wide">查看VIP详情</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 mx-auto h-fit w-full">
      <div v-for="nmn in 2" :key="nmn" class="border-t my-2 border-teal-300 mx-2 px-5 py-2 space-y-2 bg-slate-700 shadow-lg">
        <div class="flex items-center text-center">
          <div class="w-10 h-10 flex text-white bg-blue-500 justify-center items-center rounded-full text-xl">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="flex flex-col items-start ml-2">
            <span class="text-gray-200 text-lg">0.00</span>
            <span class="text-gray-400 text-md tracking-wide">中心钱包</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 mx-auto h-fit w-full">
      <div class="overflow-x-scroll border-t my-2 py-3 border-teal-300 mx-2 bg-slate-700 shadow-lg">
        <div class="flex px-2">
          <div v-for="vip in 10" :key="vip" class="rounded-min text-white bg-teal-500 mx-1 px-3 w-20 py-1 text-xs font-bold">
            <span class="whitespace-nowrap">VIP 1</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 mx-auto h-fit w-full">
      <div class="my-2 rounded-lg shadow-lg mx-2 px-5 py-2 space-y-2 bg-slate-700">
        <span class="text-gray-300 tracking-wide font-bold text-md">距离下一等级：VIP1</span>
        <div class="flex flex-col text-gray-400 text-sm font-normal tracking-wider">
          <span class>存款还需金额约：0.00元</span>
          <span>流水还需金额约：0.00元</span>
        </div>
        <span class="text-gray-400 text-sm font-normal tracking-wider">
          提示：当前累计存款和累计流水截止2022年01月14日16时16分
          （每日16点更新）
        </span>
      </div>
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
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();

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

<style scoped>
</style>