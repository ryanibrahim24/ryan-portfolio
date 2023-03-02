<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container mx-auto px-2 max-w-5xl">
    <div class="py-5">
      <div
        class="flex items-center justify-center pb-5 border-b-2 border-gray-300"
      >
        <div class="hidden md:flex items-center md:w-3/12">
          <div
            class="flex items-center justify-center w-10 h-10 mr-4 text-xl text-white rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-indigo-500"
          >
            <RouterLink to="/">R</RouterLink>
          </div>
          <p class="font-sans text-xl font-medium text-gray-600">
            Ryan Ibrahim
          </p>
        </div>
        <div class="w-10/12 md:w-8/12 font-sans font-medium text-gray-600">
          <div class="flex justify-start md:justify-end md:mr-6 lg:mr-12 sm:space-x-6 lg:space-x-12 text-lg">
            <p class="hidden sm:block">+62 857 9562 5011</p>
            <p>ryanibrahim27@gmail.com</p>
          </div>
        </div>
        <div class="w-2/12 md:w-1/12">
          <ul class="flex items-center justify-end space-x-5">
            <li>
              <a href="https://github.com/ryanibrahim24" target="_blank">
                <img
                  alt="Github"
                  src="@/assets/img/github.svg"
                  class="w-auto h-8"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryan-ibrahim-442736208/" target="_blank">
                <img
                  alt="Linkedin"
                  src="@/assets/img/linkedin.svg"
                  class="w-auto h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="sm:flex items-center py-3 sm:py-5 sm:justify-items-scretch">
        <div class="hidden sm:block sm:w-2/3 lg:w-1/2 font-sans font-medium text-gray-600">
          <ul class="flex justify-start sm:space-x-6 lg:space-x-12 text-xl">
            <li>
              <RouterLink to="/" class="hover:underline">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:underline">About Me</RouterLink>
            </li>
            <li>
              <RouterLink to="/project" class="hover:underline">Project</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="mr-4 hover:underline">Contact</RouterLink>
            </li>
          </ul>
        </div>
        <div class="sm:w-1/3 lg:w-1/2 font-sans font-medium text-gray-600">
          <div class="sm:flex sm:justify-end text-lg">
            <p class="text-center">Designed By Pavad MG</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
