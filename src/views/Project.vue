<script setup>
import Footer from '@/components/Homepages/Footer.vue'
</script>

<template>
  <div class="container max-w-5xl px-2 mx-auto sm:mt-5 lg:mt-8 md:px-3 lg:px-4">
    <div class="space-y-4">
      <h1 class="block text-2xl font-normal text-center text-black font-blackops md:text-3xl lg:text-4xl">
        PROJECTS
      </h1>
      <p class="text-xl font-normal text-center font-blackops text-primary lg:text-2xl">
        Things I've built so far
      </p>
    </div>

    <div class="flex flex-wrap my-10 md:my-16 lg:my-20">
      <div class="w-full px-1 my-1 md:w-1/2 lg:w-1/3">
        <div class="overflow-hidden bg-black border border-gray-200 shadow-2xl rounded-xl">
          <a href="#">
            <div class="mb-4 overflow-hidden rounded-t-xl">
              <img src="@/assets/img/zullkitimg.png" alt="project1" class="block w-full h-auto" />
            </div>
          </a>

          <header class="px-4 mb-4 leading-tight font-archivo">
            <h1 class="text-lg">
              <a class="font-normal text-secondary hover:underline hover:cursor-pointer">Zullkit</a>
            </h1>
            <p class="py-3 text-secondary text-light">
              This website is the result of my online learning about Vue.js. During the learning process, I gained knowledge in various areas such as installing Vue.js, converting HTML to Vue components, writing logic using JavaScript, splitting code into components, integrating with APIs using Axios, state management, implementing a trial payment gateway using Midtrans, and deploying the web application to Netlify. The final outcome is an attractive web application with a user-friendly interface and comprehensive features.
            </p>
            <p class="pb-3 text-sm font-medium text-secondary">
              Tech stack:
              <span class="font-normal text-secondary">
                HTML, JavaScript, Vue, Tailwind</span>
            </p>
            <div class="flex ">
              <div class="flex items-center w-1/2">

                <a href="https://zullkit-vue-ryan.netlify.app" target="_blank" class="pl-1 text-sm font-normal underline text-secondary">Link Preview</a>
              </div>
              <div class="flex items-center w-1/2">

                <a href="https://github.com/ryanibrahim24/vue-zullkit.git" target="_blank" class="pl-1 text-sm font-normal underline text-secondary">view code</a>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>


