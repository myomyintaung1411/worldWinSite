<template>
  <div class="min-h-screen min-w-full w-screen h-screen flex flex-col items-center justify-center bg-gray-800 login__">
    <!-- <video id="register_video" class="register__video__3tV1S bg-cover   bg-gray-800" autoplay muted preload="preload"
      loop>
      <source src="@/assets/loginV.mp4" type="video/mp4" />
    </video> -->


    <div
      class="flex flex-col z-10 text-gray-200 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-xs sm:max-w-md bg-slate-800 sm:bg-transparent sm:opacity-100 bg-opacity-60  ">
      <div class="font-medium self-center text-xl sm:text-3xl">{{ t('login_t') }}</div>
      <div class="mt-4 self-center text-md sm:text-sm">{{ t('login_b') }}</div>

      <div class="mt-5">
        <form @click.prevent>
          <div class="flex flex-col mb-5">
            <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">{{ t('enter_u') }}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>

              <input v-model="name" id="name" autocomplete="off" type="name" name="name"
                class="text-sm placeholder-gray-500 text-gray-500 pl-10 pr-4 rounded-2xl w-full py-2 focus:outline-none outline-none"
                :placeholder="t('enter_u')" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">{{ t('enter_p') }}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input v-model="password" id="password" autocomplete="off" :type="passwordField" name="password" class="__p text-sm placeholder-gray-500 text-gray-500 pl-10 pr-16 rounded-2xl w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none
               border-none focus:border-none outline-hidden shadow-none outline-0" :placeholder="t('enter_p')" />
              <div
                class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <EyeIcon v-if="passwordField !== 'password'" @click="ShowVisibility" class="w-4 h-5" />
                <EyeOffIcon v-else @click="ShowVisibility" class="w-4 h-5 text-yellow-700" />
                <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="ShowVisibility">{{passwordField === 'password' ? 'show' : 'hide'}}</label> -->
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">{{ t('enter_code') }}</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <ExclamationCircleIcon class="h-6 w-6"></ExclamationCircleIcon>
              </div>
              <input v-model="code" type="text" autocomplete="off"
                class="__p text-sm placeholder-gray-500 text-ellipsis overflow-hidden text-gray-500 pl-10 pr-16 rounded-2xl w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0"
                :placeholder="t('enter_code')" />
              <div
                class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                <div class="yanzheng h-fit absolute right-0" @click="refreshCode">
                  <!-- <Identify class="yanzheng1" :identifyCode="identifyCode"></Identify> -->
                  <div class="img-verify ">
                    <canvas ref="verify" :width="width" :height="height" @click="handleDraw" class="h-[34px]"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="flex flex-col mb-6">
            <div class="img-verify">
              <canvas ref="verify" :width="width" :height="height" @click="handleDraw"></canvas>
            </div>
          </div> -->



          <div class="flex w-full">
            <button :disabled="disableBtn" @click="login" type="submit"
              :class="disableBtn ? 'bg-primary opacity-40 cursor-not-allowed' : 'text-black bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo'"
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded-2xl py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">{{ t('login') }}</span>
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
    <div class="z-10 flex justify-between w-64 md:w-96 items-center mt-6">
      <a target="_blank" class="inline-flex items-center text-gray-700 font-medium text-sm text-center">
        <router-link to="/register" class="text-xs ml-2 text-blue-500 font-semibold">{{ t('reg_t') }}</router-link>
      </a>
      <router-link to="/" class="text-xs ml-10 text-blue-500 font-semibold">{{ t('reg_later') }}</router-link>
    </div>
  </div>
</template>

<script>
import {
  EyeIcon,
  EyeOffIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/solid";
import { ref, computed, onMounted, reactive, toRefs } from "vue";
import Identify from "@/components/Canvas.vue";
import { UserLogin } from "@/network/user.js";
import { useRouter } from "vue-router";
import Loading from "@/utils/loader";
import NoticeMsg from "@/utils/alert";
import { useStore } from "vuex";
import md5 from "js-md5";
import pomelo from "@/socket/pomelo.js";
import AES from "@/utils/aes";
import dragVerify from '@/components/dragVerify.vue'
// import SlideVerify from 'vue-monoplasty-slide-verify';
import { useI18n } from "vue-i18n/index";

export default {
  components: {
    Identify,
    EyeIcon,
    EyeOffIcon,
    ExclamationCircleIcon
  },
  setup() {
    const { t } = useI18n();

    const msg = ref('')

    const name = ref("");
    const password = ref("");

    const passwordField = ref("password");
    const store = useStore();
    const router = useRouter();
    const code = ref('')
    const isVerifyPass = ref(false)
    const ShowVisibility = () => {
      passwordField.value = passwordField.value === "password" ? "text" : "password";
    };

    const verify = ref(null)
    const state = reactive({
      pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', // 字符串
      width: 120,
      height: 40,
      imgCode: ''
    })
    onMounted(() => {
      // 初始化绘制图片验证码
      state.imgCode = draw()
    })

    // 点击图片重新绘制
    const handleDraw = () => {
      state.imgCode = draw()
    }

    // 随机数
    const randomNum = (min, max) => {
      return parseInt(Math.random() * (max - min) + min)
    }
    // 随机颜色
    const randomColor = (min, max) => {
      const r = randomNum(min, max)
      const g = randomNum(min, max)
      const b = randomNum(min, max)
      return `rgb(${r},${g},${b})`
    }

    // 绘制图片
    const draw = () => {
      // 3.填充背景颜色，背景颜色要浅一点
      const ctx = verify.value.getContext('2d')
      // 填充颜色
      ctx.fillStyle = randomColor(180, 230)
      // 填充的位置
      ctx.fillRect(0, 0, state.width, state.height)
      // 定义paramText
      let imgCode = ''
      // 4.随机产生字符串，并且随机旋转
      for (let i = 0; i < 4; i++) {
        // 随机的四个字
        const text = state.pool[randomNum(0, state.pool.length)]
        imgCode += text
        // 随机的字体大小
        const fontSize = randomNum(18, 40)
        // 字体随机的旋转角度
        const deg = randomNum(-30, 30)
        /*
         * 绘制文字并让四个文字在不同的位置显示的思路 :
         * 1、定义字体
         * 2、定义对齐方式
         * 3、填充不同的颜色
         * 4、保存当前的状态（以防止以上的状态受影响）
         * 5、平移translate()
         * 6、旋转 rotate()
         * 7、填充文字
         * 8、restore出栈
         * */
        ctx.font = fontSize + 'px Simhei'
        ctx.textBaseline = 'top'
        ctx.fillStyle = randomColor(80, 150)
        /*
         * save() 方法把当前状态的一份拷贝压入到一个保存图像状态的栈中。
         * 这就允许您临时地改变图像状态，
         * 然后，通过调用 restore() 来恢复以前的值。
         * save是入栈，restore是出栈。
         * 用来保存Canvas的状态。save之后，可以调用Canvas的平移、放缩、旋转、错切、裁剪等操作。 restore：用来恢复Canvas之前保存的状态。防止save后对Canvas执行的操作对后续的绘制有影响。
         *
         * */
        ctx.save()
        ctx.translate(30 * i + 15, 15)
        ctx.rotate((deg * Math.PI) / 180)
        // fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色。
        // 请使用 font 属性来定义字体和字号，并使用 fillStyle 属性以另一种颜色/渐变来渲染文本。
        // context.fillText(text,x,y,maxWidth);
        ctx.fillText(text, -15 + 5, -15)
        ctx.restore()
      }
      // 5.随机产生5条干扰线,干扰线的颜色要浅一点
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height))
        ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height))
        ctx.strokeStyle = randomColor(180, 230)
        ctx.closePath()
        ctx.stroke()
      }
      // 6.随机产生40个干扰的小点
      for (let i = 0; i < 40; i++) {
        ctx.beginPath()
        ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = randomColor(150, 200)
        ctx.fill()
      }
      //state.imgCode = imgCode
      return imgCode
    }


    const disableBtn = computed(() => {
      if (name.value === "" || password.value === "" || code.value === "" ) {
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
      console.log(state.imgCode+ "     state imagecode is ******");
       if (code.value.toLowerCase() != state.imgCode.toLowerCase()) {
        state.imgCode = ''
        NoticeMsg.Message(
          t('correct_vir'),
          "error"
        );
        return handleDraw();
      }
      Loading.showLoading();
      //  Loading.hideLoading()
      console.log("data is", data);
      UserLogin(data)
        .then((res) => {

          // location.reload()
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
          // form.isVerifyPass = false
          router.push("/");
          NoticeMsg.Message("登录成功", "success");
        })

        .catch((e) => {
          console.log(e);
          NoticeMsg.Message("Login failed", "error");
          Loading.hideLoading();
        });

    };
    return {
      ...toRefs(state),
      verify,
      handleDraw,
      t,
      msg,
      name,
      code,
      password,
      passwordField,
      isVerifyPass,
      login,
      disableBtn,
      ShowVisibility,

    }
  }
}
</script>




<style  scoped>
.login__{
  background-image: url("@/assets/home/casino.jpg");
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