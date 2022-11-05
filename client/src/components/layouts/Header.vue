<template>
<div>
    <!-- Header Nav -->
    <header>

        <nav>
            <!-- Header Container Div With Flex Justify Between and Two(2) Div's-->
            <div class="flex flex-col md:flex md:flex-row md:justify-between drop-shadow-lg py-2 px-4 bg-[#1d3da3]">

                <!-- Flex Div One(1) with Three(3) Div's-->
                <div class="flex flex-col space-y-4  md:flex md:flex-row md:space-y-0 md:space-x-2 text-xs lg:text-sm font-medium">

                    <!-- Div One(1) With Flex For icon and phone number -->
                    <div class="flex">

                        <!-- Span for Phone number Svg icon -->
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 512 512">
                                <path
                                    d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                            </svg>
                        </span>

                        <!-- Phone number -->
                        <h3 class="text-white px-2 cursor-pointer hover:underline">
                            +234 816 346 5451
                        </h3>
                    </div>

                    <!-- Div Two(2) With Flex For icon and Email Address -->
                    <div class="flex">

                        <!-- Span for Email Svg icon -->
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 512 512">
                                <path
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                        </span>

                        <!-- Email Address-->
                        <h3 class="text-white px-2 cursor-pointer hover:underline">
                            govermentcollage@gmail.com
                        </h3>
                    </div>

                    <!-- Div Three(3) With Flex For icon and Address -->
                    <div class="flex">

                        <!-- Span for Address Svg icon -->
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 384 512">
                                <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                            </svg>
                        </span>

                        <!-- Address-->
                        <h3 class="text-white px-2 cursor-pointer hover:underline">
                            F2Q9+J3J, New Owerri 460281, Owerri, Nigeria
                        </h3>
                    </div>

                </div>

                <!--Flex Div Two(2)  -->
                <div class="flex mt-4 md:mt-0">

                    <!-- Flex Div Two(2) With Flex For icon and Member Login -->
                    <div class="flex">

                        <!-- Span for Address Svg icon -->
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 448 512">
                                <path
                                    d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                            </svg>
                        </span>

                        <!-- Member Login -->
                        <h3 class="text-white text-xs lg:text-sm px-2 cursor-pointer hover:underline font-medium">
                            Member Login
                        </h3>
                    </div>
                </div>

            </div>
        </nav>
    </header>

    <div>
        <div class="hidden lg:flex lg:justify-center lg:items-center lg:border-b">
            <nav class="bg-white py-4 px-3 flex flex-row space-x-2">
            
                <RouterLink to="/">
                    <img src="/images/logo.png" class="w-32" alt="logo">
                </RouterLink>
            
                <div class="mt-10">
                    <h3 class="text-3xl font-sans font-bold text-[#1d3da3]">Government Secondary School</h3>
                </div>
            
            </nav>
        </div>
    </div>

  
</div>
</template>
