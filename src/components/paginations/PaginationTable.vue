<template>
  <ul class="pagination d-flex justify-content-end pagination-danger">
    <li class="page-item" v-if="page == 1" :class="{ 'disabled': isDisabled }">
      <router-link class="page-link"
        :to="path + (page - 1)" :class="{ 'disabled': isDisabled }">&larr;</router-link>
    </li>
    <li class="page-item" v-if="page > 1">
      <router-link class="page-link"
        :to="path + (page - 1)">&larr;</router-link>
    </li>
    <div v-for="(index, item) in totalPage" :key="item">
      <li class="page-item" v-if="index === 1 || index === totalPage || (index >= (page - 2) && index <= (page + 2))"
        v-bind:class="{'active': page === index}">
        <router-link class="page-link"
          v-if="index === 1 || index === totalPage || (index >= (page - 2) && index <= (page + 2))"
          :to="path + index">{{index}}</router-link>
      </li>
    </div>
    <li class="page-item" v-if="page < totalPage">
      <router-link class="page-link"
        :to="path + (page + 1)">&rarr;</router-link>
    </li>
    <li class="page-item" v-if="page == totalPage" :class="{ 'disabled': isDisabled }">
      <router-link class="page-link"
        :to="path + (page + 1)" :class="{ 'disabled': isDisabled }">&rarr;</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        isDisabled: true
      }
    },
    name: 'paginationtable',
    props: ['page', 'totalPage', 'path'],
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  .disabled {
    background-color: #797b7d !important;
  }
</style>
