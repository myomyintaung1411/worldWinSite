<template>
<!-- mobile -->
  <div class="md:pt-7 py-0 sm:py-3 md:py-0 px-2 sm:hidden">
    <div class="mx-auto w-full lg:max-w-7xl md:max-w-7xl h-full shadow-lg rounded-lg flex flex-wrap items-center relative overflow-x-hidden sm:bg-HomecardBg py-2 md:py-3">
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">

        <div class=" mx-0 md:mx-2 relative" @click="playGame(0)">
          <img  src="@/assets/home/card1.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
          <button class=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2   game__play_div">Play Now</button>
        </div>
      </div>
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div class="mx-0 md:mx-2 relative" @click="playGame(1)">
          <img  src="@/assets/card2.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
          <button class=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2   game__play_div">Play Now</button>
        </div>
      </div>
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div class="mx-0 md:mx-2 relative" @click="playGame(2)">
          <img  src="@/assets/card3.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
          <button class=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2   game__play_div">Play Now</button>
        </div>
      </div>
    </div>
  </div>
  <!-- pc -->
  <div class="md:pt-7 py-0 sm:py-3 md:py-0 px-2 hidden sm:block">
    <div class="mx-auto w-full lg:max-w-7xl md:max-w-7xl h-full shadow-lg rounded-lg flex flex-wrap items-center relative overflow-x-hidden sm:bg-HomecardBg py-2 md:py-3">
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">

        <div class=" mx-0 md:mx-2 relative" @click="playGame(3)">
          <img  src="@/assets/home/card1.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
          <button class=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2   game__play_div">Play Now</button>
        </div>
      </div>
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div class="mx-0 md:mx-2 relative" @click="playGame(4)">
          <img  src="@/assets/card2.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
          <button class=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2   game__play_div">Play Now</button>
        </div>
      </div>
      <div class="relative my-1 md:hover:translate-y-2 lg:space-x-0 transition duration-300 md:space-y-0 p-0 sm:p-1 md:p-3 w-full mx-0 sm:w-1/3 md:w-1/3 lg:w-1/3">
        <div class="mx-0 md:mx-2 relative" @click="playGame(5)">
          <img  src="@/assets/card3.jpg" draggable="false" alt class="object-cover cursor-pointer object-center w-full rounded-t-md h-64" />
          <button class=" absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2   game__play_div">Play Now</button>
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
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;
const router = useRouter();
const gameEn = computed(() => store.getters["user/Game_En"]);
const UserInfo = store.getters["user/GAME_ENTER_INFO"];

const iframeUrl = ref(null)

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
    (lToken && gameUrl.value?.sportUrl && username && pass !== null) ||
    (lToken && gameUrl.value?.sportUrl && username && pass !== undefined) ||
    (lToken && gameUrl.value?.sportUrl && username && pass !== "")
  ) {
    let data = {
      name: username,
      password: md5(pass),
    };
    var endata = AES.encrypt(JSON.stringify(data), gameEn.value);
    console.log(encodeURIComponent(endata), "endata");
   
// gameUrl.value.sportUrl
    let url = 'http://localhost:4000/' + `?token=${encodeURIComponent(endata)}`
     //var features = 'directories=no,menubar=no,status=no,titlebar=no,toolbar=no,width=100%,height=100%';
    switch (n) {
      case 0:
        router.push({path:'/sportView',query:{url:url}})
        break;
      case 1:
        router.push({path:'/sportView',query:{url:url}})
        break;
      case 2:
        router.push({path:'/sportView',query:{url:url}})
        break;
      case 3:
         window.open(url)
        //window.open(url, 'mypopup', features);
        break;
      case 4:
        window.open(url)
        break;
      case 5:
        window.open(url)
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
      confirmButtonText: t('ok'),
      background: "#374151",
      confirmButtonColor: "#a07c51",
      buttonsStyling: {
        color: "red",
      },
      color: "#fff",
    }).then((res) => {
      if (res.isConfirmed) {
        //  sessionStorage.clear();
        //  window.location.reload()
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
.game__play_div {
  @apply  w-1/2 py-4 mx-auto flex items-center justify-center bg-primary text-black  shadow-lg
   cursor-pointer tracking-wide  text-base font-bold text-center;
}
/* bg-gray-800 sm:bg-slate-900 rounded-xl shadow-lg p-3 */
</style>

