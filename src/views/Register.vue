<template>
  <div
    class=" overflow-y-auto min-h-screen min-w-full w-screen h-screen flex flex-col items-center justify-center bg-gray-800 login__">
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
      <div class=" font-medium self-center text-xl sm:text-3xl">{{  t('reg_text')  }}</div>
      <div class="mt-4 self-center text-md sm:text-sm">{{  t('reg_body')  }}</div>

      <div class="mt-5 overflow-y-auto ">
        <form @click.prevent>
          <div class="flex flex-col mb-4">
            <!-- <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('enter_u') }}</label> -->
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <input required v-model.trim="name" id="name" autocomplete="off" type="text" name="name" class="text-sm text-gray-500 placeholder-gray-500 
              pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
              focus:outline-none border-none focus:border-none outline-none" :placeholder="t('enter_u')" />
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <MailIcon class="h-6 w-6"></MailIcon>
              </div>

              <input required v-model.trim="email" id="email" autocomplete="off" type="email" name="email" class="text-sm text-gray-500 placeholder-gray-500 
              pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
              focus:outline-none border-none focus:border-none outline-none"
                :placeholder="t('enter_email')" />
            </div>
          </div> 
           <div class="flex flex-col mb-4">
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
      
                <MailIcon class="h-6 w-6"></MailIcon>
              </div>

              <input required v-model.trim="verficationCode" id="verficationCode" autocomplete="off" type="text"
                name="verficationCode" class="text-sm text-gray-500 placeholder-gray-500 
              pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
              focus:outline-none border-none focus:border-none outline-none" :placeholder=" t('enter_veri')" />
              <div
                class="inline-flex whitespace-nowrap items-center justify-center absolute right-10 top-0 h-full w-10 text-gray-400 md:cursor-pointer">

                <button :disabled="codeDisable"
                  :class="!codeDisable ? 'bg-yellow-700  py-1 px-2 text-sm text-white' : ' py-1 px-2 text-black bg-yellow-700 opacity-80 cursor-not-allowed'"
                  @click="getCode()">{{  codeMsg  }}</button>
              
              </div>
            </div>

          </div>
          <div class="flex flex-col mb-4">
            <!-- <label for="email" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('enter_p') }}</label> -->
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

              <input required v-model.trim="password" id="password" :type="passwordField" name="password"
                autocomplete="off" class="text-sm text-gray-500 
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
          <div class="flex flex-col mb-4">
            <!-- <label for="password" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('enter_confirm_p') }}</label> -->
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
          <div class="flex flex-col mb-4">
            <!-- <label for="reference" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('agent_code') }}</label> -->
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> -->
                <CodeIcon class="h-6 w-6"></CodeIcon>
              </div>

              <input required v-model.trim="reference" id="reference" autocomplete="off" type="text" name="reference"
                class="text-sm text-gray-500 placeholder-gray-500 
              pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
              focus:outline-none border-none focus:border-none outline-none" :placeholder="t('agent_code')" />
            </div>
          </div>

          <div class="flex w-full">
            <button :disabled="disableBtn" @click="register" type="submit"
              :class="disableBtn ? 'bg-primary opacity-40 cursor-not-allowed' : 'text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo'"
              class="flex  items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded-2xl py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">{{  t('reg')  }}</span>
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
          {{  t('alerady_a')  }}？
          <router-link to="/login" class="text-xs ml-2 text-blue-500 font-semibold">{{  t('p_l')  }}</router-link>
        </span>
      </a>
      <router-link to="/" class="text-xs ml-10 text-blue-500 font-semibold">{{  t('reg_later')  }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon, EyeOffIcon, CodeIcon, MailIcon } from "@heroicons/vue/solid";
import { ref, computed } from "vue";
import { UserLogin } from "@/network/user.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import NoticeMsg from "@/utils/alert";
import Loading from "@/utils/loader";
import md5 from "js-md5";
import allApi from "@/network/allApi.js";
import { useI18n } from "vue-i18n/index";
const { t } = useI18n();
const name = ref("");
const email = ref("");
const password = ref("");
const confrimPassword = ref("");
const reference = ref("");
const passwordField = ref("password");
const C_passwordField = ref("password");
const codeDisable = ref(false)
const countdown = ref(60)
const codeMsg = ref('Get Code')
const timer = ref(null)
const verficationCode = ref('')
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
    email.value === "" ||
    password.value === "" ||
    confrimPassword.value === "" ||
    reference.value === "" ||
    verficationCode.value === ""
  ) {
    return true;
  } else {
    return false;
  }
});

// function getValidStr(){

//         if (countdown.value > 0 && countdown.value <= 5) {
//           countdown.value--;

//           console.log(codeDisable.value,"disable");
//             if (countdown.value !== 0) {
//               // codeDisable.value = true;
//               codeMsg.value = "Resend(" + countdown.value + ")";
//             } else {
//               clearInterval(timer);
//               codeMsg.value = "Get Code";
//               countdown.value = 5;
//                codeDisable.value = false;
//               timer.value = null;
//             }
//           }
//       }


const createEmailCode = () => {
  let data = { email: email.value }
  allApi.createEmailCode(data).then((res) => {
    console.log(res, "createEmailCode");
    if (res.data.success == true) {
      console.log("success *************************")
      return NoticeMsg.Message('Email code send successfully , Please check in your mailbox', "success");
      // clearTimeout(timer.value)
      // codeMsg.value = "Get Code";
      // codeDisable.value = false
      // countdown.value = 60;
    } else {
      return NoticeMsg.Message('Getting Code failed', "error");
    }
  }).catch((e) => {
    console.log(e);
    //catch error then reset timer
    clearTimeout(timer.value) 
    codeMsg.value = "Get Code";
    codeDisable.value = false
    countdown.value = 60;
    return NoticeMsg.Message('network error, please try again to get code', "error");
  })
}

const getValidStr = () => {
  console.log(email.value, "ttttttttttt");

  console.log(codeDisable.value, "disable");
  codeMsg.value = "Resend(" + countdown.value + ")";
  countdown.value--;
  if (countdown.value == 59) {
    console.log("countdown value is", countdown.value);
    createEmailCode()
  }
  if (countdown.value <= 0) {
    countdown.value = 60;
    codeMsg.value = "Get Code";
    codeDisable.value = false
  } else {
    codeDisable.value = true;
    timer.value = setTimeout(() => {
      getValidStr()
    }, 1000);
  }
}

function validateEmail(val) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(val);
}

function getCode() {
  if(email.value == '') return NoticeMsg.Message(t('email__req'), "warning");
  if (validateEmail(email.value)) {
    console.log("valid email");
  } else {
    return NoticeMsg.Message('Please Enter a valid email address', "warning");
  }
  getValidStr()
}

const register = () => {
  if (password.value !== confrimPassword.value)
    return NoticeMsg.Message(t('confirm_notmatch'), "warning");
  if (password.value.length < 6)
    return NoticeMsg.Message(t('pass_length'), "warning");
  if (!/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value))
    return NoticeMsg.Message(t('pass_check'), "warning");

  if (name.value == password.value)
    return NoticeMsg.Message(t('user__pass'), "warning");

  let pass = md5(password.value); //${email.value};${verficationCode.value}
  let data = {
    data: `02;${name.value};${pass};${reference.value};${email.value};${verficationCode.value};windows`, // 2/1 success
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
    if (result[1] === "5") return NoticeMsg.Message(t('invalid_code'), "error"); //invalid email code or already use
    if (result[1] === "6") return NoticeMsg.Message(t('email_already_use'), "error"); //email already use
    name.value = "";
    password.value = "";
    confrimPassword.value = "";
    NoticeMsg.Message(t('reg_success'), "success");
    router.push("/login");
  }).catch((e) => {
    console.log(e);
    NoticeMsg.Message('unknown error', "error");
    Loading.hideLoading() //companywarner comapnywarner.hr@gmail.com
  });
};
</script>

<style scoped>
.login__ {
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