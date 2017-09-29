<template>
    <table id="grid">
        <thead>
        <th>Name</th>
        <th>Modified</th>
        <th>Count</th>
        </thead>
        <template v-for="datum in pageData(currentPage)" >
            <tr>
                <td>{{datum.name}}</td>
                <td>{{datum.modified}}</td>
                <td>{{datum.count}}</td>
            </tr>
        </template>
    </table>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Grid',
    computed: {
      ...mapGetters([
        'currentPage',
        'pageData'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  table {
    border-collapse: collapse;
    width: 75%;
    thead {
      border-bottom: solid 1px black;
      th {
        text-align: left;
      }
    }
  }
</style>