<template>
  <section class="branchs">
    <div class="page-header">
      <h3 class="page-title">{{ $route.name }}</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $route.name }}</li>
        </ol>
      </nav>
    </div>
    <div class="col-lg-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-6 col-md-6">
            </div>
            <div class="col-6 col-md-6 text-end">
              <router-link class="btn btn-success btn-md btn-icon-text" to="/branch/new">
                <i class="mdi mdi-plus"></i>
                New Branch
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <template v-if="listDataBranchs.length === 0">
              <data-table :values="listBranchs" :columns="columns"></data-table>
            </template>
            <template v-else>
              <data-table :values="listDataBranchs" :columns="columns"></data-table>
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
    name: 'Branchs',
    components: {
      DataTable
    },
    created () {
      this.getListBranchs()
    },
    data: function () {
      return {
        columns: [
          {
            'data': 'name',
            'names': 'Name',
          },
          {
            'data': 'type',
            'names': 'Type',
            render: function (data, type) {
              if (type === 'display') {
                let badges = ``
                if (data) {
                  badges = `<div class="badge badge-success">Active</div>`
                } else {
                  badges = `<div class="badge badge-danger">Not Active</div>`
                }

                return badges
              }

              return data
            }
          }
        ],
        listDataBranchs: []
      }
    },
    methods: {
      getListBranchs: function () {
        let self = this
        this.$store.dispatch('getBranch', {
          success: function (res) {
            var listData = res.body.data
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                self.listDataBranchs.push(listData[i])
              }
            }
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'listBranchs'
      ])
    }
  }
</script>

<style scoped></style>