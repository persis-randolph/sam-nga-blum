<script setup lang="ts">
defineProps<{
  name: string;
  labelText?: string;
  isRequired?: boolean;
}>()
</script>

<template>
  <div class="w-full h-[40px] flex items-center">
    <input type="radio" :name="name" class="h-[20px]">
    <label :for="name" :required="isRequired || false" class="text-[#EE4623] mb-1 font-sans">{{ labelText }}</label> 
  </div>
</template>

<style scoped>
label {
  font-size: 16px;
}
</style>