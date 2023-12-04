<template>
  <section class="add-branch">
    <div class="loading-overlay" v-if="loading">
      <div class="loader-demo-box">
        <div class="flip-square-loader mx-auto"></div>
      </div>
      <!-- <div class="loading-center">
        <Spinner name="cube-grid" color="#0cf24d" />
      </div> -->
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
            <p class="card-description">Add your retail branch</p>
            <form class="forms-sample">
              <div class="form-group">
                <label for="branch_name">Name</label>
                <input type="text" class="form-control" id="branch_name" placeholder="Type Your Branch Name Here..." v-model="branch.name" name="branch_name" :class="{'is-invalid': errors.has('branch_name')}" data-vv-name="branch_name" v-validate data-vv-rules="required" />
                <label id="branch-error" class="error mt-2 text-danger" for="branch_name">{{ errors.first('branch_name') }}</label>
              </div>
              <button type="submit" class="btn btn-primary me-2" v-on:click="storeBranch">Submit</button>
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
    name: 'NewBranchs',
    components: {
      // Spinner
    },
    data: function () {
      return {
        branch: {},
        loading: false
      }
    },
    methods: {
      storeBranch: function (e) {
        e.preventDefault()
        let self = this
        self.loading = true
        self.$validator.validateAll()
        self.$toastr.defaultPosition = 'toast-top-right'
        var data = self.branch
        self.$store.dispatch('saveBranch', {data,
          success: function (response) {
            var result = response.body
            if (result.success === true || response.status === 201) {
              self.$toastr.s(result.message)
              self.loading = false
              self.branch = {}
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
      }
    }
  }
</script>

<style scoped></style>
