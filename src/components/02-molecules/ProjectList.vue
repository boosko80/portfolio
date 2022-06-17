<template>
  <ul class="grid gap-4 md:grid-cols-2 justify-items-center">
    <project-item
      v-for="project in projects"
      :key="project.title"
      :data="project"
    />
  </ul>
</template>

<script setup>
import { getRandomImage } from "@/utils/utils";
import ProjectItem from "../02-molecules/ProjectItem.vue";

const projects = [
  {
    title: "Titre 1",
    imagePath: getRandomImage(),
    url: "#.",
  },
  {
    title: "Titre 2",
    imagePath: getRandomImage(),
    url: "#.",
  },
  {
    title: "Titre 3",
    imagePath: getRandomImage(),
    url: "#.",
  },
  {
    title: "Titre 4",
    imagePath: getRandomImage(),
    url: "#.",
  },
  {
    title: "Titre 5",
    imagePath: getRandomImage(),
    url: "#.",
  },
];
</script>
