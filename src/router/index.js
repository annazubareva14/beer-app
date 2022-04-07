import Vue from 'vue';
import VueRouter from 'vue-router';
import ProfilePage from '@/pages/ProfilePage';
import BeerInfoPage from '@/pages/BeerInfoPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/beer-info',
    name: 'BeerInfoPage',
    component: BeerInfoPage
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
