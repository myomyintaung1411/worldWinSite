<template>
  <div id="appdownload"  class="md:pt-7 pt-3 sm:py-3 md:py-0 px-2">
    <div   class="md:max-w-7xl lg:max-w-7xl w-full py-4 mx-auto bg-HomecardBg shadow-lg rounded-md">
      <h3  class="text-center py-1 text-gray-50 text-2xl">{{t('app_down')}}</h3>
      <!-- <p class="text-center py-1 text-gray-400 text-md">Below is the usage of app blah blah blah shit.</p> -->
      <!-- <div class="py-2 flex justify-center sm:justify-end">
      <div class="flex space-x-3  sm:px-2 sm:py-5">
        <button @click="BtnClick(1)" class="button__" :class="{ actvie__btn: activeBtn == 1 }">体育APP</button>
        <button @click="BtnClick(2)" class="button__" :class="{ actvie__btn: activeBtn == 2 }">彩票APP</button>
        <button @click="BtnClick(3)" class="button__" :class="{ actvie__btn: activeBtn == 3 }">棋牌APP</button>
      </div>
      </div>-->
      <div  class="flex flex-col py-2 w-full" :class="innerWidth > 860 ? 'md:flex-row' : ''">
        <div class="w-full p-3 self-center" :class="innerWidth > 860 ? 'md:w-[40%]' : 'w-full'">
          <img :class="innerWidth < 860 && innerWidth > 400 ? 'w-[50%]' : ''" v-if="activeBtn == 1" draggable="false" src="@/assets/2222.png" 
          alt class="h-auto animate-fade mx-auto" />
          <img :class="innerWidth < 860 && innerWidth > 400 ? 'w-[50%]' : ''" v-if="activeBtn == 2" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/app-download/cp.f7fd720b5960205cd8dfeaec4c048379.png?x-oss-process=image/resize,m_lfit,w_1396/format,webp" alt class="w-full h-auto animate-fade" />
          <img :class="innerWidth < 860 && innerWidth > 400 ? 'w-[50%]' : ''" v-if="activeBtn == 3" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/app-download/qp.07e41c5b711af6021e3cc2378e21b948.png?x-oss-process=image/resize,m_lfit,w_1392/format,webp" alt class="w-full h-auto animate-fade" />
          <!-- <img v-if="activeBtn == 4" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/app-download/zh.362e9e141ea5be7505e921577983e622.png?x-oss-process=image/resize,m_lfit,w_1396/format,webp" alt class="w-full h-auto animate-fade" /> -->
        </div>

        <div class="flex flex-col" :class="innerWidth > 860 ? 'md:w-[60%] ' : 'w-full'">
          <!-- <h3 class="text-center text-2xl">This is a paragraph of abc def</h3> -->
          <p v-if="activeBtn === 1" class="text-left animate-fade px-4 lg:px-24">
           {{t('down_text')}}
          </p>
          <!-- <p v-if="activeBtn === 2" class="text-center animate-fade px-4 lg:px-24">
            业内赔率最高！覆盖世界各地赛事，让球、大小、半全场、波胆、单双、总入球、
            连串过关等多元竞猜。更有动画直播、视频直播，让您体验轻松聊球，娱乐投注两不误。
          </p>
          <p v-if="activeBtn === 3" class="text-center animate-fade px-4 lg:px-24">
            欧宝娱乐旗下彩票专属APP，最专业的彩票原生APP，集各类彩票游戏于一身，极速开彩结算，
            给您带来刺激的游戏体验，操作简单，随心所欲的进行掌上娱乐！
          </p>
          <p v-if="activeBtn === 4" class="text-center animate-fade px-4 lg:px-24">
            业内最专业棋牌专属APP，抢庄牛牛、龙虎斗、百家乐、炸金花、经典棋牌应有尽有，更有3D、
            2D模式随心切换极致享受，扫码即刻体验“非同凡响”3D棋牌竞技场。
          </p> -->

          <div v-if="gameUrl?.android && gameUrl?.ios !== undefined || gameUrl?.android && gameUrl?.ios !== null" class="flex flex-col sm:flex-row mx-auto">
            <div class="cursor-pointer my-5   overflow-hidden">
              <div class="shadow-lg md:mx-auto mx-2 px-2 max-w-[300px]  ">
                <a  class="block h-full animate-fade">
                  <figure @click="downloadImage(0)" class="inline-block -mb-2 relative w-full">
                    <vue-qrcode  :value="gameUrl.android" ref="qr" class=" sm:max-h-fit mx-0 my-0   w-full  rounded-t-lg" tag="img" :options="{
                     errorCorrectionLevel: 'Q',
                     width:300,
                     type:'png'
                      }"></vue-qrcode>
                    <img class="qrcode__image" src="@/assets/home/Android.png"  alt="qrcode" />
                  </figure>

                  <div class="bg-slate-700 p-3 rounded-b-lg text-left">
                    <p class="text-indigo-500 text-md font-medium"></p>
                    <p class="text-white text-md font-medium mb-2">Scan QrCode to Download App</p>
                    <p class="text-gray-300 font-light text-md">Support all Android  devices</p>
                     <a :href="gameUrl.android" target="_blank" class="mt-1
                     game__play_div
                    
                    ">Download Android App</a>
                  </div>
                </a>
              </div>
            </div>

            <div class="cursor-pointer my-5">
              <div class="shadow-lg md:mx-auto mx-2 px-2 max-w-[300px]">
                <a class="block h-full animate-fade">
                  <figure @click="downloadImage(1)" class="inline-block -mb-2 relative w-full">
                    <vue-qrcode :value="gameUrl.ios" class="sm:max-h-fit w-full  rounded-t-lg" tag="img" ref="Iosqr" :options="{
                     errorCorrectionLevel: 'Q',
                     width:300,
                     type:'png'
                      }"></vue-qrcode>
                    <img class="qrcode__image" src="@/assets/home/ios.png"  alt="qrcode" />
                  </figure>

                  <div class="bg-slate-700 p-3 rounded-b-lg text-left">
                    <p class="text-indigo-500 text-md font-medium"></p>
                    <p class="text-white text-md font-medium mb-2">Scan QrCode to Download App</p>
                    <p class="text-gray-300 font-light text-md">Support all IOS  devices</p>
                    <a :href="gameUrl.ios" target="_blank" class="mt-1
                     game__play_div
                    
                    ">Download IOS App</a>
                  </div>
                </a>
              </div>
            </div>
            <!-- <div class="  shadow-lg rounded-lg h-90 lg:w-64 cursor-pointer mx-1 md:mx-auto md:my-2 lg:my-2">
            <a href="#" class="w-full block h-full animate-fade ">
              <img alt="blog photo" 
              src="@/assets/home/qrcode.png" 
              lass="max-h-40 w-full object-cover" />
              <div class="bg-slate-700 w-full p-4 ">
                <p class="text-indigo-500 text-md font-medium"></p>
                <p class="text-white text-xl font-medium mb-2">扫码下载APP</p>
                <p class="text-gray-300 font-light text-md">支持IOS & Android全设备</p>
                <p class="text-blue-300 font-light text-md ">https://www.obvip34.app</p>
              </div>
            </a>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- mobile device -->
  <!-- <div  class="md:hidden   w-full py-2  bg-gray-700 mx-auto"> 
  <div class="md:hidden max-w-sm py-4 mx-auto px-3  bg-slate-800 mt-3">
    <h3 class="text-center py-1 text-gray-50 text-2xl">App Download Section</h3>
    <p class="text-center py-1 text-gray-400 text-md">Below is the usage of app blah blah blah shit.</p>
    <div class="w-full px-2 py-3 bg-slate-900 rounded-lg shadow-lg  sm:px-0">
      <TabGroup>
        <TabList class="flex p-1 space-x-1 bg-gray-900/20 rounded-xl">
          <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
            <button :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
              'focus:outline-none outline-none bg-gray-700',
              selected
                ? ' shadow text-emerald-500'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]">{{ category }}</button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2">
          <TabPanel  v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
            ' rounded-xl',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-opacity-60',
          ]">
             <div  v-for="post in posts" :key="post.id" class="py-1">
              <div class=" shadow-lg rounded-lg w-full text-center  m-auto">
                <a href="#" class="w-full block h-full">
                  <img alt="blog photo" :src="post.src" class="max-h-40 w-full object-cover" />
                  <div class="bg-slate-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium"></p>
                    <p class="text-white text-xl font-medium mb-2">{{post.title}}</p>
                    <p class="text-gray-300 font-light text-md">{{post.title}}</p>
                    <p class="text-blue-300 font-light text-md tex">https://www.obvip34.app</p>
                  </div>
                </a>
              </div>
              </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
  </div>-->
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n/index";
import axios from "axios";

const { t } = useI18n();
const qr = ref('')
const Iosqr = ref('')
const activeBtn = ref(1);
let categories = ref({
  体育APP: [
    {
      id: 1,
      title: "扫码下载APP",
      date: "支持IOS & Android全设备",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "扫码下载APP now what?",
      date: "2h ago",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ],
  体育AP2: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "支持IOS & Android全设备",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ],
  体育AP3: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ],
  体育AP4: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ],
});

const store = useStore();

const gameUrl = computed(() => store.getters["app/GETAPPURL"]);

const innerWidth = ref(window.innerWidth);

const downloadImage = (n) => {
       const androidImage = qr.value.$el.src
       const iosImage = Iosqr.value.$el.src
       switch (n) {
         case 0:
        let link = document.createElement("a");
        link.href = androidImage;
        link.setAttribute("download", "android.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
          break;
        case 1:
        const linkIos = document.createElement("a");
        linkIos.href = iosImage;
        linkIos.setAttribute("download", "ios.png"); //or any other extension
        document.body.appendChild(linkIos);
        linkIos.click();
          break;
       
        default:
          break;
       }
}

const BtnClick = (n) => {
  activeBtn.value = n;
};
const changeWindowSize = () => {
  innerWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", changeWindowSize);
});
</script>

<style  scoped>
.button__ {
  @apply px-4 py-2 rounded-lg text-sm font-medium border-0  
           transition text-white bg-gray-700 focus:outline-none outline-none;
}
.actvie__btn {
  @apply bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo text-black;
}
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

.game__play_div {
  @apply  w-[99%] py-3 mx-auto flex items-center justify-center bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo text-black  shadow-lg
   cursor-pointer tracking-wide  text-base font-medium text-center;
}
</style>