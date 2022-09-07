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

const changeWindowSize = () => {
  store.commit("app/CHANGE_WINDOW_SIZE", window.innerWidth);
};

onMounted(() => {
  // getBannerInfo();
  // getGameUrl();
  // getAppUrl()
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
