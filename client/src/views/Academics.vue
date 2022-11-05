<script setup>
import VLazyImage from "v-lazy-image";
</script>
<template>
    <div class="px-4 md:px-14 bg-white py-6">
        
        <!-- First Layout Section That is A Carousel  -->
        
        

        <!-- Second Layout Section  -->
        <div class="mt-12 font-sans space-y-6">

            <p class="text-gray-600">
                Government School is committed to an academically rigorous, but student-centred learning. This learning experience
                enables students to embrace responsibility for their learning. Teachers guide and encourage students to ask constructive
                questions, listen well, and become creative problem solvers as they work towards defined goals. Teachers work as
                partners with students to achieve and share enthusiasm for learning and the pursuit of mastery. Regardless of students’
                background, PS requires all students to meet our clearly defined high expectations for academic achievement and conduct.
            </p>

            <p class="text-gray-600">
                The PS uses both the American National Common Core Standards and Nigerian National Curriculum for instructional delivery
                and assessment. The curriculum is standards-based, university-preparatory and focuses on Mathematics, English &
                Literature, Integrated Science, Social Studies & Civic Education, Computer Studies, French, Art, Music, Home Economics,
                Agricultural Studies, Business Studies, Entrepreneurship, Security Education, Igbo, Christian Religious Studies. from
                grade 7 through grade 8, and concentrates on Integrated Math; Sciences: Biology, Chemistry, Physics; History; Geography,
                Social Sciences; Languages; The Arts (visual and performing arts, music) and Information Technology from grade 9 through
                grade 12 Some parts of the curriculum are modified to suit the needs of our students within the school locality.
            </p>

            <p class="text-gray-600">
                The American SAT exam will be taken in grade 12. Students can choose to sit for the IGCSE/NECO/SSCE/WAEC and other
                accredited exams of choice. The versatile tests enable students to continue higher education in any part of the world of
                interest. PS understands that every student is unique in his/her own way and as such uses many teaching strategies to
                maximize learning. Teaching strategies reflect and cater to the different learning needs and styles of the students. To
                encourage creativity and develop a deep quest for learning, instruction is inquiry/problem-based, collaborative, and
                student-centred.
            </p>

            <h3 class="font-semibold text-xl text-gray-700">
                CURRICULUM CORE VALUES: <span class="text-base md:text-lg font-normal">Application-based Instruction, Inquiry & Discovery-based Learning, Assessment-driven
                Instruction.</span> 
            </h3>

            <div class="space-y-2 ">
               <h3 class="font-semibold text-xl text-gray-700">ASSESSMENT AND EVALUATION</h3>
               
               <p class="text-gray-600">
                Exams, weekly continuous assessments such as tests, quizzes, projects, homework, oral presentations, and lab reports are
                used to assess the progress of each student. End-of-term exams are taken three times a year in December, March, and
                June.
               </p>
            </div>

            <div class="space-y-5">
                <h3 class="font-semibold text-xl text-gray-700">COURSES</h3>
            

                <div class="space-y-2">
                    
                    <h5 class="text-lg font-medium text-gray-700">Grades 7 – 9 (JSS 1-3)</h5>
                    
                    <p class="text-gray-600">
                        <span class="font-medium text-gray-700 text-base">a) Core Subjects:</span> Math, English Language & Literature, Basic Science & Technology, Social studies.
                    </p>
                
                    <p class="text-gray-600">
                        <span class="font-medium text-gray-700 text-base">b) Foundation Subjects:</span> Igbo, French, Music, Art, Health/Physical Education, Home Economics,Computer studies, Religious
                        studies, Agricultural Science, Business Studies and Civic Education.
                    </p>
                
                    <p class="text-gray-600">
                        <span class="font-medium text-gray-700 text-base">c) Trade Subjects:</span> Entrepreneurship Education and Security Education.
                    </p>
                </div>

                <div class="space-y-2">
                    <h5 class="text-lg font-medium text-gray-700">Grades 10 – 12 (SSS 1 – SSS 3)</h5>
                    
                    <p class="text-gray-600">
                        <span class="font-medium text-gray-700 text-base">Subjects offered:</span> Maths, English & Literature, History, Government, Biology, Chemistry, Physics, Further Mathematics, Visual Arts, Data
                        Processing, Civic Education, Technical Drawing, Accounting, Geography, Leadership and Ethics, Information Technology,
                        Economics, French, Food and Nutrition, Christian Religious Studies, Agricultural Studies.
                    </p>
                    
                </div>
            </div>
        </div>


    </div>
</template>
<style scoped>
/** IMAGE */
.v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
}

.v-lazy-image-loaded {
    filter: blur(0);
}

/** Carousel */
.carousel-open:checked+.carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

#carousel-1:checked~.control-1,
#carousel-2:checked~.control-2,
#carousel-3:checked~.control-3 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

#carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #2b6cb0;
    /*Set to match the Tailwind colour you want the active one to be */
}
</style>