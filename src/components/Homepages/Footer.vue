<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="px-2 py-5 bg-bgr" >
    <div class="container max-w-5xl mx-auto" data-aos="fade-right">
      <div
        class="flex items-center justify-center pb-5 border-b-2 border-secondary"
      >
        <div class="items-center hidden md:flex md:w-3/12">
          <div
            class="flex items-center justify-center w-10 h-10 mr-4 text-xl text-white rounded-lg shadow-lg font-archivo bg-gradient-to-r from-indigo-500 to-fuchsia-500"
          >
            <RouterLink to="/">R</RouterLink>
          </div>
          <p class="text-xl font-normal text-secondary font-blackops">
            RYAN IBRAHIM
          </p>
        </div>
        <div class="w-10/12 font-normal font-archivo md:w-8/12 text-secondary">
          <div class="flex justify-start text-lg md:justify-end md:mr-6 lg:mr-12 sm:space-x-6 lg:space-x-12">
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

      <div class="items-center py-3 sm:flex sm:py-5 sm:justify-items-scretch">
        <div class="hidden font-normal font-archivo sm:block sm:w-2/3 text-secondary">
          <ul class="flex justify-start text-lg md:text-xl sm:space-x-6 lg:space-x-12">
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
        <div class="font-normal font-archivo sm:w-1/3 text-secondary">
          <div class="text-md md:text-lg sm:flex sm:justify-end">
            <p class="text-center">Ryan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
