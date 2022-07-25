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

</script