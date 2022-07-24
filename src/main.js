import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './routes.js'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// importing AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VCalendar from 'v-calendar';

//qrcode
import VueQrcode from '@chenfengyuan/vue-qrcode';
// import { createI18n } from 'vue-i18n/index'
import i18n from './config/index'

// document.onkeydown = function(e) {
//     if(event.keyCode === 123) {
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'X'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'Y'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'Z'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)){
//         return false;
//     }
//     if (e.keyCode == 67 && e.shiftKey && (e.ctrlKey || e.metaKey)){
//         return false;
//     }
//     if (e.keyCode == 'J'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
//         return false;
//     }
//     if (e.keyCode == 'I'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
//         return false;
//     }
//     if ((e.keyCode == 'V'.charCodeAt(0) && e.metaKey) || (e.metaKey && e.altKey)){
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
//         return false;
//     }
//     }
//     if (document.addEventListener) {
//         document.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//         }, false);
//     }else{
//         document.attachEvent('oncontextmenu', function() {
//         window.event.returnValue = false;
//         });
//     }

/* Default title tag */
const defaultDocumentTitle = 'World Win Sports'

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

const options = {
  confirmButtonColor: '#3B82F6',
  cancelButtonColor: '#ff7674',
  color:"#f8f8f8"
};

// const messages = {
//   'cz': ('@/config/zh.json'),   // 中文语言包
//   'en': ('@/config/en.json')    // 英文语言包
// }

// const i18n = createI18n({
//   // something vue-i18n options here ...
//   legacy:false,
//   locale: localStorage.getItem('l') || 'cz', // set locale 默认显示中文
//   messages: messages // set locale messages 
// })

const app = createApp(App)
app.use(AOS.init({
    disable: "mobile",
    once: true
}))
app.use(router)
app.use(store)
app.use(i18n)
app.use(VueSweetalert2,options)
app.use(VueLoading)
app.use(VCalendar, {})
app.component(VueQrcode.name, VueQrcode);
app.mount('#app')

