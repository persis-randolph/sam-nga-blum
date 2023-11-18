<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import './index.css'
</script>

<template>
  <div class="cursor-regular">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style src="./index.css" />
