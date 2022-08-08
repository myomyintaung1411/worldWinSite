<template>
    <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
        <div class="sticky top-0 z-50 w-full py-2 px-2 flex justify-between items-center bg-slate-700">
            <div class="flex items-center">
                <ChevronLeftIcon @click="goBack" class="w-8 h-8 text-primary" />
                <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">{{ t('recharge_requst') }}</span>
            </div>
        </div>
         <div class="px-7 py-3">
            <span class="text-gray-300 font-medium tracking-wide text-sm px-2">Select Coin</span>

            <div class="w-64 px-1 cursor-pointer" >
                <Listbox v-model="selectCoinType" >
                    <div class="relative mt-1" >
                        <ListboxButton 
                            class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                            <span class="block truncate">{{ selectCoinType.name }}</span>
                            <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </ListboxButton>

                        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                            <ListboxOptions style="z-index:99999"
                                class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <ListboxOption  v-slot="{ active, selected }" v-for="select in coinType"
                                    :key="select.name" :value="select" as="template">
                                    <li :class="[
                  active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]">
                                        <span :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]">{{ select.name }}</span>
                                        <span v-if="selected"
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
        <div class=" px-7 py-3">
            <span class="text-gray-300 font-medium tracking-wide text-sm px-2">Enter  Address</span>
            <form @click.prevent class="py-1 px-2">
                <div class="flex text-center items-center relative">
                    <input autocomplete="off" name="coinAddress" type="text" v-model="coinAddress"
                        class="text-sm placeholder-gray-400 text-gray-300 
                        pl-5 pr-10 border border-gray-400 max-w-sm w-80 py-2
                         focus:outline-none focus:border-blue-400 bg-slate-800"
                        placeholder="Please Enter  Address"  />
                        <XIcon v-if="coinAddress" @click="coinAddress = ''"  class="h-5 w-5 text-white absolute right-3"></XIcon>
                </div>
            </form>
        </div>
        <div class=" px-7 py-3">
            <span class="text-gray-300 font-medium tracking-wide text-sm px-2">Enter  Amount</span>
            <form @click.prevent class="py-1 px-2">
                <div class="flex text-center items-center relative">
                    <input autocomplete="off" name="coinAddress" type="number" v-model="coin"
                        class="text-sm placeholder-gray-400 text-gray-300 
                        pl-5 pr-10 border border-gray-400 max-w-sm w-80 py-2
                         focus:outline-none focus:border-blue-400 bg-slate-800"
                        placeholder="Please Enter  Amount" />
                        <XIcon v-if="coin" @click="coin = ''"  class="h-5 w-5 text-white absolute right-3"></XIcon>
                </div>
            </form>
        </div>
         <div class="flex items-center px-9 py-3">
            <button @click="rechageRequst()" class="px-6 py-2 inline-flex  tracking-wider  bg-primary text-black shadow-lg rounded-md outline-none focus:outline-none ">Request Withdraw</button>
         </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { SelectorIcon, CheckIcon, SearchIcon,ChevronLeftIcon,XIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import allApi from "@/network/allApi.js";
import Loading from "@/utils/loader";
import NoticeMsg from "@/utils/alert";
import { validate, getAddressInfo } from 'bitcoin-address-validation';
import { useRouter } from "vue-router";

import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useI18n } from "vue-i18n/index";

const activeDate = ref(1);
const coinAddress = ref('')
const coin = ref('')
const { t } = useI18n();



const store = useStore();
const router = useRouter();

const masks = reactive({
  input: "YYYY/MM/DD",
});

const coinType = reactive([
  { id: 1, name: "BTC" },//全部
  { id: 2, name: "ETH" },//下分
  { id: 3, name: "TRC20" },//上分
  { id: 1, name: "ERC20" },//上分
]);


const lToken = store.state.user.token;
const userId__ = store.state.user.userId;
const user = computed(() => store.getters["user/USER"]);
const selectCoinType = ref(coinType[0]);

const goBack = () => {
  router.go(-1);
};


const rechageRequst = () => {
 if(selectCoinType.value.name == 'BTC') {
  let isValidBtc =  validate(coinAddress.value)
  if(!isValidBtc) return NoticeMsg.Message('Please Enter avalid address', "warning");
 }
 if(selectCoinType.value.name == 'ETH') {
    var address = coinAddress.value;
    let resp = address.match(/^0x[a-fA-F0-9]{40}$/g)
//   console.log(resp);
   if(resp == null) return NoticeMsg.Message('Please Enter  valid address', "warning");
 }
 let userId = userId__;
    const req_ = {
        username: user?.value.name, coins: coin.value,
        coin_address: coinAddress.value, conType: selectCoinType.value.name, userId: userId,
    };
  if(coinAddress.value == '' || selectCoinType.value.name == '' || coin.value == '') {
    return  NoticeMsg.Message('Please Enter  coin address', "warning");
  }
  allApi
    .getmemberRequestRecharge({ data: req_ })
    .then((res) => {
        if (res.data.success == true) {
            coinAddress.value = ''
            coin.value = ''
            return NoticeMsg.Message('success', "success");
        }
      console.log("getmemberRequestRecharge", res);
    })
    .catch((e) => {
      console.log(e);
    });
}

const RequestTransRec = () => {
  getTransactionRecord();
};

onMounted(() => {
 // getTransactionRecord();
});
</script>

<style lang="scss" scoped>
</style>