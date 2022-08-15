<template>
    <div class="w-full sm:py-4 h-screen bg-gray-900 sm:bg-none relative">
       <div class="sticky top-0 z-50 w-full py-2 px-2 flex justify-between items-center bg-slate-700 sm:hidden">
            <div class="flex items-center">
                <ChevronLeftIcon @click="goBack" class="w-8 h-8 text-primary" />
                <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">{{ t('change_pass') }}</span>
            </div>
        </div>
        <div class="sm:flex text-center items-center px-4 hidden">
            <span class="px-3 text-lg text-gray-100 tracking-wide font-bold">{{t('change_pass')}}</span>
            <!-- <span class="text-sm text-gray-300">只显示近一个月的交易记录</span> -->
        </div>
        <div class="px-7 py-3">
            <div class="flex items-start flex-col sm:flex-row sm:items-center">
                <span class="text-gray-300 font-medium tracking-wide text-sm">Please Enter Old Password :</span>
                <form @click.prevent class="py-5 sm:px-7">
                    <div class="flex text-center items-center relative">
                        <input  autocomplete="off" name="oldPassword" v-model="oldpass"
                            type="text"
                            class="text-sm placeholder-gray-400 text-gray-300 pl-5 pr-10 border border-gray-400 max-w-sm w-80 py-2 focus:outline-none focus:border-blue-400 bg-slate-800"
                            placeholder="Enter Old Password" />
                        <XIcon v-if="oldpass" @click="oldpass = ''"
                            class="h-5 w-5 cursor-pointer text-white absolute right-3"></XIcon>
                    </div>
                </form>
            </div>
            <div class="flex items-start flex-col sm:flex-row sm:items-center">
                <span class="text-gray-300 font-medium tracking-wide text-sm">Please Enter New Password :</span>
                <form @click.prevent class="py-5 sm:px-6">
                    <div class="flex text-center items-center relative">
                        <input  autocomplete="off" name="new Password" v-model="newpass"
                            type="text"
                            class="text-sm placeholder-gray-400 text-gray-300 pl-5 pr-10 border border-gray-400 max-w-sm w-80 py-2 focus:outline-none focus:border-blue-400 bg-slate-800"
                            placeholder="Enter New Password" />
                        <XIcon v-if="newpass" @click="newpass = ''"
                            class="h-5 w-5 cursor-pointer text-white absolute right-3"></XIcon>
                    </div>
                </form>
            </div>
            <div class="flex items-start flex-col sm:flex-row sm:items-center">
                <span class="text-gray-300 font-medium tracking-wide text-sm">Please Confirm New Password :</span>
                <form @click.prevent class="py-5 sm:px-2">
                    <div class="flex text-center items-center relative">
                        <input  autocomplete="off" name="confirm Password" v-model="confirmpass"
                            type="text"
                            class="text-sm placeholder-gray-400 text-gray-300 pl-5 pr-10 border border-gray-400 max-w-sm w-80 py-2 focus:outline-none focus:border-blue-400 bg-slate-800"
                            placeholder="Confirm New Password" />
                        <XIcon v-if="confirmpass" @click="confirmpass = ''"
                            class="h-5 w-5 cursor-pointer text-white absolute right-3"></XIcon>
                    </div>
                </form>
            </div>
        </div>
          <div class="flex items-center px-7 py-3">
            <button @click="changePass()" class="px-6 py-2 inline-flex  tracking-wider  bg-primary text-black shadow-lg rounded-md outline-none focus:outline-none ">Change Password</button>
         </div>
    </div>
</template>
<script setup>
import {ref,computed}from 'vue'
import { useI18n } from "vue-i18n/index";
import { SelectorIcon, CheckIcon, SearchIcon,XIcon ,ChevronLeftIcon } from "@heroicons/vue/solid";
import NoticeMsg from "@/utils/alert";
import md5 from "js-md5";
import Loading from "@/utils/loader";
import { useRouter } from "vue-router";
import allApi from "@/network/allApi.js";
import { useStore } from "vuex";

const { t } = useI18n();
const oldpass = ref('')
const newpass = ref('')
const confirmpass = ref('')
const router = useRouter();
const store = useStore();

const goBack = () => {
  router.go(-1);
};
const user = computed(() => store.getters["user/USERID"]);

const changePass = () => {
  if(oldpass.value == '' || newpass.value == '' || confirmpass.value == '') {
   return NoticeMsg.Message('Please Enter All Fields', "warning");
  }
    if (newpass.value !== confirmpass.value)
        return NoticeMsg.Message(t('confirm_notmatch'), "warning");

  if(newpass.value.length < 6)
   return NoticeMsg.Message(`Password must be at least 6 characters long`, "warning");  

    if (oldpass.value == newpass.value)
        return NoticeMsg.Message('New Password need to be different', "warning");

    if (!/\d/.test(newpass.value) || !/[a-zA-Z]/.test(newpass.value))
        return NoticeMsg.Message(t('pass_check'), "warning");

    let old_pass = md5(oldpass.value);
    let new_pass = md5(newpass.value);
    let userId = user.value
    let data = {
        userId:userId, 
        old_password:old_pass,
        pw:new_pass
    };
    console.log("req of change password",data);
    if (userId) {
        Loading.showLoading()
        allApi.changePass({ data }).then((res) => {
            console.log(res);
            Loading.hideLoading()
        }).catch((e) => {
            console.log(e);
            Loading.hideLoading()
        })
    }
}
</script>
<style scoped>
</style>