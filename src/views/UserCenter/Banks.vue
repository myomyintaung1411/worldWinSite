<template>
  <div class="hidden md:block w-full py-3">
    <div class="px-7">
      <span class="text-lg font-bold tracking-wide text-gray-200">取款卡</span>
      <span class="text-xs font-bold px-4 tracking-wide text-gray-300">最多支持绑定10张银行卡</span>
    </div>
    <div class="w-full px-4">
      <TabGroup>
        <TabList class="border-b border-gray-700">
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">银行卡</div>
          </Tab>
          <Tab v-slot="{ selected }" as="template">
            <div :class="[selected ? ' border-b-2 py-3  leading-tight border-emerald-500 text-white  ' : ' text-gray-400']" class="px-3 inline-flex cursor-pointer font-bold">虚拟币</div>
          </Tab>
        </TabList>
        <TabPanels class="my-3">
          <TabPanel>
            <div class="py-3">
              <div class="flex relative flex-col items-center h-full">
                <div class="h-fit">
                  <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myCenter/noBankRecord.7971d6e480a3a53c1255ffbae7cc79ca.png?x-oss-process=image/resize,m_fixed,w_730,h_330/format,webp" class="w-full h-fit" alt="none" />
                </div>
                <span class="text-gray-200 tracking-wide font-medium">暂无绑定银行卡</span>
                <button class="mt-4 py-3 px-3 bottom-0 rounded-lg shadow-lg outline-none focus:outline-none bg-blue-600 tracking-wide text-gray-200 hover:bg-blue-700">添加银行卡</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="py-3">
              <div class="flex relative flex-col items-center h-full">
                <div class="h-fit">
                  <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myCenter/noBankRecord.7971d6e480a3a53c1255ffbae7cc79ca.png?x-oss-process=image/resize,m_fixed,w_730,h_330/format,webp" class="w-full h-fit" alt="none" />
                </div>
                <span class="text-gray-200 tracking-wide font-medium">暂无绑定虚拟币地址</span>
                <button class="mt-4 py-3 px-3 bottom-0 rounded-lg shadow-lg outline-none focus:outline-none bg-blue-600 tracking-wide text-gray-200 hover:bg-blue-700">添加虚拟币地址</button>
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