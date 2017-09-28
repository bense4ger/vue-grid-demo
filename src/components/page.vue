<template>
  <div :class="cls" :click="fetch">{{number}}</div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import service from '../service';

  export default {
    name: 'Page',
    props: ['number'],
    data() {
      return {
        canFetch: false
      }
    },
    computed: {
      ...mapGetters([
        'currentPage'
      ]),
      cls() {
        const base = 'page';
        if (this.currentPage !== this.number) {
          this.canFetch = true;
          return `${base} can-fetch`
        }

        return base;
      }
    },
    methods: {
      ...mapMutations([
        'incPage',
        'decPage',
        'addDate'
      ]),
      fetch(){
        if (!this.canFetch) return;

        const toFetch = parseInt(this.number) !== 'NaN'
          ? this.number
          : this.number === '<<'
            ? this.number - 3
            : this.number + 3;

        service.getPageData(toFetch)
          .then((data) => {

          })
          .catch((err) => console.dir(err));
      }
    }
  }
</script>

<style lang="scss">

</style>


