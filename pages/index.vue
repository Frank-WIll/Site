<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <main>
    <!-- Hero section -->
    <HomeHero />
    
    <!-- Clients section - target for scroll -->
    <div id="clients-section" class="clients-section">
      <HomeClients />
    </div>
    <HomeHighlights />
    <HomeSplit />
  </main>
</template>

<style>
/* Reset any potential inherited styles */
main {
  display: block;
  position: relative;
  width: 100%;
}

.clients-section {
  display: block;
  width: 100%;
  position: relative;
  scroll-margin-top: 1rem; /* Helps with scroll positioning */
}
</style>