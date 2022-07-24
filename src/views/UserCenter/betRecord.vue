<template>
  <div class="w-full py-4">
    <div class="flex text-center items-center px-4">
      <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">投注记录</span>
      <span class="text-sm text-gray-300">每个场馆的数据将有一定时间的延迟，仅供参考使用</span>
    </div>
    <div class="px-7 py-3">
      <div class="flex items-center space-x-4">
        <span class="text-gray-300 font-medium tracking-wide text-sm">选择游戏：</span>
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
    </div>
    <div class="flex md:flex-col lg:flex-row md:space-y-5 lg:space-y-0 lg:flex-nowrap  py-3 items-start lg:items-center px-5">
      <!-- <span class="text-sm text-gray-300 tracking-wide">交易时间：</span>
      <div class="px-2">
        <ul class="flex cursor-pointer">
          <li @click="DateClick(1,0)" :class="activeDate === 1 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 text-white rounded-l-md border-r border-gray-500">今日</li>
          <li @click="DateClick(2,7)" :class="activeDate === 2 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 text-white border-r border-gray-500">近7日</li>
          <li @click="DateClick(3,15)" :class="activeDate === 3 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 text-white border-r border-gray-500">近15日</li>
          <li @click="DateClick(4,30)" :class="activeDate === 4 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 rounded-r-md text-white">本月</li>
        </ul>
      </div>-->
      <div class="sm:px-3">
        <span class="text-sm text-gray-300 tracking-wide">时间筛选：</span>
      </div>
      <div class="text-center">
        <v-date-picker locale="zh" v-model="range" :masks="masks" is-range :max-date="new Date()" @drag="updateDate($event)">
          <template v-slot="{ inputValue, inputEvents }">
            <div class="flex justify-center items-center">
              <input :value="inputValue.start" v-on="inputEvents.start" class="border px-2 py-2 w-60 
              rounded focus:outline-none focus:border-indigo-300" />
              <svg class="w-4 h-4 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <input :value="inputValue.end" v-on="inputEvents.end" class="border px-2 py-2 w-60  rounded focus:outline-none focus:border-indigo-300" />
            </div>
          </template>
        </v-date-picker>
      </div>
       <button @click="RequestBetRec()" class="px-6 py-2 lg:mx-4 tracking-wider text-gray-300 bg-blue-600 shadow-lg rounded-md hover:bg-blue-700 outline-none focus:outline">Request</button>
    </div>
    <div class="px-7 py-3  
      max-w-7xl ">
      <div class="flex flex-col py-2 cursor-pointer  ">
        <div class="overflow-x-auto min-w-full ">
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="overflow-x-auto  h-96">
              <table class="table-fixed max-w-7xl" >
                <thead class="bg-gray-900 sticky top-0">
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
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { SelectorIcon, CheckIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import allApi from "@/network/allApi.js";
import Loading from "@/utils/loader";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
const activeDate = ref(1);
const range = reactive({
  start: new Date(),
  end: new Date(),
});

const pagination = reactive({
  pageSize: 1,
  currentPage: 1,
});

const store = useStore();
const User_Info = store.state.user.user

const masks = reactive({
  input: "YYYY/MM/DD",
});
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
    role: "super adminddddddddddddddddddd",
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

const lToken = store.state.user.token;
const userId__ = store.state.user.userId;


const updateDate = (r) => {
 range.start = r.start
 range.end = r.end
}

const DateClick = (n, days) => {
  activeDate.value = n;
  const now = new Date();
  const tmpDate = now.setDate(now.getDate() + days);
  const newDate = new Date(tmpDate);
  //   range.start = newDate.toDateString();
  //   range.end = newDate.toDateString();
  // range.start = { start: newDate.toDateString, end: newDate.toDateString };
  range.start = {
    start: new Date(),
  };
  range.end = {
    end: new Date(),
  };
  console.log("start and end", range.start, range.end);
};
const selectCardOne = ref(card[0]);

const testReq = () => {
  console.log(selectCardOne.value.name,range.start,range.end,"************** req is **********");
}

//req 
const RequestBetRec = () => {
  console.log("start and end", range.start, range.end);
  getBetRecord()
}

// api call of getBetRecord
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

onMounted(() => {
  getBetRecord();
});
</script>

<style lang="scss" scoped>
</style>