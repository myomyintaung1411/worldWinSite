<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-50 w-full py-2 px-2 flex justify-between items-center bg-slate-700">
      <div class="flex items-center">
        <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
        <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">投注记录</span>
      </div>
    </div>
    <div class="text-gray-300 text-md px-3 font-bold my-2 tracking-wide">每个场馆的数据将有一定时间的延迟，仅供参考使用</div>
    <div class="mx-1 px-2 py-2 bg-slate-700">
      <div class="flex items-center">
        <span class="text-base tracking-wide text-white">选择游戏:</span>
        <div class="w-64 px-2 cursor-pointer z-10">
          <Listbox v-model="selectCardOne">
            <div class="relative mt-1">
              <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span class="block truncate">{{ selectCardOne.name }}</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption v-slot="{ active, selected }" v-for="select in card" :key="select.name" :value="select" as="template">
                    <li :class="[
                  active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]">
                      <span :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]">{{ select.name }}</span>
                      <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div class=" py-2 ">
        <span class="text-base text-white tracking-wide">时间筛选：</span>
      </div>
         <div class="py-2">
          <v-date-picker locale="zh" v-model="range" :masks="masks" is-range :max-date="new Date()" @drag="updateDate($event)">
            <template v-slot="{ inputValue, inputEvents }">
              <div class="flex   items-center">
                <input :value="inputValue.start" v-on="inputEvents.start" class="border
                 px-2 py-2 w-28 rounded focus:outline-none focus:border-indigo-300" />
                <svg class="w-4 h-4 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <input :value="inputValue.end" v-on="inputEvents.end" class="border
                px-2 py-2 w-28 rounded focus:outline-none focus:border-indigo-300" />
              </div>
            </template>
          </v-date-picker>
        </div>
        <div class="py-2">
           <button @click="RequestBetRecord()" class="px-6 py-2 lg:mx-4 tracking-wider text-gray-300 bg-blue-600 shadow-lg rounded-md hover:bg-blue-700 outline-none focus:outline">Request</button>
        </div>
    </div>
        <div class="px-1 py-1 ">
      <div class="flex flex-col py-1 cursor-pointer  ">
        <div class="overflow-x-auto min-w-full ">
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="overflow-x-auto">
              <table class="table-fixed" >
                <thead v-if="transRecord.length > 0" class="bg-slate-700 sticky top-0">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-center   text-sm font-medium text-gray-50 uppercase tracking-wider">序号</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">时间</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">订单号</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">交易类型</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">金额</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">状态</th>
                  </tr>
                </thead>
                <tbody v-if="transRecord.length > 0" class="bg-gray-600 divide-y text-gray-200 divide-gray-400">
                  <tr v-for="(record,i) in transRecord" :key="i">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <span>{{record.number}}</span>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm overflow-hidden text-ellipsis text-gray-200">{{ record.time }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{record.order}}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{{ record.role }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">{{record.transaction}}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">{{record.state}}</td>
                  </tr>
                </tbody>

                <tr v-if="transRecord.length === 0">
                  <td colspan="16" rowspan="8">
                    <div class="flex py-4 flex-col justify-center items-center">
                      <div class="py-3">
                        <img src="https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/images/myCenter/noRecord.7971d6e480a3a53c1255ffbae7cc79ca.png?x-oss-process=image/resize,m_fixed,w_730,h_330/format,webp" alt="norecord" class="w-[365px] h-[165px]" />
                      </div>
                      <div class="py-3">
                        <span class="text-gray-300 tracking-wide text-base font-medium">暂无交易记录</span>
                      </div>
                      <div class="py-3">
                        <button class="px-6 py-2 tracking-wider text-gray-300 bg-blue-600 shadow-lg rounded-md hover:bg-blue-700 outline-none focus:outline">立即存款</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- desktop  -->
  <div class="w-full hidden md:block h-screen bg-gray-900">
    <div class="flex flex-col justify-center items-center h-full">
      <EmojiSadIcon class="w-52 h-52 text-gray-300" />
      <button class="px-3 py-2 text-gray-200 bg-indigo-500 outline-none hover:bg-indigo-600 shadow-lg rounded-md tracking-wide font-medium" @click="goHome">BackToHome</button>
    </div>
  </div>
</template>

<script setup>
import {
  ChevronLeftIcon,
  CheckIcon,
  EmojiSadIcon,
  SelectorIcon,
} from "@heroicons/vue/outline";
import { reactive, ref,watch } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useStore } from "vuex";
import allApi from "@/network/allApi.js";
import Loading from "@/utils/loader";
const router = useRouter();
const store = useStore();

const lToken = store.state.user.token;
const userId__ = store.state.user.userId;
const User_Info = store.state.user.user

const transRecord = reactive([
  {
    number: "1234",
    time: "2022-01-14 20:22:27",
    order: "231234123",
    role: "admin",
    transaction: "1x23213esd3",
    state: "holy shit",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
  {
    number: "3234",
    time: "2024-01-39 20:22:27",
    order: "423434",
    role: "super admin",
    transaction: "1x23213esd3",
    state: "holy cow",
  },
]);

const card = reactive([
  { name: "all" },
  { name: "bjl" },
  { name: "lh" },
  { name: "nn" },
  { name: "tts" },
  { name: "xjh" },
  { name: "dx" },
  { name: "ty" },
  { name: "cb" },
]);
const selectCardOne = ref(card[0]);
const innerWidth = ref(window.innerWidth);

const pagination = reactive({
  pageSize: 1,
  currentPage: 1,
});

const range = reactive({
  start: new Date(),
  end: new Date(),
});
const masks = reactive({
  input: "YYYY/MM/DD",
})
const goBack = () => {
  router.go(-1);
};

const goHome = () => {
  router.push("/");
};

const updateDate = (r) => {
 range.start = r.start
 range.end = r.end
}

// api call of getTransactionRecord
const getBetRecord = () => {
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {
    Loading.showLoading();
    let userId_ = userId__;
    let token_ = lToken;
    let name_ = User_Info.name;
    let gameType_ = selectCardOne.value.name;
    //let startTime_ = range.start;
    let startTime_ = range.start.toISOString().slice(0, 10)
    let endTime_ = range.end.toISOString().slice(0, 10)
    let orderStatus_ = 1;
    let pageSize_ = pagination.pageSize;
    let currentPage_ = pagination.currentPage;

    const req_ = {
      userId: userId_,
      token: token_,
      name: name_,
      gameType: gameType_,
      startTime: startTime_,
      endTime: endTime_,
      orderStatus: orderStatus_,
      pageSize: pageSize_,
      currentPage: currentPage_,
    };
    console.log("req of getBetRecord", req_);
    allApi
      .getBetRecord({ data: req_ })
      .then((res) => {
        Loading.hideLoading();
        console.log(res.data.data, " ************* getBetRecord is *************");
        //store.commit("user/User",res.data.data)
      })
      .catch((e) => {
        Loading.hideLoading();
        console.log(e);
      });
  }
};

const RequestBetRecord = () => {
  getBetRecord()
}


const changeWindowSize = () => {
  innerWidth.value = window.innerWidth;
};

watch(
  () => innerWidth.value,
  () => {
    if (innerWidth.value > 768) {
      router.push("/betRecord");
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  window.addEventListener("resize", changeWindowSize);
  getBetRecord();
});

</script>

<style  scoped>
</style>

