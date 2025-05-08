<script setup>
import { ref, onMounted } from "vue";
import Footer from "@/components/Homepages/Footer.vue";
import { Modal } from "flowbite";
import { initFlowbite } from "flowbite";

const projects = ref([
  {
    title: "Segitiga Daya",
    img: "daya-1.svg",
    materi: [
      "daya-1.svg",
      "daya-2.svg",
      "daya-3.svg",
      "daya-4.svg",
      "daya-5.svg",
      "daya-6.svg",
      "daya-7.svg",
      "daya-8.svg",
      "kf-7.svg",
    ],
    modal: "daya",
  },
  {
    title: "Sensor Proximity",
    img: "proximity-1.svg",
    materi: [
      "proximity-1.svg",
      "proximity-2.svg",
      "proximity-3.svg",
      "proximity-4.svg",
      "proximity-5.svg",
      "proximity-6.svg",
      "proximity-7.svg",
      "proximity-8.svg",
      "kf-7.svg",
    ],
    modal: "proximity",
  },
  {
    title: "Limit Switch",
    img: "limitswitch-1.svg",
    materi: [
      "limitswitch-1.svg",
      "limitswitch-2.svg",
      "limitswitch-3.svg",
      "limitswitch-4.svg",
      "limitswitch-5.svg",
      "limitswitch-6.svg",
      "kf-7.svg",
    ],
    modal: "limitswitch",
  },
  {
    title: "Circuit Breaker",
    img: "circuitbreaker-1.svg",
    materi: [
      "circuitbreaker-1.svg",
      "circuitbreaker-2.svg",
      "circuitbreaker-3.svg",
      "circuitbreaker-4.svg",
      "circuitbreaker-5.svg",
      "circuitbreaker-6.svg",
      "circuitbreaker-7.svg",
      "circuitbreaker-8.svg",
      "circuitbreaker-9.svg",
      "circuitbreaker-10.svg",
      "circuitbreaker-11.svg",
      "circuitbreaker-12.svg",
      "circuitbreaker-13.svg",
      "circuitbreaker-14.svg",
      "circuitbreaker-15.svg",
      "circuitbreaker-16.svg",
      "circuitbreaker-17.svg",
      "circuitbreaker-18.svg",
      "circuitbreaker-19.svg",
      "kf-7.svg",
    ],
    modal: "circuitbreaker",
  },
  {
    title: "Motor Starter",
    img: "motorstarter-1.svg",
    materi: [
      "motorstarter-1.svg",
      "motorstarter-2.svg",
      "motorstarter-3.svg",
      "motorstarter-4.svg",
      "motorstarter-5.svg",
      "motorstarter-6.svg",
      "motorstarter-7.svg",
      "motorstarter-8.svg",
      "motorstarter-9.svg",
      "motorstarter-10.svg",
      "kf-7.svg",
    ],
    modal: "motorstarter",
  },
  {
    title: "Push Button",
    img: "pushbutton-1.svg",
    materi: [
      "pushbutton-1.svg",
      "pushbutton-2.svg",
      "pushbutton-3.svg",
      "pushbutton-4.svg",
      "kf-7.svg",
    ],
    modal: "pushbutton",
  },
]);

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div
    class="container max-w-5xl px-2 mx-auto sm:mt-5 lg:mt-8 md:px-3 lg:px-4"
    data-aos="fade-up"
  >
    <div class="space-y-4">
      <h1
        class="block text-2xl font-normal text-center text-bgr font-blackops md:text-3xl lg:text-4xl"
      >
        Elektrikal
      </h1>
      <p
        class="text-xl font-normal text-center font-blackops text-fnt lg:text-2xl"
      >
        Rangkuman basic mengenai electric
      </p>
    </div>

    <div
      class="flex flex-wrap items-baseline my-10 space-y-4 md:my-16 lg:my-20"
    >
      <div
        class="w-full px-1 my-1 md:w-1/2 lg:w-1/3"
        v-for="project in projects"
      >
        <div
          class="overflow-hidden border border-gray-200 shadow-2xl bg-bgr rounded-xl"
        >
          <p>
            <div class="mb-4 overflow-hidden rounded-t-xl">
              <img
                :src="`/img/${project.img}`"
                alt="img"
                class="block w-full h-auto"
              />
            </div>
          </p>

          <header class="px-4 mb-4 leading-tight font-archivo">
            <h1 class="pb-3 text-lg">
              <p
                class="text-2xl font-bold text-secondary"
                >{{ project.title }}</p
              >
            </h1>
            <div class="flex">
              <!-- Main large modal -->
              <button
                :data-modal-target="project.modal"
                :data-modal-toggle="project.modal"
                class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Read More
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>

    <!-- Large Modal -->
    <div
      v-for="project in projects"
      :id="project.modal"
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-4xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200 rounded-t md:p-5 dark:border-gray-600"
          >
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              {{ project.title }}
            </h3>
            <button
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
              :data-modal-hide="project.modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-2">
            <div
              id="controls-carousel"
              class="relative w-full"
              data-carousel="static"
            >
              <!-- Carousel wrapper -->
              <div class="relative h-56 overflow-hidden overflow-y-auto rounded-lg md:h-96">
                <!-- Item 1 -->
                <div
                  v-for="materi in project.materi"
                  class="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    :src="`/img/${materi}`"
                    class="absolute block object-contain w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <!-- Slider controls -->
              <button
                type="button"
                class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none"
                data-carousel-prev
              >
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="w-4 h-4 text-gray dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="w-4 h-4 text-gray dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-4 space-x-3 border-t border-gray-200 rounded-b md:p-5 rtl:space-x-reverse dark:border-gray-600"
          >
            <button
              :data-modal-hide="project.modal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
