<template>
  <a
    :href="path"
    class="text-xl"
    :class="{
      'border-2 border-primary rounded px-6 py-4 w-auto text-2xl': button,
    }"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  path: String,
  button: {
    type: Boolean,
    default: false,
  },
});

const { path } = toRefs(props);
console.log(props);
</script>
