<template>
  <section class="add-pack">
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
            <p class="card-description">Add your data pack</p>
            <form class="forms-sample">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control p_input" id="name" placeholder="Type Your User Name Here..." v-model="user.name" name="name" :class="{'is-invalid': errors.has('name')}" data-vv-name="name" v-validate data-vv-rules="required" />
                <label id="pack-error" class="error mt-2 text-danger d-none" for="name">{{ errors.first('name') }}</label>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control p_input" :class="{'is-invalid': errors.has('email')}" id="email" placeholder="Type Your User Email Here..." v-model="user.email" name="email" data-vv-name="email" v-validate data-vv-rules="required|email">
                <label id="email-error" class="error mt-2 text-danger d-none" for="email">{{ errors.first('email') }}</label>
              </div>
              <div class="form-group">
                <label for="role">Role</label>
                <select class="form-control p_input" id="role" :class="{'is-invalid': errors.has('role')}" placeholder="Choose Your User Role Here..." v-model="user.role" name="role_id" data-vv-name="role" v-validate data-vv-rules="required">
                  <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.name }}</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary me-2">Submit</button>
              <button class="btn btn-dark">Cancel</button>
            </form>
          </div>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
  import Spinner from 'vue-spinkit'

  export default {
    name: 'AddUser',
    components: {
      Spinner
    },
    data: function () {
      return {
        user: {},
        loading: false,
        roles: [
          {
            id: 1,
            name: "Super Admin"
          },
          {
            id: 2,
            name: "Admin"
          },
          {
            id: 3,
            name: "Manager"
          },
          {
            id: 4,
            name: "Supervisor"
          },
          {
            id: 5,
            name: "Staff"
          },
          {
            id: 6,
            name: "Warehouse"
          },
          {
            id: 7,
            name: "Finance/Accounting"
          }
        ]
      }
    },
    methods: {},
    computed: {
      curRouteName: function () {
        return this.$route.name
      },
    },
    watch: {}
  }
</script>

<style scoped></style>
