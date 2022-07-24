<template>
  <div class="hidden md:block w-full">
    <div class="px-2 py-3">
      <span class="px-3 text-lg font-bold tracking-wide text-gray-200">个人资料</span>
      <span class="text-sm text-gray-300 leading-relaxed">为了确保您的账户安全，请您填写相关安全信息，以备不时之需</span>
    </div>
    <div class="px-5 text-md text-gray-300 leading-relaxed">基本资料</div>

    <form @click.prevent class="py-5">
      <div class="px-5 flex text-center items-center">
        <span class="text-md text-gray-300 leading-relaxed">真实姓名：</span>
        <input :autocomplete="false" name="password" class="text-sm placeholder-gray-400 text-gray-300 px-5 border border-gray-400 max-w-sm  w-80 py-2 focus:outline-none focus:border-blue-400 bg-slate-800" placeholder="名字需要与银行卡持卡人姓名一致，否则无法提款" />
      </div>
    </form>

    <div class="px-5 flex text-center items-center">
      <span class="text-md text-gray-300 leading-relaxed">性别：</span>

      <div @click="selectGender(1)" class="cursor-pointer relative px-4 py-3 ml-8 rounded-md bg-slate-900 shadow-lg text-center">
        <span class="text-md text-gray-50">男</span>
        <div class="absolute right-0 bottom-0 rounded-tl-md bg-blue-500">
          <svg v-show="gender == 1" xmlns="http://www.w3.org/2000/svg" class="text-white bottom-0 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <div @click="selectGender(2)" class="cursor-pointer relative px-4 py-3 ml-3 rounded-md bg-slate-900 shadow-lg text-center">
        <span class="text-md text-gray-50">女</span>
        <div class="absolute right-0 bottom-0 rounded-tl-md bg-blue-500">
          <svg v-show="gender == 2" xmlns="http://www.w3.org/2000/svg" class="text-white bottom-0 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="px-5 pt-5 flex text-center items-center">
      <span class="text-md text-gray-300 leading-relaxed">出生日期：</span>

        <!-- <v-date-picker :value="null" color="red" is-dark is-range /> -->
        <v-date-picker locale="zh" v-model="date" color="green" is-dark>
          <template v-slot="{ inputValue, inputEvents }">
            <div class="relative max-w-sm  w-80 ">
              <input id="date" class="bg-gray-700 placeholder-gray-400 text-gray-300 
             py-2 text-sm  w-full  px-5 appearance-none border border-gray-400  focus:outline-none focus:border-blue-400"
             placeholder="添加日期，确保您已满18岁" 
              :value="inputValue" v-on="inputEvents" />
              <XIcon @click="date = null" class="absolute cursor-pointer right-2 top-2 w-6 h-6  text-gray-300"/>
            </div>
          </template>
        </v-date-picker>
    </div>
    <div class="ml-24 py-3">
      <button class="button__">ClickHere</button>
    </div>
  </div>

  <div class="w-full mx-auto px-7 py-8">
    <div class="h-px bg-gray-600 w-full"></div>
  </div>

  <!-- below section -->
  <div v-for="button in 3" :key="button" class="w-full">
    <span class="px-7 text-lg font-bold tracking-wide text-gray-200">账户安全</span>
    <div class="flex text-center py-2">
      <span class="px-7 py-2 text-md text-gray-300 leading-relaxed">手机号码：未验证</span>
      <button @click="showModal = !showModal" type="button" class="px-7 py-2 font-semibold border rounded border-coolGray-800 text-gray-200">Border</button>
    </div>
  </div>
  <ModalDialog :show="showModal" @close="showModal = false">
    <div class="w-full p-10">
      <p class="text-gray-200 text-md py-1 tracking-wide">验证手机号码</p>
      <p class="text-gray-300 text-sm py-3 tracking-wide">为了您的安全，信息在确认后将无法修改，如需帮助请联系客服</p>
      <form @click.prevent>
        <div class="space-y-2">
          <p class="text-gray-200 text-sm tracking-wide">手机号码</p>
          <input :autocomplete="false" name="password" class="text-sm placeholder-gray-400 text-gray-300 px-5 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 bg-slate-800" placeholder="名字需要与银行卡持卡人姓名一致，否则无法提款" />
        </div>
        <div>
          <p class="text-gray-200 text-sm tracking-wide py-3">验证码</p>
          <input :autocomplete="false" name="password" class="text-sm placeholder-gray-400 text-gray-300 px-5 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 bg-slate-800" placeholder="请输入手机验证码" />
        </div>
      </form>
      <div class="my-6">
        <button disabled type="button" class="px-7 py-2 font-semibold border rounded shadow-lg hover:bg-indigo-500 bg-indigo-700 border-none outline-none w-full text-gray-200">Border</button>
      </div>
    </div>
  </ModalDialog>
</template>

<script setup>
import { XIcon  } from "@heroicons/vue/outline";

import ModalDialog from "@/components/ModalDialog.vue";
import { ref } from "vue";

const gender = ref(1);
const showModal = ref(false);
const date = ref(new Date())
const selectGender = (num) => {
  gender.value = num;
};
</script>
<style  scoped>
.button__ {
  @apply px-8 py-2 rounded-lg text-sm font-medium border-0  focus:ring 
           transition text-white bg-slate-900 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300;
}
</style>