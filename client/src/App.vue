<script setup>
import Header from "./components/layouts/Header.vue";
import { RouterLink, RouterView } from "vue-router";

defineProps({
  isOpen: false,
})

</script>

<template>
  <div>
    <!-- Header Component -->
      <Header />

      <!-- Responsive Navbar  -->
      <nav class="sticky top-0 z-[100]">
      
        <!-- Navbar item  justify-between   -->
        <div class="left-0 right-0 bg-white drop-shadow-lg flex justify-between lg:flex lg:justify-center lg:items-center py-4 px-2 md:px-12 mx-auto">
      
          <!-- Navbar item first Div  -->
          <div class="lg:hidden flex lg:justify-center items-center ">
            <div class="bg-white py-4 px-2 flex flex-row ">
          
              <RouterLink to="/">
                <img src="/images/logo.png" class="w-14 md:w-24" alt="logo">
              </RouterLink>
          
              <div class="mt-2 md:mt-6">
                <h3 class="text-sm md:text-lg font-sans font-bold text-[#1d3da3]">Government Secondary School</h3>
              </div>
          
            </div>
          </div>
      
          <!-- Navbar item Second Div  -->
          <div class="hidden lg:flex space-x-2">
      
            <!-- Home item nav  -->
            <div class="font-medium py-3 px-3 font-sans text-slate-800 hover:text-white hover:rounded hover:bg-[#2f499e]">
              <RouterLink to="/">HOME</RouterLink>
            </div>

            <div class="py-3 text-gray-400">
              |
            </div>
      
            <!-- About item nav  -->
            <div class="font-medium py-3 px-3 font-sans text-slate-800 hover:text-white hover:rounded hover:bg-[#2f499e]">
              <RouterLink to="/about-us">ABOUT THE SCHOOL</RouterLink>
            </div>

            <div class="py-3 text-gray-400">
              |
            </div>

            <!-- Academics item nav  -->
            <div class="font-medium py-3 px-3 font-sans text-slate-800 hover:text-white hover:rounded hover:bg-[#2f499e]">
              <RouterLink to="/academics">ACADEMICS</RouterLink>
            </div>
            
            <div class="py-3 text-gray-400">
              |
            </div>

      
            <!-- Admission item nav  -->
            <div class="font-medium py-3 px-3 font-sans text-slate-800 hover:text-white hover:rounded hover:bg-[#2f499e]">
              <RouterLink to="/admission">ADMISSION</RouterLink>
            </div>

            <div class="py-3 text-gray-400">
              |
            </div>

            <!-- Events item nav  -->
            <div class="font-medium py-3 px-3 font-sans text-slate-800 hover:text-white hover:rounded hover:bg-[#2f499e]">
              <RouterLink to="/event">EVENTS</RouterLink>
            </div>
      

            <div class="py-3 text-gray-400">
              |
            </div>
      
            <!-- Gallery item nav  -->
            <div class="font-medium py-3 px-3 font-sans text-slate-800 hover:text-white hover:rounded hover:bg-[#2f499e]">
              <RouterLink to="/gallery">GALLERY</RouterLink>
            </div>

            <div class="py-3 text-gray-400">
              |
            </div>
      
            <!-- Contact item nav  -->
            <div class="font-medium py-3 px-3 font-sans text-slate-800 hover:text-white hover:rounded hover:bg-[#2f499e]">
              <RouterLink to="/contact-us">CONTACT US</RouterLink>
            </div>
      
          </div>
      
      
          <!-- MOBILE MENU -->
        <div class="lg:hidden" v-show="isOpen"  @click="isOpen = !isOpen">
      
            <!-- Container Div -->
           
              <div
                class="absolute z-[100] flex-col bg-white h-96 overscroll-y-contain overflow-x-scroll self-end py-8  mt-16 md:mt-28 px-8 space-y-4 font-bold sm:w-auto left-0 right-0">
        
                <!-- Member Login item nav Float Left  -->
                <div 
                  class="font-medium py-3 px-4 font-san float-right hover:text-white hover:bg-[#2f499e] text-slate-800 bg-sky-100 rounded-lg">
                  <RouterLink to="/">Member Login</RouterLink>
                </div>
        
                <!-- Home item nav  -->
                <div 
                  class="font-medium py-3 px-4 font-sans mt-36 text-slate-800 hover:underline underline-offset-8 decoration-4 decoration-sky-[#2f499e]">
                  <RouterLink to="/">HOME</RouterLink>
                </div>
        
                <!-- About item nav  -->
                <div 
                  class="font-medium py-3 px-4 font-sans text-slate-800 hover:underline underline-offset-8 decoration-4 decoration-sky[#2f499e]">
                  <RouterLink to="/about-us">ABOUT THE SCHOOL</RouterLink>
                </div>

                <!-- Academics item nav  -->
                <div 
                  class="font-medium py-3 px-4 font-sans text-slate-800 hover:underline underline-offset-8 decoration-4 decoration-sky-[#2f499e]">
                  <RouterLink to="/academics">ACADEMICS</RouterLink>
                </div>
        
                <!-- Admission item nav  -->
                <div 
                  class="font-medium py-3 px-4 font-sans text-slate-800 hover:underline underline-offset-8 decoration-4 decoration-sky-[#2f499e]">
                  <RouterLink to="/admission">ADMISSION</RouterLink>
                </div>

                <div 
                  class="font-medium py-3 px-4 font-sans text-slate-800 hover:underline underline-offset-8 decoration-4 decoration-sky-[#2f499e]">
                  <RouterLink to="/event">EVENTS</RouterLink>
                </div>
        
        
                <!-- Gallery item nav  -->
                <div 
                  class="font-medium py-3 px-4 font-sans text-slate-800 hover:underline underline-offset-8 decoration-4 decoration-sky-[#2f499e]">
                  <RouterLink to="/gallery">GALLERY</RouterLink>
                </div>
        
                <!-- Contact item nav  -->
                <div 
                  class="font-medium py-3 px-4 font-sans text-slate-800 hover:underline underline-offset-8 decoration-4 decoration-sky-[#2f499e]">
                  <RouterLink to="/contact-us">CONTACT US</RouterLink>
                </div>
        
            </div>
          </div>
          <!-- Hamburger icon -->
          <div class="lg:hidden mt-2 md:mt-4" @click="isOpen = !isOpen">
      
            <svg xmlns="http://www.w3.org/2000/svg" v-show="isOpen" class="h-12 w-12 stroke-[#2f499e]" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
      
            <svg xmlns="http://www.w3.org/2000/svg" v-show="!isOpen" class="h-12 w-12 stroke-[#2f499e]" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
      
        </div>
      </nav>

    <!-- For Viewing Router -->
    <RouterView  v-slot="{ Component }">
      <transition  mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>

    <!-- Footer Section -->
      <div>
        <footer class="mt-24">
          <!--  Footer Flex container -->
          <div class="p-6 bg-[#2f499e]">
            <div class="container">
              <h3 class="text-white font-sans font-normal text-sm md:text-lg text-justify">
                &copy; 2018 - govermentcollage Owerri | All Rights Reserved | Powered by Acrnect technology
              </h3>
            </div>
          </div>
        </footer>
      </div>

  </div>
</template>
<style>
/* Routview page transition */
  .v-enter-active,
  .v-enter-active{
    transition: 600ms ease all;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  /* Navbar transition */
    .mobile-active,
    .mobile-active {
      transition: 600ms ease all;
    }
  
    .mobile-enter-from,
    .mobile-leave-to {
      opacity: 0;
    }

    /*.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out;
  }

    .route-leave-to {
      opacity: 0;
      transform: translateX(-100px);
    }

    .route-leave-active {
        transition: all o.3s ease-in;
    }*/
</style>