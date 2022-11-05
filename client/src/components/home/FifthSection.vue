<template>
    <div class="mt-12 flex flex-col justify-center items-center bg-slate-50 py-6">

        <!-- TEXT AND PARAGRAPH -->
        <h6 class="text-xl font-sans font-semibold text-sky-500">About Us</h6>
        <h1 class="text-3xl font-serif font-bold text-[#1d3da3]">Why Choose Us</h1>

        <div class="">

            <!-- Grid Columns -->
            <div class="grid grid-cols-1 gap-6 md:grid md:grid-cols-2 md:gap-8 mt-12 px-6 md:px-14">

                <!-- First Grid Box With Two div -->
                <div data-aos="flip-right" data-aos-duration="2000" class="flex space-x-5 px-4 py-6 shadow-lg drop-shadow-lg hover:shadow-red-700 cursor-pointer rounded">

                    <!-- SVG ICON -->
                    <div class="mx-auto mt-6">
                       <button class="rounded-full  bg-red-600 py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-16 md:w-16 fill-white" viewBox="0 0 640 512">
                                <path
                                    d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                            </svg>
                       </button>
                    </div>

                    <!-- Paragraph text -->
                    <div class="space-y-4">
                        <h1 class="font-medium font-sans text-xl md:text-3xl text-red-500">Value-Based Education</h1>
                        
                        <p class="text-gray-700 text-sm md:text-base">
                            We provide standards-based hybrid curriculum, application and discovery-based instructional practices, well-equipped
                            classrooms, library, ICT labs, 7 science labs, music/art studios and highly qualified teachers.
                        </p>
                    </div>
                </div>

                <!-- Second Grid Box With Two div -->
                <div data-aos="flip-left" data-aos-duration="2000" class="flex space-x-5 px-4 py-6 shadow-lg drop-shadow-lg hover:shadow-yellow-700 cursor-pointer rounded">
                
                    <!-- SVG ICON -->
                    <div class="mx-auto mt-6">
                        <button class="rounded-full  bg-yellow-600 py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-16 md:w-16 fill-white" viewBox="0 0 512 512">
                                <path
                                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
                            </svg>
                        </button>
                    </div>
                
                    <!-- Paragraph text -->
                    <div class="space-y-4">
                        <h1 class="font-medium font-sans text-xl md:text-3xl text-yellow-600">Holistic Learning</h1>
                
                        <p class="text-gray-700 text-sm md:text-base">
                            Learning experiences that address non-academic needs. International exchange programs, mentorship and leadership
                            programs, sports, diverse cultural immersion, community service, religion and career prep programs.
                        </p>
                    </div>
                </div>

                <!-- Third Grid Box With Two div -->
                <div  data-aos="flip-down" data-aos-duration="2000" class="flex space-x-5 px-4 py-6 shadow-lg drop-shadow-lg hover:shadow-blue-700 cursor-pointer rounded">
                
                    <!-- SVG ICON -->
                    <div class="mx-auto mt-6">    
                        <button class="rounded-full  bg-blue-600 py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-16 md:w-16 fill-white" viewBox="0 0 640 512">
                                <path
                                    d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                            </svg>
                        </button>
                    </div>
                
                    <!-- Paragraph text -->
                    <div class="space-y-4">
                        <h1 class="font-medium font-sans text-xl md:text-3xl text-blue-900">Student-Centered Learning</h1>
                
                        <p class="text-gray-700 text-sm md:text-base">
                            Small sized classrooms with collaborative, interactive, discovery and empowering based learning.
                        </p>
                    </div>
                </div>


                <!-- Fourth Grid Box With Two div -->
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="flex space-x-5 px-4 py-6 shadow-lg drop-shadow-lg hover:shadow-green-700 cursor-pointer rounded">
                
                    <!-- SVG ICON -->
                    <div class="mx-auto mt-6">
                        <button class="rounded-full  bg-green-600 py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-16 md:w-16 fill-white" viewBox="0 0 640 512">
                                <path
                                    d="M360 72c0-22.1-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40zM144 208c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM496 208c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40zM200 313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 217.5V272c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V217.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H486.2c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3H310.2c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6H134.2c-32.4 0-62.1 17.8-77.5 46.3L18.9 340.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5z" />
                            </svg>
                        </button>  
                    </div>
                
                    <!-- Paragraph text -->
                    <div class="space-y-4">
                        <h1 class="font-medium font-sans text-xl md:text-3xl text-green-900">Conducive Learning Environment</h1>
                
                        <p class="text-gray-700 text-sm md:text-base">
                            All learning and living spaces are well-equipped, secured, family-friendly and nurturing.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>