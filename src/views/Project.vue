<script setup>
import { ref } from "vue";
import Footer from '@/components/Homepages/Footer.vue'

const projects = ref([
  {
    title: "Todo List App",
    describe: "This is my first web project using Next.js and Firebase, and I also utilized the Chakra UI CSS framework. If you have a variety of activities and don't want to forget anything, you can use this website to store your important notes. This website was also my first assignment during my internship.",
    stack: "Next Js, Firebase, Chakra UI",
    img: "todo.png",
    link_app: "#",
    link_git: "#",
    hasLink: false,
    hasCode: false,
  },
  {
    title: "Ayoboga Admin",
    describe: "This website uses the Next.js framework and NextUI as its technologies. It is an admin dashboard web application designed to manage content that will be displayed on both web and mobile platforms. Here, I attempted to implement CRUD functionality, consume APIs, and experiment with login authentication features. This was my second assignment during my internship.",
    stack: "Next js, NextUI, NextAuth",
    img: "ayoboga.png",
    link_app: "#",
    link_git: "#",
    hasLink: false,
    hasCode: false,
  },
  {
    title: "Zullkit",
    describe: "This website is the result of my online learning about Vue.js. During the learning process, I gained knowledge in various areas such as installing Vue.js, converting HTML to Vue components, writing logic using JavaScript, splitting code into components, integrating with APIs using Axios, state management, implementing a trial payment gateway using Midtrans, and deploying the web application to Netlify. The final outcome is an attractive web application with a user-friendly interface and comprehensive features.",
    stack: "Vue Js, Tailwind",
    img: "zullkitimg.png",
    link_app: "https://zullkit-vue-ryan.netlify.app",
    link_git: "https://github.com/ryanibrahim24/vue-zullkit.git",
    hasLink: true,
    hasCode: true,
  },
  {
    title: "Power Human",
    describe: "This website is the result of my online learning about Laravel and Nuxt.js. During the learning process, I gained knowledge in various areas such as BackEnd Developer using Laravel and FrontEnd using NuxtJS. even though it can display the login view because the backend isn't finished yet, next time i will finish it so i can get a full view of this website",
    stack: "HTML, tailwindcss, Nuxt",
    img: "laravelnuxt.png",
    link_app: "https://powerhuman-frontend-ryan.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/powerhuman-frontend1.git",
    hasLink: true,
    hasCode: true,
  },
  {
    title: "Suxz",
    describe: "Suxz is online course platform, this web landing page is a responsive design exercise and i use tailwind css, the UI design reference is from codedesign.dev by Irham Shidiq. This website still lacks features such as event handling, next time i will add some other features.",
    stack: "HTML, tailwindcss",
    img: "suxz.png",
    link_app: "https://suxz-tailwind.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/latihantailwind1.git",
    hasLink: true,
    hasCode: true,
  },
  {
    title: "Ryan Portfolio",
    describe: "This web portfolio was created using the JavaScript programming language with the Vue.js framework and styled with Tailwind CSS. AOS library was also added for scroll animation effects. This is my first project using Vue.js, and the UI was sliced using Tailwind based on my previous web development learning experiences.",
    stack: "Vue Js, Tailwind",
    img: "porto.png",
    link_app: "https://ryanibrahim-portfolio.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/ryan-portfolio.git",
    hasLink: true,
    hasCode: true,
  },
  {
    title: "Web Progate",
    describe: "This Progate website was created using HTML and CSS. Although the website is still static, it has already implemented responsive design and animations. This is the first website I created when I first started learning programming from a class I attended.",
    stack: "HTML, CSS",
    img: "progate.png",
    link_app: "https://webprogate2021.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/WebProgate.git",
    hasLink: true,
    hasCode: true,
  },
  {
    title: "Bookstore",
    describe: "The Bookstore website is themed around online book borrowing and purchasing. It was created using only HTML and CSS technologies, and although its features are not yet active, it has already implemented responsive design concepts and animations. This website was a team project assigned during my bootcamp training.",
    stack: "HTML, CSS",
    img: "bookstore.png",
    link_app: "https://bookstore-teamprogate.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/BookStore-TeamProgate.git",
    hasLink: true,
    hasCode: true,
  },
  {
    title: "Calculator Progate",
    describe: "This web calculator was created using HTML, CSS, and JavaScript technologies. With JavaScript, the web application can perform interactions, calculations, and produce output. This web application was one of the assignments given during my participation in a bootcamp that focused on learning JavaScript.",
    stack: "HTML, CSS, JavaScript",
    img: "calculator.png",
    link_app: "https://calculator-progate2021.netlify.app/",
    link_git: "https://github.com/ryanibrahim24/kalkulator-progateJS.git",
    hasLink: true,
    hasCode: true,
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

    <div class="flex flex-wrap items-baseline my-10 space-y-4 md:my-16 lg:my-20">
      <div class="w-full px-1 my-1 md:w-1/2 lg:w-1/3" v-for="project in projects">
        <div class="overflow-hidden bg-black border border-gray-200 shadow-2xl rounded-xl">
          <a :href="project.link_app">
            <div class="mb-4 overflow-hidden rounded-t-xl">
              <img :src="`/img/${project.img}`" alt="project1" class="block w-full h-auto" />
            </div>
          </a>

          <header class="px-4 mb-4 leading-tight font-archivo">
            <h1 class="text-lg">
              <a class="font-normal text-secondary hover:underline hover:cursor-pointer">{{project.title}}</a>
            </h1>
            <div class="overflow-auto h-[250px] overscroll-y-auto py-3 text-secondary text-light ">
              {{ project.describe }}
            </div>
            <p class="pb-3 text-sm font-medium text-fuchsia-500">
              Tech stack:
              <span class="font-normal text-secondary">
                {{ project.stack }}</span>
            </p>
            <div class="flex ">
              <div v-if="project.hasLink" class="flex items-center w-1/2">
                <a :href="project.link_app" target="_blank" class="pl-1 text-sm font-normal underline text-secondary">Link Preview</a>
              </div>
              <div v-if="project.hasCode" class="flex items-center w-1/2">
                <a :href="project.link_git" target="_blank" class="pl-1 text-sm font-normal underline text-secondary">view code</a>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
    
  </div>
  <Footer/>
</template>


