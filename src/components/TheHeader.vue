<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav
      class="absolute bg-[var(--color-nav-background)] justify-between w-screen h-[250px] mx-auto"
    >
      <div id="header-container">
        <img src="logo_sam-nga-blum.svg" alt="logo" id="logo">
        <div>
          <RouterLink to="/" class="nav-link hover:cursor-hover hover:underline">HOME</RouterLink>
          <RouterLink to="/about" class="nav-link hover:cursor-hover hover:underline">ABOUT</RouterLink>
          <RouterLink to="/shop" class="nav-link hover:cursor-hover hover:underline">SHOP</RouterLink>
      </div>
      </div>
    </nav>
  </header>
</template>