<script setup>
import { onUnmounted, ref } from "vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import allApi from "@/network/allApi.js";
import Swal from "sweetalert2";
import NoticeMsg from "@/utils/alert";

// window.onbeforeunload = function() {
//   localStorage.clear();
//   return '';
// };

const store = useStore();
const lToken = store.state.user.token;
const userId__ = store.state.user.userId;

const changeWindowSize = () => {
  store.commit("app/CHANGE_WINDOW_SIZE", window.innerWidth);
};

const getGameUrl = () => {
  if (
    (userId__ && lToken !== null) ||
    (userId__ && lToken !== undefined) ||
    (userId__ && lToken !== "")
  ) {    let userId = userId__;
    let t = lToken;
    const req_ = { userId: userId, token: t };
    allApi
      .getGameUrl({ data: req_ })
      .then((res) => {
        console.log(res, "getgame url res is");
        store.commit("app/Game_Url", res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });

  }
};

// setInterval(function() {
//   debugger;
// }, 1000);

// window.addEventListener("beforeunload", function (e) {
//   var confirmationMessage = "\o/";

//   (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
//   return confirmationMessage;                                /* Safari, Chrome, and other
//                                                               * WebKit-derived browsers */
// });


onMounted(() => {
  // const bc = new BroadcastChannel("HN-Sports");
  // bc.onmessage = (event) => {
  //   console.log(event, "event");
  //   if (event.data === `Am I the first?`) {
  //     bc.postMessage(`No you're not.`);
  //     alert(`Another tab of this site just got opened`);
  //     // return Swal.fire({
  //     //   title: "Oops...",
  //     //   text: "Another tab of this site just got opened",
  //     //   icon: "error",
  //     //   showCancelButton: false,
  //     //   allowOutsideClick: false,
  //     //   backdrop: true,
  //     //   confirmButtonText: "确定",
  //     //   color: "#000",
  //     // }).then((res) => {
  //     //   if (res.isConfirmed) {
  //     //    window.location.href="about:blank";
  //     //     window.close();
  //     //   }
  //     // });
  //   }
  //   if (event.data === `No you're not.`) {
  //     //alert(`An instance of this site is already running`);
  //     return Swal.fire({
  //       title: "Oops... Please close window",
  //       text: "An instance of this site is already running",
  //       icon: "error",
  //       showCancelButton: false,
  //       allowOutsideClick: false,
  //       backdrop: true,
  //       confirmButtonText: "确定",
  //       color: "#000",
  //     }).then((res) => {
  //       if (res.isConfirmed) {
  //         let opened = (window.location.href = "about:blank");
  //         opened.opener = null;
  //         opened.close();
  //       }
  //     });
  //   }
  // };
  // bc.postMessage(`Am I the first?`);

  // getGameUrl()
  store.commit("app/CHANGE_WINDOW_SIZE", window.innerWidth);
  window.addEventListener("resize", changeWindowSize);
});

if (import.meta.env.PROD) console.log(false);
</script>

<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:focus {
  outline: none;
}
html {
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

::-webkit-scrollbar {
  width: 0px;
  height: 7px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b4b3b3;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(233, 229, 229, 0.842);
}
</style>
