<script setup>
import { ref ,} from "vue";

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
  <div class="container mx-auto max-w-5xl px-2 md:px-3 lg:px-4 xl:px-0">
    <div class="items-center space-y-4 font-poppins justify-center">
      <h1 class="block text-center text-2xl md:3xl lg:text-4xl font-semibold text-indigo-600">
        My Tech Stack
      </h1>
      <p class="text-xl lg:text-2xl items-center font-semibold text-gray-600 text-center">
        Technologies I've been working with recently
      </p>
    </div>
    
    <div class="my-10 lg:my-20">
      <div class="flex flex-wrap items-baseline justify-center space-y-7">
        <template v-for="item in items" :key="item.id" >
          <div class="w-4/12 md:w-2/12 ">
            <img :src=" '/src/assets/img/'+ item.img"  class="w-auto h-24 sm:h-28 sm:w-28 mx-auto my-auto" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
