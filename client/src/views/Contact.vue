<template>
    <div>
        <!-- Layout Section Div Wrapper-->
        <div class="px-4 md:px-16 bg-white py-6">

        <div
            class="mt-12 grid grid-cols-1 gap-6 px-6 lg:flex lg:space-x-5 lg:justify-center lg:items-center md:px-14 shadow-lg py-6">

            <!-- FLEX WITH TWO DIV'S -->
            <div class="flex flex-col mt-12 lg:mt-0">
        
                <!-- FIRST DIV WITH TEXT AND PARAGRAPH -->
                <div class="space-y-5">
                    <h1 class="text-xl md:text-3xl font-bold text-blue-700">Contact Details</h1>
        
                    <p class="text-sm md:text-base font-medium font-sans text-gray-700 md:text-gray-500">
                        Feel free to send us a message, including your details. We will be sure to respond to your
                        message within 48 Hours.
                    </p>

                    <p class="text-base md:text-xl font-medium font-sans md:text-gray-700">
                        Secondary School
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

            <!-- Form Div -->
            <div class="bg-white w-full md:w-8/12 py-6 px-6 rounded-md border-2 border-solid border-gray-400">

                <!-- Text Heading -->
                <h2 class="text-lg md:text-2xl font-medium font-sans mb-5 py-5 text-gray-700 border-b border-b-solid border-b-gray-700">Feel free to write us</h2>

                <form>
            
                    <div class="mb-8">
                        <input type="text" name="firstname" id="" placeholder="First Name"
                            class="border-b-2 border-gray-500 py-3 placeholder:text-gray-600 placeholder:text-base px-3 w-full md:w-11/12 rounded focus:outline-none focus:border-blue-700 focus:ring-sky-500 block sm:text-sm focus:ring-0">
                    </div>
            
                    <div class="mb-8">
                        <input type="text" name="lastname" id="" placeholder="Last Name"
                            class="border-b-2 border-gray-500 py-3 placeholder:text-gray-600 placeholder:text-base px-3 w-full md:w-11/12 rounded focus:outline-none focus:border-blue-700 focus:ring-sky-500 block sm:text-sm focus:ring-0">
                    </div>
            
                    <div class="mb-8">
                        <input type="email" name="email" id="" placeholder="Email"
                            class="border-b-2 border-gray-500 py-3 placeholder:text-gray-600 placeholder:text-base px-3 w-full md:w-11/12 rounded focus:outline-none focus:border-blue-700 focus:ring-sky-500 block sm:text-sm focus:ring-0">
                    </div>
            
                    <div class="mb-8">
                        <textarea name="massage" id="" placeholder="Message"
                            class="border-b-2 border-gray-500 py-3 placeholder:text-gray-600 placeholder:text-base px-3 w-full md:w-11/12 rounded focus:outline-none focus:border-blue-700 focus:ring-sky-500 block sm:text-sm focus:ring-0"
                            cols="20" rows="4"></textarea>
                    </div>
            
                    <div class="flex justify-center">
                        <button type="submit" class="py-2 w-28 px-3 border-2 text-white font-sans bg-[#0f2a5e] rounded">
                            Send
                        </button>
                    </div>
            
                </form>
            </div>
        </div>
        </div>
    </div>
</template>