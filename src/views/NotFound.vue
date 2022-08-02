<template>
  <div class="flex items-center justify-center w-screen h-screen bg-slate-900">
    <div class="px-4 lg:py-12">
      <div class="lg:gap-4 lg:flex bg-slate-700 shadow-lg rounded-lg">
        <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
          <h1 class="font-bold text-blue-600 text-9xl">404</h1>
          <p class="mb-2 text-2xl font-bold text-center text-gray-200 md:text-3xl">
            <span class="text-red-500">Oops!</span> Page not found
          </p>
          <p class="mb-8 text-center text-gray-300 px-3 md:px-10 md:text-lg">
            Dear user, I'm sorry, this page was not found, please contact customer service to get the best quality and efficient solution; we apologize for the inconvenience caused to you, thank you for your understanding and support!
          </p>
          <router-link to="/" class="px-6 py-2 text-sm font-semibold text-gray-700 rounded-lg shadow-lg  bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo">Go home</router-link>
        </div>
        <div class>
          <img src="@/assets/404/404.png" alt="img" class="object-cover md:w-[634px] h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
