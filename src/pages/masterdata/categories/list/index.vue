<template>
  <section class="categories">
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
                <router-link class="btn btn-success btn-md btn-icon-text" to="/products/categories/new">
                  <i class="mdi mdi-plus"></i>
                  New Category
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <template v-if="listDataCategories.length === 0">
              <data-table :values="listCategories" :columns="columns"></data-table>
            </template>
            <template v-else>
              <data-table :values="listDataCategories" :columns="columns"></data-table>
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
    name: 'Categories',
    components: {
      DataTable
    },
    created () {
      this.getListCategories()
    },
    data: function () {
      return {
        columns: [
          {
            'data': 'category_name',
            'names': 'Name'
          },
          {
            'data': 'parent_id',
            'names': 'Parent ID'
          }
        ],
        listDataCategories: []
      }
    },
    methods: {
      getListCategories: function () {
        let self = this
        this.$store.dispatch('getCategories', {
          success: function (res) {
            var listData = res.body.data
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                self.listDataCategories.push(listData[i])
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
        'listCategories'
      ])
    }
  }
</script>

<style scoped></style>