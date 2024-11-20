<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const show = ref(false);
function toggleDropdown() {
  show.value = !show.value;
}
</script>

<template>
  <nav class="py-5 bg-black" >
    <div class="container max-w-5xl px-2 mx-auto" data-aos="fade-right">
      <div class="flex items-center justify-between">
        <div class="flex items-center w-2/3 sm:w-3/12 md:w-4/12">
          <div
            class="flex items-center justify-center w-10 h-10 mr-4 text-xl text-white rounded-lg shadow-lg font-archivo bg-gradient-to-r from-indigo-500 to-fuchsia-500"
          >
            <RouterLink to="/">R</RouterLink>
          </div>
          <p
            class="flex items-center text-xl text-secondary sm:text-lg md:text-xl font-blackops"
          >
            RYAN IBRAHIM
          </p>
        </div>
        <div
          class="justify-end hidden sm:items-center font-base font-archivo text-secondary sm:flex sm:w-8/12 md:w-8/12"
        >
          <ul class="flex justify-end text-xl sm:space-x-6 lg:space-x-12">
            <li>
              <RouterLink to="/" class="hover:underline">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:underline"
                >About Me</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/project" class="hover:underline"
                >Project</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/contact" class="mr-4 hover:underline"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="w-1/3 sm:w-1/12 md:w-1/12">
          <ul class="flex items-center justify-end space-x-3 lg:space-x-5">
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
              <a
                href="https://www.linkedin.com/in/ryan-ibrahim-442736208/"
                target="_blank"
              >
                <img
                  alt="Linkedin"
                  src="@/assets/img/linkedin.svg"
                  class="w-auto h-8"
                />
              </a>
            </li>
            <li class="sm:hidden">
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                class="inline-flex items-center p-2 text-sm font-medium text-center bg-black rounded-lg text-secondary focus:ring-4 focus:outline-none focus:ring-gray-50"
                type="button"
                @click="toggleDropdown"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  ></path>
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                id="dropdownDots"
                class="fixed z-50 bg-white divide-y divide-gray-100 rounded-lg shadow right-5 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                  :class="{ hidden: !show }"
                >
                  <li>
                    <RouterLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Home</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/about"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >About Me</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/project"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Project</RouterLink
                    >
                  </li>
                  <li>
                      <RouterLink
                        to="/contact"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Contact</RouterLink
                      >
                    </li>
                </ul>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
