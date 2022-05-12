
<template>
  <NavBar />
  <div class="container is-max-desktop px-4 py-4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
// Imports 
import NavBar from '@/components/Layout/NavBar.vue';


</script>

<style>
@import "bulma/css/bulma.min.css"
</style>
