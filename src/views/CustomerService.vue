<template>
  <!-- <div style="margin:0px;padding:0px;overflow:hidden" class="h-full" >
        <iframe :src="route.query.url" frameborder="0" style="overflow:hidden !important;height:100%;width:100%" height="100%" width="100%"></iframe>
  </div> -->
  <div class="h-screen relative">
    <!-- <div class="sticky top-0 z-50 w-full h-8 px-2 flex justify-between items-center bg-slate-700">
      <div class="flex items-center">
        <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-primary" />
      </div>
    </div> -->
    <Header></Header>
      <!-- <div id="floating-snap-btn-wrapper">

      <div v-touch:tap="tapHandler" v-touch:longtap="longtapHandler" v-touch:swipe.left="swipeLeftHandler" v-touch:press="startHandler" v-touch:release="endHandler" v-touch:swipe.right="swipeRightHandler"  class="fab-btn cursor-pointer" >
        <div class="rounded-full p-3 text-center bg-red-400">
          <ChevronLeftIcon  class="w-6 h-6 text-primary" />
        </div>
      </div>

    </div> -->
  <div  style="overflow: hidden !important" class="__iframe">
    <iframe  :src="url"  scrolling="no" seamless="seamless"  frameborder="0" 
    style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
</div>

</div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import md5 from "js-md5";
import AES from "@/utils/aes";
import { useI18n } from "vue-i18n/index";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import Header from "@/components/Header.vue";

const activeBtn = ref(1);
const mobiletab = ref(0);
const url = ref('')
const { t } = useI18n();
 const iframeShow = ref(false)
const router = useRouter();
const route = useRoute();
const store = useStore();

// const service = computed(() => store.getters["app/SERVICE"]);
    // const user = computed(() => store.getters["user/USER"]);

onMounted(()=>{
   url.value = route.query.url
})

function onTapItem(mouseEvent) { // you can remove the `mouseEvent` argument
		console.log("Tapped!");
	}
 
</script>

<style scoped>

      /* iframe {
        display: block;
        background: #000;
        border: none;
        height: 100vh;
        width: 100vw;
    } */
        .__iframe {
          height: calc(100% - 56px);
          position: relative;
          /* background: inherit; */
          @apply bg-slate-700
        }
    #floating-snap-btn-wrapper {
  
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 30px;
  width: auto;
  height: auto;
  
  z-index: 500;

}
.fab-btn {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
}
</style>