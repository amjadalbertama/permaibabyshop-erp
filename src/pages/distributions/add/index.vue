<template>
  <section class="add-category">
    <div class="loading-overlay" v-if="loading">
      <div class="loading-center">
        <Spinner name="cube-grid" color="#0cf24d" />
      </div>
    </div>
    <div class="page-header">
      <h3 class="page-title">{{ $route.name }}</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $route.name }}</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{ $route.name }}</h4>
            <p class="card-description">Add your data Distribution</p>
            <div class="w-100 text-center">
              <h4 class="card-title">Still in Progress...</h4>
            </div>
            <!-- <form class="forms-sample">
              <div class="form-group">
                <label for="category_name">Name</label>
                <input type="text" class="form-control" id="category_name" placeholder="Type Your Category Name Here..." v-model="category.category_name" name="category_name" :class="{'is-invalid': errors.has('category_name')}" data-vv-name="category_name" v-validate data-vv-rules="required" />
              </div>
              <button type="submit" class="btn btn-primary me-2" v-on:click="storeCategory">Submit</button>
              <button class="btn btn-dark">Cancel</button>
            </form> -->
          </div>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
  import Spinner from 'vue-spinkit'

  export default {
    name: 'AddDistribution',
    components: {
      Spinner
    },
    data: function () {
      return {
        loading: false
      }
    },
    methods: {},
    computed: {
      curRouteName: function () {
        return this.$route.name
      },
    }
  }
</script>

<style scoped></style>
