<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-10 w-full py-2 px-2 flex items-center bg-slate-700">
      <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-primary" />
      <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">{{t('online_re')}}</span>
    </div>
    <div v-if="checkArray()">
      <div class="mx-auto my-3 h-fit w-[80%]" v-for="(coin,i) in arrayUser(user.adress)" :key="i">
        <div class="w-full mx-auto">
          <div class="mx-2 my-2 rounded-lg 
         shadow-lg bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo py-3 px-3">
            <!-- <p class="text-md font-bold text-gray-700">{{coin.name}}</p> -->
            <div class="space-x-2 flex items-center justify-between">
              <span id="textToBecopied"
                class="text-md overflow-hidden text-ellipsis w-11/12 text-gray-500 py-2 leading-tight">{{coin.token}}</span>
              <div @click="copyAddress(coin.token)" title="copy address"
                class="text-md text-black rounded-full cursor-pointer shadow-lg px-1 inline-block w-fit bg-HomecardBg py-1 leading-tight">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <figure class="   relative w-[230px]">
                <vue-qrcode :value="coin.token" class=" w-full  " tag="img" :options="{
                   errorCorrectionLevel: 'M',
                    width:300
                    }"></vue-qrcode>
              </figure>
            </div>
            <div class="text-[15px] text-gray-700 text-center w-full pt-2">{{t('contact__')}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-else class="flex w-full h-full flex-col mx-auto  justify-center text-center items-center">
      <div class="py-3">
        <img src="@/assets/home/noRecord.png" alt="norecord" class="w-fit h-[165px]" />
      </div>
      <div class="py-3  w-full">
        <p class="text-gray-300 tracking-wide text-base font-medium">{{t('coin_add')}}</p>
      </div>
    </div> -->
    <div v-else>
      <div class="mx-auto my-3 h-fit w-[80%]" v-for="(coin,i) in coinAdd" :key="i">
        <div class="w-full mx-auto">
          <div class="mx-2 my-2 rounded-lg 
         shadow-lg bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo py-3 px-3">
            <p class="text-md font-bold text-gray-700">{{coin.name}}</p>
            <div class="space-x-2 flex items-center justify-between">
              <span id="textToBecopied"
                class="text-md overflow-hidden text-ellipsis w-11/12 text-gray-500 py-2 leading-tight">{{coin.token}}</span>
              <div @click="copyAddress(coin.token)" title="copy address"
                class="text-md text-black rounded-full cursor-pointer shadow-lg px-1 inline-block w-fit bg-HomecardBg py-1 leading-tight">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <figure class="   relative w-[230px]">
                <vue-qrcode :value="coin.token" class=" w-full  " tag="img" :options="{
                   errorCorrectionLevel: 'M',
                    width:300
                    }"></vue-qrcode>
              </figure>
            </div>
            <div class="text-[15px] text-gray-700 text-center w-full pt-2">Please contact customer service after
              transfer !</div>
          </div>
        </div>
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
import allApi from "@/network/allApi.js";
import useClipboard from 'vue-clipboard3'
import Loading from "@/utils/loader";

const { t } = useI18n();

const router = useRouter();
const address = ref("TGz4Ugg4uTW5J4T2HcfiXGCbwhUfixRWWK");

const store = useStore();
const user = computed(() => store.getters["user/USER"]);
const service = computed(() => store.getters["app/SERVICE"]);
const coinAdd = ref(null)
const userId__ = store.state.user.userId;
const { toClipboard } = useClipboard()
const innerWidth = ref(window.innerWidth);

const goService = () => {
  console.log(service.value);
  if (service.value) {
   // return window.open(service.value);
    //router.push("/service");
    let url = service.value + '&nick_name=' +  user?.value.name
    router.push({path:'/service',query:{url:url}})
  } else {
    return Alert.Message("please login", "error");
  }
};

/** check coin address */
function checkArray() {
  let val = user.value.adress;
  if (val?.length > 0 && Array.isArray(val)) {
    return val;
  }
}

const arrayUser = (user) => {
  return user.map(token => ({token}))
}

const goBack = () => {
  router.go(-1);
};

const getOfficialCoinAddress = () => {
  let userId = userId__;
  const req_ = { userId: userId };
   Loading.showLoading();
  allApi
    .getOfficialCoinAddress({ data: req_ })
    .then((res) => {
      Loading.hideLoading();
      console.log("getOfficialCoinAddress", res.data.coin_info);
      let removeCC = JSON.parse(res.data.coin_info)
      coinAdd.value = removeCC;
      console.log(removeCC, "removeCC");
    })
    .catch((e) => {
      console.log(e);
      Loading.hideLoading();
    });
};

onMounted(()=>{
   getOfficialCoinAddress()
  window.addEventListener("resize", changeWindowSize);
})

const goHome = () => {
  router.push("/");
};



const changeWindowSize = () => {
  innerWidth.value = window.innerWidth;
};

const copyAddress = async (copyTxt) => {
      try {
        await toClipboard(copyTxt)
        NoticeMsg.Message("copy success", "success");
        console.log('Copied to clipboard')
      } catch (e) {
        alert('copy error')
        console.error(e)
      }
    }

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

</script>

<style>
</style>