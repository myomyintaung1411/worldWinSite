<template>
  <div class="min-h-screen min-w-full w-screen h-screen flex flex-col items-center justify-center bg-gray-800 login__">
    <video id="register_video" class="register__video__3tV1S bg-cover   bg-gray-800" autoplay muted preload="preload" loop>
      <source
        src="@/assets/loginV.mp4"
        type="video/mp4" />
    </video>
    
    
    <div class="flex flex-col z-10 text-gray-200 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-xs sm:max-w-md">
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

              <input v-model="name" id="name" autocomplete="off" type="name" name="name" class="text-sm placeholder-gray-500 text-gray-500 pl-10 pr-4 rounded-2xl w-full py-2 focus:outline-none outline-none" placeholder="请输入账号" />
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
              <input v-model="password" id="password" autocomplete="off" :type="passwordField" name="password" class="__p text-sm placeholder-gray-500 text-gray-500 pl-10 pr-16 rounded-2xl w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0" placeholder="请输入密码" />
              <div class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <EyeIcon v-if="passwordField !== 'password'" @click="ShowVisibility" class="w-4 h-5" />
                <EyeOffIcon v-else @click="ShowVisibility" class="w-4 h-5 text-yellow-700" />
                <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="ShowVisibility">{{passwordField === 'password' ? 'show' : 'hide'}}</label> -->
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">{{t('enter_p')}}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <ExclamationCircleIcon class="h-6 w-6"></ExclamationCircleIcon>
              </div>
              <input v-model="code" type="text" autocomplete="off" class="__p text-sm placeholder-gray-500 text-gray-500 pl-10 pr-16 rounded-2xl w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0" placeholder="验证码" />
              <div class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <div class="yanzheng h-fit absolute right-0" @click="refreshCode">
                  <Identify class="yanzheng1" :identifyCode="identifyCode"></Identify>
                </div>
              </div>
            </div>
          </div>

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
    <div class="z-10 flex justify-between w-64 md:w-96 items-center mt-6">
      <a target="_blank" class="inline-flex items-center text-gray-700 font-medium text-sm text-center">
        <router-link to="/register" class="text-xs ml-2 text-blue-500 font-semibold">{{t('reg_t')}}</router-link>
      </a>
      <router-link to="/" class="text-xs ml-10 text-blue-500 font-semibold">{{t('reg_later')}}</router-link>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n/index";
const { t } = useI18n();
</script>

<script>
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
import dragVerify from '@/components/ttttttttttt.vue'
export default {
  components: {
    Identify,
    EyeIcon,
    EyeOffIcon,
    ExclamationCircleIcon,
  },
  data() {
    return {
      name: "",
      password: "",
      passwordField: "password",
      identifyCodes: "1234567890abcdefjhijk1234567890linopqrsduvwxyz", // Captcha components
      identifyCode: "", // Verification code generation results
      code: "", // Verification code input content
    };
  },
  computed: {
    disableBtn() {
      if (this.name === "" || this.password === "" || this.code === "") {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // Reset captcha
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      // o Represents a set of random number elements ,l Represents the number of verification codes （ For now 4 Bit verification code ）
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    ShowVisibility() {
      this.passwordField =
        this.passwordField === "password" ? "text" : "password";
    },

    login() {
      let pass = md5(this.password);
      let data = {
        data: `01;${this.name};${pass};windows;1`,
      };
      if (this.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
        NoticeMsg.Message(
          "Please fill in the correct verification code",
          "error"
        );
        return this.refreshCode();
      }
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
          if (result[1] === "2")
            return NoticeMsg.Message("no account", "error");
          if (result[1] === "3")
            return NoticeMsg.Message("账号或密码错误", "error");
          this.$store.commit("user/Login_Info", result);
          this.$store.commit("user/Game_Enter_Info", {
            account: this.name,
            pass: this.password,
          });
          this.name = "";
          this.password = "";
          this.$router.push("/");
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
    },
  },
};
</script>

<style  scoped>
video {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
}

.register__video__3tV1S {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}
</style>