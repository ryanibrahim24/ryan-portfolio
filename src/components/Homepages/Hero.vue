<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="container sm:flex max-w-5xl items-center mx-auto px-2 sm:px-3 md:px-4 lg:px-4 xl:px-0 my-10 lg:my-20 sm:my-10">
        <div class="items-center space-y-2 lg:space-y-4 text-base sm:text-lg md:text-2xl lg:text-3xl md:w-2/3 font-semibold text-indigo-600 font-poppins">
            <p class="">Hello...</p>
            <p class="">My name is <span class="text-xl md:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Ryan Ibrahim</span></p>
            <p class="">I'm a Web Dev Learners</p>
            <p class="">Currently looking for job as Junior Front-end Developer</p>
            <p class="pb-4 text-base md:text-lg font-semibold text-gray-600 font-poppins">Click Button bellow for more infomation about me</p>
            <RouterLink to="/about" class="px-4 py-2 text-base text-white rounded-full bg-sky-600 hover:pointer hover:shadow-xl hover:bg-sky-800 ">About Me</RouterLink>
        </div>
        <div class="flex items-center justify-center md:justify-end mt-16 sm:my-0 md:w-1/3 ">
            <img src="@/assets/img/ryanhero.jpg" alt="profil" class="border-4 rounded-full h-72 w-72 sm:h-auto sm:auto border-sky-500">
        </div>
    </div>
  
  
</template>
