<script setup>
import Footer from '@/components/Homepages/Footer.vue'
</script>

<template>
  <div class="container max-w-5xl mx-auto px-2 md:px-3 lg:px-4">
    <div class="space-y-4 font-poppins ">
      <h1 class="block text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-600 text-center">
        Projects
      </h1>
      <p class="text:xl lg:text-2xl font-semibold text-gray-600 text-center">
        Things I've built so far
      </p>
    </div>

    <div class="flex flex-wrap my-10 md:my-16 lg:my-20">
      <div class="w-full md:w-1/2 lg:w-1/3 px-1 my-1">
        <div class="overflow-hidden border border-gray-200 shadow-2xl rounded-xl">
          <a href="#">
            <div class="mb-4 overflow-hidden rounded-t-xl">
              <img src="@/assets/img/zullkitimg.png" alt="project1" class="block w-full h-auto" />
            </div>
          </a>

          <header class="px-4 mb-4 font-sans leading-tight">
            <h1 class="text-lg">
              <a class="font-semibold text-black hover:underline hover:cursor-pointer">Zullkit</a>
            </h1>
            <p class="py-3 text-gray-600 text-light">
              This website is the result of my online learning about Vue.js. Throughout the learning process, I gained
              knowledge about installing Vue.js, converting HTML to Vue components, writing logic using JavaScript,
              splitting code into components, integrating with APIs using Axios, state management, implementing a trial
              payment gateway using Midtrans, and deploying the web application to Netlify. The result is a web
              application with an attractive user interface and comprehensive features.
            </p>
            <p class="pb-3 text-sm font-medium text-gray-600">
              Tech stack:
              <span class="font-normal text-gray-600">
                HTML, JavaScript, Vue, Tailwind</span>
            </p>
            <div class="flex ">
              <div class="flex items-center w-1/2">

                <a href="#" class="pl-1 text-sm font-normal text-black underline">Link Preview</a>
              </div>
              <div class="flex items-center w-1/2">

                <a href="#" class="pl-1 text-sm font-normal text-black underline">view code</a>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

