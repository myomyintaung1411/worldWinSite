<template>
  <div class="hidden sm:block bg-slate-600">
    <div class="bg-transparent">
      <div class="bg_img">
        <div @click="goSportGame" class="relative md:max-w-3xl lg:max-w-7xl w-full flex sm:flex-col md:flex-row my-7 items-center justify-center mx-auto">
          <img src="@/assets/sport.png" alt="sport" draggable="false" class="w-full h-fit object-cover" />
        </div>
      </div>
    </div>
  </div>
  <!-- mobile device -->
  <div class="sm:hidden w-full px-2 py-4 mt-1 bg-gray-700 mx-auto">
    <div class="py-4 mx-auto px-3 rounded-lg shadow-lg bg-slate-800">
      <h3 class="text-center py-1 text-gray-50 text-2xl">{{t('s')}}</h3>
      <p class="text-center py-1 text-gray-400 text-md animate-fade ">{{t('sport_text')}}</p>
      <!-- <p v-if="mobiletab === 1" class="text-center py-1 text-gray-400 text-md animate-fade">全亚洲口碑最好的体育娱乐平台，信誉卓越、匠心独运。提供全行业赔率最高的体育赛事投注！满足玩家需求!</p> -->
      <div class="w-full px-2 py-3 sm:px-0">
        <div class="flex bg-gray-900/20 rounded-xl">
          <div>
            <div class="shadow-lg rounded-lg bg-slate-700 w-full text-center m-auto relative">
              <a class="w-full block h-full">
                <img alt="blog photo" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/model-ob.7dcd5c1915abc992362ee79f936845e7.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="h-fit w-full object-cover animate-fade" />
                <div class="w-full py-2">
                  <button @click="goSportGame" class="button__">{{t('play_g')}}</button>
                </div>
              </a>
              <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/ty/anm-ob-1.e2d93640f3456429c6182d1aac07e3c8.png?x-oss-process=image/resize,m_lfit,w_248/format,webp" class="venueStyle__anm__3WJmq w-12 left-3 top-5" />
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
import { useI18n } from "vue-i18n/index";
import { UserRemoveIcon } from "@heroicons/vue/outline";
const activeBtn = ref(1);
const mobiletab = ref(0);

const { t } = useI18n();

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
  let username;
  let pass;
  let acc = localStorage.getItem("a");
  let local_pass = localStorage.getItem("p");
  console.log(acc, local_pass, "acc and local pass");
  if (
    (acc && local_pass !== null) ||
    (acc && local_pass !== "") ||
    (acc && local_pass !== undefined)
  ) {
    username = JSON.parse(AES.decrypt(acc, gameEn.value)).split(";")[0];
    pass = JSON.parse(AES.decrypt(local_pass, gameEn.value)).split(";")[0];
  }
  console.log(username, pass, "username and pass");
  if (
    (lToken && gameUrl.value.sportUrl && username && pass !== null) ||
    (lToken && gameUrl.value.sportUrl && username && pass !== undefined) ||
    (lToken && gameUrl.value.sportUrl && username && pass !== "")
  ) {
    let data = {
      name: username,
      password: md5(pass),
    };
    var endata = AES.encrypt(JSON.stringify(data), gameEn.value);
    console.log(encodeURIComponent(endata), "endata");
    window.open(
      gameUrl.value.sportUrl + `?token=${encodeURIComponent(endata)}`
    );
  } else {
    return Swal.fire({
      title: t('remider'),
      text: t('login_err'),
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
  background-image: url("@/assets/bg.jpg");
  height: 700px;
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