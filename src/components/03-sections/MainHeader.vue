<template>
  <header
    class="fixed z-10 flex justify-between items-center md:grid w-full p-5 bg-opacity-50 md:grid-cols-3 justify-items-center backdrop-blur-lg bg-dark h-[90px] md:h-[138px]"
  >
    <main-logo />
    <navigation-bar />
  </header>
</template>

<script setup>
import MainLogo from "@/components/01-atoms/MainLogo.vue";
import NavigationBar from "../02-molecules/NavigationBar.vue";
</script>
