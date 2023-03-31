<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "Zullkit",
    describe: "This website is the result of my online learning about Vue.js. During the learning process, I gained knowledge in various areas such as installing Vue.js, converting HTML to Vue components, writing logic using JavaScript, splitting code into components, integrating with APIs using Axios, state management, implementing a trial payment gateway using Midtrans, and deploying the web application to Netlify. The final outcome is an attractive web application with a user-friendly interface and comprehensive features.",
    stack: "Vue Js, Tailwind",
    img: "zullkitimg.png",
    link_app: "https://zullkit-vue-ryan.netlify.app",
    link_git: "https://github.com/ryanibrahim24/vue-zullkit.git",
  },
  {
    title: "Ryan Portfolio",
    describe: "This web portfolio was created using the JavaScript programming language with the Vue.js framework and styled with Tailwind CSS. AOS library was also added for scroll animation effects. This is my first project using Vue.js, and the UI was sliced using Tailwind based on my previous web development learning experiences.",
    stack: "Vue Js, Tailwind",
    img: "porto.png",
    link_app: "https://ryanibrahim-portfolio.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/ryan-portfolio.git",
  },
  {
    title: "Web Progate",
    describe: "This Progate website was created using HTML and CSS. Although the website is still static, it has already implemented responsive design and animations. This is the first website I created when I first started learning programming from a class I attended.",
    stack: "HTML, CSS",
    img: "progate.png",
    link_app: "https://webprogate2021.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/WebProgate.git",
  },
]);
</script>

<template>
  <div class="container max-w-5xl px-2 mx-auto sm:mt-5 lg:mt-8 md:px-3 lg:px-4" data-aos="fade-up">
    <div class="space-y-4">
      <h1 class="block text-2xl font-normal text-center text-black font-blackops md:text-3xl lg:text-4xl">
        PROJECTS
      </h1>
      <p class="text-xl font-normal text-center font-blackops text-primary lg:text-2xl">
        Things I've built so far
      </p>
    </div>

    <div class="flex flex-wrap my-10 md:my-16 lg:my-20">
      <div class="w-full px-1 my-1 align-center md:w-1/2 lg:w-1/3" v-for="project in projects">
        <div class="overflow-hidden bg-black border border-gray-200 shadow-2xl rounded-xl">
          <a :href="project.link_app">
            <div class="mb-4 overflow-hidden rounded-t-xl">
              <img :src="`/img/${project.img}`" alt="project1" class="block w-[320px] h-[200px]" />
            </div>
          </a>

          <header class="px-4 mb-4 leading-tight font-archivo">
            <h1 class="text-lg">
              <a class="font-normal text-secondary hover:underline hover:cursor-pointer">{{ project.title }}</a>
            </h1>
            <div class="overflow-auto h-[250px] overscroll-y-auto py-3 text-secondary text-light ">
              {{ project.describe }}
            </div>
            <p class="pb-3 text-sm font-medium text-secondary">
              Tech stack:
              <span class="font-normal text-secondary">
                {{ project.stack }}</span>
            </p>
            <div class="flex ">
              <div class="flex items-center w-1/2">

                <a :href="project.link_app" target="_blank" class="pl-1 text-sm font-normal underline text-secondary">Link
                  Preview</a>
              </div>
              <div class="flex items-center w-1/2">

                <a :href="project.link_git" target="_blank" class="pl-1 text-sm font-normal underline text-secondary">view
                  code</a>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>


