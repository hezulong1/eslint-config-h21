<template>
  <!-- ✓ GOOD -->
  <transition><div v-if="show" /></transition>
  <transition><div v-show="show" /></transition>

  <!-- ✗ BAD -->
  <transition><div /></transition>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>