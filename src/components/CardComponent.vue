<template>
  <div
    class="flex flex-col w-full px-5"
    :class="{
      'md:w-3/4': this.$router.currentRoute.value.path == '/address/new',
      'md:w-full': this.$router.currentRoute.value.path == '/address/list'
    }"
  >
    <div class="mb-[16px]">
      <h1 class="text-lg">
        <slot name="title"></slot>
      </h1>
    </div>
    <div
      class="w-full h-auto mx-auto md:py-5 md:px-10 p-5 bg-white rounded shadow-[0_0px_16px_0px_rgba(0,0,0,0.08)]"
    >
      <h1 class="text-xl">
        <slot name="header"></slot>
      </h1>
      <slot name="body"></slot>
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
