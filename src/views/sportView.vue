<template>
  <!-- <div style="margin:0px;padding:0px;overflow:hidden" class="h-full" >
        <iframe :src="route.query.url" frameborder="0" style="overflow:hidden !important;height:100%;width:100%" height="100%" width="100%"></iframe>
  </div> -->
  <body style="overflow: hidden !important" class="h-screen">
    <iframe :src="route.query.url" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
</body>
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

const router = useRouter();
const route = useRoute();

</script>

<style scoped>
      /* iframe {
        display: block;
        background: #000;
        border: none;
        height: 100vh;
        width: 100vw;
    } */
</style>