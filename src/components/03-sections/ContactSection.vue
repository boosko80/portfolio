<template>
  <section
    className="relative flex flex-col justify-center min-h-screen mx-auto container md:text-lg pl-4 pr-12 md:pr-4 max-w-screen-sm lg:max-w-screen-md"
  >
    <h2 class="flex items-baseline mb-8 text-xl font-bold text-primary">
      Contact
      <span
        class="flex-grow h-px ml-4 bg-gradient-to-r from-primary to-secondary"
      />
    </h2>
    <p class="">
      Je suis toujours à l'écoute pour des opportunités, des idées ou si vous
      voulez jouer ! N'hésitez pas à m'envoyer un petit mail, j'essayerai d'y
      répondre dès que possible.
    </p>
    <navigation-link
      class="mx-auto mt-12"
      button
      path="mailto:wesley.boosko@gmail.com"
    >
      Envoyer un mail
    </navigation-link>
  </section>
</template>

<script setup>
import NavigationLink from "../01-atoms/NavigationLink.vue";
</script>
