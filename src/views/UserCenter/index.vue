<template>
  <div class="hidden md:block bg-slate-900 py-3">
    <div class="main__">
      <div class="w-full flex space-x-3">
        <div class="w-1/6 space-y-2">
          <div class="w-full flex flex-col space-y-2 items-center py-3 rounded-lg shadow-lg bg-slate-800 text-center">
            <div class="m-1 mr-2 w-16 h-16 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
              <img src="@/assets/home/user.svg" class="rounded-full w-24 h-24" />
            </div>
            <span class="text-md text-gray-300">{{user?.name}}</span>
            <div class="flex space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-md text-gray-300 font-bold">{{Intl.NumberFormat().format(user.balance)}}</span>
            </div>
            <!-- <span class="text-sm tracking-wide text-gray-300 font-bold">加入欧宝体育第1天</span>
            <div class="mt-4">
              <span class="text-sm text-gray-300">加入欧宝</span>
            </div>-->
            <!-- <div class="flex space-x-3 cursor-pointer">
              <svg @click="goChangeInfo(1)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <svg @click="goChangeInfo(2)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <svg @click="goChangeInfo(3)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <svg @click="goChangeInfo(4)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>-->
          </div>
          <!--  -->
          <div class="w-full flex flex-col space-y-2 items-center py-3 rounded-lg shadow-lg bg-slate-800 text-center">
            <!-- <div class="flex space-x-2 text-gray-200 text-sm">
              <span>中心钱包：</span>
              <span class="overflow-ellipsis max-w-sm overflow-hidden  text-blue-200">{{user.balance}}</span>
            </div>-->
            <!-- <div class="flex text-center pt-2 space-x-3">
              <div v-for="(money,i) in moneyDeposit" :key="money.id" @click="goDeposit(money,i)" class="flex flex-col text-center cursor-pointer items-center">
                <div :class="activeRoute === money.path ? 'bg-gray-700 text-blue-400' : 'bg-gray-600 text-gray-200'" class="w-10 h-10 flex justify-center items-center rounded-full text-xl">
                  <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-white text-sm text-center mt-2 font-bold">{{money.title}}</span>
              </div>
            </div>-->
            <div v-for="(menu,index) in menuList" :key="index" @click="NavClick(menu,index)" :class="activeRoute === menu.path? 'bg-primary bg-opacity-20 text-primary' : 'text-gray-200'" class="py-2 w-full hover:text-blue-200 shadow-md hover:bg-slate-700 cursor-pointer">
              <div class="flex justify-center">
                <div>
                  <!-- <svg v-if="menu.path === '/wallet'" xmlns="http://www.w3.org/2000/svg" :class="activeRoute === menu.path? 'text-primary' : 'text-gray-400' " class="hidden lg:block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg> -->
                  <DatabaseIcon  v-if="menu.path === '/wallet'" :class="activeRoute === menu.path? 'text-primary' : 'text-gray-400' " class="h-7 w-7 hidden lg:block"/>
                  <DocumentTextIcon v-if="menu.path === '/transRecord'" :class="activeRoute === menu.path? 'text-primary' : 'text-gray-400' " class="h-7 w-7 hidden lg:block" />
                  <DocumentReportIcon v-if="menu.path === '/betRecord'" class="h-7 w-7 text-gray-400 hidden lg:block" />
                  <svg class="w-7 h-7" v-if="menu.path === '/myVip'" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                  <svg class="w-7 h-7" fill="none" v-if="menu.path === '/mail'" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <svg class="w-7 h-7" fill="none" v-if="menu.path === '/suggestion'" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div class="mx-4">{{t(menu.title)}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- right -->
        <div class="w-10/12 bg-slate-800 rounded-lg animate-fade">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  <!-- mobile -->
  <div class="block md:hidden bg-slate-900 h-fit">
    <div class="w-full bg-gray-700 mx-auto">
      <div class="w-full flex flex-col space-y-2 items-center py-3 rounded shadow-lg bg-slate-800 text-center">
        <div class="m-1 mr-2 w-16 h-16 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
          <img src="@/assets/home/user.svg" class="rounded-full h-24 w-24" />
        </div>
        <span class="text-md text-gray-300">{{user?.name}}</span>
        <!-- <span class="text-sm tracking-wide text-gray-300 font-bold">加入欧宝体育第1天</span>
        <div class="mt-4">
          <span class="text-sm text-gray-300">加入欧宝</span>
        </div> -->
        <div class="my-2 felx items-center text-sm">
          <span class="text-gray-300">{{t('wallet')}}</span>
          <span class="overflow-ellipsis w-auto overflow-hidden text-blue-200">{{Intl.NumberFormat().format(user.balance)}}</span>
        </div>
        <!-- <div class="flex space-x-3 cursor-pointer">
          <svg @click="m_goChangeInfo(1)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <svg @click="m_goChangeInfo(1)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <svg @click="m_goChangeInfo(1)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <svg @click="m_goChangeInfo(1)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>-->
      </div>
      <div class="py-2">
        <!-- <div v-for="(money_m) in m_moneyDeposit" :key="money_m.id" @click="m_goDeposit(money_m,i)" class="py-2 my-2 flex justify-between shadow-lg bg-slate-900 px-3 rounded text-center items-center">
          <div class="flex text-center items-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm px-4 text-gray-200 tracking-wide">{{money_m.title}}</span>
          </div>
          <div>
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>-->
        <div v-for="(menu,i) in m_menuList" :key="i" @click="m_NavClick(menu,i)" class="py-2 my-2 flex justify-between shadow-lg bg-slate-900 px-3 rounded text-center items-center">
          <div class="flex text-center items-center">
            <!-- <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> -->
            <DatabaseIcon  v-if="i === 0"  class="h-7 w-7   text-primary"></DatabaseIcon>
            <DocumentTextIcon v-if="i === 1"  class="h-7 w-7  text-primary">
            </DocumentTextIcon>
            <LogoutIcon v-if="i === 2" class="h-7 w-7 text-primary"></LogoutIcon>
            <span class="text-sm px-4 text-white tracking-wide">{{t(menu.title)}}</span>
          </div>
          <div>
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup>
import { reactive, ref, watch, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import allApi from "@/network/allApi.js";
import Loading from "@/utils/loader";
import { useI18n } from "vue-i18n/index";
import { DocumentTextIcon, DocumentReportIcon,DatabaseIcon,LogoutIcon } from "@heroicons/vue/solid";
const router = useRouter();

const store = useStore();

const { t } = useI18n();

//this is useRoute for change vue route
const route = useRoute();
const activeMenu = ref(0);
const activeMoney = ref(0);
const activeRoute = ref("");
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;
const user = computed(() => store.getters["user/USER"]);

const menuList = reactive([
  {
    title: "online_re",
    path: "/wallet",
  },
  {
    title: "t_record",
    path: "/transRecord",
  },
  // {
  //   title: "投注记录",
  //   path: "/betRecord",
  // },
  // {
  //   title: "VIP详情",
  //   path: "/myVip",
  // },
  // {
  //   title: "消息中心",
  //   path: "/mail",
  // },
  // {
  //   title: "意见反馈",
  //   path: "/suggestion",
  // },
]);
const moneyDeposit = reactive([
  {
    id: 1,
    title: "存款",
    path: "/depost",
  },
  {
    id: 2,
    title: "转账",
    path: "/transfer",
  },
  { id: 3, title: "取款", path: "/withdrawals" },
]);
//mobile
const m_menuList = reactive([
  {
    title: "online_re",
    path: "/m/m_wallet",
  },
  {
    title: "t_record",
    path: "/m/m_transRecord",
  },
  // {
  //   title: "投注记录",
  //   path: "/m/m_betRecord",
  // },
  {
    title: "logout",
    path: "/login",
  },
  // {
  //   title: "VIP详情",
  //   path: "/m/m_myVip",
  // },
  // {
  //   title: "消息中心",
  //   path: "/m/m_mail",
  // },
  // {
  //   title: "意见反馈",
  //   path: "/m/m_suggestion",
  // },
]);
const m_moneyDeposit = reactive([
  {
    id: 1,
    title: "存款",
    path: "/m/m_depost",
  },
  {
    id: 2,
    title: "转账",
    path: "/m/m_transfer",
  },
  { id: 3, title: "取款", path: "/m/m_withdrawals" },
]);

watch(
  () => route.path,
  () => {
    console.log(route.path, "watching");
    activeRoute.value = route.path;
  },
  { immediate: true, deep: true }
);

const goChangeInfo = (number) => {
  switch (number) {
    case 1:
      router.push("/phonePwd");
      break;
    case 2:
      console.log("2");
      break;
    case 3:
      console.log("3");
      break;
    case 4:
      router.push("/banks");
      break;

    default:
      break;
  }
};
const goDeposit = (money, index) => {
  activeMoney.value = index;
  router.push(money.path);
};
const NavClick = (menu, index) => {
  activeMenu.value = index;
  router.push(menu.path);
};

// here is using for mobileeeeeeeeeeeeeee
const m_NavClick = (menu, index) => {
  console.log(index, menu);
  if (index === 2 && menu.path === "/login") {
    sessionStorage.clear();
    window.location.reload();
    router.push("/login");
    return;
  }
  router.push(menu.path);
};
const m_goDeposit = (m, index) => {
  router.push(m.path);
};
const m_goChangeInfo = (number) => {
  switch (number) {
    case 1:
      router.push("/m/m_phonePwd");
      break;
    case 2:
      console.log("2");
      break;
    case 3:
      console.log("3");
      break;
    case 4:
      console.log("4");
      break;

    default:
      break;
  }
};

// api call of getMoneyBag
const getMoneyBag = () => {
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {
    // Loading.showLoading()
    let userId = userId__;
    let token = lToken;
    const req_ = { userId: userId, token: token };
    allApi
      .getMoneyBag({ data: req_ })
      .then((res) => {
        //Loading.hideLoading()
        console.log(res.data.data, "getMoneyBag *************");
        //store.commit("user/User",res.data.data)
      })
      .catch((e) => {
        //Loading.hideLoading()
        console.log(e);
      });
  }
};

onMounted(() => {
  getMoneyBag();
});
</script>


<style  scoped>
.main__ {
  @apply md:max-w-6xl lg:max-w-7xl mt-3 px-2
   w-full py-4 mx-auto bg-slate-700 rounded-lg shadow-lg;
}
</style>