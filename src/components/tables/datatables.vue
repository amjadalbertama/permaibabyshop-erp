<template>
  <table class="table table-bordered table-striped" :id="id">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.data">{{ col.names }}</th>
      </tr>
    </thead>
  </table>
</template>

<script>
import $ from 'jquery'
import 'datatables.net-bs4'

export default {
  name: 'DataTable',
  props: ['values', 'columns', 'id'],
  mounted: function () {
    $(this.$el).DataTable({
      rowCallback: function(row, data, index) {
        console.log({
          data, index
        })
        $(row).find('td').css('color', 'white');
      },
      data: this.values,
      'columns': this.columns,
      keys: true
    })
  }
}
</script>

<style>
.dataTables_filter {
  float: right;
}
.dataTables_paginate {
  float: right;
}
.dataTables_empty {
  text-align: center;
}
#tables-logs {
  width: 78vw !important;
}
#tables-logs tr td:nth-child(2) {
  word-break: break-all;
  white-space: nowrap;
  position: relative;
  max-width: 55vw !important;
  overflow: hidden;
  text-overflow: ellipsis;
}
#tables-logs tr td:nth-child(3) {
  white-space: nowrap;
}
.no-footer .row {
  align-items: center;
}
</style>
