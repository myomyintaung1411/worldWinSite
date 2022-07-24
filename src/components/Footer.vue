<template>
  <footer class="bg-slate-700">
    <!-- <div class="max-w-7xl m-auto text-gray-800 flex flex-wrap space-x-3 py-2 justify-center">
     
      <img draggable="false" src="https://senbackkg.salinent.com/clientManage/702d7151b8e34494aed899b06a8228ad.png" 
      alt class="w-fit h-16 cursor-pointer" onmouseover="this.src='https://senbackkg.salinent.com/clientManage/ebecbecc0b2244aba1dac186785cf858.png'" onmouseout="this.src='https://senbackkg.salinent.com/clientManage/702d7151b8e34494aed899b06a8228ad.png'" />
      <img  src="https://senbackkg.salinent.com/clientManage/01f204b55f5e48e090ed91e98508a1b0.png" draggable="false"
      alt class="w-fit h-16 cursor-pointer" onmouseover="this.src='https://senbackkg.salinent.com/clientManage/4def7371c46a47c09269c1bca0a09b8a.png'" onmouseout="this.src='https://senbackkg.salinent.com/clientManage/01f204b55f5e48e090ed91e98508a1b0.png'" />
      <img src="https://senbackkg.salinent.com/clientManage/857687ddb481463081277e62414422de.png" draggable="false" 
      alt class="w-fit h-16 cursor-pointer" onmouseover="this.src='https://senbackkg.salinent.com/clientManage/75f494ac924c4fe989c526d95061c7b1.png'" onmouseout="this.src='https://senbackkg.salinent.com/clientManage/857687ddb481463081277e62414422de.png'" />
      <img src="https://senbackkg.salinent.com/clientManage/388eb6820ac347da8943f2d5e893fac7.png"  draggable="false"
      alt class="w-fit h-16 cursor-pointer" onmouseover="this.src='https://senbackkg.salinent.com/clientManage/aa825ef9678f4d3a9b1eaffacfe13fb2.png'" onmouseout="this.src='https://senbackkg.salinent.com/clientManage/388eb6820ac347da8943f2d5e893fac7.png'" />
      <img src="https://senbackkg.salinent.com/clientManage/ae31a2b4605e4fbcae050b80cc2a5172.png" draggable="false"
      alt class="w-fit h-16 cursor-pointer" onmouseover="this.src='https://senbackkg.salinent.com/clientManage/c0f431aea8794c1ebb358a17d8f2af12.png'" 
      onmouseout="this.src='https://senbackkg.salinent.com/clientManage/ae31a2b4605e4fbcae050b80cc2a5172.png'" />
    </div> -->
    <div class="max-w-4xl mx-auto px-4 sm:px-10 py-2">
      <p  class="tracking-wider font-bold text-center text-gray-400 text-sm">
       {{t('footer_t')}}
      </p>
    </div>
    <!-- Copyright Bar -->
    <div class="pt-5  sm:block">
      <div class="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
        <div class="mt-2">© Copyright 2022-year. All Rights Reserved.</div>
        <!-- Required Unicons (if you want) -->
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a  class="w-6 mx-1">
            <svg class="h-8 w-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a  class="w-6 mx-1">
            <svg class="h-8 w-full text-blue-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
          </a>
          <a  class="w-6 mx-1">
            <svg class="h-8 w-full text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
          <!-- <a  class="w-6 mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="h-8 w-full text-blue-500" 
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" 
           d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm210.5 
           612.4c-11.5 1.4-44.9-52.7-44.9-52.7c0 31.3-16.2 72.2-51.1 101.8c16.9 5.2 54.9 19.2 45.9 34.4c-7.3 12.3-125.6 7.9-159.8 4c-34.2 3.8-152.5 8.3-159.8-4c-9.1-15.2 28.9-29.2 45.8-34.4c-35-29.5-51.1-70.4-51.1-101.8c0 0-33.4 54.1-44.9 52.7c-5.4-.7-12.4-29.6 9.4-99.7c10.3-33 22-60.5 40.2-105.8c-3.1-116.9 45.3-215 
           160.4-215c113.9 0 163.3 96.1 160.4 215c18.1 45.2 29.9 72.8 40.2 105.8c21.7 70.1 14.6 99.1 9.3 99.7z"/></svg>
          </a>
          <a  class="w-6 mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="h-8 w-full text-green-500" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213c0 
                .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098a10.16 10.16 0 0 0 2.837.403c.276 0 
                .543-.027.811-.05c-.857-2.578.157-4.972 1.932-6.446c1.703-1.415 3.882-1.98 5.853-1.838c-.576-3.583-4.196-6.348-8.596-6.348zM5.785 
                5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 
                1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786c-1.72 1.428-2.687 3.72-1.78 6.22c.942 2.453 3.666 4.229 6.884 4.229c.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247c0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156a.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 
                .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
              />
            </svg>
          </a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n/index";
const { t } = useI18n();
</script>

<style  scoped>
</style>