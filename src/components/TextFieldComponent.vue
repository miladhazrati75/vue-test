<script>
import { store } from '../store'
import IconClose from './icons/IconClose.vue'
export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    field: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String
    },
    ltr: {
      type: Boolean
    },
    sub: {
      type: String
    },
    hint: {
      type: String
    }
  },
  components: {
    IconClose
  },
  methods: {
    onChange(event) {
      store.setter(this.field, event.target.value)
    },
    resetInput() {
      this.value = ''
      store.setter(this.field, '')
    }
  }
}
</script>
<template>
  <div class="mb-2">
    <div class="flex justify-between">
      <label class="text-sm" :for="'input-' + field"
        >{{ label }}
        <sub v-if="sub" class="text-xs">{{ sub }}</sub>
      </label>
      <label class="text-[50%] text-[#9B9B9B]">{{ hint }}</label>
    </div>
  </div>
  <div>
    <div
      class="relative flex items-center textFieldWrapper"
      :class="{ borderSuccess: value && !errorMessage, borderError: errorMessage }"
    >
      <div class="w-[calc(100%-25px)]">
        <input
          type="text"
          :id="'input-' + field"
          @change="($event) => onChange($event)"
          v-model="value"
          :dir="ltr == true ? 'ltr' : 'rtl'"
          class="w-full focus:outline-none basis-full"
        />
      </div>
      <div
        v-if="value.length"
        class="absolute flex items-center justify-center left-[16px]"
        @click="resetInput"
      >
        <IconClose />
      </div>
    </div>
  </div>
  <div class="h-5">
    <h6 v-if="errorMessage" class="text-xs text-red-700">{{ errorMessage }}</h6>
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
