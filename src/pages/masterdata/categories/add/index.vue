<template>
  <section class="add-category">
    <div class="loading-overlay" v-if="loading">
      <!-- <div class="loading-center">
        <Spinner name="cube-grid" color="#0cf24d" />
      </div> -->
      <div class="loader-demo-box">
        <div class="flip-square-loader mx-auto"></div>
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
            <p class="card-description">Add your data category</p>
            <form class="forms-sample">
              <div class="form-group">
                <label for="category_name">Name</label>
                <input type="text" class="form-control" id="category_name" placeholder="Type Your Category Name Here..." v-model="category.category_name" name="category_name" :class="{'is-invalid': errors.has('category_name')}" data-vv-name="category_name" v-validate data-vv-rules="required" />
                <label id="category-error" class="error mt-2 text-danger" for="category_name">{{ errors.first('category_name') }}</label>
              </div>
              <button type="submit" class="btn btn-primary me-2" v-on:click="storeCategory">Submit</button>
              <button class="btn btn-dark">Cancel</button>
            </form>
          </div>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
  // import Spinner from 'vue-spinkit'

  export default {
    name: 'AddCategory',
    components: {
      // Spinner
    },
    data: function () {
      return {
        category: {},
        loading: false
      }
    },
    methods: {
      storeCategory: function (e) {
        e.preventDefault()
        let self = this
        self.loading = true
        self.$validator.validateAll()
        self.$toastr.defaultPosition = 'toast-top-right'
        var data = self.category
        self.$store.dispatch('saveCategory', {data,
          success: function (response) {
            var result = response.body
            if (result.success === true || response.status === 201) {
              self.$toastr.s(result.message)
              self.loading = false
              self.category = {}
            }
          },
          error: (err) => {
            // console.log(error)
            self.responseMessage = err.body.message
            self.$toastr.e(self.responseMessage)
            self.loading = false
          }
        })
      }
    },
    computed: {
      curRouteName: function () {
        return this.$route.name
      },
    }
  }
</script>

<style scoped></style>
