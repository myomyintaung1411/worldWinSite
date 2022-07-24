<template>
  <div class="md:hidden relative max-h-screen h-screen overflow-y-scroll w-full bg-gray-900">
    <div class="sticky top-0 z-50 w-full py-2 px-2 flex justify-between items-center bg-slate-700">
      <div class="flex items-center">
        <ChevronLeftIcon @click="goBack" class="w-6 h-6 text-gray-200" />
        <span class="ml-6 text-gray-200 text-md tracking-wide font-bold">意见反馈</span>
      </div>
      <span class="inline-block rounded-min text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">新增意见反馈</span>
    </div>
    <div class="text-gray-300 text-md px-3 font-bold my-2 tracking-wide">只显示近一年的意见反馈记录</div>
    <div class="mx-auto h-fit w-full">
      <div class="mx-2 my-1 bg-slate-700 shadow-lg rounded">
        <!-- table -->
        <div class="flex flex-col cursor-pointer">
          <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-500 table-fixed">
                  <thead class="bg-slate-700">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">问题类型</th>
                      <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">反馈内容</th>
                      <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">状态</th>
                      <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-50 uppercase tracking-wider">时间</th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-600 divide-y text-gray-200 divide-gray-400">
                    <tr v-for="person in people" :key="person.name">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" :src="person.image" alt />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-200">{{ person.name }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 max-w-sm w-96 whitespace-nowrap">
                        <div class="text-sm overflow-hidden text-ellipsis text-gray-200">{{ person.title }}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{{ person.role }}</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-emerald-500 hover:text-emerald-600">Edit</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- desktop  -->
  <div class="w-full hidden md:block h-screen bg-gray-900">
    <div class="flex flex-col justify-center items-center h-full">
      <EmojiSadIcon class="w-52 h-52 text-gray-300" />
      <button class="px-3 py-2 text-gray-200 bg-indigo-500 outline-none hover:bg-indigo-600 shadow-lg rounded-md tracking-wide font-medium" @click="goHome">BackToHome</button>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon,EmojiSadIcon } from "@heroicons/vue/outline";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import {  onMounted } from "vue";

const router = useRouter();

const people = reactive([
  {
    name: "取款问题",
    title: "sdfdsfsfdsafsfffffffffffffffffffffffokkkkkkkkkkkkkkkkkkkkkk",
    department: "未处理",
    role: "2022-01-14 20:22:27",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "leelee123",
    title: "fuckinggggggggggggggggggggggggggggggleeeeeeeeeeeeeeeee",
    department: "未处理",
    role: "2022-01-14 20:22:27",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
]);

const goBack = () => {
  router.go(-1);
};

const goHome = () => {
  router.push("/");
};

onMounted(() => {
  if (window.innerWidth > 768) {
    router.push("/");
  }
});
</script>

<style  scoped>
</style>



