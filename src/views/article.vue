<script setup>
import { ref } from "vue";
import Footer from "@/components/Homepages/Footer.vue";
import { RouterLink } from "vue-router";

const projects = ref([
  {
    title: "Quality Control Tools",
    describe:
      "Bebereapa Alat yang biasa dipakai dalam dunia Quality Control dalam Industri seperti Lab QC Kimia,Lab QC Mikrobiologi, Lab QC Fisika dan Lab Water Treatment",
    img: "todo.png",
    link: "/article/qc",
  },
  {
    title: "Instrumentasi Industri",
    describe:
      "Artikel yang berkaitan dengan dunia Engineering Khususnya Instrumentasi Industri Khususnya 4 Besaran Proses Seperti Tekanan, Flow, Level, Temperatur.",
    img: "ayoboga.png",
    link: "/article/instrument",
  },
]);
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
        Article
      </h1>
      <p
        class="text-xl font-normal text-center font-blackops text-fnt lg:text-2xl"
      >
        Beberapa Kategori dalam artikel
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
          <header class="px-4 mb-4 leading-tight font-archivo">
            <h1 class="pt-6 text-2xl">
              <a
                class="tracking-tight text-secondary font-Bold hover:underline hover:cursor-pointer"
                >{{ project.title }}</a
              >
            </h1>
            <div
              class="overflow-auto h-[250px] overscroll-y-auto py-3 text-[#CBDCEB] font-normal"
            >
              {{ project.describe }}
            </div>
            <div class="flex">
              <RouterLink
                :to="`${project.link}`"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </RouterLink>
            </div>
          </header>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
