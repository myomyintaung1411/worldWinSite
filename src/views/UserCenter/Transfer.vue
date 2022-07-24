<template>
  <div class="hidden md:block w-full">
    <div class="flex justify-between items-center py-3">
      <div>
        <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">转账</span>
        <span class="text-sm text-gray-300">场馆钱包和场馆钱包之间不可以互转</span>
      </div>
      <div class="px-2">
        <ul class="flex cursor-pointer">
          <li @click="TabClick(1)" :class="activeTab === 1 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-6 hover:bg-gray-900 text-white rounded-l-md">普通模式</li>
          <li @click="TabClick(2)" :class="activeTab === 2 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-6 hover:bg-gray-900 rounded-r-md text-white">免转模式</li>
        </ul>
      </div>
    </div>
    <!-- two card -->
    <div v-if="activeTab ==1">
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
      <!-- card section -->
      <div class="px-2 py-3 text-gray-100 tracking-wide font-normal text-sm">转账金额</div>
      <div class="flex items-center">
        <div class="w-64 px-2 cursor-pointer z-10">
          <Listbox v-model="selectCardOne">
            <div class="relative mt-1">
              <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span class="block truncate">{{ selectCardOne.name }}</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption v-slot="{ active, selected }" v-for="select in card" :key="select.name" :value="select" as="template">
                    <li :class="[
                  active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]">
                      <span :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]">{{ select.name }}</span>
                      <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <!-- swipe btn -->
        <div>
          <SwitchHorizontalIcon @click="Swipe" class="w-7 h-8 text-gray-400 cursor-pointer"/>
        </div>
        <div class="w-64 px-2 cursor-pointer z-10">
          <Listbox v-model="selectCardTwo">
            <div class="relative mt-1">
              <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span class="block truncate">{{ selectCardTwo.name }}</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption v-slot="{ active, selected }" v-for="select in card" :key="select.name" :value="select" as="template">
                    <li :class="[
                  active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]">
                      <span :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]">{{ select.name }}</span>
                      <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <span class="px-3 tracking-wider text-gray-200 text-sm">场馆钱包和场馆钱包之间不可以互转</span>
      </div>
      <!--  -->
      <div class="flex items-center text-center px-2 py-4">
        <form @click.prevent class="relative">
          <input :autocomplete="false" name="card" 
          class="text-sm 
          placeholder-gray-400 text-gray-300 pr-20 pl-8 border 
          border-gray-400 max-w-sm  w-96 py-2 focus:outline-none 
          focus:border-blue-400 bg-slate-800"
           placeholder="请输入转账金额" />
           <span class="text-gray-300 cursor-pointer text-xs px-3 absolute right-0 top-3">最大金额</span>
        </form>
        <div class="px-3">
         <button class="px-6 py-2 tracking-wider text-gray-300 
         bg-blue-600 shadow-lg rounded-md hover:bg-blue-700 
         outline-none focus:outline">立即转账</button>
        </div>
      </div>
      <div class="py-3 px-2">
        <span class=" tracking-wide font-normal text-gray-200 text-sm"> 场馆钱包</span>
        <div class="grid grid-cols-4 gap-2">
          <div v-for="number in 8" :key="number" class="rounded-lg shadow-lg bg-slate-600 py-2 px-2">
            <div class="flex items-center justify-between px-2">
              <span class="text-sm tracking-wide text-gray-200">OB体育</span>
              <span class="text-sm tracking-wide text-gray-200">OB体育</span>
            </div>
            <div class="text-md text-gray-50 font-bold pt-2 px-2">0.00</div>
            <div class="flex justify-end px-2">
              <span class="text-sm tracking-wide cursor-pointer 
               hover:bg-emerald-600 rounded-lg shadow-lg px-2 py-2 mx-6 text-gray-200">转入</span>
              <span class="text-sm tracking-wide text-gray-200
              hover:bg-emerald-600 rounded-lg shadow-lg px-2 py-2
              ">转出</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeTab ==2">
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
      <div class="py-2 text-gray-200 font-sans leading-tight text-md px-2">场馆钱包</div>
      <div class="grid grid-cols-6 gap-4 py-2 px-2">
        <div class="w-full" v-for="gap in 20" :key="gap">
          <div class="w-full flex flex-col rounded-lg items-center shadow-lg bg-slate-600 py-2 px-3">
            <span class="text-md text-gray-100 py-2 leading-tight">OB体育</span>
            <span class="text-md font-bold text-gray-300">0.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon,SwitchHorizontalIcon  } from "@heroicons/vue/solid";
import { reactive, ref } from "vue";
const card = reactive([
  { name: "KBZ" },
  { name: "CbBank" },
  { name: "Aye" },
  { name: "UBBank" },
  { name: "Holy Shit" },
  { name: "Fucking Shit" },
]);
const selectCardOne = ref(card[0]);
const selectCardTwo = ref(card[0]);
let activeTab = ref(1);
const TabClick = (n) => {
  activeTab.value = n;
};
const Swipe = () => {
   const temp = selectCardOne.value;
   selectCardOne.value = selectCardTwo.value;
   selectCardTwo.value = temp;
}
</script>

<style scoped>
</style>