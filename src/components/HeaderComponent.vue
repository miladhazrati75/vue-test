<template>
  <header class="sticky top-0">
    <div class="w-screen h-16 px-5 bg-white shadow-[0_0px_0.5px_2px_rgba(0,0,0,0.15)]">
      <div class="container h-full mx-auto">
        <div class="flex items-center justify-between h-full">
          <div>
            <RouterLink to="/"
              ><img src="@/assets/images/achareh-type-logo.a2a4993.png" width="80" alt=""
            /></RouterLink>
          </div>
          <div class="flex gap-3">
            <RouterLink
              class="hover:text-[#00BFA5]"
              :class="{ active: this.$router.currentRoute.value.path == '/address/new' }"
              to="/address/new"
              >ثبت آدرس</RouterLink
            >
            <RouterLink
              class="hover:text-[#00BFA5]"
              :class="{ active: this.$router.currentRoute.value.path == '/address/list' }"
              to="/address/list"
              >مشاهده آدرس‌ها</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<style scoped>
.active{
  color: #00BFA5;
}
</style>
