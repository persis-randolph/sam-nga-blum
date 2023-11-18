<script setup lang="ts">
import RadioInput from '../components/shared/RadioInput.vue';
import TextInput from '../components/shared/TextInput.vue';
</script>

<template>
  <main class="w-screen mx-auto main">
    <div class="body-wrapper">
      <div id="top-section">
        <h1>Hi. I&rsquo;m Sam.</h1>
        <h3>I am an Art Director, Designer, and Illustrator who loves finding creative solutions to any problem with a specialization in nonprofit branding, strategy, and communications.</h3>
      </div>
      <div class="section">
        <h2>RECENT WORK</h2>
        <div id="recent-work-container">
          <div class="placeholder-img"></div>
          <!-- <div class="placeholder-img"></div>
          <div class="placeholder-img"></div>
          <div class="placeholder-img"></div> -->
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
          <img src="logos_select-clients.png" alt="select clients logos">
        </div>
      </div>
      <div class="section">
        <h2>WANT TO WORK TOGETHER?</h2>
        <div id="contact-container">
          <p>Have an idea? That's great! I'd love to learn more about your project. Please fill out this form to the best of your ability, the more information that you can provide, the quicker we'll be able to get started.</p>
          <br>
          <p>Prefer to contact me directly? <a href="mailto:samngablum@gmail.com">Feel free to email me directly.</a></p>
        </div>
        <form> 
          <div className="grid grid-cols-2">
            <div class='col-span-2 pt-8 pb-2 font-sans'><span class="text-[#EE4623] pr-1">NAME</span>(required)</div>
            <div class="pr-4">
              <TextInput placeholder-text="" label-text="First Name" name="firstName" :is-required="true" />
            </div>
            <div>
              <TextInput placeholder-text="" label-text="Last Name" name="lastName" :is-required="true" />
            </div>
            <div class="col-span-2 pt-8 pb-2 font-sans"><span class="text-[#EE4623] pr-1 uppercase">EMAIL</span>(required)</div>
            <div class="col-span-2">
              <TextInput placeholder-text="" label-text="" name="email" :is-required="true" />
            </div>
            <div class="col-span-2 pt-8 pb-2 font-sans"><span class="text-[#EE4623] pr-1">WHO IS THIS PROJECT FOR?</span>(required)</div>
            <RadioInput name="myself" labelText="Myself" />
            <RadioInput name="agency" labelText="Agency" />
            <div class="col-span-2 pt-8 pb-2 font-sans"><span class="text-[#EE4623] pr-1">WHAT KIND OF PROJECT IS THIS?</span>(required)</div>
            <div class="col-span-2 pt-8 pb-2 font-sans"><span class="text-[#EE4623] pr-1">WHAT DELIVERABLES ARE YOU LOOKING FOR AT THE END OF THIS PROJECT?</span>(required)</div>
            <div class="pt-8 pb-2 font-sans"><span class="text-[#EE4623] pr-1">WHAT IS YOUR BUDGET?</span>(required)</div>
            <div class="pt-8 pb-2 font-sans"><span class="text-[#EE4623] pr-1">WHAT IS YOUR TIMELINE?</span>(required)</div>
          </div>
        </form>
      </div>
  </div>
  </main>
</template>

<style scoped>
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
  justify-content: center;
}
#top-section {
  margin: 0 230px;
  padding-bottom: 50px;
}
.body-wrapper {
  margin: 150px 50px;
  border: 1px solid #EE4623;
  max-width: 1300px;
  min-width: 700px;
  z-index: 1;
  position: relative;
  text-align: center;
  min-height: 80vh;
}
.inline {
  display: flex;
}
.main {
  display: flex;
  justify-content: center;
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