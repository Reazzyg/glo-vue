import Vue from 'vue';
import VueRouter from 'vue-router';
import HeroView from '@/views/HeroView.vue';
import CoffePage from '@/views/CoffePage.vue';
import ContactsPage from '@/views/ContactsPage.vue';
import GoodsPage from '@/views/GoodsPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffe', component: CoffePage },
  { path: '/our-goods', component: GoodsPage },
  { path: '/our-contacts', component: ContactsPage },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
