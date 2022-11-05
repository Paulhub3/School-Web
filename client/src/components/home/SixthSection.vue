<script setup>
import VLazyImage from "v-lazy-image";
</script>
<template>
    <div class="mt-12 flex flex-col justify-center items-center bg-slate-50 py-6">

        <h1 class="text-3xl font-serif font-bold text-[#1d3da3]">Our Facilities</h1>

        <div>

            <!-- Grid Columns -->
            <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="grid grid-cols-1 gap-6 md:grid md:grid-cols-3 md:gap-8 mt-12 px-6 lg:px-14">

                <!-- First Grid Box With Two div -->
                <div class="grid grid-cols-1 gap-4 bg-white shadow-lg rounded">

                    <!-- IMAGE DIV -->
                    <div class="bg-cover bg-center relative h-72 block bg-gray-900 group">

                        <v-lazy-image src="/images/library.jpg" alt="" class="absolute inset-0 group-hover:opacity-50 w-full h-72 overflow-hidden bg-no-repeat object-cover" />
        
                    </div>

                    <!-- TEXT AND PARAGRAPH DIV -->
                    <div class="px-9 py-6 space-y-8">

                        <h1 class="text-xl text-center lg:text-justify font-sans font-bold text-gray-800">School Library</h1>

                        <p class="text-gray-700 text-base text-center lg:text-justify">
                            The school library houses over 15,000 books in different titles and formats, with our E-library that contributes to the
                            enhanced student learning by providing innovative programs and services which support teaching and learning in the
                            school.
                        </p>
                    </div>
                </div>


                <!-- SECOND Grid Box With Two div -->
                <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="2000" class="grid grid-cols-1 gap-4 bg-white shadow-lg rounded">
                
                    <!-- IMAGE DIV -->
                    <div class="bg-cover bg-center relative h-72 block bg-gray-900 group">
                    
                        <v-lazy-image src="/images/chmistarylab.jpg" alt=""
                            class="absolute inset-0 group-hover:opacity-50 w-full h-72 overflow-hidden bg-no-repeat object-cover" />
                    
                    </div>
                
                    <!-- TEXT AND PARAGRAPH DIV -->
                    <div class="px-9 py-6 space-y-8">
                
                        <h1 class="text-xl text-center lg:text-justify font-sans font-bold text-gray-800">Science Laboratory</h1>
                
                        <p class="text-gray-700 text-base text-center lg:text-justify">
                            Our facilities are second to none as we have taken time to carefully provide standard Science and Technology
                            Laboratories. We create learning experiences through the use of technology that will give our students an advantage in
                            today’s competitive world.
                        </p>
                    </div>
                </div>

                <!-- THIRD Grid Box With Two div -->
                <div  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="grid grid-cols-1 gap-4 bg-white shadow-lg rounded">

                    <div class="bg-cover bg-center relative h-72 block bg-gray-900 group">
                    
                        <v-lazy-image src="/images/computer Lab.png" alt=""
                            class="absolute inset-0 group-hover:opacity-50 w-full h-72 overflow-hidden bg-no-repeat object-cover" />
                    
                    </div>
                
                    <!-- TEXT AND PARAGRAPH DIV -->
                    <div class="px-9 py-6 space-y-8">
                
                        <h1 class="text-xl text-center lg:text-justify font-sans font-bold text-gray-800">Our multi-sport complex</h1>
                
                        <p class="text-gray-700 text-base text-center lg:text-justify">
                            Our multi-sport complex accommodates major sports games such as soccer, basketball, volleyball, lawn tennis, badminton
                            e.t.c with other track and field events.
                        </p>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
</template>
<style scoped>
.v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
}

.v-lazy-image-loaded {
    filter: blur(0);
}
</style>