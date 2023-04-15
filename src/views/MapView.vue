<script type="module">
import { store } from '../store'
import MapComponent from '../components/MapComponent.vue'
import CardWithMapComponent from '../components/CardWithMapComponent.vue'
import LoadingDotsComponent from '../components/LoadingDotsComponent.vue'
import axios from 'axios'
export default {
  mounted() {
    const error = { status: 500 }
    switch (error.status) {
      case error.status >= 500:
        this.errorMessage = 'اشکال در ارتباط با سرور'
        setTimeout(() => (this.errorMessage = ''), 1000)
        break
      case error.status >= 400 && error.status < 500:
        this.errorMessage = 'اشکال در داده‌های ارسالی'
        setTimeout(() => (this.errorMessage = ''), 1000)
        break
      default:
        break
    }
  },
  data() {
    return {
      loading: false,
      error: false,
      errorMessage: ''
    }
  },
  components: {
    MapComponent,
    CardWithMapComponent,
    LoadingDotsComponent
  },
  methods: {
    submit() {
      this.loading = true
      axios
        .post('https://stage.achareh.ir/api/karfarmas/address', store, {
          headers: {
            Authorization: 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4',
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          this.items = response.data
          this.$router.push('/address/success')
        })
        .catch((error) => {
          this.loading = false
          this.error = true
          if (error.response.status >= 500) {
            this.errorMessage = 'اشکال در ارتباط با سرور'
            setTimeout(() => (this.error = false), 3000)
          } else if (error.response.status >= 400 && error.response.status < 500) {
            this.errorMessage = 'اشکال در داده‌های ارسالی'
            setTimeout(() => (this.error = false), 3000)
          } else {
            this.errorMessage = 'خطا'
            setTimeout(() => {
              this.error = false
            }, 1000)
          }
          this.errorMessage += ': ' + error.code
        })
    }
  }
}
</script>

<template>
  <main class="md:container md:mx-auto md:grid md:place-items-center h-full w-full md:mt-[100px]">
    <CardWithMapComponent>
      <template #title>انتخاب آدرس</template>
      <template #header> موقعیت مورد نظر خود را بر روی نقشه مشخص کنید. </template>
      <template #map>
        <MapComponent />
      </template>
    </CardWithMapComponent>
  </main>
  <footer class="sticky bottom-0 md:absolute">
    <div class="w-screen h-16 bg-white shadow-[0_0px_-1px_8px_rgba(0,0,0,0.1)]">
      <div class="container h-full px-5 mx-auto">
        <div class="flex items-center justify-center w-full h-full md:w-auto">
          <div
            v-if="loading"
            class="py-3 md:px-[60px] bg-[#00BFA5] rounded text-white w-full md:w-auto flex justify-center items-center"
          >
            <LoadingDotsComponent />
          </div>
          <div
            v-else-if="error"
            class="py-3 md:px-[60px] bg-[#bf0010] rounded text-white w-full md:w-auto flex justify-center items-center"
          >
            {{ errorMessage ? errorMessage : 'خطا' }}
          </div>
          <div
            v-else
            class="py-3 md:px-[60px] bg-[#00BFA5] rounded text-white w-full md:w-auto flex justify-center items-center"
            @click="submit"
          >
            ثبت و ادامه
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
