import Vue from 'vue';
import Vuex from 'vuex';
import links from './links';
import coffePageGoods from './coffePageGoods';
import goodsPageGoods from './goodsPageGoods';
import bestsellerGoods from './bestsellerGoods';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    coffePageGoods,
    goodsPageGoods,
    bestsellerGoods,
  },
});

export default store;
