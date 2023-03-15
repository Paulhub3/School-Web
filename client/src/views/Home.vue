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
    <div class="relative flex flex-col w-full px-6 mx-auto lg:flex lg:flex-row lg:px-0 bg-slate-100 h-96 md:h-screen" >

      <!--BACKGROUND BLOB -->
      <span class="absolute w-full opacity-75 animate-pulse">
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
      <span  class="absolute w-full bottom-2 animate-pulse opacity-30">
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
      <div class="container z-40 py-6 mx-auto my-auto space-y-5 md:my-0 lg:my-auto lg:py-0 md:flex md:flex-col md:justify-center md:items-center lg:justify-start lg:items-start lg:ml-20">

        <h1 class="font-serif text-2xl font-medium md:text-4xl">
          Welcome To
        </h1>
        

        <h1 class="font-serif text-xl font-medium md:text-3xl">
          Government Boy's Secondary School
        </h1>

        <h4 class="font-serif text-sm font-medium md:text-xl">
          Dirige Nos Domine (Lord, guide us)
        </h4>

        <button class="font-medium py-3 drop-shadow-lg shadow-lg text-center px-4 font-san mb-4 border-y-4 border-[#455eb1]   hover:bg-[#455eb1] hover:border-[#1435a3] text-white bg-[#1d3da3]">
          <RouterLink to="">Member Login</RouterLink>
        </button>
      </div>

      <!-- Second Div -->
      <div class="container relative hidden h-64 mx-auto mt-16 md:block md:mt-12 md:ml-36 lg:my-auto">

        <!--Big Center Image size -->
        <div>
          <v-lazy-image src="/images/student.jpg" alt=""
            class="absolute object-contain w-full overflow-hidden border-8 border-white border-solid rounded-md shadow-lg md:w-7/12 lg:w-9/12 drop-shadow-lg" />
        </div>
          

        <!--Top Right Image -->
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" class="absolute z-40 -right-5 -top-14 md:right-52 lg:right-32 lg:-top-20">
          <v-lazy-image src="/images/student1.jpg"
                class="object-contain overflow-hidden border-2 border-white border-solid rounded-md shadow-lg w-28 md:w-36 lg:w-44 drop-shadow-lg"
                alt="" />
        </div>

        <!-- Top Left Image -->
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="absolute z-40 -top-16">
          <v-lazy-image src="/images/building.jpg"
            class="object-contain w-24 overflow-hidden border-2 border-white border-solid rounded-md shadow-lg md:w-32 lg:w-36 drop-shadow-lg"
            alt="" />
        </div>

        <!--Bottom Right Image -->
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" class="absolute z-40 top-44 -right-5 md:right-60 lg:right-14 md:top-64">
          <v-lazy-image src="/images/boys.jpg"
                class="object-contain w-24 overflow-hidden border-2 border-white border-solid rounded-md shadow-lg md:w-36 lg:w-44 drop-shadow-lg"
                alt="" />
        </div>

        <!--Bottom Left Image -->
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="absolute z-40 top-44 md:top-64">
          <v-lazy-image src="/images/children.jpg"
            class="object-contain w-24 overflow-hidden border-2 border-white border-solid rounded-md shadow-lg  md:w-36 lg:w-44 drop-shadow-lg"
            alt="" />
        </div>

      </div>

    </div>

    <!-- Home Second Layout Section -->
    <div data-aos="fade-up" data-aos-duration="3000" class="mt-6 bg-gray-800 md:h-80 lg:h-60">
      
      <!-- Flex Justify-between Container Two(2) Div's -->
      <div class="container grid grid-cols-1 gap-4 px-6 py-12 mx-auto md:flex md:justify-between drop-shadow-lg">

        <!-- First Div -->
        <div class="w-full space-y-4 md:w-8/12">

          <!-- Heading Text -->
          <h1 class="font-serif text-2xl font-bold text-white md:text-4xl">Admission is open for 2022/2023 academic session.</h1>

          <!-- Paragraph -->
          <p class="font-sans text-sm font-medium text-white">
            We create learning experiences through the use of technology that will give our students an advantage in today's competitive world We offer both the Nigerian and the UK National curricular that will help create excellent students who will compete globally .
          </p>
        </div>

        <!-- Second Div with Two(2) Button Or Link -->
        <div class="mt-0 md:mt-4 lg:">
          
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