<template>
  <div class="hidden sm:block bg-slate-600">
    <div class="bg-transparent">
      <div class="bg_img">
        <div class="relative md:max-w-7xl lg:max-w-7xl w-full flex sm:flex-col lg:flex-row items-center justify-center mx-auto my-0">
          <div class="flex flex-col w-[490px] h-96">
            <img v-if="activeBtn == 1" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/title-ob.1da7393cb903c73f1cd6c5767f21c8c2.png?x-oss-process=image/resize,m_lfit,w_900/format,webp" class="venueStyle__title__K3KhH w-fit mt-5 animate-fade" />
            <!-- <img v-if="activeBtn == 2" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/title-bg.fbe88613e414cd2722858ef25a8c9c36.png?x-oss-process=image/resize,m_lfit,w_900/format,webp" class="venueStyle__title__K3KhH w-fit mt-5 animate-fade" />
            <img v-if="activeBtn == 3" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/title-ag.a7d1eddb77ba19b4349a58438cddb991.png?x-oss-process=image/resize,m_lfit,w_784/format,webp" class="venueStyle__title__K3KhH w-fit mt-5 animate-fade" />
            <img v-if="activeBtn == 4" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/title-ebet.167460d807c365054018374a86fac2c1.png?x-oss-process=image/resize,m_lfit,w_1008/format,webp" class="venueStyle__title__K3KhH w-fit mt-5 animate-fade" />-->
            <span class="text-base mt-2 ml-1 text-blue-500">
              <span v-if="activeBtn == 1" class="animate-fade">
                业内独家多机位百家乐真人游戏，惊艳、
                美丽、专业的荷官，高清真实的现场环境，为您呈现奢华游戏体验！
              </span>
              <!-- <span v-if="activeBtn == 2" class="animate-fade">为您提供多款平台真人娱乐游戏，高清真实画面，美艳靓丽的荷官陪您体验亲临现场般的精彩游戏！</span>
              <span v-if="activeBtn == 3" class="animate-fade">有全球首创6张牌先发、VIP包桌、咪牌百家乐、智控模式百家乐及竞咪互动百家乐等游戏。</span>
              <span v-if="activeBtn == 4" class="animate-fade">拥有百位训练有素的专业荷官，仿真实的赌场环境，稳定的高端设备，为您呈现奢华百家乐，玩法不重样。</span>-->
              <ul class="w-[350px] flex justify-between mt-7 animate-fade">
                <li class="flex flex-col items-center">
                  <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/icon-1.a22b97f337ffbc181e0a62558dc609b6.png?x-oss-process=image/resize,m_lfit,w_60/format,webp" class="w-8" />
                  <span class="text-blue-500 mt-2">百家乐</span>
                </li>
                <li class="flex flex-col items-center">
                  <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/icon-2.589a9db6ce0a5e965a797843c7e27ced.png?x-oss-process=image/resize,m_lfit,w_60/format,webp" class="w-8" />
                  <span class="text-blue-500 mt-2">龙虎</span>
                </li>
                <li class="flex flex-col items-center">
                  <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/icon-3.9aa174e9d05f2451283fa8220678554e.png?x-oss-process=image/resize,m_lfit,w_60/format,webp" class="w-8" />
                  <span class="text-blue-500 mt-2">骰宝</span>
                </li>
                <li class="flex flex-col items-center">
                  <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/icon-4.e2a168915d33fdef12434ac275146c8f.png?x-oss-process=image/resize,m_lfit,w_60/format,webp" class="w-8" />
                  <span class="text-blue-500 mt-2">轮盘</span>
                </li>
                <li class="flex flex-col items-center">
                  <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/icon-5.70e44006894fa46044ff62ff22b4a429.png?x-oss-process=image/resize,m_lfit,w_60/format,webp" class="w-8" />
                  <span class="text-blue-500 mt-2">牛牛</span>
                </li>
              </ul>
            </span>
            <img @click="gorealBet()" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/btn.1cfd2c8e17e20f1631dd11d7504e717d.png?x-oss-process=image/resize,m_lfit,w_352/format,webp" class="venueStyle__btn__HuPwB cursor-pointer text-base flex items-center mt-6 -ml-1 w-44" />
          </div>
          <!--  -->
          <div class="relative sm:w-[500px] lg:w-[800px] lg:h-[800px]">
            <img v-if="activeBtn == 1" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/model-ob.d66cd8e02a47cf7e68db142912dd5b26.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="w-full lg:-ml-28 animate-fade" />
            <img v-if="activeBtn == 2" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/model-bg.1caecccc2eaa29e9ef3cdc116b696b92.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="w-full -ml-28 animate-fade" />
            <img v-if="activeBtn == 3" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/model-ag.2169b1632f5e8a0a9455e6c85b69eade.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="w-full -ml-28 animate-fade" />
            <img v-if="activeBtn == 4" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/model-ebet.91d455dfc7fe7e045b761fce91674c92.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="w-full -ml-28 animate-fade" />
          </div>
          <!-- tab  -->
          <!-- <ul class="flex flex-col -ml-[132px]">
            <li @click="BtnClick(1)" class="mb-[5px] cursor-pointer z-10">
              <img v-if="activeBtn == 1" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-obzr-active.58cb899b5fa2695a3338f5c8446f7f42.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" class="w-[184px]" />
              <img v-else src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-obzr-def.ec6ce2c3b6be02b38c82ecdf86fe9a19.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" class="w-[184px] hoverbounce" />
            </li>
            <li @click="BtnClick(2)" class="mb-[5px] cursor-pointer z-10">
              <img v-if="activeBtn == 2" class="w-[184px]" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-bgzr-active.6f9ca0a621e5c7b52e08c2e2bb665621.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" />
              <img v-else class="w-[184px] hoverbounce" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-bgzr-def.13795f3ed5303f01d00133489477547b.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" />
            </li>
            <li @click="BtnClick(3)" class="mb-[5px] cursor-pointer z-10">
              <img v-if="activeBtn == 3" class="w-[184px]" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-agzr-active.e2d9e95ce661a87b76991deccabfcba2.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" />
              <img v-else class="w-[184px] hoverbounce" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-agzr-def.27526414c38b9e146ec4b60c83dc13c8.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" />
            </li>
            <li @click="BtnClick(4)" class="mb-[5px] cursor-pointer z-10">
              <img v-if="activeBtn == 4" class="w-[184px]" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-ebetzr-active.52fb06f9847a56c0653ea0482a95b764.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" />
              <img v-else class="w-[184px] hoverbounce" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/tabs/tab-ebetzr-def.24edf776029089d695f1fa422e295281.png?x-oss-process=image/resize,m_lfit,w_368/format,webp" />
            </li>
          </ul>-->
          <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-1.c2c95beac7b57cad2e6711b6c97ea63a.png?x-oss-process=image/resize,m_lfit,w_144/format,webp" class="venueStyle__anm__3WJmq w-[72px] top-[94px] left-[-201px]" />
          <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-2.0ba124fbac5f79fc4f688870dcd6c251.png?x-oss-process=image/resize,m_lfit,w_136/format,webp" class="venueStyle__anm__3WJmq w-[68px] left-[235px] top-[664px]" />
          <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-3.35306cd51b3a351d3dea16f7d0b41a51.png?x-oss-process=image/resize,m_lfit,w_92/format,webp" width="46px" class="venueStyle__anm__3WJmq w-[46px] top-[377px] left-[552px]" />
          <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-4.8bb599d862699b9f8ee9adf07fa91368.png?x-oss-process=image/resize,m_lfit,w_132/format,webp" class="venueStyle__anm__3WJmq w-[66px] left-[992px] top-[186px]" />
          <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-5.a3d992b84fa2530cd3c9f6a5003ac1bb.png?x-oss-process=image/resize,m_lfit,w_184/format,webp" class="venueStyle__anm__3WJmq w-[92px] left-[1028px] top-[577px]" />
        </div>
      </div>
    </div>
  </div>

  <!-- mobile device -->
  <div class="sm:hidden w-full py-4 px-2 mt-1 bg-gray-700 mx-auto">
    <div class="py-4 mx-auto px-3 rounded-lg shadow-lg bg-slate-800">
      <h3 class="text-center py-1 text-gray-50 text-2xl">RealBet Section</h3>
      <p  class="text-center py-1 text-gray-400 text-md animate-fade">业内独家多机位百家乐真人游戏，惊艳、 美丽、专业的荷官，高清真实的现场环境，为您呈现奢华游戏体验！</p>
       <div class=" flex bg-gray-900/20 rounded-xl">
        <div class="py-1">
          <div class="shadow-lg rounded-lg bg-slate-700 w-full text-center m-auto relative">
            <a class="w-full block h-full">
              <img alt="blog photo" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/model-ob.d66cd8e02a47cf7e68db142912dd5b26.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="h-fit w-full object-cover animate-fade" />
              <div class="w-full p-4">
                <button @click="gorealBet()" class="button__">进入游戏</button>
              </div>
            </a>
            <img  draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-1.c2c95beac7b57cad2e6711b6c97ea63a.png?x-oss-process=image/resize,m_lfit,w_144/format,webp" class="venueStyle__anm__3WJmq w-14 top-0 left-0" />
            <img  draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-2.0ba124fbac5f79fc4f688870dcd6c251.png?x-oss-process=image/resize,m_lfit,w_136/format,webp" class="venueStyle__anm__3WJmq w-14 right-0 bottom-0" />
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import md5 from "js-md5";
import AES from "@/utils/aes";
const activeBtn = ref(1);
const mobiletab = ref(0);

const store = useStore();

const gameUrl = computed(() => store.getters["app/GameURL"]);
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;

const gameEn = computed(() => store.getters["user/Game_En"]);
const UserInfo = store.getters["user/GAME_ENTER_INFO"];

const router = useRouter();

const BtnClick = (n) => {
  activeBtn.value = n;
};
const changedTab = (index) => {
  mobiletab.value = index;
};

const gorealBet = () => {
  console.log(gameUrl.value.realBetUrl, lToken, " is ******");
  if (
    (lToken &&
      gameUrl.value.realBetUrl &&
      UserInfo.account &&
      UserInfo.pass !== null) ||
    (lToken &&
      gameUrl.value.realBetUrl &&
      UserInfo.account &&
      UserInfo.pass !== undefined) ||
    (lToken &&
      gameUrl.value.realBetUrl &&
      UserInfo.account &&
      UserInfo.pass !== "")
  ) {
    let data = {
      name: UserInfo.account,
      password: md5(UserInfo.pass),
    };
    var endata = AES.encrypt(JSON.stringify(data), gameEn.value);
    console.log(endata, "endata");
    window.open(gameUrl.value.realBetUrl + `?token=${encodeURIComponent(endata)}`);
  } else {
    return Swal.fire({
      title: "温馨提示",
      text: "请先登录账号,才能了解更多",
      icon: "error",
      showCancelButton: false,
      allowOutsideClick: true,
      backdrop: true,
      confirmButtonText: "确定",
      background: "#374151",
      confirmButtonColor: "#a07c51",
      color: "#fff",
    }).then((res) => {
      if (res.isConfirmed) {
       // localStorage.clear();
        router.push("/login");
      }
    });
  }
};
</script>

<script>
export default {
  methods: {
    name() {
      console.log("nnnnnnnnnnn");
    },
  },
};
</script>


<style  scoped>
.hoverbounce {
  @apply transition ease-in-out delay-150 
   hover:-translate-y-1 
  hover:scale-110 duration-300;
}
.button__ {
  @apply px-4 py-4  w-1/2 rounded-lg text-sm font-medium border-0  focus:outline-none outline-none text-black
           transition  bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo active:bg-gray-700;
}

.bg_img {
  /* background-image: url("https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/bg.5858f002c2ae068f4d2657e4074dc97f.jpg?x-oss-process=image/resize,m_lfit,h_1600/format,webp");
  height: 800px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover; */
  overflow: hidden;
}

.venueStyle__title__K3KhH {
  margin-top: 22px;
}

.venueStyle__btn__HuPwB {
  cursor: pointer;
  font-size: 18px;
  color: rgb(255, 255, 255);
  text-shadow: rgb(47, 91, 235) 1px 1px 2px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transform: translateY(0px);
  transition: transform 0.3s ease 0s;
}

.venueStyle__anm__3WJmq {
  position: absolute;
  z-index: 0;
  animation: 2s linear 0s infinite normal none running
    venueStyle__anmsUpAnima__AsnhQ;
}
@keyframes venueStyle__anmsUpAnima__AsnhQ {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>