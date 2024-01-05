<template>
  <section class="suppliers">
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
            <div class="row">
              <div class="col-6 col-md-6">
              </div>
              <div class="col-6 col-md-6 text-end">
                <router-link class="btn btn-success btn-md btn-icon-text" to="/supplier/new">
                  <i class="mdi mdi-plus"></i>
                  New Supplier
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <template v-if="listDataSupplier.length === 0">
              <data-table :values="listSupplier" :columns="columns"></data-table>
            </template>
            <template v-else>
              <data-table :values="listDataSupplier" :columns="columns"></data-table>
            </template>
          </div>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DataTable from '@/components/tables/datatables'

  export default {
    name: 'Supplier',
    components: {
      DataTable
    },
    created () {
      this.getListSupplier()
    },
    data: function () {
      return {
        columns: [
          {
            'data': 'company_name',
            'names': 'Company Name'
          },
          {
            'data': 'agency_name',
            'names': 'Agency Name'
          },
          {
            'data': 'phone',
            'names': 'Phone'
          },
          {
            'data': 'email',
            'names': 'Email'
          }
        ],
        listDataSupplier: []
      }
    },
    methods: {
      getListSupplier: function () {
        let self = this
        this.$store.dispatch('getSupplier', {
          success: function (res) {
            var listData = res.body.data
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                self.listDataSupplier.push(listData[i])
              }
            }
          },
          error: (err) => {
            if (err.success === false && err.message === "Unauthorised") {
              self.$router.push('/auth-pages/login')
            }
          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'listSupplier'
      ])
    }
  }
</script>

<style scoped></style>