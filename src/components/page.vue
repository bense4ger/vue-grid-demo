<template>
  <div :class="page" @click="fetch">{{text}}</div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import service from '../service';

  export default {
    name: 'Page',
    props: ['mod', 'text'],
    data() {
      return {
        canFetch: false
      }
    },
    computed: {
      ...mapGetters([
        'currentPage',
        'pageData'
      ])
    },
    methods: {
      ...mapMutations([
        'incrementPage',
        'addData'
      ]),
      fetch(){
        
        const inc = this.mod === '-'
          ? -1
          : 1;

        const toFetch = this.currentPage + inc;
        
        if (this.pageData(toFetch) === undefined) {
          service.getPageData(toFetch)
            .then((response) => {
              this.addData({ page: toFetch, data: response.data});
              this.incrementPage(inc);
            })
            .catch((err) => console.dir(err));
        }
        else {
          this.incrementPage(inc);
        }        
      }
    }
  }
</script>

<style lang="scss">

</style>


