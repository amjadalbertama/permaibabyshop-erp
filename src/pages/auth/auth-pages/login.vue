<template>
  <section class="login">
    <div class="loading-overlay" v-if="loading">
      <!-- <div class="loading-center">
        <Spinner name="cube-grid" color="#0cf24d" />
      </div> -->
      <div class="loader-demo-box">
        <div class="flip-square-loader mx-auto"></div>
      </div>
    </div>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="row w-100">
          <div class="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div class="card col-lg-4 mx-auto">
              <div class="card-body px-5 py-5">
                <h3 class="card-title text-start mb-3">Login</h3>
                <form class="" novalidate>
                  <div class="form-group">
                    <label>Username or email *</label>
                    <input type="email" class="form-control form-control-lg p_input" :class="{'is-invalid': errors.has('email')}" id="email" placeholder="Email" v-model="user.email" name="email" data-vv-name="email" v-validate data-vv-rules="required|email">
                    <label id="email-error" class="error mt-2 text-danger" for="email">{{ errors.first('email') }}</label>
                  </div>
                  <div class="form-group">
                    <label>Password *</label>
                    <input type="password" class="form-control form-control-lg p_input" :class="{'is-invalid': errors.has('password')}" placeholder="Password" v-model="user.password" id="password" name="password" data-vv-name="password" v-validate data-vv-rules="required|min:6">
                    <label id="password-error" class="error mt-2 text-danger" for="password">{{ errors.first('password') }}</label>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input">
                        Keep me signed in
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <a href="javascript:void(0);" class="auth-link text-info">Forgot password?</a>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-block enter-btn w-100" v-on:click="doLogin">Login</button>
                  </div>
                </form>
                <p class="sign-up">Don't have an Account?<a href="#"> Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import Spinner from 'vue-spinkit'
  import { mapGetters } from 'vuex'

  export default {
    name: 'login',
    components: {
      // Spinner
    },
    data: function () {
      return {
        user: {},
        loading: false
      }
    },
    created () {
      this.$store.dispatch('getMeh')
    },
    methods: {
      doLogin: function (e) {
        e.preventDefault()
        let self = this
        this.loading = true
        this.$validator.validateAll()
        this.$toastr.defaultPosition = 'toast-top-right'
        var data = {
          email: self.user.email,
          password: self.user.password,
          role: "superadmin"
        }
        this.$store.dispatch('login', {data,
          success: function (response) {
            self.loading = false
            var theLogin = response.body
            if (theLogin.success === true) {
              self.$toastr.s('Berhasil login!')
              self.$router.push('/')
            } else {
              self.responseMessage = 'Email / password kamu kurang tepat'
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
      ...mapGetters([
        'loggedIn',
        'credentials',

      ]),
    },
    watch: {}
  }
</script>

<style></style>
