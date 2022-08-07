<template>
  <div class=" min-h-screen min-w-full w-screen h-screen flex flex-col items-center justify-center bg-gray-800 login__">
    <!-- <div class="absolute w-screen h-screen min-h-screen max-h-full min-w-full max-w-full overflow-hidden">
      <video id="register_video" class="register__video__3tV1" autoplay preload="preload" loop>
      <source :src="videoSource" type="video/mp4" />
    </video>
    </div> -->
    <!-- <video id="register_video" class="register__video__3tV1S bg-cover   bg-gray-800" autoplay muted preload="preload" loop>
      <source
        src="@/assets/loginV.mp4"
        type="video/mp4" />
    </video> -->
    <div
      class=" z-10 flex flex-col  text-gray-200 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-sm  sm:max-w-md bg-slate-800 sm:bg-transparent sm:opacity-100 bg-opacity-60 ">
      <div class=" font-medium self-center text-xl sm:text-3xl">{{ t('reg_text') }}</div>
      <div class="mt-4 self-center text-md sm:text-sm">{{ t('reg_body') }}</div>

      <div class="mt-5 overflow-y-auto ">
        <form @click.prevent>
          <div class="flex flex-col mb-5">
            <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('enter_u') }}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <input v-model.trim="name" id="name" autocomplete="off" type="text" name="name" class="text-sm text-gray-500 placeholder-gray-500 
              pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
              focus:outline-none border-none focus:border-none outline-none" :placeholder="t('enter_u')" />
            </div>
          </div>
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('enter_p') }}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>

              <input v-model.trim="password" id="password" :type="passwordField" name="password" autocomplete="off" class="text-sm text-gray-500 
              placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
              focus:outline-none border-none focus:border-none outline-none" :placeholder="t('enter_p')" />
              <div
                class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="ShowVisibility">{{passwordField === 'password' ? 'show' : 'hide'}}</label> -->
                <EyeIcon v-if="passwordField !== 'password'" @click="ShowVisibility" class="w-4 h-5" />
                <EyeOffIcon v-else @click="ShowVisibility" class="w-4 h-5 text-yellow-700" />
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('enter_confirm_p') }}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>

              <input v-model.trim="confrimPassword" id="confrimPassword" autocomplete="off" :type="C_passwordField"
                name="confrimPassword" class="text-sm text-gray-500 placeholder-gray-500 pl-10 pr-16 rounded-2xl border 
              border-gray-400 w-full py-2 focus:outline-none border-none focus:border-none outline-none"
                :placeholder="t('enter_confirm_p')" />
              <div
                class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <EyeIcon v-if="C_passwordField !== 'password'" @click="C_ShowVisibility" class="w-4 h-5" />
                <EyeOffIcon v-else @click="C_ShowVisibility" class="w-4 h-5 text-yellow-700" />
                <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="C_ShowVisibility">{{C_passwordField === 'password' ? 'show' : 'hide'}}</label> -->
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-5">
            <label for="reference" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('agent_code') }}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> -->
                <CodeIcon class="h-6 w-6"></CodeIcon>
              </div>

              <input v-model.trim="reference" id="reference" autocomplete="off" type="text" name="reference" class="text-sm text-gray-500 placeholder-gray-500 
              pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
              focus:outline-none border-none focus:border-none outline-none" :placeholder="t('agent_code')" />
            </div>
          </div>

          <div class="flex w-full">
            <button :disabled="disableBtn" @click="register" type="submit"
              :class="disableBtn ? 'bg-primary opacity-40 cursor-not-allowed' : 'text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo'"
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded-2xl py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">{{ t('reg') }}</span>
              <span :class="!disableBtn ? 'sm:animate-wiggle ' : ''">
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-between w-64 md:w-96 items-center mt-6 z-10">
      <a target="_blank" class="inline-flex items-center text-gray-700 font-medium text-sm text-center">
        <span class="ml-2 text-primary">
          {{ t('alerady_a') }}？
          <router-link to="/login" class="text-xs ml-2 text-blue-500 font-semibold">{{ t('p_l') }}</router-link>
        </span>
      </a>
      <router-link to="/" class="text-xs ml-10 text-blue-500 font-semibold">{{ t('reg_later') }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon, EyeOffIcon,CodeIcon  } from "@heroicons/vue/solid";
import { ref, computed } from "vue";
import { UserLogin } from "@/network/user.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import NoticeMsg from "@/utils/alert";
import Loading from "@/utils/loader";
import md5 from "js-md5";
import { useI18n } from "vue-i18n/index";
const { t } = useI18n();
const name = ref("");
const password = ref("");
const confrimPassword = ref("");
const reference = ref("");
const passwordField = ref("password");
const C_passwordField = ref("password");

const store = useStore();
const router = useRouter();
const videoSource = ref("https://senbackkg.yewuxia.com/main-consumer-web/assets-oss/ob/videos/login/video.bc2597160d5dbee099f4250dbaa84271.mp4");

const ShowVisibility = () => {
  passwordField.value =
    passwordField.value === "password" ? "text" : "password";
};
const C_ShowVisibility = () => {
  C_passwordField.value =
    C_passwordField.value === "password" ? "text" : "password";
};

const disableBtn = computed(() => {
  if (
    name.value === "" ||
    password.value === "" ||
    confrimPassword.value === "" ||
    reference.value === ""
  ) {
    return true;
  } else {
    return false;
  }
});

const register = () => {
  if (password.value !== confrimPassword.value)
    return NoticeMsg.Message(t('confirm_notmatch'), "warning");
  if (!/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value))
    return NoticeMsg.Message(t('pass_check'), "warning");
  let pass = md5(password.value);
  let data = {
    data: `02;${name.value};${pass};${reference.value};windows`, // 2/1 success
  };
  Loading.showLoading()
  UserLogin(data).then((res) => {
    Loading.hideLoading()
    console.log("res", res);
    var result = res.data.split(";").map(function (value) {
      return value;
    });
    if (result[1] === "2") return NoticeMsg.Message(t('no_ref_agent'), "error"); //no reference agent
    if (result[1] === "3") return NoticeMsg.Message(t('reg_failed'), "error"); //register failed
    if (result[1] === "4") return NoticeMsg.Message(t('already_exist'), "error"); //user already exist
    name.value = "";
    password.value = "";
    confrimPassword.value = "";
    NoticeMsg.Message(t('reg_success'), "success");
    router.push("/login");
  }).catch((e) => {
    console.log(e);
    Loading.hideLoading()
  });
};
</script>

<style scoped>
.login__{
  background-image: url("@/assets/home/tt.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
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