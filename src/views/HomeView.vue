<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="body-wrapper">
      <div id="top-section">
        <h1>Hi. I&rsquo;m Sam.</h1>
        <p>I am an Art Director, Designer, and Illustrator who loves finding creative solutions to any problem with a specialization in nonprofit branding, strategy, and communications.</p>
      </div>
      <div class="section">
        <h2>RECENT WORK</h2>
        <div id="recent-work-container">
          <div class="placeholder-img"></div>
          <div class="placeholder-img"></div>
          <div class="placeholder-img"></div>
          <div class="placeholder-img"></div>
        </div>
      </div>
      <div class="section">
        <h2>SERVICES</h2>
        <div id="services-container">
          <div class="services-col">
            <div>BRANDING</div>
            <div>PRINT/DIGITAL DESIGN</div>
            <div>WEB DESIGN (UI/UX)</div>
          </div>
          <div class="services-col">
            <div>PRODUCT/PACKAGING DESIGN</div>
            <div>ILLUSTRATION</div>
            <div>NONPROFIT CONSULTATION</div>
          </div>
        </div>
      </div>
      <div class="section">
        <h2>SELECT CLIENTS</h2>
        <div id="select-clients-container">
          <img src="logos_select-clients.png" alt="select clients" id="client-logos">
        </div>
      </div>
  </div>
  </main>
</template>

<style scoped>
#client-logos {
  /* object-fit: contain; */
}
#recent-work-container {
  display: flex;
  justify-content: space-between;
}
#services-container {
  display: flex;
  color: #EE4623;
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.15rem;
  line-height: 1.5;
}
#select-clients-container {
  object-fit: contain;
  width: 100%;
  display: flex;
}
#top-section {
  margin: 0 230px;
  padding-bottom: 50px;
}
.body-wrapper {
  margin: 150px 50px;
  border: 1px solid #EE4623;
  max-width: 1400px;
  z-index: 1;
  position: relative;
  text-align: center;
  min-height: 80vh;
}
.placeholder-img {
  width: 280px;
  height: 280px;
  background-color: #F6A4B5;
}
.section {
  border-top: 1px solid #EE4623;
  text-align: left;
  padding: 45px 35px 55px;
}
.services-col {
  width: 50%;
}
</style>