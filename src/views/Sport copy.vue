<template>
  <div class="hidden sm:block bg-slate-600">
    <div class="bg-transparent">
      <div class="bg_img">
        <div class="relative md:max-w-7xl lg:max-w-7xl w-full flex sm:flex-col md:flex-row items-center justify-center mx-auto my-0">
          <div class="w-[490px] h-[376px] flex flex-col animate-fade">
            <img v-if="activeBtn == 1" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/title-ob.2fb4385bbd8d44ff7156008bfdb5abfb.png?x-oss-process=image/resize,m_lfit,w_898/format,webp" />
            <span v-if="activeBtn == 1" class="leading-7 text-base text-blue-400 ml-1 mt-2 animate-fade">
              倾力打造的刺激火爆的体育娱乐游戏，每天为您提供千场精彩体育赛事，多种娱乐方式选择，让您拥有完美游戏体验。
              <ul class="w-[350px] flex justify-between mt-7"></ul>
            </span>
            <img draggable="false" v-if="activeBtn == 1" @click="goSportGame" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/btn.1cfd2c8e17e20f1631dd11d7504e717d.png?x-oss-process=image/resize,m_lfit,w_348/format,webp" class="w-[174px] mt-[107px] -ml-1 cursor-pointer text-xl text-gray-100 flex items-center justify-center" />
          </div>
          <!-- right -->
          <div class="relative sm:w-fit lg:w-[800px] mx-auto h-[800px]">
            <img draggable="false" v-if="activeBtn == 1" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/model-ob.7dcd5c1915abc992362ee79f936845e7.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="lg:ml-[-120px] w-fit lg:w-[800px] animate-fade" />
          </div>
          <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/anm-ob-1.e2d93640f3456429c6182d1aac07e3c8.png?x-oss-process=image/resize,m_lfit,w_248/format,webp" class="venueStyle__anm__3WJmq md:w-[120px] hidden lg:block lg:left-[-108px] top-[606px]" />
          <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/anm-ob-2.43bc2a0d8aa959e723f9f74fe387cf72.png?x-oss-process=image/resize,m_lfit,w_184/format,webp" class="venueStyle__anm__3WJmq w-16 left-[1100px] top-[645px] hidden lg:block" />
        </div>
      </div>
    </div>
  </div>
  <!-- mobile device -->
  <div class="sm:hidden w-full px-2 py-4 mt-1 bg-gray-700 mx-auto">
    <div class="py-4 mx-auto px-3 rounded-lg shadow-lg bg-slate-800">
      <h3 class="text-center py-1 text-gray-50 text-2xl">Sport Section</h3>
      <p  class="text-center py-1 text-gray-400 text-md animate-fade">倾力打造的刺激火爆的体育娱乐游戏，每天为您提供千场精彩体育赛事，多种娱乐方式选择，让您拥有完美游戏体验</p>
      <!-- <p v-if="mobiletab === 1" class="text-center py-1 text-gray-400 text-md animate-fade">全亚洲口碑最好的体育娱乐平台，信誉卓越、匠心独运。提供全行业赔率最高的体育赛事投注！满足玩家需求!</p> -->
      <div class="w-full px-2 py-3 sm:px-0">
        <div class="flex  bg-gray-900/20 rounded-xl">
          <div>
            <div class="shadow-lg rounded-lg bg-slate-700 w-full text-center m-auto relative">
              <a class="w-full block h-full">
                <img alt="blog photo" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/model-ob.7dcd5c1915abc992362ee79f936845e7.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" 
                class="h-fit w-full object-cover animate-fade" />
                <div class="w-full py-2">
                  <button @click="goSportGame" class="button__">进入游戏</button>
                </div>
              </a>
              <img  draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/anm-ob-1.e2d93640f3456429c6182d1aac07e3c8.png?x-oss-process=image/resize,m_lfit,w_248/format,webp" class="venueStyle__anm__3WJmq w-12 left-3 top-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import md5 from "js-md5";
import AES from "@/utils/aes";
import { UserRemoveIcon } from "@heroicons/vue/outline";
const activeBtn = ref(1);
const mobiletab = ref(0);

const store = useStore();

const gameUrl = computed(() => store.getters["app/GameURL"]);
//const gameUrl = store.state.app.gameUrl;
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;
const router = useRouter();
const gameEn = computed(() => store.getters["user/Game_En"]);
const UserInfo = store.getters["user/GAME_ENTER_INFO"];

let categories = ref({
  Recent: [
    {
      id: 1,
      title: "ClickHere",
      src: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/model-ob.7dcd5c1915abc992362ee79f936845e7.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp",
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Hello",
      src: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/model-xm.1d058d9d4c85d8c70030c85609df741f.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp",
    },
  ],
});
const changedTab = (index) => {
  mobiletab.value = index;
};

const goSportGame = () => {
  console.log(gameUrl.value.sportUrl, gameEn.value, " sporturl is ******");
  console.log(UserInfo.account, UserInfo.pass, "useraccount and pass");
  if (
    (lToken &&
      gameUrl.value.sportUrl &&
      UserInfo.account &&
      UserInfo.pass !== null) ||
    (lToken &&
      gameUrl.value.sportUrl &&
      UserInfo.account &&
      UserInfo.pass !== undefined) ||
    (lToken &&
      gameUrl.value.sportUrl &&
      UserInfo.account &&
      UserInfo.pass !== "")
  ) {
    let data = {
      name: UserInfo.account,
      password: md5(UserInfo.pass),
    };
    var endata = AES.encrypt(JSON.stringify(data), gameEn.value);
    console.log(encodeURIComponent(endata), "endata");
    window.open(
      gameUrl.value.sportUrl + `?token=${encodeURIComponent(endata)}`
    );
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
      confirmButtonColor: "#f5cb78",
      buttonsStyling: "#000",
      color: "#fff",
    }).then((res) => {
      if (res.isConfirmed) {
       // localStorage.clear();
        router.push("/login");
      }
    });
  }
};
const BtnClick = (n) => {
  activeBtn.value = n;
};
</script>

<style  scoped>
.main__ {
  @apply md:max-w-7xl lg:max-w-7xl mt-3 w-full py-4 mx-auto bg-slate-700 rounded-lg shadow-lg;
}
.actvie__btn {
  @apply bg-blue-800;
}

/* current not use */

.button__ {
  @apply px-4 py-4  w-1/2 rounded-lg text-sm font-medium border-0  focus:outline-none 
           outline-none  text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo;
}

.bg_img {
  background-image: url("https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/cp/bg.fc65f44ab24a3b88ea360b7b59a2fa52.jpg?x-oss-process=image/resize,m_lfit,h_1600/format,webp");
  height: 800px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  overflow: hidden;
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