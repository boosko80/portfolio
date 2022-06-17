<template>
  <li class="list-none">
    <h3 class="my-2 text-center">{{ data.title }}</h3>
    <a v-if="data.url" :href="data.url">
      <img
        class="transition-all rounded hover:scale-105"
        :src="data.imagePath"
      />
    </a>
    <img
      v-else
      class="transition-all rounded hover:scale-105"
      :src="data.imagePath"
    />
  </li>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  data: {
    title: {
      type: String,
      default: "Default Title",
    },
    imagePath: String,
    url: {
      type: String,
      default: "",
    },
  },
});

const { data } = toRefs(props);
console.log(props);
</script>
