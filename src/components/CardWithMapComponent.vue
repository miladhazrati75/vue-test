<script setup>
import IconRightArrow from './icons/IconRightArrow.vue'
</script>
<template>
  <div class="flex flex-col w-full md:w-3/4">
    <div class="hidden mb-4 md:block">
      <h1 class="text-lg">
        <slot name="title"></slot>
      </h1>
    </div>
    <div
      class="w-full h-screen md:h-auto mx-auto bg-white rounded shadow-[0_0px_16px_0px_rgba(0,0,0,0.08)]"
    >
      <div class="flex items-center gap-1 pr-3 opacity-70 md:opacity-100">
        <RouterLink to="/address/new" class="w-[20px] h-[20px]">
          <IconRightArrow />
        </RouterLink>
        <h1 class="sticky px-4 py-4 text-base text-center md:text-right">
          <slot name="header"></slot>
        </h1>
      </div>
      <slot name="map"></slot>
    </div>
  </div>
</template>

<style scoped>
.textFieldWrapper {
  padding: 12px 10px 12px 12px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
}
.borderSuccess {
  border: 1px solid #00bfa5;
}
.borderError {
  border: 1px solid #e61236;
}
</style>
