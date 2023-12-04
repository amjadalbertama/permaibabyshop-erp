<template>
  <section class="add-pack">
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
            <p class="card-description">Add your data pack</p>
            <form class="forms-sample">
              <div class="form-group">
                <label for="pack_name">Name</label>
                <input type="text" class="form-control" id="pack_name" placeholder="Type Your Pack Name Here..." v-model="pack.name" name="pack_name" :class="{'is-invalid': errors.has('pack_name')}" data-vv-name="pack_name" v-validate data-vv-rules="required" />
                <label id="pack-error" class="error mt-2 text-danger" for="pack_name">{{ errors.first('pack_name') }}</label>
              </div>
              <div class="form-group">
                <label for="pack_qty">Quantities Per Pack</label>
                <input type="number" class="form-control" id="pack_qty" placeholder="Type Your Pack Quantity Here..." v-model="pack.quantities_per_pack" name="pack_qty" :class="{'is-invalid': errors.has('pack_qty')}" data-vv-name="pack_qty" v-validate data-vv-rules="required" @change="pack" />
                <label id="pack-error" class="error mt-2 text-danger" for="pack_qty">{{ errors.first('pack_qty') }}</label>
              </div>
              <button type="submit" class="btn btn-primary me-2" v-on:click="storePack">Submit</button>
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
    name: 'AddPacks',
    components: {
      // Spinner
    },
    data: function () {
      return {
        pack: {},
        loading: false
      }
    },
    methods: {
      storePack: function (e) {
        e.preventDefault()
        let self = this
        self.loading = true
        self.$validator.validateAll()
        self.$toastr.defaultPosition = 'toast-top-right'
        var data = self.pack
        self.$store.dispatch('savePack', {data,
          success: function (response) {
            var result = response.body
            if (result.success === true || response.status === 201) {
              self.$toastr.s(result.message)
              self.loading = false
              self.pack = {}
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
    },
    watch: {
      pack: function (newVal) {
        console.log(newVal)
        if (newVal <= 0) {
          return this.pack.quantities_per_pack = 0
        }
      }
    }
  }
</script>

<style scoped></style>
