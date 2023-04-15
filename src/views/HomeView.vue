<script type="module">
import CardComponent from '../components/CardComponent.vue'
import RadioFieldComponent from '../components/RadioFieldComponent.vue'
import TextFieldComponent from '../components/TextFieldComponent.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'
import { store } from '../store'
export default {
  name:'ssssssssss',
  setup() {
    const mobileNo = (value) => {
      let pattern = /^(\+98?)?{?(9[0-9]{9,9}}?)$/
      return pattern.test(value)
    }
    const phoneNo = (value) => {
      let pattern = /^(\+98|0)?\d{10}$/
      return value ? pattern.test(value) : true
    }
    const rules = {
      first_name: {
        required: helpers.withMessage('وارد کردن نام الزامی است.', required),
        minLength: helpers.withMessage('نام نمی‌تواند کمتر از ۳ حرف باشد.', minLength(3))
      },
      last_name: {
        required: helpers.withMessage('وارد کردن نام خانوادگی الزامی است.', required),
        minLength: helpers.withMessage('نام خانوادگی نمی‌تواند کمتر از ۳ حرف باشد.', minLength(3))
      },
      coordinate_mobile: {
        required: helpers.withMessage('وارد کردن شماره همراه الزامی است.', required),
        mobileNo: helpers.withMessage('شماره واردشده نادرست است.', mobileNo)
      },
      coordinate_phone_number: {
        phoneNo: helpers.withMessage('شماره واردشده نادرست است.', phoneNo)
      },
      address: {
        required: helpers.withMessage('وارد کردن آدرس الزامی است.', required),
        minLength: helpers.withMessage('آدرس نمی‌تواند کمتر از ۱۰ حرف باشد.', minLength(10))
      },
      gender: {
        required: helpers.withMessage('انتخاب جنسیت الزامی است.', required)
      }
    }
    const v$ = useVuelidate(rules, store)
    return {
      v$
    }
  },
  components: {
    CardComponent,
    TextFieldComponent,
    RadioFieldComponent
  },
  methods: {
    submit() {
      this.v$.$validate()
      if (!this.v$.$errors.length) {
        this.$router.push('/address/new/map')
      }
    }
  }
}
</script>

<template>
  <main class="container mx-auto grid place-items-center h-full md:mt-[100px]">
    <CardComponent>
      <template #title>ثبت آدرس</template>
      <template #header> لطفا مشخصات و آدرس خود را وارد کنید. </template>
      <template #body>
        <div class="gap-4 mt-5 md:grid md:grid-cols-3 md:mt-10">
          <div>
            <TextFieldComponent
              label="نام"
              field="first_name"
              :errorMessage="v$?.first_name?.$errors[0]?.$message"
            />
          </div>
          <div>
            <TextFieldComponent
              label="نام خانوادگی"
              field="last_name"
              :errorMessage="v$?.last_name?.$errors[0]?.$message"
            />
          </div>
          <div>
            <TextFieldComponent
              label="شماره تلفن همراه"
              field="coordinate_mobile"
              :ltr="true"
              :errorMessage="v$?.coordinate_mobile?.$errors[0]?.$message"
            />
          </div>
          <div>
            <TextFieldComponent
              label="شماره تلفن ثابت"
              field="coordinate_phone_number"
              sub="(اختیاری)"
              hint="*با پیش شماره"
              :ltr="true"
              :errorMessage="v$?.coordinate_phone_number?.$errors[0]?.$message"
            />
          </div>
          <div class="self-end col-span-2">
            <TextFieldComponent
              label="آدرس"
              field="address"
              :errorMessage="v$?.address?.$errors[0]?.$message"
            />
          </div>
          <div>
            <RadioFieldComponent
              label="جنسیت"
              field="gender"
              :errorMessage="v$?.gender?.$errors[0]?.$message"
            />
          </div>
        </div>
      </template>
    </CardComponent>
  </main>
  <footer class="absolute bottom-0">
    <div class="w-screen h-16 bg-white shadow-[0_0px_-1px_8px_rgba(0,0,0,0.1)]">
      <div class="container h-full px-5 mx-auto">
        <div class="flex items-center justify-center w-full h-full md:w-auto">
          <button
            class="py-3 md:px-[60px] bg-[#00BFA5] rounded text-white w-full md:w-auto"
            @click="submit"
          >
            ثبت و ادامه
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
