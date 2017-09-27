<template>
  <div id="outer">
      <div id="header">
          <h2>Some Things</h2>
      </div>
      <div id="inner">
          
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed : {
      ...mapGetters([
          'currentPage'
      ])
  },
}
</script>

<style lang="scss">

</style>



