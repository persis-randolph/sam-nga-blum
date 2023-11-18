<script setup lang="ts">
defineProps<{
  name: string;
  placeholderText?: string;
  labelText?: string;
  isRequired?: boolean;
}>()
</script>

<template>
  <div class="input-container">
    <label :for="name" :required="isRequired || false" class="text-[#EE4623] mb-1">{{ labelText }}</label>
    <input type="text" :placeholder="placeholderText" :name="name" class="">
  </div>
</template>

<style scoped>
label {
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
}
input {
  border: 1px solid #EE4623;
  height: 50px;
}
.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>