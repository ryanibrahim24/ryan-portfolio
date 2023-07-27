<script setup>
import { ref } from "vue";
import Footer from '@/components/Homepages/Footer.vue'

const works = ref([
  {
    job: "Intership Front-End Developer",
    tempat: "Abercode",
    kota: "Bandung",
    waktu: "Jun 2023 - Present",
  },
  {
    job: "Mechanical Engineering",
    tempat: "Global Mega Indonesia",
    kota: "Bekasi",
    waktu: "Feb 2022 - May 2022",
  },
  {
    job: "Mechanical Engineering",
    tempat: "Multistrada Arah Sarana",
    kota: "Bekasi",
    waktu: "Jul 2021 - Oct 2021",
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
  <div class="container max-w-5xl px-2 mx-auto mt-5 sm:mt-10 md:px-3 lg:px-4" data-aos="fade-right">
    <div class="w-full text-primary lg:w-3/5">
      <div class="font-archivo space-y-[36]">
        <h1 class="font-blackops font-normal text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px]">ABOUT ME</h1>
        <p class="pt-4">
          My name is Ryan Ibrahim, and I am very passionate about the world of technology, particularly in website development. I find the Front End world very intriguing because it offers the opportunity to combine creativity and logic to create an attractive and interactive website interface. Although I don't have a background in IT education, I strive to learn it through self-taught methods, taking online classes, and participating in offline training programs organized by the government. This web portfolio is the implementation of my learning results. I have learned several technologies such as CSS Frameworks: Tailwind, Bootstrap, Vue.js Framework, HTML, and have some knowledge of the PHP programming language.
        </p>
      </div>

      <div class="font-archivo y-[36] text-primary my-5 sm:my-10">
        <h1 class="font-blackops text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] my-[38] ">
          WORK EXPERIENCE
        </h1>
        <template v-for="work in works">
          <div class="space-y-[30] pt-4">
            <div class="flex items-center">
              <div class="flex justify-start w-3/5">
                <p>{{ work.job }}</p>
              </div>
              <div class="flex justify-end w-2/5">
                <span class="px-3 py-1 bg-black rounded-full text-secondary">Full Time</span>
              </div>
            </div>
            <div class="flex items-center pt-4 border-b-4 sm:pb-6 border-primary">
              <div class="flex justify-start w-3/5 sm:w-2/5">
                <img
                  src="@/assets/img/building.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <p>{{ work.tempat }}</p>
              </div>
              <div class="justify-end hidden sm:w-1/5 sm:flex">
                <img
                  src="@/assets/img/location.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <span class="">{{ work.kota }}</span>
              </div>
              <div class="flex justify-end w-2/5 sm:w-2/5">
                <img
                  src="@/assets/img/time.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <span class="">{{ work.waktu }}</span>
              </div>
              
            </div>
            <div class="flex justify-start w-full pb-4 sm:hidden sm:border-b-0">
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

      <div class="font-archivo y-[36] mb-5 sm:mb-10">
        <h1 class="font-blackops text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] my-[38]">
          FORMAL EDUCATION
        </h1>
        <template v-for="edu in education">
          <div class="space-y-[30] pt-4">
            <div class="flex items-center">
              <div class="flex justify-start w-3/5">
                <p>{{ edu.title }}</p>
              </div>
              <div class="flex justify-end w-2/5">
                <span class="px-3 py-1 bg-black rounded-full text-secondary">Full Time</span>
              </div>
            </div>
            <div class="flex items-center pt-4 pb-6 border-b-4 border-primary">
              <div class="flex justify-start w-3/5">
                <img
                  src="@/assets/img/building.svg"
                  alt="job"
                  class="overflow-hidden h-[20] w-[20]"
                />
                <p>{{ edu.tempat }}</p>
              </div>
              <div class="flex justify-end w-2/5">
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

      <div class="font-archivo y-[36] mb-10 sm:mb-20">
            <h1 class="font-blackops text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] my-[38] ">
              INFORMAL EDUCATION
            </h1>
            <template v-for="edu2 in informal">
              <div class="space-y-[30] pt-4">
                <div class="flex items-center">
                  <div class="flex justify-start w-3/5">
                    <p>{{ edu2.title }}</p>
                  </div>
                  <div class="flex justify-end w-2/5">
                    <span class="px-3 py-1 bg-black rounded-full text-secondary">{{edu2.site}}</span>
                  </div>
                </div>
                <div class="flex items-center pt-4 pb-6 border-b-4 border-primary">
                  <div class="flex justify-start w-3/5">
                    <img
                      src="@/assets/img/building.svg"
                      alt="job"
                      class="overflow-hidden h-[20] w-[20]"
                    />
                    <p>{{ edu2.tempat }}</p>
                  </div>
                  <div class="flex justify-end w-2/5">
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
  </div>
  <Footer/>
</template>
