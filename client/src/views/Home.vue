<script setup>
import ThirdSection from "../components/home/ThirdSection.vue";
import FourthSection from "../components/home/FourthSection.vue";
import FifthSection from "../components/home/FifthSection.vue";
import SixthSection from "../components/home/SixthSection.vue";
import LastSection from "../components/home/LastSection.vue";
import VLazyImage from "v-lazy-image";

import AOS from 'aos';
AOS.init();



</script>

<template>

  <!-- HOME WITH ANIMATION -->
  <div>

    <!-- HOME LANDING PAGE DIV -->
    <div class="flex flex-col mx-auto  lg:flex lg:flex-row px-6 lg:px-0 relative bg-slate-100 h-96 md:h-screen w-full" >

      <!--BACKGROUND BLOB -->
      <span class="absolute w-full  animate-pulse opacity-75">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <g transform="translate(261, -233)">
            <path class="blob"
              d="M416.5,301Q390,352,345.5,380Q301,408,245.5,421Q190,434,139,401Q88,368,48,309Q8,250,37.5,183.5Q67,117,131.5,101Q196,85,247,94.5Q298,104,351,121Q404,138,423.5,194Q443,250,416.5,301Z"
              fill="#b3d9ff"></path>
          </g>
        </svg>
      </span>

      <!--BACKGROUND BLOB Two -->
      <span  class="absolute bottom-2 w-full animate-pulse opacity-30">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <g transform="translate(-49, 209)">
            <path class="blob"
              d="M457.5,314.5Q427,379,368.5,407.5Q310,436,247.5,443.5Q185,451,136,409.5Q87,368,50,309Q13,250,31.5,177Q50,104,115,70Q180,36,247.5,43.5Q315,51,354.5,98.5Q394,146,441,198Q488,250,457.5,314.5Z"
              fill="#1d3da3"></path>
          </g>
        </svg>
      </span>

      <!-- First Div -->
      <div class="my-auto md:my-0 lg:my-auto z-40 space-y-5 py-6 lg:py-0 md:flex md:flex-col md:justify-center md:items-center container lg:justify-start lg:items-start mx-auto lg:ml-20">

        <h1 class="text-2xl md:text-4xl font-medium font-serif">
          Welcome To
        </h1>
        

        <h1 class="text-xl md:text-3xl font-medium font-serif">
          Government Boy's Secondary School
        </h1>

        <h4 class="text-sm md:text-xl font-medium font-serif">
          Dirige Nos Domine (Lord, guide us)
        </h4>

        <button class="font-medium py-3 drop-shadow-lg shadow-lg text-center px-4 font-san mb-4 border-y-4 border-[#455eb1]   hover:bg-[#455eb1] hover:border-[#1435a3] text-white bg-[#1d3da3]">
          <RouterLink to="">Member Login</RouterLink>
        </button>
      </div>

      <!-- Second Div -->
      <div class="relative h-64 hidden md:block mt-16 md:mt-12 md:ml-36 container lg:my-auto mx-auto">

        <!--Big Center Image size -->
        <div>
          <v-lazy-image src="/images/student.jpg" alt=""
            class="w-full md:w-7/12 lg:w-9/12 object-contain  border-8 border-solid border-white rounded-md overflow-hidden  drop-shadow-lg shadow-lg absolute" />
        </div>
          

        <!--Top Right Image -->
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" class="z-40  absolute -right-5 -top-14 md:right-52 lg:right-32 lg:-top-20">
          <v-lazy-image src="/images/student1.jpg"
                class="w-28 md:w-36 lg:w-44  rounded-md object-contain  border-2 border-solid border-white  overflow-hidden  drop-shadow-lg shadow-lg"
                alt="" />
        </div>

        <!-- Top Left Image -->
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="z-40  absolute  -top-16">
          <v-lazy-image src="/images/building.jpg"
            class="w-24 md:w-32 lg:w-36 rounded-md object-contain  border-2 border-solid border-white  overflow-hidden  drop-shadow-lg shadow-lg"
            alt="" />
        </div>

        <!--Bottom Right Image -->
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" class="z-40  absolute top-44  -right-5 md:right-60 lg:right-14 md:top-64">
          <v-lazy-image src="/images/boys.jpg"
                class="w-24 md:w-36 lg:w-44 object-contain rounded-md border-2 border-solid border-white  overflow-hidden  drop-shadow-lg shadow-lg"
                alt="" />
        </div>

        <!--Bottom Left Image -->
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="z-40  absolute top-44 md:top-64">
          <v-lazy-image src="/images/children.jpg"
            class=" w-24 md:w-36 lg:w-44 object-contain rounded-md border-2 border-solid border-white  overflow-hidden  drop-shadow-lg shadow-lg"
            alt="" />
        </div>

      </div>

    </div>

    <!-- Home Second Layout Section -->
    <div data-aos="fade-up" data-aos-duration="3000" class="bg-gray-800 mt-6 md:h-80 lg:h-60">
      
      <!-- Flex Justify-between Container Two(2) Div's -->
      <div class="grid grid-cols-1 gap-4 md:flex md:justify-between container drop-shadow-lg mx-auto px-6 py-12">

        <!-- First Div -->
        <div class="space-y-4 w-full md:w-8/12">

          <!-- Heading Text -->
          <h1 class="text-white  font-bold font-serif text-2xl md:text-4xl">Admission is open for 2022/2023 academic session.</h1>

          <!-- Paragraph -->
          <p class="text-sm font-medium font-sans text-white">
            We create learning experiences through the use of technology that will give our students an advantage in today's competitive world We offer both the Nigerian and the UK National curricular that will help create excellent students who will compete globally .
          </p>
        </div>

        <!-- Second Div with Two(2) Button Or Link -->
        <div class="md:mt-4 lg: mt-0">
          
          <!-- Button Or Link 1 -->
          <div class="font-medium py-3 drop-shadow-lg shadow-lg text-center px-4 font-san mb-4 border-b-4 border-[#455eb1]   hover:bg-[#455eb1] hover:border-[#1435a3] text-white bg-[#1d3da3] ">
            <RouterLink to="/">Make Enquiry</RouterLink>
          </div>

          <!-- Button Or Link 2 -->
           <div class="font-medium text-center py-3 drop-shadow-lg shadow-lg px-4 font-san border-b-4 border-[#455eb1]   hover:bg-[#455eb1] hover:border-[#1435a3] text-white bg-[#1d3da3] ">
              <RouterLink to="/">Download Offline Form</RouterLink>
           </div>
        </div>
      </div>

    </div>

     <!-- Home Third Layout Section -->
    <div>
      <ThirdSection />
    </div>

    <!-- Home Fourth Layout Section -->
    <div>
      <FourthSection />
    </div>

    <!-- Fifth Layout Section -->
    <div>
      <FifthSection />
    </div>

    <!-- Fifth Layout Section -->
    <div>
      <SixthSection />
    </div>

    <!-- Last Layout Section -->
    <div>
      <LastSection />
    </div>

    
  </div>
</template>


<style scoped>

/** HOME IMAGE */
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}


</style>