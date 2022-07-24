<template>
  <div class="hidden md:block relative overflow-hidden">
    <!-- fixed -->
    <div class="fixed z-10 left-0 2xl:left-24 top-72 hidden lg:block w-36 bg-slate-700 h-auto rounded-md shadow-lg cursor-pointer">
      <div @click="smoothScroll(1)" :class="activeBtn == 1 ? 'bg-slate-800' : ''" class="text-center border-b border-gray-600 text-gray-200 shadow-lg py-4 hover:animate-pulse hover:bg-slate-800">欧宝综合</div>
      <div @click="smoothScroll(2)" :class="activeBtn == 2 ? 'bg-slate-800' : ''" class="text-center border-b border-gray-600 text-gray-200 shadow-lg py-4 hover:animate-pulse hover:bg-slate-800">欧宝体育</div>
      <div @click="smoothScroll(3)" :class="activeBtn == 3 ? 'bg-slate-800' : ''" class="text-center border-b border-gray-600 text-gray-200 shadow-lg py-4 hover:animate-pulse hover:bg-slate-800">欧宝彩票</div>
      <div @click="smoothScroll(4)" :class="activeBtn == 4 ? 'bg-slate-800' : ''" class="text-center text-gray-200 shadow-lg py-4 hover:animate-pulse hover:bg-slate-800">欧宝棋牌</div>
    </div>
    <!-- 1,2,3,4 app section -->
    <div data-aos="fade-down" id="first" class="app_download relative bg-slate-900 py-3">
      <div class="md:max-w-6xl lg:max-w-7xl w-full py-4 flex flex-wrap bg-gray-700 mx-auto rounded-md">
        <div class="w-full flex space-x-2">
          <div class="w-1/2 flex flex-col text-gray-200 space-x-3 relative">
            <h1 class="text-2xl tracking-wide text-center">全球首家一体化娱乐原生APP</h1>
            <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
            <div class="w-full flex space-x-5 py-4">
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
            </div>
            <div class="text-center absolute lg:bottom-10 md:bottom-0 w-full">
              <button class="button__">Click Here</button>
            </div>
          </div>
          <div class="w-1/2 h-full">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/img-download-zonghe@2x.61436435721fe7c64e3b403db8be27e8.png?x-oss-process=image/resize,m_fixed,w_1348,h_1348/format,webp" class="w-full h-auto" data-ani="1" style />
          </div>
        </div>
      </div>
    </div>
    <div id="second" class="app_download relative bg-slate-900 py-3">
      <div class="md:max-w-6xl lg:max-w-7xl w-full py-4 flex flex-wrap bg-gray-700 mx-auto rounded-md">
        <div class="w-full flex space-x-2">
          <div class="w-1/2 h-full">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/img-download-sports@2x.8c25c8d4696da7b3cdda6e8a5d6d0eae.png?x-oss-process=image/resize,m_fixed,w_1348,h_1348/format,webp" class="w-full h-auto" data-ani="1" style />
          </div>
          <div class="w-1/2 flex flex-col text-gray-200 space-x-3 relative">
            <h1 class="text-2xl tracking-wide text-center">全球首家一体化娱乐原生APP</h1>
            <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
            <div class="w-full flex space-x-5 py-4">
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
            </div>
            <div class="text-center absolute lg:bottom-10 md:bottom-0 w-full">
              <button class="button__">Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="third" class="app_download relative bg-slate-900 py-3">
      <div class="md:max-w-6xl lg:max-w-7xl w-full py-4 flex flex-wrap bg-gray-700 mx-auto rounded-md">
        <div class="w-full flex space-x-2">
          <div class="w-1/2 flex flex-col text-gray-200 space-x-3 relative">
            <h1 class="text-2xl tracking-wide text-center">全球首家一体化娱乐原生APP</h1>
            <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
            <div class="w-full flex space-x-5 py-4">
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
            </div>
            <div class="text-center absolute lg:bottom-10 md:bottom-0 w-full">
              <button class="button__">Click Here</button>
            </div>
          </div>
          <div class="w-1/2 h-full">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/img-download-lottery@2x.8967f929f3c8da0735a04de4d391093d.png?x-oss-process=image/resize,m_fixed,w_1348,h_1348/format,webp" class="w-full h-auto" data-ani="1" style />
          </div>
        </div>
      </div>
    </div>
    <div id="four" class="app_download relative bg-slate-900 py-3">
      <div class="md:max-w-6xl lg:max-w-7xl w-full py-4 flex flex-wrap bg-gray-700 mx-auto rounded-md">
        <div class="w-full flex space-x-2">
          <div class="w-1/2 h-full">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/img-download-qipai@2x.fc5083cd556771d53d53bb49a1e7239b.png?x-oss-process=image/resize,m_fixed,w_1348,h_1348/format,webp" class="w-full h-auto" data-ani="1" style />
          </div>
          <div class="w-1/2 flex flex-col text-gray-200 space-x-3 relative">
            <h1 class="text-2xl tracking-wide text-center">全球首家一体化娱乐原生APP</h1>
            <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
            <div class="w-full flex space-x-5 py-4">
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
              <div class="flex flex-col text-center bg-slate-600 p-3 shadow-lg rounded-lg">
                <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/h5@2x.5e24be9fff2e4b07ec15d675fa2f0d92.png?x-oss-process=image/resize,m_lfit,w_440/quality,Q_70/format,webp" alt class="w-full md:h-36 lg:h-56" />
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
                <p class="text-md tracking-wide text-center">全球首家一体化娱乐原生APP</p>
              </div>
            </div>
            <div class="text-center absolute lg:bottom-10 md:bottom-0 w-full">
              <button class="button__">Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- mobile device -->
  <div class="md:hidden w-full py-4 mt-3 bg-gray-700 mx-auto">
    <div class="py-4 mx-auto px-3 rounded-lg shadow-lg w-11/12 bg-slate-800 mt-3">
      <h3 class="text-center py-1 text-gray-50 text-2xl">App Download Section</h3>
      <p class="text-center py-1 text-gray-400 text-md">Below is the usage of app blah blah blah shit.</p>
      <div class="w-full px-2 py-3 sm:px-0">
        <TabGroup>
          <TabList class="flex p-1 space-x-1 bg-gray-900/20 rounded-xl">
            <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
              <button :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
              'focus:outline-none outline-none ',
              selected
                ? 'bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo text-black shadow'
                : 'bg-slate-700 text-white',
            ]">{{ category }}</button>
            </Tab>
          </TabList>

          <TabPanels class="mt-2">
            <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
            ' rounded-xl',
          ]">
              <div v-for="post in posts" :key="post.id" class="py-1">
                <div class="shadow-lg rounded-lg w-full text-center m-auto">
                  <a href="#" class="w-full block h-full">
                    <img alt="blog photo" :src="post.src" class="h-fit w-full object-cover" />
                    <div class="bg-slate-800 w-full p-4">
                      <p class="text-indigo-500 text-md font-medium"></p>
                      <p class="text-blue-300 font-light text-md tex pb-3">https://www.obvip34.app</p>
                      <button class="button__">{{post.title}}</button>
                    </div>
                  </a>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref } from "vue";
const activeBtn = ref(1);

let categories = ref({
  Recent: [
    {
      id: 1,
      title: "ClickHere",
      src: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/img-download-zonghe@2x.61436435721fe7c64e3b403db8be27e8.png?x-oss-process=image/resize,m_fixed,w_1348,h_1348/format,webp",
    },
    {
      id: 2,
      title: "ClickHere",
      src: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/client/new/img-download-zonghe@2x.61436435721fe7c64e3b403db8be27e8.png?x-oss-process=image/resize,m_fixed,w_1348,h_1348/format,webp",
    },
  ],
  Popular: [
    {
      id: 1,
      title: "ClickHere",
      src: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/zr@3x.788152124fcaceddcb15779235da34d0.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
    },
    {
      id: 2,
      title: "ClickHere",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ],
  Trending: [
    {
      id: 1,
      title: "ClickHere",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "ClickHere",
      src: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/zr@3x.788152124fcaceddcb15779235da34d0.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
    },
  ],
  Testing: [
    {
      id: 1,
      title: "ClickHere",
      src: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "ClickHere",
      src: "https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/home/games/zr@3x.788152124fcaceddcb15779235da34d0.png?x-oss-process=image/resize,m_lfit,w_2292/format,webp",
    },
  ],
});
/**
 * click and scroll to specific position
 */
const smoothScroll = (n) => {
  activeBtn.value = n;
  switch (n) {
    case 1:
      document.querySelector("#first").scrollIntoView({ behavior: "smooth" });
      break;
    case 2:
      document.querySelector("#second").scrollIntoView({ behavior: "smooth" });
      break;
    case 3:
      document.querySelector("#third").scrollIntoView({ behavior: "smooth" });
      break;
    case 4:
      document.querySelector("#four").scrollIntoView({ behavior: "smooth" });
      break;

    default:
      break;
  }
};
</script>

<style  scoped>
.button__ {
  @apply px-4 py-4  w-1/2 rounded-lg text-sm font-medium border-0  focus:outline-none focus:ring 
           transition text-white bg-blue-800 hover:bg-gray-900 active:bg-gray-700 focus:ring-gray-300;
}
</style>