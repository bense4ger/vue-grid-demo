<template>
  <div id="outer">
      <div id="header">
          <h2>Some Things</h2>
      </div>
      <div id="inner">
          <pager></pager>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pager from './pager.vue';

export default {
  name: 'app',
  components: {
      pager: Pager
  }
}
</script>

<style lang="scss">

</style>



