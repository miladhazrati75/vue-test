import { reactive } from 'vue'

export const store = reactive({
  first_name: '',
  last_name: '',
  coordinate_mobile: '',
  coordinate_phone_number: '',
  address: '',
  gender: '',
  region: '1',
  lat: 0,
  lng: 0,
  setter(field, value) {
    switch (field) {
      case 'first_name':
        this.first_name = value
        break
      case 'last_name':
        this.last_name = value
        break
      case 'coordinate_mobile':
        this.coordinate_mobile = value
        break
      case 'coordinate_phone_number':
        this.coordinate_phone_number = value
        break
      case 'address':
        this.address = value
        break
      case 'gender':
        this.gender = value
        break
      case 'lat':
        this.lat = value
        break
      case 'lng':
        this.lng = value
        break
      default:
        break
    }
  },
  setLatLng(value){
    this.lat = value[0];
    this.lng = value[1];
  }
})
