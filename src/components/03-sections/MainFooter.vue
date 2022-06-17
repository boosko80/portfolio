<template>
  <footer
    id="contact"
    class="grid items-center grid-cols-4 mb-6 text-semilight justify-items-center"
  >
    <ul class="grid items-center grid-cols-2 gap-2 md:grid-cols-3">
      <li class="w-6">
        <a href=""><img :src="GitHub" alt="GitHub" /></a>
      </li>
      <li class="w-6">
        <a href=""><img :src="LinkedIn" alt="LinkedIn" /></a>
      </li>
    </ul>
    <a
      class="flex flex-col items-center col-span-2 hover:text-primary"
      href="https://github.com/boosko80"
    >
      <p>Built by @Boosko80</p>
    </a>
    <a class="hover:text-primary" href="#">▲</a>
  </footer>
</template>

<script setup>
import LinkedIn from "@/assets/LinkedIn.png";
import GitHub from "@/assets/GitHub.png";
</script>
