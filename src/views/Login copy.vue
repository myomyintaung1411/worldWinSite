<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-800 login__">
    <div class="flex flex-col bg-gray-700 text-gray-200 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-xs sm:max-w-md">
      <div class="font-medium self-center text-xl sm:text-3xl">{{t('login_t')}}</div>
      <div class="mt-4 self-center text-md sm:text-sm">{{t('login_b')}}</div>

      <div class="mt-5">
        <form @click.prevent>
          <div class="flex flex-col mb-5">
            <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">{{t('enter_u')}}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>

              <input v-model="name" id="name" type="name" name="name" class="text-sm placeholder-gray-500 text-gray-500 pl-10 pr-4 rounded-2xl w-full py-2 focus:outline-none outline-none" placeholder="请输入账号" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">{{t('enter_p')}}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input v-model="password" id="password" :autocomplete="false" :type="passwordField" name="password" class="__p text-sm placeholder-gray-500 text-gray-500 pl-10 pr-16 rounded-2xl w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0" placeholder="请输入密码" />
              <div class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <EyeIcon v-if="passwordField !== 'password'" @click="ShowVisibility" class="w-4 h-5" />
                <EyeOffIcon v-else @click="ShowVisibility" class="w-4 h-5 text-yellow-700" />
                <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="ShowVisibility">{{passwordField === 'password' ? 'show' : 'hide'}}</label> -->
              </div>
            </div>
          </div>

          <!-- <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">{{t('enter_p')}}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">

                <ExclamationCircleIcon class="h-6 w-6"></ExclamationCircleIcon>
              </div>
              <input v-model="code" type="text" :autocomplete="false" class="__p text-sm placeholder-gray-500 text-gray-500 pl-10 pr-16 rounded-2xl w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0" placeholder="验证码" />
              <div class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <div class="yanzheng h-fit absolute right-0" @click="refreshCode">
                  <Identify class="yanzheng1" :identifyCode="identifyCode"></Identify>
                </div>
              </div>
            </div>
          </div> -->

          <div class="flex w-full">
            <button :disabled="disableBtn" @click="login" type="submit" :class="disableBtn ? 'bg-primary opacity-40 cursor-not-allowed' : 'text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo'" class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded-2xl py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">{{t('login')}}</span>
              <span :class="!disableBtn ? 'sm:animate-wiggle ' : ''">
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-between w-64 md:w-96 items-center mt-6">
      <a target="_blank" class="inline-flex items-center text-gray-700 font-medium text-sm text-center">
        <router-link to="/register" class="text-xs ml-2 text-blue-500 font-semibold">{{t('reg_t')}}</router-link>
      </a>
      <router-link to="/" class="text-xs ml-10 text-blue-500 font-semibold">{{t('reg_later')}}</router-link>
    </div>
  </div>
</template>

<script setup>
import {
  EyeIcon,
  EyeOffIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/solid";
import { ref, computed, onMounted, watch } from "vue";
import Identify from "@/components/Canvas.vue";
import { UserLogin } from "@/network/user.js";
import { useRouter } from "vue-router";
import Loading from "@/utils/loader";
import NoticeMsg from "@/utils/alert";
import { useStore } from "vuex";
import md5 from "js-md5";
import pomelo from "@/socket/pomelo.js";
import AES from "@/utils/aes";

import { useI18n } from "vue-i18n/index";
const { t } = useI18n();

// const identifyCodes = ref("1234567890abcdefjhijk1234567890linopqrsduvwxyz"); // Captcha components
// const identifyCode = ref(""); // Verification code generation results
// const code = ref(""); // Verification code input content

const name = ref("");
const password = ref("");

const passwordField = ref("password");
const store = useStore();
const router = useRouter();

// Reset captcha
// function refreshCode() {
//   identifyCode.value = "";
//   makeCode(identifyCodes.value, 4);
// }
// function makeCode(o, l) {
//   // o Represents a set of random number elements ,l Represents the number of verification codes （ For now 4 Bit verification code ）
//   for (let i = 0; i < l; i++) {
//     identifyCode.value +=
//       identifyCodes.value[randomNum(0, identifyCodes.value.length)];
//   }
// }
// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

const ShowVisibility = () => {
  passwordField.value = passwordField.value === "password" ? "text" : "password";
};

const disableBtn = computed(() => {
  if (name.value === "" || password.value === "") {
    return true;
  } else {
    return false;
  }
});

const login = () => {
  let pass = md5(password.value);
  let data = {
    data: `01;${name.value};${pass};windows;1`,
  };
  // if (code.value.toLowerCase() !== identifyCode.value.toLowerCase()) {
  //   NoticeMsg.Message("Please fill in the correct verification code", "error");
  //  return refreshCode();
  // } 
  Loading.showLoading();
  //  Loading.hideLoading()
  console.log("data is", data);
  UserLogin(data)
    .then((res) => {
      Loading.hideLoading();
      console.log("res", res);
      var result = res.data.split(";").map(function (value) {
        return value;
      });
      console.log(typeof result[1]);
      if (result[1] === "2") return NoticeMsg.Message("no account", "error");
      if (result[1] === "3")
        return NoticeMsg.Message("账号或密码错误", "error");
      store.commit("user/Login_Info", result);
      store.commit("user/Game_Enter_Info", {
        account: name.value,
        pass: password.value,
      });
      name.value = "";
      password.value = "";
      router.push("/");
      NoticeMsg.Message("登录成功", "success");
      // pomelo.conn((err, res) => {
      //   console.log("log res of", res);
      //   if (err) {
      //     Loading.hideLoading()
      //     console.log(err);
      //   }
      //   if (res.code == 200) {
      //     //store.commit("app/SET_PomeloStatus", true);
      //     console.log("pomeloooooooooooooooo connecteddddddddddd");
      //     name.value = "";
      //     password.value = "";
      //     router.push("/");
      //     NoticeMsg.Message("登录成功","success");
      //   }
      // });
    })

    .catch((e) => {
      console.log(e);
      NoticeMsg.Message("Login failed", "error");
      Loading.hideLoading();
    });

  // onMounted(() => {
  //   identifyCode.value = "";
  //   makeCode(identifyCodes.value, 4);
  // });

  // watch(()=>{
  //   makeCode(identifyCodes.value, 4)
  // })
};
</script>

<style scoped>
/* .login__{
  background: url("@/assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
} */
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  box-shadow: 0 0 0px 1000px white inset;
}

input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 50px white inset;
  box-shadow: 0 0 0 50px white inset;
  -webkit-text-fill-color: #333;
}
.yanzheng {
  width: 100px;
  /* height: 34px; */
  text-align: center;
  /* margin: 5px 30px; */
  border: 2px solid #009199;
}
.yanzheng1 {
  width: 100px;
  height: 34px;
}
</style>