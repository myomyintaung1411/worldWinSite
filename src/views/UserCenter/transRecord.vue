<template>
  <div class="w-full py-4">
    <div class="flex text-center items-center px-4">
      <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">{{t('t_record')}}</span>
      <!-- <span class="text-sm text-gray-300">只显示近一个月的交易记录</span> -->
    </div>
    <div class="flex items-center px-7 py-3">
      <span class="text-gray-300 font-medium tracking-wide text-sm">{{t('trans_type')}}</span>

      <div class="w-64 px-2 cursor-pointer z-10">
        <Listbox v-model="selectCardOne">
          <div class="relative mt-1">
            <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span class="block truncate">{{ t(selectCardOne.name) }}</span>
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
                  ]">{{ t(select.name) }}</span>
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

      <!--  -->
      <span class="text-gray-300 font-medium tracking-wide text-sm">{{t('state')}}:</span>
      <div class="w-64 px-2 cursor-pointer z-10">
        <Listbox v-model="selectOrderStatus">
          <div class="relative mt-1">
            <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span class="block truncate">{{ t(selectOrderStatus.name) }}</span>
              <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="select in status" :key="select.name" :value="select" as="template">
                  <li :class="[
                  active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]">
                    <span :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]">{{ t(select.name) }}</span>
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

    <div class="flex md:flex-col lg:flex-row md:space-y-5 lg:space-y-0 lg:flex-nowrap py-3 items-start lg:items-center px-5">
      <!-- <span class="text-sm text-gray-300 tracking-wide">交易时间：</span>
      <div class="px-2">
        <ul class="flex cursor-pointer">
          <li @click="DateClick(1,0)" :class="activeDate === 1 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 text-white rounded-l-md border-r border-gray-500">今日</li>
          <li @click="DateClick(2,7)" :class="activeDate === 2 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 text-white border-r border-gray-500">近7日</li>
          <li @click="DateClick(3,15)" :class="activeDate === 3 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 text-white border-r border-gray-500">近15日</li>
          <li @click="DateClick(4,30)" :class="activeDate === 4 ? 'bg-gray-900' : 'bg-gray-600' " class="py-2 px-3 rounded-r-md text-white">本月</li>
        </ul>
      </div>-->
      <div class="sm:px-2">
        <span class="text-sm hidden md:block text-gray-300 tracking-wide">{{t('time_t')}}</span>
      </div>
      <div class="text-center">
        <v-date-picker locale="en" v-model="range" :masks="masks" is-range :max-date="new Date()" @drag="updateDate($event)">
          <template v-slot="{ inputValue, inputEvents }">
            <div class="flex justify-center items-center">
              <input :value="inputValue.start" v-on="inputEvents.start" class="border px-2 py-2 w-60 rounded focus:outline-none focus:border-indigo-300" />
              <svg class="w-4 h-4 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <input :value="inputValue.end" v-on="inputEvents.end" class="border px-2 py-2 w-60 rounded focus:outline-none focus:border-indigo-300" />
            </div>
          </template>
        </v-date-picker>
      </div>
      <button @click="RequestTransRec()" class="px-6 py-2 inline-flex lg:mx-4 tracking-wider  bg-primary text-black shadow-lg rounded-md outline-none focus:outline">
        <SearchIcon class="w-5 h-5 text-black mt-[2px] mr-2" />{{t('search')}}
      </button>
    </div>
    <div class="px-7 py-3 max-w-7xl">
      <div class="flex flex-col py-2 cursor-pointer">
        <div class="overflow-x-auto min-w-full">
          <div class="py-2 inline-block min-w-full">
            <div class="overflow-x-auto h-96">
              <table class style="min-width:995px">
                <thead class="bg-gray-900 sticky top-0">
                  <tr>
                    <th scope="col" class="py-3 px-2 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">{{t('s_num')}}</th>
                    <th scope="col" class="py-3 px-2 text-left text-sm font-medium text-gray-50 uppercase tracking-wider">{{t('time')}}</th>
                    <th scope="col" class="py-3 px-2 text-left text-sm font-medium text-gray-50 uppercase tracking-wider">{{t('order_n')}}</th>
                    <th scope="col" class="py-3 px-2 text-left text-sm font-medium text-gray-50 uppercase tracking-wider">{{t('type')}}</th>
                    <th scope="col" class="py-3 px-2 text-left text-sm font-medium text-gray-50 uppercase tracking-wider">{{t('amount')}}</th>
                    <th scope="col" class="py-3 px-2 text-left text-sm font-medium text-gray-50 uppercase tracking-wider">{{t('state')}}</th>
                  </tr>
                </thead>
                <tbody v-if="transRecord.length > 0" class="divide-y text-gray-200 divide-gray-600">
                  <tr v-for="(record,i) in transRecord" :key="i" class="hover:bg-slate-700">
                    <td class="px-2 text-left py-4 whitespace-nowrap ">
                      <div class="text-sm overflow-hidden text-ellipsis text-gray-200">{{ record.serialNumber }}</div>
                    </td>
                    <td class="px-2 text-left py-4 whitespace-nowrap">
                      <div class="text-sm overflow-hidden text-ellipsis text-gray-200">{{ record.time }}</div>
                    </td>
                    <td class="px-2 text-left py-4 whitespace-nowrap">
                      <span class="inline-flex text-sm leading-5 font-semibold text-gray-300">{{record.orderNumber}}</span>
                    </td>
                    <td class="px-2 text-left py-4 whitespace-nowrap text-sm text-gray-300">{{ record.TranscationType }}</td>
                    <td class="px-2 text-left py-4 whitespace-nowrap text-sm font-medium">{{record.money}}</td>
                    <td class="px-2 text-left py-4 whitespace-nowrap text-sm font-medium">{{record.status === 1 ? '已完成' : '未完成'}}</td>
                  </tr>
                </tbody>

                <tr v-if="transRecord.length === 0">
                  <td colspan="16" rowspan="8">
                    <div class="flex py-4 flex-col justify-center items-center">
                      <div class="py-3">
                        <img src="@/assets/home/noRecord.png" alt="norecord" class="w-[365px] h-[165px]" />
                      </div>
                      <div class="py-3">
                        <span class="text-gray-300 tracking-wide text-base font-medium">{{t('no_records')}}</span>
                      </div>
                      <!-- <div class="py-3">
                        <button class="px-6 py-2 tracking-wider  text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo shadow-lg rounded-md  outline-none focus:outline">立即存款</button>
                      </div> -->
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div v-if="transRecord.length > 0" class="flex justify-center items-center space-x-5 cursor-pointer">
        <span  @click="loadmore(1)" :class="pagination.currentPage === 1 ? 'hidden' : 'block'" class="text-gray-200 hover:text-primary font-bold tracking-wide">First</span>
        <span @click="loadmore(2)" :class="pagination.currentPage === 1 ? 'hidden' : 'block'" class="text-gray-200 hover:text-primary font-bold tracking-wide">Prev</span>
        <button class="rounded-lg w-fit px-2 py-1 bg-primary text-black">{{pagination.currentPage}}</button>
        <span @click="loadmore(3)" :class="Math.ceil(pagination.total / pagination.pageSize) > pagination.currentPage ? 'block' : 'hidden'" class="text-gray-200 hover:text-primary font-bold tracking-wide">Next</span>
        <span @click="loadmore(4)" :class="Math.ceil(pagination.total / pagination.pageSize) > pagination.currentPage ? 'block' : 'hidden'" class="text-gray-200 hover:text-primary font-bold tracking-wide">Last</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { SelectorIcon, CheckIcon, SearchIcon } from "@heroicons/vue/solid";
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
import { useI18n } from "vue-i18n/index";

const activeDate = ref(1);

const range = reactive({
  start: new Date(),
  end: new Date(),
});
const { t } = useI18n();
const pagination = reactive({
  pageSize: 5,
  currentPage: 1,
  total:0,
});


const store = useStore();

const masks = reactive({
  input: "YYYY/MM/DD",
});
const transRecord = ref([
  // {
  //   serialNumber: 123,
  //   time: "2022-01-14 20:22:27",
  //   orderNumber: "231234123",
  //   TranscationType: "上分",
  //   money: 1000,
  //   status: 1,
  // },
  // {
  //   serialNumber: 123,
  //   time: "2022-01-14 20:22:27",
  //   orderNumber: "231234123",
  //   TranscationType: "上分",
  //   money: 1000,
  //   status: 1,
  // },
  // {
  //   serialNumber: 123,
  //   time: "2022-01-14 20:22:27",
  //   orderNumber: "231234123",
  //   TranscationType: "上分",
  //   money: 1000,
  //   status: 1,
  // },
  // {
  //   serialNumber: 123,
  //   time: "2022-01-14 20:22:27",
  //   orderNumber: "231234123",
  //   TranscationType: "上分",
  //   money: 1000,
  //   status: 1,
  // },
  // {
  //   serialNumber: 123,
  //   time: "2022-01-14 20:22:27",
  //   orderNumber: "231234123",
  //   TranscationType: "上分",
  //   money: 1000,
  //   status: 1,
  // },
]);
const card = reactive([
  { id: 3, name: "all" },//全部
  { id: 2, name: "lower_s" },//下分
  { id: 1, name: "top_s" },//上分
]);
const status = reactive([
  { id: 1, name: "complete" },//已完成
  { id: 2, name: "undone" }, //未完成
]);

const loadmore = (index) => {
  switch (index) {
    case 1:
      pagination.currentPage = 1;
       getTransactionRecord()
      break;
    case 2:
      if (pagination.currentPage > 1) {
        pagination.currentPage -= 1;
         getTransactionRecord()
      }
      break;
    case 3:
      if( Math.ceil(pagination.total / pagination.pageSize) > pagination.currentPage) {
        pagination.currentPage += 1;
         getTransactionRecord()
      }
      break;
    case 4:
     pagination.currentPage = Math.ceil(pagination.total / pagination.pageSize)
      getTransactionRecord()
      break;

    default:
      break;
  }
};
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;

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
const selectOrderStatus = ref(status[0]);

const updateDate = (r) => {
  range.start = r.start;
  range.end = r.end;
};

// api call of getTransactionRecord
const getTransactionRecord = () => {
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {
    Loading.showLoading();
    let userId_ = userId__;
    let token_ = lToken;
    let TransactionType_ = selectCardOne.value.id;
    let startTime_ = range.start.toISOString().replace("T"," ").substring(0, 19);

    let endTime_ = range.end.toISOString().replace("T"," ").substring(0, 19);
    let orderStatus_ = selectOrderStatus.value.id;
    let pageSize_ = pagination.pageSize;
    let currentPage_ = pagination.currentPage;

    const req_ = {
      userId: userId_,
      token: token_,
      TransactionType: TransactionType_,
      // startTime: startTime_ + ' 00:00:00',
      // endTime: endTime_ + ' 00:00:00',
      startTime: startTime_ ,
      endTime: endTime_ ,
      orderStatus: orderStatus_,
      pageSize: pageSize_,
      currentPage: currentPage_,
    };
    console.log("req of transRecord", req_);
    allApi
      .getTransactionRecord({ data: req_ })
      .then((res) => {
        Loading.hideLoading();
        console.log(res.data.data, "transRecord res *************");
        pagination.total = res.data.data.count
        transRecord.value = res.data.data.record
        //store.commit("user/User",res.data.data)
      })
      .catch((e) => {
        Loading.hideLoading();
        console.log(e);
      });
  }
};

const RequestTransRec = () => {
  getTransactionRecord();
};

onMounted(() => {
  getTransactionRecord();
});
</script>

<style lang="scss" scoped>
</style>