<script type="module">
import CardComponent from '../components/CardComponent.vue'
import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import IconRefresh from '../components/icons/IconRefresh.vue'
export default {
  data() {
    return {
      items: [],
      loading: false,
      error: false,
      errorMessage: ''
    }
  },
  mounted() {
    this.getData()
  },
  components: {
    CardComponent,
    LoadingSpinner,
    IconRefresh
  },
  methods: {
    getData() {
      this.error = false
      this.loading = true
      axios
        .get('https://stage.achareh.ir/api/karfarmas/address', {
          headers: {
            Authorization: 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4',
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          this.items = response.data
          this.loading = false
        })
        .catch((error) => {
          this.loading = false
          this.error = true
          if (error?.response?.status >= 500) {
            this.errorMessage = 'اشکال در ارتباط با سرور'
          } else if (error?.response?.status >= 400 && error?.response?.status < 500) {
            this.errorMessage = 'اشکال در درخواست'
          } else {
            this.errorMessage = 'خطا'
          }
          this.errorMessage += ': ' + error.code
        })
    }
  }
}
</script>

<template>
  <main class="container grid h-full mx-auto mb-8 place-items-center">
    <p class="md:w-3/4 w-full px-5 md:mt-[100px]">آدرس‌ها و مشخصات</p>
    <div v-if="loading" class="flex items-center justify-center w-3/4 h-screen">
      <LoadingSpinner />
    </div>
    <div v-else-if="error" @click="getData" class="cursor-pointer">
      <div
        class="py-3 md:px-[60px] bg-[#bf0010] rounded text-white w-full md:w-auto flex justify-center items-center"
      >
        {{ errorMessage ? errorMessage : 'خطا' }}
      </div>
      <div class="h-[30px] w-[30px] mx-auto mt-3">
        <IconRefresh />
      </div>
      <p class="text-center">درخواست دوباره</p>
    </div>
    <div v-else v-for="item in items" class="w-full md:w-3/4">
      <CardComponent>
        <template #body>
          <div class="gap-6 md:grid md:grid-cols-3">
            <div class="flex justify-between md:flex md:flex-col">
              <div class="mb-2">
                <label class="text-[#9B9B9B]">نام</label>
              </div>
              <div>
                <div>
                  <div class="w-full">
                    <p>{{ item.first_name ? item.first_name : 'نامشخص' }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between md:flex md:flex-col">
              <div class="mb-2">
                <label class="text-[#9B9B9B]">نام خانوادگی</label>
              </div>
              <div>
                <div>
                  <div class="w-full">
                    <p>{{ item.last_name ? item.last_name : 'نامشخص' }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between md:flex md:flex-col">
              <div class="mb-2">
                <label class="text-[#9B9B9B]">شماره تلفن همراه</label>
              </div>
              <div>
                <div>
                  <div class="w-full">
                    <p>
                      {{
                        item.coordinate_mobile
                          ? new Intl.NumberFormat('fa-IR')
                              .format(item.coordinate_mobile)
                              .replace(/٬/g, '')
                          : 'نامشخص'
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between md:flex md:flex-col md:justify-start">
              <div class="mb-2">
                <label class="text-[#9B9B9B]">شماره تلفن ثابت</label>
              </div>
              <div>
                <div>
                  <div class="w-full">
                    <p>
                      {{
                        item.coordinate_phone_number
                          ? new Intl.NumberFormat('fa-IR')
                              .format(item.coordinate_phone_number)
                              .replace(/٬/g, '')
                          : 'نامشخص'
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex justify-between mb-2 border-b-2 md:border-0 md:flex md:flex-col md:justify-start"
            >
              <div class="mb-2">
                <label class="text-[#9B9B9B]">جنسیت</label>
              </div>
              <div>
                <div class="relative flex">
                  <div class="w-full">
                    <p>
                      {{
                        item.gender
                          ? item.gender == 'male'
                            ? 'آقا'
                            : item.gender == 'female'
                            ? 'خانم'
                            : 'نامشخص'
                          : 'نامشخص'
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="mb-2">
                <label class="text-[#9B9B9B]">آدرس</label>
              </div>
              <div>
                <div>
                  <div class="w-full">
                    <p>
                      {{
                        item?.region?.state_object?.state_name +
                        (item?.region?.state_object?.state_name ? '، ' : '') +
                        item?.region?.city_object?.city_name +
                        (item?.region?.city_object?.city_name ? '، ' : '') +
                        item?.region?.name
                      }}
                    </p>
                    <p>{{ item?.address }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CardComponent>
    </div>
  </main>
</template>
