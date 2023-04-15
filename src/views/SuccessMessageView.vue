<script setup>
import {RouterLink} from 'vue-router'
import IconCheck from '../components/icons/IconCheck.vue';
</script>
<template>
  <main class="container flex items-center justify-center h-screen mx-auto">
    <div class="text-center">
      <div class="w-[50px] h-[50px] mb-8 mx-auto"><IconCheck/></div>
      <p class="mb-20 text-xl">اطلاعات شما با موفقیت ثبت شد.</p>
      <RouterLink to="/address/list" class="px-24 py-3 border-2 border-[#00BFA5] bg-transparent text-[#00BFA5] rounded">
        مشاهده اطلاعات
      </RouterLink>
    </div>
  </main>
</template>
