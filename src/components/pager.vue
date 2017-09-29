<template>
  <div id="pages">
      <ul>
          <li v-if="currentPage > 1"><page :mod="prev.mod" :text="prev.text"></page></li>
          <li v-if="currentPage < totalPages"><page :mod="next.mod" :text="next.text"></page></li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Page from './page.vue';

export default {
  name: 'Pager',
  data() {
      return {
          next: { mod: '+', text: "Next Page" },
          prev: { mod: '-', text: "Previous Page" }
      }
  },
  computed: {
      ...mapGetters([
          'totalPages',
          'currentPage'
      ])
  },
  components: {
      page: Page
  }
}
</script>

<style lang="scss" >
    div#pages {
        padding-top: 50px;
        
        ul {
            list-style: none;
            width: 100%;
            margin: 0;
            padding: 0;

            li {
                display: inline-block;
                margin-right: 50px;
            }
        }
    }
    
</style>


