<template>
  <div class="hidden md:block w-full py-3">
    <div class="px-7">
      <span class="text-lg font-bold tracking-wide text-gray-200">消息中心</span>
    </div>
    <div class="w-full px-4">
      <TabGroup>
        <TabList class="border-b border-gray-700">
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">通知</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">活动</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">公告</div>
          </Tab>
        </TabList>
        <TabPanels class="my-3">
          <TabPanel>
            <div class="my-3">
              <div class="flex relative cursor-pointer items-center bg-gray-700 py-2 px-4 text-center space-x-3">
                <div>
                  <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <span class="text-md text-gray-300 tracking-wide font-bold">【欢迎加入欧宝】</span>
                <span class="text-gray-200 text-sm overflow-ellipsis overflow-hidden max-w-sm w-96 whitespace-nowrap">尊敬的leelee123：恭喜您已经成为欧宝正式会员。欧宝拥有欧洲马耳他MGA、英国GC监督委员会（GamblingCommission）、菲律宾政府（PAGCOR）颁发的合法执照。注册于英属维尔京群岛，是受国际行业协会认可的合法公司，选择欧宝将为您的账号和资金安全保驾护航。我们将为您提供全球最顶级的体育赛事、真人娱乐、棋牌游戏、电子游戏等多种产品。我们还为您提供了超便捷的存款方式和提款渠道，存款只需60秒，提款只需要90秒即可快速到账</span>
                <span class="absolute right-4 text-gray-200 text-sm tracking-wide text-center">2022-01-14 14:04:02</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="my-3">
              <div class="flex relative cursor-pointer items-center bg-gray-700 py-2 px-4 text-center space-x-3">
                <div>
                  <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <span class="text-md text-gray-300 tracking-wide font-bold">【LPL 2022春季赛 激战正酣】</span>
                <span class="text-gray-200 text-sm overflow-ellipsis overflow-hidden max-w-sm w-96 whitespace-nowrap">尊敬的leelee123：恭喜您已经成为欧宝正式会员。欧宝拥有欧洲马耳他MGA、英国GC监督委员会（GamblingCommission）、菲律宾政府（PAGCOR）颁发的合法执照。注册于英属维尔京群岛，是受国际行业协会认可的合法公司，选择欧宝将为您的账号和资金安全保驾护航。我们将为您提供全球最顶级的体育赛事、真人娱乐、棋牌游戏、电子游戏等多种产品。我们还为您提供了超便捷的存款方式和提款渠道，存款只需60秒，提款只需要90秒即可快速到账</span>
                <span class="absolute right-4 text-gray-200 text-sm tracking-wide text-center">2022-01-14 14:04:02</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="my-3">
              <div class="flex relative cursor-pointer items-center bg-gray-700 py-2 px-4 text-center space-x-3">
                <div>
                  <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <span class="text-md text-gray-300 tracking-wide font-bold">【极速通道重要提醒】</span>
                <span class="text-gray-200 text-sm overflow-ellipsis overflow-hidden max-w-sm w-96 whitespace-nowrap">尊敬的会员：欧宝极速通道迭代升级，目前已暂停发送“短信”与致电提醒。如您发起提款请前往收款银行APP中确认款项是否到账，请勿直接点击提款确认到账，避免误操作导致资金损失。</span>
                <span class="absolute right-4 text-gray-200 text-sm tracking-wide text-center">2022-01-14 14:04:02</span>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<style  scoped>
</style>