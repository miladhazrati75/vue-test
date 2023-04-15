import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/address/new',
      meta:{
        title: "صفحه اصلی"
      }
    },
    {
      path: '/address/new',
      name: 'newAddress',
      component: () => import('../views/HomeView.vue'),
      meta:{
        title: "ثبت آدرس جدید"
      }
    },
    {
      path: '/address/new/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
      meta:{
        title: "تعیین موقعیت مکانی"
      }
    },
    {
      path: '/address/success',
      name: 'successMessage',
      component: () => import('../views/SuccessMessageView.vue'),
      meta:{
        title: "ارسال موفق"
      }
    },
    {
      path: '/address/list',
      name: 'list',
      component: () => import('../views/AddressListView.vue'),
      meta:{
        title: "فهرست آدرس‌ها"
      }
    }
  ]
})
const DEFAULT_TITLE = 'Some Default Title';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});
export default router
