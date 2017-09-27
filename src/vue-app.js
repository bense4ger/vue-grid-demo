/* eslint-disable import/no-extraneous-dependencies,no-param-reassign,import/no-unresolved,import/extensions,max-len */
import $ from 'jquery';
import Vue from 'vue';
import Vuex from 'vuex';
import {service} from './service';

import App from './components/app.vue';

const store = new Vuex.Store({
  state: {
    currentPage: 0,
    pageData: {},
  },
  mutations: {
    incPage(state) {
      state.currentPage += 1;
    },
    decPage(state) {
      state.currentPage += 1;
    },
    addData(state, d) {
      state.pageData[d.page] = d.data;
    },
  },
  getters : {
    currentPage: state => {
      return state.currentPage;
    }
  },
});

const init = (data) => {
  console.log('Starting app');
  store.commit('incPage');
  store.commit('addData', { page: 1, data });

  new Vue({
    el: '#app',
    render: h => h(App),
    store,
  });
};

$(() => {
  service.getPageData(1)
    .then((data) => init(data))
    .catch((err) => console.dir(err));
});
