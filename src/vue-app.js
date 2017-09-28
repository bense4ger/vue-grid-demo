/* eslint-disable import/no-extraneous-dependencies,no-param-reassign,import/no-unresolved,import/extensions,max-len */
import $ from 'jquery';
import Vue from 'vue';
import service from './service';
import store from './store';
import App from './components/app.vue';


const init = (response) => {
  console.log('Starting app');
  store.commit('incPage');
  store.commit('addData', { page: 1, data: response.data });
  store.commit('totalPages', response.pages);

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    render: h => h(App),
    store,
  });
};

$(() => {
  service.getPageData(1)
    .then(data => init(data))
    .catch(err => console.dir(err));
});
