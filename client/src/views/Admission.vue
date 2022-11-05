<script setup>
import VLazyImage from "v-lazy-image";
</script>
<template>
    <div>
        
        <!-- First Layout Section   -->
        <div class="bg-gray-600 z-30  w-full h-96 bg-cover bg-center relative">
        
            <v-lazy-image src="/images/library.jpg" alt="bg"
                class="w-full h-96 bg-no-repeat object-cover absolute mix-blend-overlay" />
        
            <div class=" z-40 grid mx-auto md:container  p-6 py-24  grid-cols-1 gap-4 mb-6">
        
                <!--  ABOUT TEXT -->
                <div class="z-40  mt-14 lg:mt-9">
                    <h1 class="text-5xl lg:text-6xl font-medium text-white font-serif mb-6">Admission</h1>
                    
                    <div class="bg-sky-600 py-1 w-32"></div>
                </div>
        
            </div>
        </div>

        <!-- Other Layout Section Div Wrapper-->
        <div class="px-6 md:px-16 bg-white py-6">

            <!-- Second Layout Section -->
            <div class="space-y-4 mt-6">

                <!-- Heading Text -->
                <h1 class="text-xl font-medium text-gray-700">ADMISSION PROCESS</h1>

                <!-- Paragraph -->
                <p class="text-gray-600 font-sans">
                    Thank you for your interest in Government School. To be considered for admission, all parts of the application process
                    must be completed by the due dates. Check <span class="italic">“Applying to Government”</span> tab for exam dates and obtaining forms.
                </p>
            </div>

            <!-- Third Layout Section -->
            <div class="mt-12 px-4 space-y-5">

                <!-- Heading Text -->
                <h1 class="text-3xl font-medium text-gray-700">How To Apply</h1>

                <!-- Un Order List Grid Div -->
                <ul class="list-decimal grid grid-cols-1 gap-6  md:grid md:grid-cols-2 md:gap-8">
                    
                    <!-- List Grid Box One(1) -->
                    <li class="text-gray-600 font-sans">
                    <span class="font-medium text-gray-700 text-lg">Inquiry</span> – Kindly email us or call us to request more information about our school and programs. We will send you a
                        brochure, with full information about Government collage School.
                    </li>

                    <!-- List Grid Box two(12 -->
                    <li class="text-gray-600 font-sans">
                        <span class="font-medium text-gray-700 text-lg">Exam</span> – Prospective students will be required to take an examination in order to gauge their understanding and their potential
                        for success at Government collage. Exam dates will be provided once they are scheduled.
                    </li>

                    <!-- List Grid Box Three(3) -->
                    <li class="text-gray-600 font-sans">
                        <span class="font-medium text-gray-700 text-lg">Interview</span> – All prospective students and parents will be invited for an interview with our admissions staff. This is a low-pressure
                        conversation focused on understanding the student’s strengths and weaknesses, and learning more about how they will be
                        successful and thrive at Government collage.
                    </li>

                    <!-- List Grid Box Four(4) -->
                    <li class="text-gray-600 font-sans">
                        <span class="font-medium text-gray-700 text-lg">Admission</span> – Once all requirements are met, parents will be contacted with a full information packet, where they will be notified
                        about the next steps for their child.
                    </li>

                </ul>

            </div>

            <!-- Fourth Layout Section -->
            <div class="mt-12 space-y-3">

                <!-- Heading Text -->
                <h1 class="text-red-600 font-medium text-lg md:text-2xl">
                    Please contact us on the telephone numbers or email addresses listed below to schedule an appointment.
                </h1>

                <!-- Information Div -->
                <div class="border border-solid border-gray-400 space-y-4 px-6 py-6 font-medium text-base text-gray-600 font-sans">

                    <p>
                        <span class="text-gray-700 text-lg md:text-2xl">Address</span>:  <span class="ml-4">F2Q9+J3J, New Owerri 460281, Owerri, Nigeria</span>
                    </p>
                    
                    <p>
                        <span class="text-gray-700 text-lg md:text-2xl">Email</span>:  <span class="ml-4">govermentcollage@gmail.com</span>
                    </p>
                    
                    <p>
                        <span class="text-gray-700 text-lg md:text-2xl">Phone Number</span>:  <span class="ml-4">+234 816 346 5451</span>
                    </p>
                    
                </div>

                <!-- Form Download Div -->
                <button class="font-medium py-3 drop-shadow-lg shadow-lg  px-4 font-san mb-4 border-b-4 border-[#455eb1]   hover:bg-[#455eb1] hover:border-[#1435a3] text-white bg-[#1d3da3]">
                    <RouterLink to="">Download Application Form for Admission</RouterLink>
                </button>
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