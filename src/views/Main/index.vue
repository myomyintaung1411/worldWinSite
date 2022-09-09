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
import { onMounted } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import allApi from "@/network/allApi.js";
import { useStore } from "vuex";
const store = useStore();

const lToken = store.state.user.token;
const userId__ = store.state.user.userId;




onMounted(() => {
  // getGameUrl();
  // getAppUrl()
});
</script>

<style  scoped>
</style>