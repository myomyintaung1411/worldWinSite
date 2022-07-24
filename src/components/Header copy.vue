<template>
  <div v-if="lToken" class="bg-gray-700 hidden md:block">
    <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-screen-md h-auto lg:max-w-screen-xl md:px-0 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="text-gray-200 text-md">{{currentTime}}</div>
        <div class="cursor-pointer text-center text-md text-gray-300 flex items-center space-x-2">
          <span class="px-1 text-sm tracking-wide font-bold">欢迎您,</span>
          <span v-if="user.nickname !== undefined" @click="goUserCenter">{{user.nickname || 'name'}}</span>
          <div class="h-4 w-0.5 bg-gray-400 mx-3"></div>
          <div @click="showMoney = !showMoney" class="cursor-pointer">
            <svg v-if="showMoney" class="h-6 w-6 text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="2" />
              <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
              <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
            </svg>
            <svg v-else class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          </div>
          <span class="px-1 text-sm tracking-wide font-bold">总资产 :</span>
          <span @click="goUserCenter" class="text-sm text-center">{{showMoney ? `${Intl.NumberFormat().format(user.balance)}`:`*****`}} 元</span>
          <div @click="reqtUserInfo()" class="px-1 cursor-pointer">
            <svg class="h-5 w-5 text-primary" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div :class="isMenuOpen ? 'relative' : 'sticky top-0 z-30'" class="bg-gray-800 md:sticky md:top-0 md:z-30">
    <div class="px-4 py-1 mx-auto sm:max-w-xl md:max-w-screen-md h-auto lg:max-w-screen-xl md:px-0 lg:px-8">
      <div class="relative flex items-center justify-between">
        <a href="/" aria-label="Warner International" title="Warner International" class="inline-flex items-center text-gray-100">
          <!-- <svg class="w-8 text-teal-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Company</span>-->
          <img src="@/assets/home/logo.png" alt="logo" draggable="false" class="w-auto md:w-32 lg:w-auto h-12 sm:h-fit text-teal-accent-400" />
        </a>
        <ul class="items-center hidden md:flex md:space-x-3 lg:space-x-8 lg:flex">
          <li>
            <router-link to="/" aria-label="Home" title="Home" class="px-4 py-2 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover__class" :class="{ activeTab: activeRoute === '/home' }" @click="TabClick(1)">首页</router-link>
          </li>
          <li @mouseover="close(1)">
            <router-link to="/sport" aria-label="Our Sport" title="Our Sport" class="px-4 py-2 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover__class" :class="{ activeTab: activeRoute === '/sport' }" @click="TabClick(2)">体育赛事</router-link>
          </li>
          <li @mouseover="close(2)">
            <router-link to="/lottery" aria-label="Lottery" title="Lottery" @click="TabClick(3)" class="px-4 py-2 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover__class" :class="{ activeTab: activeRoute === '/lottery'}">彩票投注</router-link>
          </li>
          <li @mouseover="close(3)">
            <router-link to="/realbet" aria-label="Realbet" title="Realbet" @click="TabClick(4)" class="px-4 py-2 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover__class" :class="{ activeTab: activeRoute === '/realbet' }">真人娱乐</router-link>
          </li>
          <!-- <li>
            <router-link to="/app" aria-label="App" title="App" @click="TabClick(5)" class="px-4 py-2 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover__class" :class="{ activeTab: activeRoute === '/app' }">APP</router-link>
          </li>-->
          <li v-if="!lToken">
            <router-link to="/register" class="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-lg bg-gray-900 hover:bg-primary hover:text-black hover:font-bold focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">注册</router-link>
          </li>
          <li v-if="!lToken">
            <router-link to="/login" class="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-lg bg-gray-900 hover:bg-primary hover:text-black hover:font-bold focus:shadow-outline focus:outline-none" aria-label="Sign in" title="Sign in">登录</router-link>
          </li>
          <Menu v-if="lToken" as="div" class="ml-3 relative z-20">
            <div>
              <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="@/assets/home/user.svg" alt />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <router-link to="/userCenter" :class="[active ? 'bg-gray-600' : '', 'block px-4 py-2 text-sm text-gray-300']">Your Profile</router-link>
                </MenuItem>
                <!-- <MenuItem v-slot="{ active }">
                  <router-link to="/userCenter" :class="[active ? 'bg-gray-600' : '', 'block px-4 py-2 text-sm text-gray-300']">Settings</router-link>
                </MenuItem>-->
                <MenuItem v-slot="{ active }">
                  <div @click="SignOut" :class="[active ? 'bg-gray-600' : '', 'block px-4 py-2 text-sm text-gray-300']">Sign out</div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <languageswitch></languageswitch>
          <!-- <Menu as="div" class="ml-3 relative z-20">
            <div>
              <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2
               focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Change</span>
                <img class="h-8 w-8 rounded-full" src="@/assets/lang.svg" alt />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-fit  h
              rounded-md shadow-lg py-1 bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <div class="w-full p-4 ">
                    <div class="w-full max-w-xs mx-auto">
                      <RadioGroup v-model="lang" @click="changeLanguage()">
                        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                        <div class="space-y-2">
                          <RadioGroupOption as="template"  value="cz" v-slot="{ active, checked }">
                            <div :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-primary bg-opacity-75 text-white ' : 'bg-slate-900  ',
              ]" class="relative text-white flex w-fit px-7 py-3 rounded-lg shadow-md cursor-pointer focus:outline-none">
                              <div class="flex items-center justify-between w-full">
                                <div class="flex items-center">
                                  <div class="text-sm flex items-center justify-center space-x-3">
                                    <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-white'" class="font-medium">{{t('zh')}}</RadioGroupLabel>
                                    <img  src='@/assets/ch.svg' alt="" class="w-8 h-8">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </RadioGroupOption>
                          <RadioGroupOption as="template"  value="en" v-slot="{ active, checked }">
                            <div :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-primary bg-opacity-75 text-white ' : 'bg-slate-900  ',
              ]" class="relative text-white flex w-fit px-7 py-3 rounded-lg shadow-md cursor-pointer focus:outline-none">
                              <div class="flex items-center justify-between w-full">
                                <div class="flex items-center">
                                  <div class="text-sm flex items-center justify-center space-x-3">
                                    <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-white'" class="font-medium">{{t('en')}}</RadioGroupLabel>
                                    <img  src='@/assets/us.svg' alt="" class="w-8 h-8">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </RadioGroupOption>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
        </ul>
        <div class="md:hidden">
          <button aria-label="Open Menu" title="Open Menu" class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline" @click="mobileMenuOpen">
            <svg class="w-5 text-gray-200" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-10">
            <div class="p-5 bg-gray-900 rounded shadow-sm h-auto">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <!-- <a href="/" aria-label="Company" title="Company" class="inline-flex items-cente">
                    <svg class="w-8 text-gray-200" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                      <rect x="3" y="1" width="7" height="12" />
                      <rect x="3" y="17" width="7" height="6" />
                      <rect x="14" y="1" width="7" height="6" />
                      <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Company</span>
                  </a>-->
                  <img src="@/assets/home/logo.png" alt="logo" draggable="false" class="w-auto h-fit text-teal-accent-400" />
                </div>
                <div>
                  <button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" @click="isMenuOpen = false">
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul @click="isMenuOpen = false" class="space-y-4">
                  <li>
                    <router-link to="/home" :class="activeRoute === '/home' ? 'text-primary' : 'text-gray-50'" aria-label="Home" title="Home" class="font-medium block hover:bg-gray-700 px-3 py-2 tracking-wide transition-colors duration-200">首页</router-link>
                  </li>
                  <li>
                    <router-link to="/sport" :class="activeRoute === '/sport' ? 'text-primary' : 'text-gray-50'" aria-label="Sport" title="Sport" class="font-medium tracking-wide block hover:bg-gray-700 px-3 py-2 transition-colors duration-200">体育赛事</router-link>
                  </li>
                  <li>
                    <router-link to="/lottery" :class="activeRoute === '/lottery' ? 'text-primary' : 'text-gray-50'" aria-label="Lottery" title="Lottery" class="font-medium block tracking-wide hover:bg-gray-700 px-3 py-2 transition-colors duration-200">彩票投注</router-link>
                  </li>
                  <li>
                    <router-link to="/realbet" :class="activeRoute === '/realbet' ? 'text-primary' : 'text-gray-50'" aria-label="Realbet" title="Realbet" class="font-medium tracking-wide block hover:bg-gray-700 px-3 py-2 transition-colors duration-200">真人娱乐</router-link>
                  </li>
                  <!-- <li>
                    <router-link to="/app" aria-label="App" title="App" class="font-medium tracking-wide block hover:bg-gray-700 px-3 py-2 transition-colors duration-200">App</router-link>
                  </li>-->
                  <li v-if="!lToken">
                    <router-link to="/register" class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-primary text-black hover:bg-slate-500 focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">注册</router-link>
                  </li>
                  <li v-if="!lToken">
                    <router-link to="/login" class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-primary text-black hover:bg-slate-500 focus:shadow-outline focus:outline-none" aria-label="Sign in" title="Sign in">登录</router-link>
                  </li>

                  <div v-if="lToken" class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center px-5">
                      <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" draggable="false" src="@/assets/home/user.svg" alt />
                      </div>
                      <div @click="goUserCenter__" class="ml-3">
                        <div class="text-base font-medium leading-none text-white py-1">{{user.nickname}}</div>
                        <div class="text-sm font-medium leading-none text-primary py-1 opacity-90">{{Intl.NumberFormat().format(user.balance)}}</div>
                      </div>
                      <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <!-- <div class="mt-3 px-2 space-y-1">
                      <div v-for="n in 3" :key="n" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">ddddd</div>
                    </div>-->
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 
    <div v-if="sport" @click="sport = false" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" class="absolute py-2 top-16 z-10 max-w-full w-full min-w-full px-0 bg-gray-800 shadow-xl">
      <div class="bg-slate-700 px-4 py-10 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="flex justify-center space-x-5 mx-auto">
          <div v-for="n in 3" :key="n" class="hover:translate-y-2 bg-gray-900 w-1/3 transition duration-300 max-w-xs rounded-md shadow-2xl bg-coolGray-50 text-gray-200">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/header/nav/ty/model-ob.4a6215c4c47ed9bddc336c89a60da03b.png?x-oss-process=image/resize,m_lfit,w_476/format,webp" alt class="object-cover w-full rounded-t-md h-64 bg-coolGray-500" />
            <div class="flex flex-col justify-between p-6 space-y-8">
              <div class="space-y-2 text-center">
                <h2 class="text-3xl font-semibold tracking-wide">欧宝体育</h2>
                <p class="text-coolGray-800">多元化的万场投注赛事</p>
              </div>
              <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-coolGray-50">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="lottery" @click="lottery = false" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" class="absolute py-2 top-16 z-10 max-w-full w-full min-w-full px-0 bg-gray-800 shadow-xl">
      <div class="bg-slate-700 px-4 py-10 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="flex justify-center space-x-5 mx-auto">
          <div v-for="n in 3" :key="n" class="hover:translate-y-2 bg-gray-900 w-1/3 transition duration-300 max-w-xs rounded-md shadow-2xl bg-coolGray-50 text-gray-200">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/header/nav/cp/model-ob.a9c43641662cc922653821e41b271398.png?x-oss-process=image/resize,m_lfit,w_560/format,webp" alt class="object-cover object-center w-full rounded-t-md h-64 bg-coolGray-500" />
            <div class="flex flex-col justify-between p-6 space-y-8">
              <div class="space-y-2 text-center">
                <h2 class="text-3xl font-semibold tracking-wide">欧宝彩票</h2>
                <p class="text-coolGray-800">旗舰彩种 应有尽有</p>
              </div>
              <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-coolGray-50">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="realbet" @click="realbet = false" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" class="absolute py-2 top-16 z-10 max-w-full w-full min-w-full px-0 bg-gray-800 shadow-xl">
      <div class="bg-slate-700 px-4 py-10 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="flex justify-center space-x-5 mx-auto">
          <div v-for="n in 3" :key="n" class="hover:translate-y-2 bg-gray-900 w-1/3 transition duration-300 max-w-xs rounded-md shadow-2xl bg-coolGray-50 text-gray-200">
            <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/header/nav/zr/model-bg.ec17e9248b1abbeaef8de1b0884288a0.png?x-oss-process=image/resize,m_lfit,w_540/format,webp" alt class="object-cover object-center w-full rounded-t-md h-64 bg-coolGray-500" />
            <div class="flex flex-col justify-between p-6 space-y-8">
              <div class="space-y-2 text-center">
                <h2 class="text-3xl font-semibold tracking-wide">欧宝真人</h2>
                <p class="text-coolGray-800">身临其境 美女如云</p>
              </div>
              <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-coolGray-50">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!--  -->
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  SelectorIcon,
  CheckIcon,
  SearchIcon,
} from "@heroicons/vue/outline";
import { onMounted, reactive, ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import Util from "@/utils/countdown.js";
import allApi from "@/network/allApi.js";
import Loading from "@/utils/loader";
import languageswitch from './LanguageSwitch.vue'
const isMenuOpen = ref(false);
let sport = ref(false);
let lottery = ref(false);
let realbet = ref(false);
let activeTab = ref(1);
const activeRoute = ref("");
const currentTime = ref("");
const showMoney = ref(false);
const router = useRouter();
const route = useRoute();
const store = useStore();
const plans = [
  {
    id:1,
    name: 'Chinese',
    code:'cz'
  },
  { id:2,
    name: 'English',
    code:'en'
  },
]

const selected = ref(plans[0])


const lToken = computed(() => store.getters["user/LToken"]);
const user = computed(() => store.getters["user/USER"]);
const lang = ref(localStorage.getItem("l") || "cz");

const status = reactive([
  { id: 1, name: "Chinese" },
  { id: 2, name: "English" },
]);

//const user = store.state.user.user
const SignOut = () => {
  localStorage.clear();
  window.location.reload();
  router.push("/");
  // window.location.reload();
};

const changeLanguage = () => {
  console.log("l;ee");
      localStorage.setItem("l", lang.value);
      window.location.reload();
};

const reqtUserInfo = () => {
  const lToken = store.state.user.token;
  const userId__ = store.state.user.userId;
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {
    let userId = userId__;
    let token = lToken;
    const req_ = { userId: userId, token: token };
    Loading.showLoading();
    allApi
      .getUserInfo({ data: req_ })
      .then((res) => {
        Loading.hideLoading();
        console.log(res.data.data, "getUserInfo *************");
        store.commit("user/User", res.data.data);
      })
      .catch((e) => {
        Loading.hideLoading();
        console.log(e);
      });
  }
};

const goUserCenter = () => {
  if (lToken) {
    router.push("/userCenter");
  }
};
const goUserCenter__ = () => {
  if (lToken) {
    router.push("/userCenter");
  }
};
const goNoti = () => {
  router.push("/mail");
};
const displayDate = () => {
  return (currentTime.value = Util._currentDate());
};
const dateTime = () => {
  setInterval(() => {
    displayDate();
  }, 1000);
};

onMounted(() => {
  dateTime();
});

watch(
  () => route.path,
  () => {
    console.log(route.path, "watching");
    activeRoute.value = route.path;
  },
  { immediate: true, deep: true }
);

const mobileMenuOpen = () => {
  isMenuOpen.value = true;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const close = (n) => {
  switch (n) {
    case 1:
      sport.value = true;
      lottery.value = false;
      realbet.value = false;
      break;
    case 2:
      sport.value = false;
      lottery.value = true;
      realbet.value = false;
      break;
    case 3:
      lottery.value = false;
      sport.value = false;
      realbet.value = true;
      break;
    default:
      break;
  }
};
function leavemouse() {
  sport.value = false;
  lottery.value = false;
  realbet.value = false;
}
const TabClick = (n) => {
  activeTab.value = n;
};
</script>

<style  scoped>
/* ._header {
  @apply w-full max-w-screen-xl text-center mx-auto  bg-gray-700;
} */
.activeTab {
  @apply px-4 py-2 bg-primary bg-opacity-20 rounded-lg text-primary font-bold;
}
.hover__class:hover {
  @apply px-4 py-2 text-primary rounded-lg;
}
</style>