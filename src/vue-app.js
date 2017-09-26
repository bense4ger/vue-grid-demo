/* eslint-disable import/no-extraneous-dependencies,no-param-reassign,import/no-unresolved,import/extensions,max-len */
import $ from 'jquery';
import Vuex from 'vuex';

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
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8081?page=1',
    success: (data) => {
      init(data);
    },
    error: () => {
      console.log('Error starting app');
    },
  });
});
