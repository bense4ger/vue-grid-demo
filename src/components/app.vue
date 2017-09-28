<template>
  <div id="outer">
      <div id="header">
          <h2>Some Things</h2>
      </div>
      <div id="inner">
          <grid></grid>
          <pager></pager>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pager from './pager.vue';
import Grid from './grid.vue';

export default {
  name: 'app',
  components: {
    pager: Pager,
    grid: Grid
  }
}
</script>

<style lang="scss">

</style>



