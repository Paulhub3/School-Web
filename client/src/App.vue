<script setup>
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <!-- Navbar Component -->
    <header>
      <Navbar />
    </header>

    <!-- For Viewing Router -->
    <RouterView />

    <!-- Footer Component -->
    <div>
      <Footer />
    </div>
  </div>
</template>
