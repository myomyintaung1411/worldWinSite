<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-20 w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">消息中心</span>
    </div>
    <div class="mt-2 mx-auto h-fit w-full">
      <TabGroup>
        <TabList class="bg-slate-700 shadow-lg flex justify-center z-40 sticky top-0">
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">通知</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">活动</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template" class="flex justify-center items-center">
            <div :class="[selected ? ' border-b-2 py-2  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 cursor-pointer font-bold">公告</div>
          </Tab>
        </TabList>
        <TabPanels class="my-2">
          <TabPanel>
            <div class="my-1">
              <div class="mx-auto h-fit w-full">
                <div v-for="mma in 5" :key="mma" class="mx-2 my-1 px-5 py-1 bg-slate-700 shadow-lg rounded">
                  <div class="flex items-center py-1">
                    <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span class="text-sm text-gray-300 tracking-wide font-bold">【欢迎加入欧宝】</span>
                  </div>
                  <div class="text-gray-200 text-sm overflow-ellipsis overflow-hidden w-full whitespace-nowrap">
                    尊敬的leelee123：
                    恭喜您已经成为欧宝正式会员。欧宝拥有欧洲马耳他MGA、英国GC监督委员会（GamblingCommission）
                    、菲律宾政府（PAGCOR）颁发的合法执照。注册于英属维尔京群岛，是受国际行业协会认可的合法公司
                    ，选择欧宝将为您的账号和资金安全保驾护航。我们将为您提供全球最顶级的体育赛事、真人娱乐、
                    棋牌游戏、电子游戏等多种产品。我们还为您提供了超便捷的存款方式和提款渠道，存款只需60秒
                    ，提款只需要90秒即可快速到账
                  </div>
                  <div class="text-gray-200 text-sm tracking-wide text-left">2022-01-14 14:04:02</div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel class="my-2">
            <div class="my-1">
              <div class="mx-auto h-fit w-full">
                <div v-for="mma in 3" :key="mma" class="mx-2 my-1 px-5 py-1 bg-slate-700 shadow-lg rounded">
                  <div class="flex items-center py-1">
                    <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span class="text-sm text-gray-300 tracking-wide font-bold">【欢迎加入欧宝】</span>
                  </div>
                  <div class="text-gray-200 text-sm overflow-ellipsis overflow-hidden w-full whitespace-nowrap">
                    尊敬的leelee123：
                    恭喜您已经成为欧宝正式会员。欧宝拥有欧洲马耳他MGA、英国GC监督委员会（GamblingCommission）
                    、菲律宾政府（PAGCOR）颁发的合法执照。注册于英属维尔京群岛，是受国际行业协会认可的合法公司
                    ，选择欧宝将为您的账号和资金安全保驾护航。我们将为您提供全球最顶级的体育赛事、真人娱乐、
                    棋牌游戏、电子游戏等多种产品。我们还为您提供了超便捷的存款方式和提款渠道，存款只需60秒
                    ，提款只需要90秒即可快速到账
                  </div>
                  <div class="text-gray-200 text-sm tracking-wide text-left">2022-01-14 14:04:02</div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel class="my-2">
            <div class="my-1">
              <div class="mx-auto h-fit w-full">
                <div v-for="mma in 10" :key="mma" class="mx-2 my-1 px-5 py-1 bg-slate-700 shadow-lg rounded">
                  <div class="flex items-center py-1">
                    <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span class="text-sm text-gray-300 tracking-wide font-bold">【欢迎加入欧宝】</span>
                  </div>
                  <div class="text-gray-200 text-sm overflow-ellipsis overflow-hidden w-full whitespace-nowrap">
                    尊敬的leelee123：
                    恭喜您已经成为欧宝正式会员。欧宝拥有欧洲马耳他MGA、英国GC监督委员会（GamblingCommission）
                    、菲律宾政府（PAGCOR）颁发的合法执照。注册于英属维尔京群岛，是受国际行业协会认可的合法公司
                    ，选择欧宝将为您的账号和资金安全保驾护航。我们将为您提供全球最顶级的体育赛事、真人娱乐、
                    棋牌游戏、电子游戏等多种产品。我们还为您提供了超便捷的存款方式和提款渠道，存款只需60秒
                    ，提款只需要90秒即可快速到账
                  </div>
                  <div class="text-gray-200 text-sm tracking-wide text-left">2022-01-14 14:04:02</div>
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
import {  onMounted } from "vue";
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

<style  scoped>
</style>