/* eslint-disable import/no-extraneous-dependencies,no-param-reassign,import/no-unresolved,import/extensions,max-len */
import $ from 'jquery';
import Vuex from 'vuex';
import {service} from './service';

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
});

const init = (data) => {
  console.log('Starting app');
  store.commit('incPage');
  store.commit('addData', { page: 1, data });
};

$(() => {
  service.getPageData(1)
    .then((data) => init(data))
    .catch((err) => console.dir(err));
});
