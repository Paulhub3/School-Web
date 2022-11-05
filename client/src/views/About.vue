<script setup>
import VLazyImage from "v-lazy-image";
</script>
<template>
    <div class="bg-gray-400">
        
        <!-- Main Content Div -->
        <div class=" flex flex-col bg-white justify-center items-center px-4 lg:px-14">

            <!-- About First Layout Section -->
            <div class="border-4  border-gray-300 rounded-md py-6 px-4 mt-6 shadow-lg w-11/12">
            
                <div class="flex space-x-4">
                
                    <!-- Svg icon -->
                    <div class="mt-2">
                        <button class="rounded-full border-2 border-gray-300 bo py-4 px-4">
                            <svg class="h-10 w-10 fill-gray-500" viewBox="0 0 512 512" height="50" width="50" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99zm384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01zM176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16zm48 256h64V128h-64v160z">
                                </path>
                            </svg>
                        </button>
                    </div>
                
                    <!-- Div of Text and Paragraph --->
                    <div class="space-y-1">

                        <h1 class="text-2xl text-justify font-bold text-blue-700">Vision</h1>
                        
                        <p class="text-sm md:text-lg md:text-justify font-sans text-gray-500">
                            The vision of Government collage School is to nurture a community of learners whose intellectual growth and character will
                            prepare them for principled lives of leadership and social service.
                        </p>
                    </div>
                </div>
                
            
            </div>

            <!-- About Second Layout Section with two div's -->
            <div class="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-7 mt-24 w-11/12 shadow-lg">

                <!-- First Div Of Text And paragraph -->
                <div class="space-y-4 py-6">
                    <h2 class="text-2xl text-gray-700 font-sans font-medium text-justify">MISSION</h2>

                    <p class="text-gray-600 font-sans text-justify">
                        The government collage School is a grade 7-12 co-educational boarding school. PS aims to develop learners, who through
                        self-discovery, inquiry and collaborative learning will develop visions for academic and social success. The school
                        challenges its students to develop their particular
                        analytic and creative capabilities by both inspiring their academic and moral curiosity and kindling their passion for
                        discovery. We encourage each person to explore his or her place in the larger world beyond our campus. With highly
                        qualified and supportive staff, students will
                        be guided towards critical and collaborative learning. The structured, yet friendly environment will nurture student
                        character while encouraging them to develop understanding and respect for community values and cultures.
                    </p>
                </div>
              

                <!-- Second Div Of Image -->
                <div class="md:mt-36 lg:mt-0">
                    <v-lazy-image src="/images/chmistarylab.jpg" alt="" class="w-full h-95" />
                </div>

            </div>


            <!-- About Third Layout Section with two div's -->
            <div class="grid grid-cols-1 gap-7 md:grid md:grid-cols-2 md:gap-7 mt-24 w-11/12 shadow-lg">

                <!-- First Div Of Image -->
                <div class="md:mt-36 lg:mt-0">
                    <v-lazy-image src="/images/chmistarylab.jpg" alt="" class="w-full h-95" />
                </div>
            
                <!-- Second Div Of Text And paragraph -->
                <div class="space-y-4 py-6">
                    <h2 class="text-2xl text-gray-700 font-sans font-medium text-justify">HISTORY</h2>
            
                    <p class="text-gray-600 font-sans text-justify">
                        Government School is a close-knit educational community where children are received from their ages of innocence,
                        treated with great love, respect and nurtured into young men and women of intellect, character and integrity. PS
                        understands that the search for quality education has remained a great concern for our parents. Our parents are taking
                        the extra mile to provide their children with an education that is rich in value and quality. Hence the need to have an
                        educational institution that has the physical and human resources to provide standard and values-based education in a
                        highly conducive learning environment is the focus of Government School. Government School embodies all the tenets of an
                        international model school. It is situated at Government Avenue, Avu- Owerri West L.G.A., Imo State, Nigeria, in a very
                        conducive environment for learning, free from all the bustle of a city. The school is open to indigenous and
                        international students. Government School was officially introduced to Imo State with a groundbreaking ceremony held on
                        February 23rd, 2012. Since then a lot of human and physical resources have gone into making its Grand Opening for
                        September 2014, a reality.ing and respect for community values and cultures.
                    </p>
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