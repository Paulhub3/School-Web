<script setup>
import VLazyImage from "v-lazy-image";
</script>
<template>
    <div>
        <!-- Layout Section Div Wrapper-->
        <div class="px-6 md:px-16 bg-white py-6">

            <!-- First Layout Section -->
            <div class="text-center mt-12 space-y-3">
                <h3 class="text-gray-600 font-medium font-mono italic">LATEST HAPPENINGS IN OUR SCHOOL</h3>
                
                <h1 class="text-gray-800 font-medium text-4xl font-serif">Our Gallery</h1>

                <div class="bg-sky-600 py-1 w-28 mx-auto"></div>
            </div>

            <!-- Second Layout Section -->
            <div class="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-4 mt-8 shadow-lg">

                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image  src="/images/sport1.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>

                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image   src="/images/classroom2.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>

                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image   src="/images/schoolbus2.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>

                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image  src="/images/classroom1.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>
                
                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image  src="/images/sport1.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>
                
                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image  src="/images/princpal.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>
                
                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image  src="/images/sport3.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>
                
                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image  src="/images/envronment.jpg" alt="" class="w-96 h-72 object-contain" />
                </div>
                
                <div class="shadow-lg drop-shadow-lg">
                    <v-lazy-image  src="/images/library2.jpg" alt="" class="w-96 h-72 object-contain" />
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