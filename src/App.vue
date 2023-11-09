<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div id="header-container">
        <img src="logo_sam-nga-blum.svg" alt="logo" id="logo">
        <div>
          <RouterLink to="/" class="nav-link">HOME</RouterLink>
          <RouterLink to="/about" class="nav-link">ABOUT</RouterLink>
          <RouterLink to="/shop" class="nav-link">SHOP</RouterLink>
      </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style>
#app {
  width: 100vw;
}

nav {
  position: absolute;
  background-color: var(--color-nav-background);
  justify-content: space-between;
  width: 100vw;
  height: 250px;
  margin: 0 auto;
  z-index: 0;
}

h1 {
  font-family: 'DM Serif Display', serif;
  color: #EE4623;
  font-size: 52px;
  margin-top: 57px;
}
h2 {
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.15rem;
  margin-bottom: 20px;
  color: #0a0758;
}
p {
  font-family: 'DM Mono', sans-serif;
  font-size: 24px;
  color: #0a0758;
}

#header-container {
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  padding: 50px 85px 0 85px;
}

#logo {
  height: 45px;
}

.nav-link {
  margin-left: 20px;
  font-size: 18px;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */
/* 
nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
