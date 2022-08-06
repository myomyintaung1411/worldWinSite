<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-50 w-full py-2 px-2 flex justify-between items-center bg-slate-700">
      <div class="flex items-center">
        <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-primary" />
        <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">{{t('t_record')}}</span>
      </div>
    </div>
    <!-- <div class="text-gray-300 text-md px-3 font-bold my-2 tracking-wide">只显示近一个月的交易记录</div> -->
    <div class="mx-1 mt-2 px-2 py-2 bg-slate-700">
      <div class="flex items-center">
        <span class="text-base tracking-wide text-white">{{t('type')}}</span>
        <div class="w-64 px-2 cursor-pointer z-20">
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
      </div>
      <div class="flex py-3 items-center">
        <span class="text-base tracking-wide text-white">{{t('state')}}:</span>
        <div class="w-[280px] pl-10 cursor-pointer z-10">
          <Listbox v-model="selectOrderStatus">
            <div class="relative mt-1">
              <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span class="block truncate">{{ t(selectOrderStatus.name)}}</span>
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
      <div class="py-2">
        <span class="text-base text-white tracking-wide">{{t('time_t')}}</span>
      </div>
      <div class="py-2">
        <v-date-picker locale="en" v-model="range" :masks="masks" is-range :max-date="new Date()" @drag="updateDate($event)">
          <template v-slot="{ inputValue, inputEvents }">
            <div class="flex items-center">
              <input :value="inputValue.start" v-on="inputEvents.start" class="border px-2 py-2 w-28 rounded focus:outline-none focus:border-indigo-300" />
              <svg class="w-4 h-4 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <input :value="inputValue.end" v-on="inputEvents.end" class="border px-2 py-2 w-28 rounded focus:outline-none focus:border-indigo-300" />
            </div>
          </template>
        </v-date-picker>
      </div>
      <div class="py-2">
        <button @click="RequestTransRec()" class="px-6 py-2 inline-flex lg:mx-4 tracking-wider  bg-primary text-black shadow-lg rounded-md outline-none focus:outline">
          <SearchIcon class="w-5 h-5 text-black mt-[2px] mr-2" />{{t('search')}}
        </button>
      </div>
    </div>
    <div class="px-1 py-3 ">
      <div class="flex flex-col py-2 cursor-pointer">
        <div class="overflow-x-auto min-w-full">
          <div class="py-2 inline-block min-w-full">
            <div class="overflow-x-auto h-96">
              <table :class="transRecord.length === 0 ? 'w-full' : 'w-[995px]'">
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
                        <span class="text-gray-300 tracking-wide text-base font-medium">No transaction record</span>
                      </div>
                      <!-- <div class="py-3">
                        <button class="px-6 py-2 tracking-wider  text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo shadow-lg rounded-md  outline-none focus:outline">Deposit now</button>
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
        <span @click="loadmore(1)" :class="pagination.currentPage === 1 ? 'hidden' : 'block'" class="text-gray-200 hover:text-primary font-bold tracking-wide">First</span>
        <span @click="loadmore(2)" :class="pagination.currentPage === 1 ? 'hidden' : 'block'" class="text-gray-200 hover:text-primary font-bold tracking-wide">Prev</span>
        <button class="rounded-lg w-fit px-2 py-1 bg-primary text-black">{{pagination.currentPage}}</button>
        <span @click="loadmore(3)" :class="Math.ceil(pagination.total / pagination.pageSize) > pagination.currentPage ? 'block' : 'hidden'" class="text-gray-200 hover:text-primary font-bold tracking-wide">Next</span>
        <span @click="loadmore(4)" :class="Math.ceil(pagination.total / pagination.pageSize) > pagination.currentPage ? 'block' : 'hidden'" class="text-gray-200 hover:text-primary font-bold tracking-wide">Last</span>
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
  SearchIcon,
} from "@heroicons/vue/outline";
import { reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n/index";
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
const { t } = useI18n();

const lToken = store.state.user.token;
const userId__ = store.state.user.userId;

const transRecord = ref([
 
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
const selectCardOne = ref(card[0]);
const selectOrderStatus = ref(status[0]);

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
});
const goBack = () => {
  router.go(-1);
};

const goHome = () => {
  router.push("/");
};

const updateDate = (r) => {
  range.start = r.start;
  range.end = r.end;
};

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

// api call of getTransactionRecord
// const getTransactionRecord = () => {
//   if (
//     (userId__ && lToken !== null) ||
//     (userId__ && lToken !== undefined) ||
//     (userId__ && lToken !== "")
//   ) {
//     Loading.showLoading();
//     let userId_ = userId__;
//     let token_ = lToken;
//     let TransactionType_ = selectCardOne.value.id;
//     let startTime_ = range.start.toISOString().slice(0, 10);
//     let endTime_ = range.end.toISOString().slice(0, 10);
//     let orderStatus_ = selectOrderStatus.value.id;
//     let pageSize_ = pagination.pageSize;
//     let currentPage_ = pagination.currentPage;

//     const req_ = {
//       userId: userId_,
//       token: token_,
//       TransactionType: TransactionType_,
//       startTime: startTime_,
//       endTime: endTime_,
//       orderStatus: orderStatus_,
//       pageSize: pageSize_,
//       currentPage: currentPage_,
//     };
//     console.log("req of transRecord", req_);
//     allApi
//       .getTransactionRecord({ data: req_ })
//       .then((res) => {
//         Loading.hideLoading();
//         console.log(res.data.data, "transRecord res *************");
//         //store.commit("user/User",res.data.data)
//       })
//       .catch((e) => {
//         Loading.hideLoading();
//         console.log(e);
//       });
//   }
// };

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
    let startTime_ = range.start.toISOString().slice(0, 10);

    let endTime_ = range.end.toISOString().slice(0, 10);
    let orderStatus_ = selectOrderStatus.value.id;
    let pageSize_ = pagination.pageSize;
    let currentPage_ = pagination.currentPage;

    const req_ = {
      userId: userId_,
      token: token_,
      TransactionType: TransactionType_,
      startTime: startTime_ + ' 00:00:00',
      endTime: endTime_ + ' 23:59:59',
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

const changeWindowSize = () => {
  innerWidth.value = window.innerWidth;
};

watch(
  () => innerWidth.value,
  () => {
    if (innerWidth.value > 768) {
      router.push("/transRecord");
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  window.addEventListener("resize", changeWindowSize);
  getTransactionRecord();
});
</script>

<style  scoped>
</style>

