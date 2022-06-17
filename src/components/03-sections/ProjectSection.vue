<template>
  <section
    className="relative flex flex-col justify-center min-h-screen mx-auto md:text-lg max-w-screen-sm lg:max-w-screen-md px-4"
  >
    <h2
      id="projects"
      class="flex items-baseline pr-8 mb-8 text-xl font-bold md:pr-0 text-primary before:h-[140px] md:before:h-[25vh]"
    >
      Projets réalisés
      <span
        class="flex-grow h-px ml-4 bg-gradient-to-r from-primary to-secondary"
      />
    </h2>
    <project-list />
  </section>
</template>

<script setup>
import ProjectList from "../02-molecules/ProjectList.vue";
</script>
