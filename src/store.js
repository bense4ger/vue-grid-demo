import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
      currentPage: 0,
      totalPages: -1,
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
      totalPages(state, p) {
          state.totalPages = p;
      }
    },
    getters : {
      currentPage: state => {
        return state.currentPage;
      },
      totalPages: state => {
          return state.totalPages;
      },
      pageData: (state, p) => {
          return pageData[p]
      }
    },
});

export default store;