<template>
  <section
    class="relative flex flex-col items-center justify-center h-screen mx-auto text-center md:container md:text-left"
  >
    <h1 class="justify-start text-3xl whitespace-pre-line md:text-5xl">
      Bien le bonjour ! Je suis
      <strong
        class="block text-5xl text-opacity-0 h-14 md:h-[7rem] md:text-8xl text-light bg-gradient-to-r from-primary to-secondary bg-clip-text"
      >
        Wesley Boosko
      </strong>
      Développeur Web Fullstack
    </h1>
    <navigation-link path="#about" button class="mt-12">
      En savoir plus
    </navigation-link>
  </section>
</template>

<script setup>
import NavigationLink from "../01-atoms/NavigationLink.vue";
</script>
