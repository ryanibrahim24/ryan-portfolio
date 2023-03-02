<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const show = ref(false);
function toggleDropdown() {
  show.value = !show.value;
}
</script>

<template>
  <nav class="py-5">
    <div class="container mx-auto px-2 max-w-5xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center w-1/3 sm:w-1/12 md:w-3/12">
          <div
            class="flex items-center justify-center w-10 h-10 mr-4 text-xl text-white rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-indigo-500"
          >
            <RouterLink to="/">R</RouterLink>
          </div>
          <p
            class="hidden md:block font-sans text-xl font-medium text-gray-600"
          >
            Ryan Ibrahim
          </p>
        </div>
        <div
          class="hidden sm:block sm:w-8/12 md:w-8/12 font-sans font-medium text-gray-600"
        >
          <ul class="flex justify-end sm:space-x-6 lg:space-x-12 text-xl">
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
        <div class="w-2/3 sm:w-3/12 md:w-1/12">
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
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                class="z-50 fixed right-5 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
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
