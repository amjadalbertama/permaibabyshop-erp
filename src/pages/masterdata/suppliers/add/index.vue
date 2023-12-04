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
            <p class="card-description">Add your data Supplier</p>
            <!-- <div class="w-100 text-center">
              <h4 class="card-title">Still in Progress...</h4>
            </div> -->
            <form class="forms-sample" novalidate>
              <div class="row">
                <div class="col-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="company_name">Company Name</label>
                    <input type="text" class="form-control" id="company_name" placeholder="Type Your Category Name Here..." v-model="supplier.company_name" name="company_name" :class="{'is-invalid': errors.has('company_name')}" data-vv-name="company_name" v-validate data-vv-rules="required" />
                  </div>
                </div>
                <div class="col-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="agency_name">Agency Name</label>
                    <input type="text" class="form-control" id="agency_name" placeholder="Type Your Category Name Here..." v-model="supplier.agency_name" name="agency_name" :class="{'is-invalid': errors.has('agency_name')}" data-vv-name="agency_name" v-validate data-vv-rules="required" />
                  </div>
                </div>
                <div class="col-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="account_number">Account Number</label>
                    <input type="text" class="form-control" id="account_number" placeholder="Type Your Category Name Here..." v-model="supplier.account_number" name="account_number" :class="{'is-invalid': errors.has('account_number')}" data-vv-name="account_number" v-validate data-vv-rules="required" />
                  </div>
                </div>
                <div class="col-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="tax_id">Tax ID</label>
                    <input type="text" class="form-control" id="tax_id" placeholder="Type Your Category Name Here..." v-model="supplier.tax_id" name="tax_id" :class="{'is-invalid': errors.has('tax_id')}" data-vv-name="tax_id" v-validate data-vv-rules="required" />
                  </div>
                </div>
                <div class="col-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Type Your Category Name Here..." v-model="supplier.email" name="email" :class="{'is-invalid': errors.has('email')}" data-vv-name="email" v-validate data-vv-rules="required" />
                  </div>
                </div>
                <div class="col-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id="phone" placeholder="Type Your Category Name Here..." v-model="supplier.phone" name="phone" :class="{'is-invalid': errors.has('phone')}" data-vv-name="phone" v-validate data-vv-rules="required" />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary me-2" v-on:click="storeSupplier">Submit</button>
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
    name: 'AddSupplier',
    components: {
      // Spinner
    },
    data: function () {
      return {
        loading: false,
        supplier: {}
      }
    },
    methods: {
      storeSupplier: function (e) {
        e.preventDefault()
        let self = this
        self.loading = true
        self.$validator.validateAll()
        self.$toastr.defaultPosition = 'toast-top-right'
        var data = self.supplier
        self.$store.dispatch('saveSupplier', {data,
          success: function (response) {
            var result = response.body
            if (result.success === true || response.status === 201) {
              self.$toastr.s(result.message)
              self.loading = false
              self.supplier = {}
            }
          },
          error: (err) => {
            // console.log(error)
            self.responseMessage = err.body.message
            self.$toastr.e(self.responseMessage)
            self.loading = false
          }
        })
      },
    },
    computed: {
      curRouteName: function () {
        return this.$route.name
      },
    }
  }
</script>

<style scoped></style>
