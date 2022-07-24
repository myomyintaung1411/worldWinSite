<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z- w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-primary" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">{{t('online_re')}}</span>
      <!-- <span class="ml-6 text-gray-200 text-sm tracking-wide font-bold">场馆钱包和场馆钱包之间不可以互转</span> -->
    </div>
    <div v-if="checkArray()" class="mt-2 mx-auto h-fit w-full">
      <div class="w-full mx-auto">
        <div class="mx-2 my-2 rounded-lg justify-between items-center shadow-lg bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo py-3 px-3">
          <p class="text-md font-bold text-gray-700">USDT-TRC20</p>
          <div class="space-x-2 flex items-center justify-between">
            <span id="textToBecopied" class="text-md overflow-hidden text-ellipsis w-11/12 text-gray-500 py-2 leading-tight">{{user.adress[0]}}</span>
            <div @click="copyAddress(user.adress[0])" title="复制" class="text-md text-black rounded-full cursor-pointer shadow-lg px-1 inline-block w-fit bg-HomecardBg py-1 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex w-full h-full flex-col mx-auto  justify-center text-center items-center">
      <div class="py-3">
        <img src="@/assets/home/noRecord.png" 
        alt="norecord" class="w-fit h-[165px]" />
      </div>
      <div class="py-3  w-full">
        <p class="text-gray-300 tracking-wide text-base font-medium">{{t('coin_add')}}</p>
      </div>
      <div class="py-3">
        <button @click="goService()" class="px-6 py-2 tracking-wider text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo shadow-lg rounded-md outline-none focus:outline-none">{{t('go_ser')}}</button>
      </div>
    </div>
  </div>
  <!-- desktop  -->
  <!-- <div class="w-full hidden md:block h-screen bg-gray-900">
    <div class="flex flex-col justify-center items-center h-full">
      <EmojiSadIcon class="w-52 h-52 text-gray-300" />
      <button class="px-3 py-2 text-gray-200 bg-indigo-500 outline-none hover:bg-indigo-600 shadow-lg rounded-md tracking-wide font-medium" @click="goHome">BackToHome</button>
    </div>
  </div>-->
</template>

<script setup>
import NoticeMsg from "@/utils/alert";
import { onMounted, ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ChevronLeftIcon, EmojiSadIcon } from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { useI18n } from "vue-i18n/index";

const { t } = useI18n();

const router = useRouter();
const address = ref("TGz4Ugg4uTW5J4T2HcfiXGCbwhUfixRWWK");

const store = useStore();
const user = computed(() => store.getters["user/USER"]);
const service = computed(() => store.getters["app/SERVICE"]);

const goService = () => {
  console.log(service.value);
  if (service.value !== undefined) {
    return window.open(service.value);
  }
};

const goBack = () => {
  router.go(-1);
};

/** check coin address */
function checkArray() {
  let val = user.value.adress;
  // console.log(val, "vallllllllllllllllllllllllllllllllllll is ***************");
  // if (val.length > 0 && Array.isArray(val)) {
  //   return val;
  // }
  if (val?.length > 0 && Array.isArray(val)) {
    return val;
  }
}

let activeTab = ref(1);

const goHome = () => {
  router.push("/");
};

const innerWidth = ref(window.innerWidth);

const changeWindowSize = () => {
  innerWidth.value = window.innerWidth;
};

const copyAddress = (copyTxt) => {
 // var text_to_copy = document.getElementById("textToBecopied").innerHTML;
  var text_to_copy = copyTxt;

  if (!navigator.clipboard) {
    document.execCommand("copy", text_to_copy);
    NoticeMsg.Message("copy success", "success");
  } else {
    navigator.clipboard
      .writeText(text_to_copy)
      .then(function () {
        NoticeMsg.Message("copy success", "success");
      })
      .catch(function (e) {
        console.error("err",e); // error
      });
  }
};

watch(
  () => innerWidth.value,
  () => {
    if (innerWidth.value > 768) {
      router.push("/wallet");
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  window.addEventListener("resize", changeWindowSize);
});
</script>

<style  scoped>
</style>