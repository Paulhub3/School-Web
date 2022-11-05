<template>
    <div>

        <!--  LAYOUT SECTION  WITH MAP AND INFORMATION DIV-->
        <div
            class="mt-12 grid grid-cols-1 gap-6 px-6 lg:flex lg:space-x-5 lg:justify-center lg:items-center md:px-14 shadow-lg">
        
            <!-- MAP DIV-->
            <div data-aos="zoom-in-up" data-aos-duration="2000" class="mapouter">
                <div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Government%20Secondary%20School%20Owerri&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                        href="https://123movies-to.org"></a><br>
                    <a href="https://www.embedgooglemap.net"></a>
        
                </div>
            </div>
        
            <!-- INFORMATION DIV  WITH FLEX AND TWO DIV'S -->
            <div data-aos="zoom-out-up" data-aos-duration="2000" class="flex flex-col mt-12 lg:mt-0">
        
                <!-- FIRST DIV WITH TEXT AND PARAGRAPH -->
                <div class="space-y-5">
                    <h1 class="text-xl md:text-3xl font-bold text-blue-700">Information About Us</h1>
        
                    <p class="text-sm md:text-base font-medium font-sans text-gray-700 md:text-gray-500">
                        Pearlville's vision is to nurture a community of learners whose intellectual growth and character will
                        prepare them
                        for
                        principled lives of leadership and social service.
                    </p>
                </div>
        
                <!-- SECOND DIV With Three(3) Div -->
                <div class="flex flex-col space-y-9 py-4 mt-6">
        
                    <!-- First div -->
                    <div class="flex space-x-4">
        
                        <!-- Svg icon -->
                        <div class="mt-2">
                            <button class="rounded-full bg-blue-900 py-2 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white" viewBox="0 0 384 512">
                                    <path
                                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                                </svg>
                            </button>
                        </div>
        
                        <!-- Div of Text and Paragraph --->
                        <div class="space-y-1">
                            <h1 class="text-xl font-bold text-blue-700">Location</h1>
                            <p class="text-base font-sans text-gray-500">F2Q9+J3J, New Owerri 460281, Owerri, Nigeria</p>
                        </div>
                    </div>
        
                    <!-- Second div -->
                    <div class="flex space-x-4">
        
                        <!-- Svg icon -->
                        <div class="mt-2">
                            <button class="rounded-full bg-blue-900 py-2 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white" viewBox="0 0 384 512">
                                    <path
                                        d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z" />
                                </svg>
                            </button>
                        </div>
        
                        <!-- Div of Text and Paragraph --->
                        <div class="space-y-1">
                            <h1 class="text-xl font-bold text-blue-700">Mobile</h1>
                            <p class="text-base font-sans text-gray-500">+234 816 346 5451</p>
                        </div>
                    </div>
        
                    <!-- Third div -->
                    <div class="flex space-x-4">
        
                        <!-- Svg icon -->
                        <div class="mt-2">
                            <button class="rounded-full bg-blue-900 py-2 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white" viewBox="0 0 512 512">
                                    <path
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                            </button>
                        </div>
        
                        <!-- Div of Text and Paragraph --->
                        <div class="space-y-1">
                            <h1 class="text-xl font-bold text-blue-700">Email</h1>
                            <p class="text-base font-sans text-gray-500">govermentcollage@gmail.com</p>
                        </div>
                    </div>
        
                </div>
        
            </div>
        </div>


    </div>
</template>
<style scoped>
/** MAP */
.mapouter {
    position: relative;
    text-align: right;
    height: 450px;
    width: 600px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 450px;
    width: 600px;
}
</style>