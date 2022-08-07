<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
import { XIcon } from "@heroicons/vue/outline";
// import Header from "@/components/Header.vue";
import Carousal from "@/components/Carousal.vue";
import Info from "@/components/Info.vue";
import CardUi from "@/components/Card_ui.vue";
import AppDown from "@/components/App_Download.vue";
import GameSection from "@/components/GameSection.vue";
import GridCard from "@/components/GridCard.vue";
import { onMounted, ref, onBeforeUpdate,computed } from "vue";
import { useRouter,useRoute } from "vue-router";
import allApi from "@/network/allApi.js";
import { useStore } from "vuex";
import Loading from "@/utils/loader";
import Alert from "@/utils/alert";
import { useI18n } from "vue-i18n/index";
const store = useStore();
const scTimer = ref(0);
const scY = ref(0);
const router = useRouter();
const route = useRoute();
const showAdOne = ref(false);
const showAdTwo = ref(false);
const { t } = useI18n();
const marquee = ref("");

const service = computed(() => store.getters["app/SERVICE"]);




function handleScroll() {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
}
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function goApp() {
  router.push("/app");
}
const closeAd = (n) => {
  if (n === 1) {
    showAdOne.value = false;
  }
  if (n === 2) {
    showAdTwo.value = false;
  }
};
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;

const getWelcomeMsg = () => {
  const token = {
    Authorization: `${lToken}`,
  };
  allApi
    .getWelcomeMsg()
    .then((res) => {
      console.log("getwelcomemsg", res);
      marquee.value = res.data.message;
    })
    .catch((e) => {
      console.log(e);
    });
};

// const getServiceLink = () => {
//   let userId = userId__;
//   const req_ = { userId: userId };
//   allApi
//     .getServiceLink({ data: req_ })
//     .then((res) => {
//       console.log("getServiceLink", res);
//       store.commit("app/Service", res.data.service_link);
//       serviceLink.value = res.data.service_link;
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

const goService = () => {
  console.log(service.value);
  if (service.value) {
   // return window.open(service.value);
    router.push("/service");
  } else {
    return Alert.Message("please login", "error");
  }
};



onMounted(() => {
  getWelcomeMsg();
  //getServiceLink();
  // getUserInfo()
  console.log("enterrrrrrrrrrr mounted");
  window.addEventListener("scroll", handleScroll);
});
</script>



<template>
  <div class="_home">
    <Carousal></Carousal>
    <Info :marquee="marquee"></Info>
    <CardUi></CardUi>
    <AppDown></AppDown>
    <GameSection></GameSection>
    <GridCard></GridCard>
    <div class="hidden md:flex sidebar__">
      <div  @click="goService()" class="sidebar__item__3ZxEn bg-slate-900 hover:bg-slate-700">
        <div>
          <div class="sidebar__kefu__2c9mp"></div>
          <p>{{t('service')}}</p>
        </div>
      </div>
      <div v-show="scY > 800" @click="toTop" class="sidebar__item__3ZxEn bg-slate-900 hover:bg-slate-700">
        <div>
          <div class="sidebar__kefu__2c9mp scroll_img animate-bounce"></div>
          <p>{{t('top')}}</p>
        </div>
      </div>
    </div>
    <div class="sm:hidden sidebar__">
      <div  @click="goService()" class="sidebar__item__3ZxEn bg-slate-900 hover:bg-slate-700">
        <div>
          <div class="sidebar__kefu__2c9mp"></div>
          <p>{{t('service')}}</p>
        </div>
      </div>
    </div>
    <!-- ad banner -->

    <div v-show="showAdOne" class="hidden md:block animate-fade fixed right-24 z-50 bottom-1/4 bg-slate-600 rounded-md shadow-lg w-48">
      <div class="w-full">
        <img src="https://senbackkg.salinent.com/clientManage/26f00af465eb4f2198afb3b666b92fc2.gif" alt="adbanner" class="object-cover w-full h-full" />
      </div>
      <div class="w-fit absolute top-1 right-1 cursor-pointer">
        <XIcon class="w-4 h-4 text-white" @click="closeAd(1)" />
      </div>
    </div>
    <div v-show="showAdTwo" class="hidden md:block animate-fade fixed right-24 z-50 bottom-4 bg-slate-600 rounded-md shadow-lg w-48">
      <div class="w-full">
        <img src="https://senbackkg.salinent.com/clientManage/425a7fd50b7045228ca6813864e16315.gif" alt="adbanner" class="object-cover w-full h-full" />
      </div>
      <div class="w-fit absolute top-1 right-1 cursor-pointer">
        <XIcon class="w-4 h-4 text-white" @click="closeAd(2)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
._home {
  @apply bg-gray-900 text-gray-50 relative;
}
.sidebar__ {
  position: fixed;
  top: 80vh;
  right: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
  z-index: 99;
}
.sidebar__item__3ZxEn {
  width: 69px;
  height: 80px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 4px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: rgba(167, 172, 186, 0.3) 1px 2px 6px 0px;
  cursor: pointer;
  transform: translateX(12px);
  transition: all 0.3s ease 0s;
}
.sidebar__item__3ZxEn > div {
  transition: all 0.3s ease 0s;
  transform: translateX(-6px);
}
.sidebar__kefu__2c9mp {
  background-image: url("@/assets/home/kf.png");
  width: 38px;
  height: 38px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0px auto;
}
.scroll_img {
  background-image: url("@/assets/home/top.png");
}
.sidebar__item__3ZxEn p {
  text-align: center;
  /* color: #fff; */
  margin-top: 8px;
  font-size: 12px;
}
</style>
