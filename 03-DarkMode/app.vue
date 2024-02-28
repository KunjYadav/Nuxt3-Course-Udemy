<template>
  <div :style="isDarkMode ? { backgroundColor: 'black' } : null">
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<script setup lang="ts">
const { isDarkMode } = useDarkMode();
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>
