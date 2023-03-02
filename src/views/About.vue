<script setup>
import { ref } from "vue";
import Footer from '@/components/Homepages/Footer.vue'

const works = ref([
  {
    job: "Mechanical Engineering",
    tempat: "Multistrada Arah Sarana",
    kota: "Bekasi",
    waktu: "Jul 2021 - Oct 2021",
  },
  {
    job: "Mechanical Engineering",
    tempat: "Global Mega Indonesia",
    kota: "Bekasi",
    waktu: "Feb 2022 - May 2022",
  },
]);

const education = ref([
    {
        title: "Instrumentation Industry",
        tempat: "Vocational High School 1 Cimahi",
        waktu: "Jul 2017 - Jun 2021",
    }
]);
const informal = ref([
    {
        title: "Junior Web Developer",
        tempat: "BPSDMP Kominfo Bandung",
        waktu: "Feb 2023",
        site: "Offline"
    },
    {
        title: "Front End Developer",
        tempat: "Build with Angga",
        waktu: "Oct 2022 - Present",
        site: "Online"
    },
    {
        title: "Basic Web Developer",
        tempat: "Progate",
        waktu: "Nov 2021 - Jan 2022",
        site: "Online"
    },
]);
</script>

<template>
  <div class="container mx-auto mt-5 sm:mt-10 max-w-5xl px-2 md:px-3 lg:px-4">
    <div class="w-full lg:w-3/5 text-gray-600">
      <div class="font-poppins space-y-[36]">
        <h1 class="font-bold text-indigo-600 text-3xl sm:text-4xl md:text-5xl lg:text-[50px]">About Me</h1>
        <p class="pt-4">
          My name is Ryan Ibrahim, and I am very passionate about the world of technology, particularly in website development. I find the Front End world very intriguing because it offers the opportunity to combine creativity and logic to create an attractive and interactive website interface. Although I don't have a background in IT education, I strive to learn it through self-taught methods, taking online classes, and participating in offline training programs organized by the government. This web portfolio is the implementation of my learning results. I have learned several technologies such as CSS Frameworks: Tailwind, Bootstrap, Vue.js Framework, HTML, and have some knowledge of the PHP programming language.
        </p>
      </div>

      <div class="font-poppins y-[36] text-gray-600 my-5 sm:my-10">
        <h1 class="font-bold text-indigo-600 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] my-[38] ">
          Work Experience
        </h1>
        <template v-for="work in works">
          <div class="space-y-[30] pt-4">
            <div class="flex items-center">
              <div class="w-3/5 flex justify-start">
                <p>{{ work.job }}</p>
              </div>
              <div class="w-2/5 flex justify-end">
                <span class="py-1 px-3 bg-sky-300 rounded-full">Full Time</span>
              </div>
            </div>
            <div class="flex items-center pt-4 sm:pb-6 sm:border-b-4">
              <div class="w-3/5 sm:w-2/5 flex justify-start">
                <img
                  src="@/assets/img/building.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <p>{{ work.tempat }}</p>
              </div>
              <div class="hidden sm:w-1/5 sm:flex justify-end">
                <img
                  src="@/assets/img/location.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <span class="">{{ work.kota }}</span>
              </div>
              <div class="w-2/5 sm:w-2/5 flex justify-end">
                <img
                  src="@/assets/img/time.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <span class="">{{ work.waktu }}</span>
              </div>
              
            </div>
            <div class="sm:hidden w-full flex justify-start pb-4 border-b-4 sm:border-b-0">
                    <img
                      src="@/assets/img/location.svg"
                      alt="job"
                      class="overflow-hidden h-[20] w-[20]"
                    />
                    <span class="">{{ work.kota }}</span>
                  </div>
          </div>
        </template>
      </div>

      <div class="font-poppins y-[36] mb-5 sm:mb-10">
        <h1 class="font-bold text-indigo-600 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] my-[38]">
          Formal Education
        </h1>
        <template v-for="edu in education">
          <div class="space-y-[30] pt-4">
            <div class="flex items-center">
              <div class="w-3/5 flex justify-start">
                <p>{{ edu.title }}</p>
              </div>
              <div class="w-2/5 flex justify-end">
                <span class="py-1 px-3 bg-sky-300 rounded-full">Full Time</span>
              </div>
            </div>
            <div class="flex items-center pt-4 pb-6 border-b-4">
              <div class="w-3/5 flex justify-start">
                <img
                  src="@/assets/img/building.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <p>{{ edu.tempat }}</p>
              </div>
              <div class="w-2/5 flex justify-end">
                <img
                  src="@/assets/img/time.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <span class="">{{ edu.waktu }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="font-poppins y-[36] mb-10 sm:mb-20">
            <h1 class="font-bold text-indigo-600 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] my-[38] ">
              Informal Education
            </h1>
            <template v-for="edu2 in informal">
              <div class="space-y-[30] pt-4">
                <div class="flex items-center">
                  <div class="w-3/5 flex justify-start">
                    <p>{{ edu2.title }}</p>
                  </div>
                  <div class="w-2/5 flex justify-end">
                    <span class="py-1 px-3 bg-sky-300 rounded-full">{{edu2.site}}</span>
                  </div>
                </div>
                <div class="flex items-center pt-4 pb-6 border-b-4">
                  <div class="w-3/5 flex justify-start">
                    <img
                      src="@/assets/img/building.svg"
                      alt="job"
                      class="overflow-hidden h-[20] w-[20]"
                    />
                    <p>{{ edu2.tempat }}</p>
                  </div>
                  <div class="w-2/5 flex justify-end">
                    <img
                      src="@/assets/img/time.svg"
                      alt="job"
                      class="overflow-hidden h-[20] w-[20]"
                    />
                    <span class="">{{ edu2.waktu }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
    </div>
    <Footer/>
  </div>
</template>
