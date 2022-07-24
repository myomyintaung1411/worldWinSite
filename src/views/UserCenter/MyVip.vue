<template>
  <div class="hidden md:block w-full">
    <div class="flex relative space-x-3">
      <div class="w-20 h-auto">
        <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/vip/v0.b4a5e03f54cba229e206d74052c89eb4.png?x-oss-process=image/resize,m_fixed,w_236,h_250/quality,Q_70/format,webp" alt="vip" class="w-full h-fit object-cover" />
      </div>
      <div class="grid grid-cols-2 gap-4 px-2 w-8/12">
        <div v-for="n in 2" :key="n" class="border-t border-teal-300 rounded-b-md shadow-lg px-4 py-4 bg-slate-600 my-3">
          <div class="flex items-center text-center">
            <div class="w-10 h-10 flex text-white bg-blue-500 justify-center items-center rounded-full text-xl">
              <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex flex-col items-start ml-2">
              <span class="text-gray-200 text-2xl">0.00</span>
              <span class="text-gray-400 text-md tracking-wide">中心钱包</span>
            </div>
          </div>
        </div>
      </div>
      <div class="top-2 absolute right-2 cursor-pointer px-3 py-2 text-gray-200 rounded-md shadow-lg bg-indigo-500 hover:bg-indigo-700 w-fit">
        <span class="tracking-wide">查看VIP详情</span>
      </div>
    </div>

    <div class="flex justify-center my-3 mx-auto">
      <div class="w-[10%]">
        <div class="relative mb-2">
          <div class="w-5 h-5 mx-auto bg-white rounded-full text-lg text-white flex items-center"></div>
        </div>

        <div class="text-sm text-center text-gray-300">Vip 1</div>
      </div>

      <div v-for="n in 9" :key="n" class="w-[10%]">
        <div class="relative mb-2">
          <div class="absolute flex align-center w-full px-3 items-center align-middle content-center" style=" top: 50%; transform: translate(-50%, -50%)">
            <div class="w-full bg-gray-200 rounded-md items-center align-middle align-center flex-1">
              <div class="w-0 bg-green-300 py-1 rounded" style="width: 100%;"></div>
            </div>
          </div>

          <div class="w-5 h-5 mx-auto bg-gray-400 rounded-full text-lg shadow-lg text-white flex items-center"></div>
        </div>

        <div class="text-sm text-center text-gray-300">Vip 2</div>
      </div>
    </div>

    <div class="w-11/12 my-6 py-3 space-y-2 px-8 mx-auto rounded-lg shadow-lg bg-slate-900">
      <span class="text-gray-300 tracking-wide font-bold text-lg">距离下一等级：VIP1</span>
      <div class="flex text-center text-gray-400 text-sm font-normal tracking-wider">
        <span class="pr-16">存款还需金额约：0.00元</span>
        <span>流水还需金额约：0.00元</span>
      </div>
      <span class="text-gray-400 text-md font-normal tracking-wider">提示：当前累计存款和累计流水截止2022年01月14日16时16分（每日16点更新）</span>
    </div>
    <div class="px-4">
      <span class="text-md tracking-wide text-gray-200">VIP0尊享</span>
      <div class="py-2">
        <div class="grid grid-cols-6 gap-0">
          <div v-for="n in 6" :key="n" class="shadow-lg py-2 px-2" :class="n== 2 || n==4 || n==6 ? 'bg-gray-300 text-gray-700' : 'bg-slate-600 text-gray-200'">
            <div class="flex flex-col space-y-3 justify-center items-center">
              <div class="rounded-full flex items-center justify-center text-center w-12 h-12 bg-slate-900">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/vip/icon-1.572101d95d832c4daa5823f7dad5e28e.png?x-oss-process=image/resize,p_100/quality,Q_70/format,webp" alt class="w-10 h-10 object-cover" />
              </div>
              <span class="tracking-wider text-xs md:text-xs">每日提款次数</span>
              <span class="tracking-wider text-base md:text-xl">5次</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>