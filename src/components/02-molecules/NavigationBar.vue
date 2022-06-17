<template>
  <input class="hidden" type="checkbox" id="cheese" @click="toggleMenuBar()" />
  <label
    class="relative z-20 flex items-center justify-center w-12 h-12 md:hidden"
    for="cheese"
  >
    <span :class="{ opened: checked }" class="burger"></span>
  </label>
  <nav :class="{ show: checked }" @click="untoggleMenuBar()">
    <navigation-link
      class="my-8"
      v-for="link in links"
      :key="link.path"
      :path="link.path"
    >
      {{ link.name }}
    </navigation-link>
  </nav>
</template>

<script setup>
import NavigationLink from "@/components/01-atoms/NavigationLink.vue";
import { ref } from "vue";

const links = [
  {
    path: "#",
    name: "Accueil",
  },
  {
    path: "#about",
    name: "A propos",
  },
  {
    path: "#projects",
    name: "Projets",
  },
  {
    path: "#contact",
    name: "Contact",
  },
];

let checked = ref(false);

const untoggleMenuBar = () => {
  checked.value = false;
};

const toggleMenuBar = () => {
  checked.value = !checked.value;
};
</script>

<style scoped>
nav {
  @apply duration-300 ease-in-out origin-right translate-x-full;
  @apply absolute gap-4 inset-0 flex flex-col justify-center items-center w-1/2 h-screen border-l-2 left-1/2 bg-semidark;
  @apply md:grid md:items-center md:grid-cols-4 md:justify-items-center md:translate-x-0 md:bg-opacity-0 md:border-0 md:inset-auto md:h-auto md:gap-0;
}

.show {
  @apply translate-x-0;
}

.burger,
.burger::before,
.burger::after {
  @apply absolute content-[""] h-1 w-8 my-1 rounded-full bg-light duration-300 ease-in-out transition origin-right;
}

.burger {
  @apply before:bg-secondary before:top-2 after:bg-primary after:bottom-2;
}

.opened {
  @apply before:rotate-45 after:-rotate-45;
  @apply bg-semidark;
}
</style>
