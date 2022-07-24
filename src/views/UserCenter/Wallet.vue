<template>
  <div class="hidden md:block w-full" style="height:700px">
    <div class="flex justify-between items-center py-3">
      <div>
        <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">{{t('online_re')}}</span>
        <!-- <span class="text-sm text-gray-300">您的总资产在这里一览无余</span> -->
      </div>
      <!-- <div class="px-2">
        <ul class="flex cursor-pointer">
          <li @click="TabClick(1)" :class="activeTab === 1 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-6 hover:bg-gray-900 text-white rounded-l-md">Personal</li>
          <li @click="TabClick(2)" :class="activeTab === 2 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-6 hover:bg-gray-900 rounded-r-md text-white">Akun</li>
        </ul>
      </div>-->
    </div>
    <!-- two card -->
    <div v-if="checkArray()">
      <!-- <div class="grid grid-cols-2 gap-4 w-full px-2">
        <div v-for="max in 1" :key="max" class="w-full">
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
      </div>-->
      <!-- multiple card -->

      <div class="mx-2 my-2">
        <div  class="w-fit 
        rounded-lg space-y-5 shadow-lg bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo py-4 px-6">
          <p class="text-md font-bold text-gray-700">USDT-TRC20</p>
          <div class="space-x-2 flex items-center">
            <span id="textToBecopied" class="text-md text-gray-500 py-2 leading-tight">{{user.adress[0]}}</span>
            <div @click="copyAddress(user.adress[0])" title="复制" class="text-md text-black rounded-full cursor-pointer shadow-lg px-1 inline-block w-fit bg-HomecardBg py-1 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
             <!-- <figure class="inline-block   relative w-full">
                <vue-qrcode :value="user.adress[0]" class="sm:max-h-52 md:max-h-56 w-full object-cover rounded-t-lg" tag="img" :options="{
                   errorCorrectionLevel: 'Q',
                    width:300
                    }"></vue-qrcode>
                    <img class="qrcode__image" src="https://avatars.githubusercontent.com/u/3456749" alt="Chen Fengyuan" />
            </figure> -->
        </div>
      </div>
    </div>

    <div v-else class="flex w-full h-full flex-col justify-center items-center">
      <div class="py-3">
        <img src="@/assets/home/noRecord.png" alt="norecord" class="w-[365px] h-[165px]" />
      </div>
      <div class="py-3">
        <span class="text-gray-300 tracking-wide text-base font-medium">{{t('coin_add')}}</span>
      </div>
      <div class="py-3">
        <button @click="goService()" class="px-6 py-2 tracking-wider text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo shadow-lg rounded-md outline-none focus:outline-none">{{t('go_ser')}}</button>
      </div>
    </div>

    <!-- <div v-if="activeTab === 2">
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
      <div class="w-full py-2 h-auto">
        <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myWallet/banner@2x.e3f22d118a5d09705365c8aa2beba33f.png?x-oss-process=image/resize,m_fixed,w_1840,h_320/quality,Q_70/format,webp" alt="unknowimg" class="object-fill w-full h-fit" />
      </div>
      <div class="flex justify-center py-3 items-center">
        <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myWallet/title-xunibi@2x.25da907cbfdba1cbdf155457034a1eab.png?x-oss-process=image/resize,m_fixed,w_908,h_48/quality,Q_70/format,webp" alt="info" class="w-[454px] h-[24px] object-cover" />
      </div>
      <div class="py-3 px-2 flex justify-center mx-auto w-full">
        <div  class="grid grid-cols-3 gap-6 place-items-center w-fit px-2">
          <div v-for="info in 3" :key="info" class="px-4 py-2 space-y-3 flex flex-col
           items-center justify-center rounded-lg shadow-lg bg-slate-700">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myWallet/xunibiqianbao@2x.22f085b46c84c6d986fe184a9d0c1ebc.png?x-oss-process=image/resize,m_fixed,w_200,h_200/quality,Q_70/format,webp" class="object-cover w-24 h-24" alt="infoimage" />
            <p class="text-gray-300 tracking-wide font-normal text-sm">USDT可存放在虚拟币钱包</p>
            <p class="text-gray-300 tracking-wide font-normal text-sm">也可从虚拟币钱包提取</p>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import NoticeMsg from "@/utils/alert";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n/index";
import allApi from "@/network/allApi.js";
const store = useStore();
const user = computed(() => store.getters["user/USER"]);
const service = computed(() => store.getters["app/SERVICE"]);
const { t } = useI18n();

 const lToken = store.state.user.token;
 const userId__ = store.state.user.userId;

/** check coin address */
function checkArray() {
  let val = user.value.adress;
  // console.log(val, "vallllllllllllllllllllllllllllllllllll is ***************");
  if (val?.length > 0 && Array.isArray(val)) {
    return val;
  }
  // if(val !== undefined || Array.isArray(val)){
  //   return val
  // }
}

//const address = ref("TGz4Ugg4uTW5J4T2HcfiXGCbwhUfixRWWK");
let activeTab = ref(1);
const TabClick = (n) => {
  activeTab.value = n;
};

const goService = () => {
  console.log(service);
  if (service.value) {
    return window.open(service.value);
  }
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
</script>

<style  scoped>
.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 15%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
}
</style>