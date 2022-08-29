<script setup>
import { onMounted, ref, computed, reactive } from "vue";
import allApi from "@/network/allApi.js";
import { useStore } from "vuex";
import Loading from "@/utils/loader";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";



const store = useStore();
const router = useRouter();
const route = useRoute();
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;

const getBannerInfo = () => {
  // Loading.showLoading();
  allApi
    .getBannerInfo()
    .then((res) => {
      //Loading.hideLoading();
      console.log(res, "banner res is");
      store.commit("app/Banner_", res.data.data)
    })
    .catch((e) => {
      // Loading.hideLoading();
      console.log(e);
    });
};

const getGameUrl = () => {
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {

    let userId = userId__;
    let t = lToken;
    const req_ = { userId: userId };
    allApi
      .getGameUrl({ data: req_ })
      .then((res) => {
        console.log(res, "getgame url res is");
        store.commit("app/Game_Url", res.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
const getAppUrl = () => {

  allApi
    .getAppLink()
    .then((res) => {
      console.log(res, "getgame getAppLink ------------------------------------->");
      store.commit("app/getApp_Url", res.data.data)
    })
    .catch((e) => {
      console.log(e);
    });
};

const getUserInfo = () => {
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {
    let userId = userId__;
    let t = lToken;
    const req_ = { userId: userId, token: t };
    allApi
      .getUserInfo({ data: req_ })
      .then((res) => {
        // if(res.data.status == 403){
        //   localStorage.clear()
        //   router.push('/login')
        // }
        console.log(res, "getUserInfo *************");
        store.commit("user/User", res.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    console.log("null");
  }
};

const getServiceLink = () => {

  let userId = userId__;
  const req_ = { userId: userId };
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {
    allApi
      .getServiceLink({ data: req_ })
      .then((res) => {
        console.log("getServiceLink", res);
        store.commit("app/Service", res.data.service_link);
        //serviceLink.value = res.data.service_link;
      })
      .catch((e) => {
        console.log(e);
      });
  }
};



const changeWindowSize = () => {
  store.commit("app/CHANGE_WINDOW_SIZE", window.innerWidth);
};


onMounted(() => {
  getServiceLink()
  getUserInfo()
  getBannerInfo();
  getGameUrl();
  getAppUrl()
  store.commit("app/CHANGE_WINDOW_SIZE", window.innerWidth);
  window.addEventListener("resize", changeWindowSize);
});

if (import.meta.env.PROD) console.log(false);
</script>

<template>
  <!-- <router-view v-slot="{ Component }">
    <template v-if="Component.name === 'sportView'">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </template>
    <template v-else>
      <component :is="Component" />
    </template>
  </router-view> -->
<!-- <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view> -->
<router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html {
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

::-webkit-scrollbar {
  width: 0px;
  height: 7px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b4b3b3;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(233, 229, 229, 0.842);
}
</style>
