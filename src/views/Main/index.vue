<template>
  <div class="w-full h-full bg-gray-900">
    <Header></Header>
    <div class="relative">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>


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

onMounted(() => {
  getServiceLink()
  getUserInfo()
  getBannerInfo();
  getGameUrl();
  getAppUrl()
});
</script>

<style  scoped>
</style>