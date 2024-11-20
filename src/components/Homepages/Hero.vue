<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="container items-center max-w-5xl px-2 mx-auto my-10 sm:flex sm:px-3 md:px-4 lg:px-4 xl:px-0 lg:my-20 sm:my-10" data-aos="fade-up">
        <div class="items-center space-y-2 text-base font-normal text-black lg:space-y-4 sm:text-lg md:text-2xl lg:text-3xl md:w-2/3 font-blackops">
            <p class="">Hello...</p>
            <p class="">My name is <span class="text-2xl font-normal text-transparent font-blackops sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">RYAN IBRAHIM</span></p>
            <p class="">I am a Calibration and Instrumentation Technician</p>
            <p class="">This web portfolio is my playground for learning programming languages. I hope you all enjoy exploring it</p>
            <p class="pb-4 text-base font-lg text-primary md:text-lg font-archivo">Click the button below for more information about me</p>
            <RouterLink to="/about" class="px-4 py-2 text-base bg-black rounded-full text-secondary hover:pointer hover:shadow-xl hover:primary ">About Me</RouterLink>
        </div>
        <div class="flex items-center justify-center mt-16 md:justify-end sm:my-0 md:w-1/3 ">
            <img src="@/assets/img/ryanhero.jpg" alt="profil" class="border-4 border-black rounded-full h-72 w-72 sm:h-auto sm:auto">
        </div>
    </div>
  
  
</template>
