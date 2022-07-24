<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-50 w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">个人资料</span>
    </div>
    <!-- 1-card -->
    <div class="mt-2 mx-auto h-fit w-full">
      <div class="mx-2 px-5 py-2 space-y-2 bg-slate-700 shadow-lg rounded-lg">
        <p class="text-xs text-gray-100 tracking-wide">为了确保您的账户安全，请您填写相关安全信息，以备不时之需</p>
        <p class="text-sm text-gray-100 tracking-wide">基本资料</p>
        <p class="text-sm text-gray-100 tracking-wide">真实姓名：</p>
        <form @click.prevent>
          <div class>
            <input :autocomplete="false" name="password" class="text-sm placeholder-gray-400 text-gray-300 px-5 border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 bg-slate-800" placeholder="名字需要与银行卡持卡人姓名一致，否则无法提款" />
          </div>
        </form>
        <p class="text-sm text-gray-100 tracking-wide">性别：</p>
        <div class="flex items-center">
          <div @click="selectGender(1)" class="relative px-4 py-3 rounded-md bg-slate-900 shadow-lg text-center">
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
        <p class="text-sm text-gray-100 tracking-wide">出生日期:</p>
        <p class="text-sm text-gray-100 tracking-wide">calendar</p>
        <div class="py-2">
          <button class="button__">ClickHere</button>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="my-2 mx-auto h-fit w-full">
      <div class="mx-2 px-5 py-2 space-y-2 bg-slate-700 shadow-lg rounded-lg">
        <div v-for="button in 3" :key="button" class="w-full">
          <span class="text-sm font-bold tracking-wide text-gray-200">账户安全</span>
          <div class="flex text-center py-2">
            <span class="py-2 text-sm text-gray-300 leading-relaxed">手机号码：未验证</span>
            <button @click="showModal = !showModal" type="button" class="py-2 mx-5 px-5 font-semibold border rounded border-coolGray-800 text-gray-200">Border</button>
          </div>
        </div>
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
  </div>

  <!-- desktop  -->
  <div class="w-full hidden md:block h-screen bg-gray-900">
    <div class="flex flex-col justify-center items-center h-full">
      <EmojiSadIcon class="w-52 h-52 text-gray-300" />
      <button class="px-3 py-2 text-gray-200 bg-indigo-500 outline-none hover:bg-indigo-600
       shadow-lg rounded-md tracking-wide font-medium
      " @click="goHome">BackToHome</button>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon,EmojiSadIcon  } from "@heroicons/vue/outline";
import ModalDialog from "@/components/ModalDialog.vue";
import { onMounted, computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();
const gender = ref(1);
const showModal = ref(false);

const goBack = () => {
  router.go(-1);
};
const goHome = () => {
  router.push('/');
};
const selectGender = (num) => {
  gender.value = num;
};
const Desktop = computed(() => store.getters["app/isDesktop"]);

onMounted(() => {
  if (window.innerWidth > 768) {
    router.push("/");
  }
});
</script>
<style  scoped>
.button__ {
  @apply px-8 py-2 rounded-lg text-sm font-medium border-0  focus:ring 
           transition text-white bg-slate-900 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300;
}
</style>