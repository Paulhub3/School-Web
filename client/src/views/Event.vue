<script setup>
import VLazyImage from "v-lazy-image";
</script>
<template>
    <div>
        <div class="px-6 md:px-16 bg-white py-6">

            <!-- First Layout Section   -->
            <div>
                <h1 class="text-3xl font-medium text-gray-800">Latest Past Events</h1>

                <div class="grid grid-cols-1 gap-7 mt-14">

                    <div class="grid grid-cols-1 gap-6 lg:grid lg:grid-cols-3 lg:gap-6 font-sans text-gray-700">
                        
                        <!-- Grid Box 1 -->
                        <div class="lg:w-3">
                            <h3 class="text-right lg:text-justify font-medium text-base">JUN 18 2022</h3>
                        </div>
                      
                        <!-- Grid Box 2 -->
                        <div class="space-y-4">

                            <h3 class="text-base font-medium">June 18 @ 10:59 am</h3>

                            <h1 class="text-2xl font-medium text-center lg:text-justify">Science Exhibition</h1>
                            <h5>
                                <span class="font-medium text-lg">Sports Centre</span> Government School Secondary Airport Road, Igwuruta Rivers State, Igwuruta
                            </h5>

                            <p>
                                The main purpose behind this exhibition is to provide a scientific platform for the pupils to showcase their inner
                                talents.
                            </p>
                        </div>

                        <!-- Grid Box 3 -->
                        <div>
                            <v-lazy-image src="/images/library.jpg" alt="" />
                        </div>
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