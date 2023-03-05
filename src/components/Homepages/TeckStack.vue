<script setup>
import { ref } from "vue";

const items = ref ([
    { id: 1 ,img: 'css.svg' }, 
    { id: 2 ,img: 'html.svg' },
    { id: 3 ,img: 'js.svg' },
    { id: 4 ,img: 'vue.svg' },
    { id: 5 ,img: 'vite.svg' },
    { id: 6 ,img: 'netlify.svg' },
    { id: 7 ,img: 'figma.svg' },
    { id: 8 ,img: 'git.svg' },
    { id: 9 ,img: 'github.svg' },
    { id: 10 ,img: 'tailwind.svg' },
    { id: 11 ,img: 'vscode.svg' },
    { id: 12 ,img: 'postman.svg' },
  ])
</script>

<template>
  <div class="container max-w-5xl px-2 mx-auto md:px-3 lg:px-4 xl:px-0">
    <div class="items-center justify-center space-y-4">
      <h1 class="block text-2xl text-center text-black font-blackops md:3xl lg:text-4xl">
        MY TECH STACK
      </h1>
      <p class="items-center text-xl text-center font-blackops text-primary lg:text-2xl">
        Technologies I've been working with recently
      </p>
    </div>
    
    <div class="my-10 lg:my-20">
      <div class="flex flex-wrap items-baseline justify-center space-y-7">
        <template v-for="item in items" >
          <div class="w-4/12 md:w-2/12 ">
            <img :src=" `/img/${item.img}`"  class="w-auto h-24 mx-auto my-auto sm:h-28 sm:w-28" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
