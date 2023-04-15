<script>
import { store } from '../store'
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
    }
  },
  methods: {
    onChange(event) {
      this.value = event.target.value
      store.setter(this.field, event.target.value)
    }
  }
}
</script>
<template>
  <div class="flex justify-between">
    <div>
      <label class="text-sm" :for="'input-' + field">{{ label }}</label>
    </div>
    <div class="flex gap-2">
      <input
        name="gender"
        type="radio"
        id="male"
        value="male"
        @change="($event) => onChange($event)"
        class="accent-lime-600"
      />
      <label class="text-sm" for="male">آقا</label>
      <input
        name="gender"
        type="radio"
        id="female"
        value="female"
        @change="($event) => onChange($event)"
        class="accent-lime-600"
      />
      <label class="text-sm" for="female">خانم</label>
    </div>
  </div>

  <div class="h-5 basis-full">
    <h6 v-if="errorMessage" class="text-xs text-red-700">{{ errorMessage }}</h6>
  </div>
</template>
