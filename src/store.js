/* eslint-disable no-param-reassign */
// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved,import/extensions,import/extensions
import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    currentPage: 0,
    totalPages: -1,
    pageData: {},
  },
  mutations: {    
    incrementPage(state, payload) {
      state.currentPage += payload;
    },
    addData(state, d) {
      state.pageData[d.page] = d.data;
    },
    totalPages(state, p) {
      state.totalPages = p;
    },
  },
  getters: {
    currentPage: state => state.currentPage,
    totalPages: state => state.totalPages,
    pageData: state => p => state.pageData[p],
  },
});

export default store;
