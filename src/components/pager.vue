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
          next: { mod: '+', text: "Next" },
          prev: { mod: '-', text: "Previous" }
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

<style lang="scss">

</style>


