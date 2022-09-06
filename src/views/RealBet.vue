<template>
  <div class="hidden sm:block bg-slate-600">
    <div class="bg-transparent">
      <div class="bg_img">
        <div @click="gorealBet()" class="relative md:max-w-3xl lg:max-w-7xl w-full flex sm:flex-col md:flex-row my-7 items-center justify-center mx-auto">
          <img src="@/assets/casino.png" alt="sport" draggable="false" class="w-full h-fit object-cover" />
        </div>
      </div>
    </div>
  </div>
  <!-- mobile device -->
  <div class="sm:hidden w-full py-4 px-2 mt-1 bg-gray-700 mx-auto">
    <div class="py-4 mx-auto px-3 rounded-lg shadow-lg bg-slate-800">
      <h3 class="text-center py-1 text-gray-50 text-2xl">{{t('r')}}</h3>
      <p class="text-center py-1 text-gray-400 text-md animate-fade">{{t('r_text')}}</p>
      <div class="flex bg-gray-900/20 rounded-xl">
        <div class="py-1">
          <div class="shadow-lg rounded-lg bg-slate-700 w-full text-center m-auto relative">
            <a class="w-full block h-full">
              <img alt="blog photo" draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/model-ob.d66cd8e02a47cf7e68db142912dd5b26.png?x-oss-process=image/resize,m_lfit,w_1600/format,webp" class="h-fit w-full object-cover animate-fade" />
              <div class="w-full p-4">
                <button @click="gorealBet()" class="button__">{{t('play_g')}}</button>
              </div>
            </a>
            <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-1.c2c95beac7b57cad2e6711b6c97ea63a.png?x-oss-process=image/resize,m_lfit,w_144/format,webp" class="venueStyle__anm__3WJmq w-14 top-0 left-0" />
            <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/venue/zr/anm-ob-2.0ba124fbac5f79fc4f688870dcd6c251.png?x-oss-process=image/resize,m_lfit,w_136/format,webp" class="venueStyle__anm__3WJmq w-14 right-0 bottom-0" />
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
import { useI18n } from "vue-i18n/index";
const { t } = useI18n();
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
  let  username;
  let pass
  let acc = localStorage.getItem("a");
  let local_pass = localStorage.getItem("p");
  console.log(acc, local_pass, "acc and local pass");
  if (
    (acc && local_pass !== null) ||
    (acc && local_pass !== "") ||
    (acc && local_pass !== undefined)
  )
    {
        username = JSON.parse(AES.decrypt(acc, gameEn.value)).split(";")[0];
        pass = JSON.parse(AES.decrypt(local_pass, gameEn.value)).split(";")[0];
    }
  console.log(username, pass, "username and pass");
  if (
    (lToken && gameUrl.value.realBetUrl && username && pass !== null) ||
    (lToken && gameUrl.value.realBetUrl && username && pass !== undefined) ||
    (lToken && gameUrl.value.realBetUrl && username && pass !== "")
  ) {
    let data = {
      name: username,
      password: md5(pass),
    };
    var endata = AES.encrypt(JSON.stringify(data), gameEn.value);
    console.log(encodeURIComponent(endata), "endata");
    window.open(
      gameUrl.value.realBetUrl + `?token=${endata}`
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
  background-image: url("@/assets/bg.jpg");
  height: 700px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
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