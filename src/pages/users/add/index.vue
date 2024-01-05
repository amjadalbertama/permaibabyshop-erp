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
            <form class="forms-sample row">
              <div class="col-6 col-md-6 col-sm-12 col-xs-12 form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control p_input" id="name" placeholder="Type Your User Name Here..." v-model="user.name" name="name" :class="{'is-invalid': errors.has('name')}" data-vv-name="name" v-validate data-vv-rules="required" />
                <label id="pack-error" class="error mt-2 text-danger d-none" for="name">{{ errors.first('name') }}</label>
              </div>
              <div class="col-6 col-md-6 col-sm-12 col-xs-12 form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control p_input" :class="{'is-invalid': errors.has('email')}" id="email" placeholder="Type Your User Email Here..." v-model="user.email" name="email" data-vv-name="email" v-validate data-vv-rules="required|email">
                <label id="email-error" class="error mt-2 text-danger d-none" for="email">{{ errors.first('email') }}</label>
              </div>
              <div class="col-6 col-md-6 col-sm-12 col-xs-12 form-group">
                <label>Password *</label>
                <input type="password" class="form-control form-control-lg p_input" :class="{'is-invalid': errors.has('password')}" placeholder="Password" v-model="user.password" id="password" name="password" data-vv-name="password" v-validate data-vv-rules="required|min:6">
                <label id="password-error" class="error mt-2 text-danger" for="password">{{ errors.first('password') }}</label>
              </div>
              <div class="col-6 col-md-6 col-sm-12 col-xs-12 form-group">
                <label>Confirmation Password *</label>
                <input type="password" class="form-control form-control-lg p_input" :class="{'is-invalid': errors.has('password_confirmation')}" placeholder="Confirm Password" v-model="user.password_confirmation" id="password_confirmation" name="password_confirmation" data-vv-name="password_confirmation" v-validate data-vv-rules="required|min:6">
                <label id="password_confirmation-error" class="error mt-2 text-danger" for="password_confirmation">{{ errors.first('password_confirmation') }}</label>
              </div>
              <div class="col-6 col-md-6 col-sm-12 col-xs-12 form-group">
                <label for="role">Role</label>
                <select class="form-control p_input" id="role" :class="{'is-invalid': errors.has('role')}" placeholder="Choose Your User Role Here..." v-model="user.role" name="role_id" data-vv-name="role" v-validate data-vv-rules="required">
                  <option v-for="r in roles" :key="r.id" :value="r.name">{{ r.name }}</option>
                </select>
              </div>
              <div class="col-12 col-md-12 col-sm-12 col-xs-12">
                <button type="submit" class="btn btn-primary me-2" @click="storeUser">Submit</button>
                <button class="btn btn-dark">Cancel</button>
              </div>
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
    name: 'AddUser',
    components: {
      // Spinner
    },
    data: function () {
      return {
        user: {
          role: "manager"
        },
        loading: false,
        roles: []
      }
    },
    created () {
      this.getListRoles()
    },
    methods: {
      storeUser: function (e) {
        e.preventDefault()
        let self = this
        self.loading = true
        self.$validator.validateAll()
        self.$toastr.defaultPosition = 'toast-top-right'
        var data = self.user
        self.$store.dispatch('saveUser', {data,
          success: function (response) {
            var result = response.body
            if (result.success === true || response.status === 201) {
              self.$toastr.s(result.message)
              self.loading = false
              self.user = {}
            } else {
              console.log(result)
              self.$toastr.e(result.message)
              self.loading = false
            }
          },
          error: (err) => {
            // console.log(error)
            self.loading = true
            self.responseMessage = err.message
            self.$toastr.e(self.responseMessage)
            self.loading = false
          }
        })
      },
      getListRoles: function () {
        let self = this
        this.$store.dispatch('getRoles', {
          success: function (res) {
            var listData = res.body.data
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                if (listData[i].name !== "superadmin") {
                  self.roles.push(listData[i])
                }
              }
            }
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
    },
    computed: {
      curRouteName: function () {
        return this.$route.name
      },
    },
    watch: {}
  }
</script>

<style scoped></style>
