<template>
  <div id="pages">
      <ul>
          <li v-for="slice in pagesSlice" :key="slice">
              <page :number="slice"></page>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Page from './page.vue';

export default {
  name: 'Pager',
  computed: {
      ...mapGetters([
          'totalPages',
          'currentPage'
      ]),
      pagesSlice(){
        const n = this.currentPage;
        const before = (mod) => {
            const bf = n + mod;
            return bf > 0 ? bf : undefined;
        };

        const after = (mod) => {
            const af = n + mod;
            return af <=this.totalPages ? af : undefined
        };
        
        const bfs = [ before(-2), before(-1) ].filter(x => x !== undefined);
        const afs = [ after(1), after(2) ].filter(x => x !== undefined);

        const slice = [
            bfs.length === 2 ? "<<" : undefined,
            bfs,
            n,
            afs,
            afs.length === 2 ? ">>" : undefined
        ];

        return [].concat.apply([], slice).filter(x => x !== undefined);
      }
  },
  components: {
      page: Page
  }
}
</script>

<style lang="scss">

</style>


