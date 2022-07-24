<template>
  <div class="md:pt-7 py-0 sm:py-3 md:py-0 px-2">
    <div class="mx-auto w-full lg:max-w-7xl md:max-w-7xl h-full shadow-lg rounded-lg flex flex-wrap items-center relative overflow-x-hidden sm:bg-HomecardBg py-2 md:py-3">
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div class="mx-0 md:mx-2">
          <img @click="playGame(0)" src="@/assets/home/card1.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
        </div>
      </div>
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div class="mx-0 md:mx-2">
          <img @click="playGame(1)" src="@/assets/home/card2.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
        </div>
      </div>
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div class="mx-0 md:mx-2 relative">
          <img @click="playGame(2)" src="@/assets/home/card3.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
          <button class="bg-red-500 absolute bottom-5">click</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import md5 from "js-md5";
import AES from "@/utils/aes";
import { useI18n } from "vue-i18n/index";
const { t } = useI18n();
const store = useStore();

const gameUrl = computed(() => store.getters["app/GameURL"]);
//const gameUrl = store.state.app.gameUrl;
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;
const router = useRouter();
const gameEn = computed(() => store.getters["user/Game_En"]);
const UserInfo = store.getters["user/GAME_ENTER_INFO"];

const card = reactive([
  {
    src: "../../assets/home/but1.png",
  },
  {
    src: "../../assets/home/but2.png",
  },
  {
    src: "../../assets/home/but3.png",
  },
]);

const playGame = (n) => {
  let username;
  let pass;
  let acc = sessionStorage.getItem("a");
  let local_pass = sessionStorage.getItem("p");
  console.log(acc, local_pass, "acc and local pass");
  if (
    (acc && local_pass !== null) ||
    (acc && local_pass !== "") ||
    (acc && local_pass !== undefined)
  ) {
        username = JSON.parse(AES.decrypt(acc, gameEn.value)).split(";")[0];
        pass = JSON.parse(AES.decrypt(local_pass, gameEn.value)).split(";")[0];
  }
  console.log(username, pass, "username and pass");
  if (
    (lToken && gameUrl.value.lotteryUrl && username && pass !== null) ||
    (lToken && gameUrl.value.lotteryUrl && username && pass !== undefined) ||
    (lToken && gameUrl.value.lotteryUrl && username && pass !== "")
  ) {
    let data = {
      name: username,
      password: md5(pass),
    };
    var endata = AES.encrypt(JSON.stringify(data), gameEn.value);
    console.log(encodeURIComponent(endata), "endata");
// gameUrl.value.sportUrl
    switch (n) {
      case 0:
        window.open(
         gameUrl.value.sportUrl + `?token=${encodeURIComponent(endata)}`
        );
        break;
      case 1:
        window.open(
          gameUrl.value.lotteryUrl + `?token=${encodeURIComponent(endata)}`
        );
        break;
      case 2:
        window.open(
          gameUrl.value.realBetUrl + `?token=${endata}`
        );
        break;

      default:
        break;
    }
    console.log(n);
  } else {
    return Swal.fire({
      title: t('remider'),
      text: t('login_err'),
      icon: "error",
      showCancelButton: false,
      allowOutsideClick: true,
      backdrop: true,
      confirmButtonText: "确定",
      background: "#374151",
      confirmButtonColor: "#a07c51",
      buttonsStyling: {
        color: "red",
      },
      color: "#fff",
    }).then((res) => {
      if (res.isConfirmed) {
        // localStorage.clear();
        router.push("/login");
      }
    });
  }
};
</script>

<style  scoped>
.hello {
  background: #a07c51;
}
/* bg-gray-800 sm:bg-slate-900 rounded-xl shadow-lg p-3 */
</style>

