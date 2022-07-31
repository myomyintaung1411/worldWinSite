<template>
  <div class="md:pt-7 pt-3 sm:py-3 md:py-0 px-2">
    <div  class="hidden sm:block md:max-w-7xl lg:max-w-7xl w-full py-4 mx-auto bg-HomecardBg shadow-lg rounded-md">
      <h3 class="text-center py-1 text-gray-50 text-2xl">{{t('game_sec')}}</h3>
      <p class="text-center py-1 text-gray-400 text-md">{{t('game_sec_text')}}</p>
      <div class="flex space-x-2 w-full">
        <div class="md:w-1/4 pl-5  ">
          <div class="bg-slate-700 overflow-hidden flex flex-col justify-center items-center space-y-4 py-6 shadow-lg rounded-lg w-[200px]">
            <div @click="BtnClick(1)" class="game__play_div" :class="{ actvie__btn: activeBtn == 1 }">
              <span class="px-3">FootBall</span>
              <img draggable="false" src="@/assets/ball.png" alt="football" class="h-8 w-8 object-cover object-center" />
            </div>
            <div @click="BtnClick(2)" class="game__play_div" :class="{ actvie__btn: activeBtn == 2}">
              <span class="px-3">BasketBall</span>
              <img draggable="false" src="@/assets/Basketball.png" alt="basketball" class="h-8 w-8 object-cover object-center" />
            </div>
            <div @click="BtnClick(3)" class="game__play_div" :class="{ actvie__btn: activeBtn == 3}">
              <span class="px-3">Tennis</span>
              <img draggable="false" src="@/assets/tennis.png" alt="tennis" class="h-8 w-8 object-cover object-center" />
            </div>
            <!-- <div @click="BtnClick(4)" class="game__play_div" :class="{ actvie__btn: activeBtn == 4}">
              <span class="px-3">{{t('cheese_game')}}</span>
              <img draggable="false" src="@/assets/card.png" alt="football" class="h-8 w-8 object-cover object-center" />
            </div>
            <div @click="BtnClick(5)" class="game__play_div" :class="{ actvie__btn: activeBtn == 5}">
              <span class="px-3">{{t('l')}}</span>
              <img draggable="false" src="@/assets/poll.png" alt="football" class="h-8 w-8 object-cover object-center" />
            </div> -->
            <!-- <div @click="BtnClick(6)" class="game__play_div" :class="{ actvie__btn: activeBtn == 6}">
              <span class="px-3">电子游艺</span>
              <img draggable="false" src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/xuanzhongdianziyouyi@2x.ccd161aad3c1f59057a9029e2882d72d.png?x-oss-process=image/resize,m_lfit,h_80/format,webp" alt="football" class="h-8 w-8 object-cover object-center" />
            </div> -->
            <!-- <button @click="BtnClick(2)" class="button__" :class="{ actvie__btn: activeBtn == 2 }">电子竞技</button>
          <button @click="BtnClick(3)" class="button__" :class="{ actvie__btn: activeBtn == 3 }">真人娱乐</button>
          <button @click="BtnClick(4)" class="button__" :class="{ actvie__btn: activeBtn == 4 }">棋牌游戏</button>
          <button @click="BtnClick(5)" class="button__" :class="{ actvie__btn: activeBtn == 5 }">彩票投注</button>
            <button @click="BtnClick(6)" class="button__" :class="{ actvie__btn: activeBtn == 6 }">电子游艺</button>-->
          </div>
        </div>
        <div class="md:w-9/12 relative animate-fade">
          <div class="relative w-full">
            <img v-if="activeBtn == 1" draggable="false" src="@/assets/1.png" alt class="w-full h-auto animate-fade" />
            <img v-if="activeBtn == 2" draggable="false" src="@/assets/basketball.webp" alt class="w-[95%] h-[500px] animate-fade" />
            <img v-if="activeBtn == 3" draggable="false" src="@/assets/tennis.jpg" alt class="w-[95%] h-[500px] animate-fade" />
            <img v-if="activeBtn == 4" draggable="false" src="@/assets/4.png" alt class="w-full h-auto animate-fade" />
            <img v-if="activeBtn == 5" draggable="false" src="@/assets/5.png" alt class="w-full h-auto animate-fade" />
            <img v-if="activeBtn == 6" draggable="false" src="" alt class="w-full h-auto animate-fade" />
          </div>
          <!-- <div v-if="activeBtn == 1" class="mx-auto flex space-x-3 px-3 rounded-lg shadow-lg w-fit bg-slate-800 justify-center py-4">
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
        </div>
        <div v-if="activeBtn == 2" class="mx-auto flex space-x-3 px-3 rounded-lg shadow-lg w-fit bg-slate-800 justify-center py-4">
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
        </div>
        <div v-if="activeBtn == 3" class="mx-auto flex space-x-3 px-3 rounded-lg shadow-lg w-fit bg-slate-800 justify-center py-4">
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
        </div>
        <div v-if="activeBtn == 4" class="mx-auto flex space-x-3 px-3 rounded-lg shadow-lg w-fit bg-slate-800 justify-center py-4">
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
        </div>
        <div v-if="activeBtn == 5" class="mx-auto flex space-x-3 px-3 rounded-lg shadow-lg w-fit bg-slate-800 justify-center py-4">
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
        </div>
        <div v-if="activeBtn == 6" class="mx-auto flex space-x-3 px-3 rounded-lg shadow-lg w-fit bg-slate-800 justify-center py-4">
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          <button class="game_btn">PlayGame</button>
          </div>-->
        </div>
      </div>
    </div>
  </div>
  <!-- mobile device -->
  <div class="sm:hidden pt-4 w-full mx-auto px-2">
    <div class="py-4 mx-auto px-3 rounded-lg shadow-lg bg-slate-800">
      <h3 class="text-center py-1 text-gray-50 text-2xl">{{t('game_sec')}}</h3>
      <p class="text-center py-1 text-gray-400 text-md">{{t('game_sec_text')}}</p>
      <div class="w-full px-2 py-3 bg-slate-900 rounded-lg shadow-lg sm:px-0">
        <TabGroup>
          <TabList class="flex justify-center px-1 space-x-2 bg-gray-900/20 rounded-xl">
            <Tab v-for="(game,i) in game_one" as="template" :key="i" v-slot="{ selected }" class="flex justify-center">
              <div :class="[selected ? '  text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo  ' : ' text-white bg-slate-700']" class="px-3 py-2 flex justify-between rounded-lg shadow-lg cursor-pointer text-xs font-bold">
                <p class="px-1 text-center">{{ game.title }}</p>
                <!-- <img :src="game.img" class="w-5 py-1 h-5 object-cover" :alt="game.title" /> -->
              </div>
            </Tab>
          </TabList>

          <TabPanels class="mt-2">
            <TabPanel v-for="(posts, idx) in Object.values(game_one)" :key="idx" :class="[
            ' rounded-xl shadow-lg',
            'focus:outline-none',
          ]">
              <div v-for="post in posts.desc" :key="post.id" class="py-1">
                <div class="shadow-lg rounded-lg w-full text-center m-auto">
                  <a class="w-full block h-full">
                    
                    <img v-if="post.id == 1" alt="blog photo" src="@/assets/1.png" class="h-48 w-full object-cover animate-fade" />
                    <img v-if="post.id == 2" alt="blog photo" src="@/assets/basketball.webp" class="h-48 w-full object-cover animate-fade" />
                    <img v-if="post.id == 3" alt="blog photo" src="@/assets/tennis.jpg" class="h-48 w-full object-cover animate-fade" />
                    <!-- <div class="bg-slate-700 w-full p-4">
                      <p class="text-indigo-500 text-md font-medium"></p>
                      <p class="text-blue-300 font-light text-md tex pb-3">{{post.link}}</p>
                      <button class="button__">{{post.title}}</button>
                    </div>-->
                  </a>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      <!-- <div class="w-full px-2 py-3 my-2 bg-slate-900 rounded-lg shadow-lg sm:px-0">
        <TabGroup>
          <TabList class="flex justify-center px-1 space-x-2 bg-gray-900/20 rounded-xl">
            <Tab v-for="(game,i) in game_two" as="template" :key="i" v-slot="{ selected }" class="flex justify-center">
           
              <div :class="[selected ? '  text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo  ' : ' text-white bg-slate-700']" class="px-3 py-2 flex justify-between rounded-lg shadow-lg cursor-pointer text-xs font-bold">
                <p class="px-1">{{ t(game.title) }}  </p>
              </div>
            </Tab>
          </TabList>

          <TabPanels class="mt-2">
            <TabPanel v-for="(posts, idx) in Object.values(game_two)" :key="idx" :class="[
            ' rounded-xl shadow-lg',
            'focus:outline-none',
          ]">
              <div v-for="post in posts.desc" :key="post.id" class="py-1">
                <div class="shadow-lg rounded-lg w-full text-center m-auto">
                  <a class="w-full block h-full">
                    
                    <img v-if="post.id == 4" alt="blog photo" draggable="false" src="@/assets/4.png" class="h-48 w-full object-cover animate-fade" />
                    <img v-if="post.id == 5" alt="blog photo" draggable="false" src="@/assets/4.png" class="h-48 w-full object-cover animate-fade" />
                  </a>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { useI18n } from "vue-i18n/index";

import { reactive, ref } from "vue";
const activeBtn = ref(1);

const { t } = useI18n();
let game_one = reactive([
  {
    title: "FootBall",
    img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/xuanzhongtiyu@2x.876783ff5a66e88140ce3370a090dac7.png?x-oss-process=image/resize,m_lfit,h_80/format,webp",
    desc: [
      {
        img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/ty@5x.a37ed2b0b2c43c0d7420588637a1fddb.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
        link: "https://www.obvip34.app",
        title: "click",
        id:1,
      },
    ],
  },
  {
    title: "BasketBall",
    img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/dj@3x.83d58e52fe3dcdae81076bb9270a7067.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
    desc: [
      {
        img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/dj@3x.83d58e52fe3dcdae81076bb9270a7067.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
        link: "https://www.huana.app",
        title: "click22",
        id:2,
      },
    ],
  },
  {
    title: "Tennis",
    img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/xuanzhongzhenren@2x.295aa86dd994a2340b6c48f378338743.png?x-oss-process=image/resize,m_lfit,h_80/format,webp",
    desc: [
      {
        img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/zr@3x.788152124fcaceddcb15779235da34d0.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
        link: "https://www.gghhe.app",
        title: "click3",
        id:3,
      },
    ],
  },
]);
let game_two = reactive([
  {
    title: "cheese_game",
    img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/xuanzhongqipai@2x.74e4aaac61bbeeeb08282b3d44d8a0e7.png?x-oss-process=image/resize,m_lfit,h_80/format,webp",
    desc: [
      {
        img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/qp@6x.015d5ab8a00e74f37cd360b39c713883.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
        link: "https://www.obvip34.app",
        title: "click44",
        id:4,
      },
    ],
  },
  {
    title: "l",
    img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/xuanzhongcaipiao@2x.9bbe6e9d8525c5cbf7688a0bd0138f4f.png?x-oss-process=image/resize,m_lfit,h_80/format,webp",
    desc: [
      {
        img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/cp@7x.03016bd83654f2210cbf865be193e072.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
        link: "https://www.huana.app",
        title: "click55",
        id:5
      },
    ],
  },
  // {
  //   title: "电子游艺",
  //   img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/xuanzhongdianziyouyi@2x.ccd161aad3c1f59057a9029e2882d72d.png?x-oss-process=image/resize,m_lfit,h_80/format,webp",
  //   desc: [
  //     {
  //       img: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/dz@3x.ee147cc1d70e62669593c54b0c5391ec.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
  //       link: "https://www.gghhe.app",
  //       title: "click6",
  //     },
  //   ],
  // },
]);

const BtnClick = (n) => {
  activeBtn.value = n;
};
</script>

<style  scoped>
.game__play_div {
  @apply px-4 py-2 w-[80%] mx-auto flex items-center justify-between bg-gray-900 hover:bg-primary hover:text-black rounded-lg shadow-lg
   cursor-pointer tracking-wide font-normal text-base;
}
.button__ {
  @apply px-4 py-4  w-1/2 rounded-lg text-base font-medium border-0  outline-none focus:outline-none
           transition text-white bg-gray-900 hover:bg-blue-800 active:bg-gray-700 tracking-wider;
}
.actvie__btn {
  @apply bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo animate-bounce text-black;
}
.game_btn {
  @apply px-4 py-2 rounded-lg text-sm font-medium border-0  focus:outline-none focus:ring 
           transition text-white bg-gray-900 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300;
}
</style>