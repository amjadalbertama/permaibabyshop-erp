<template>
  <section class="packs">
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
            <template v-if="listDataUsers.length === 0">
              <data-table :values="listUsers" :columns="columns"></data-table>
            </template>
            <template v-else>
              <data-table :values="listDataUsers" :columns="columns"></data-table>
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
import moment from 'moment'

  export default {
    name: 'UsersList',
    components: {
      DataTable
    },
    created () {
      this.getListUsers()
    },
    data: function () {
      return {
        columns: [
          {
            'data': 'name',
            'names': 'Name'
          },
          {
            'data': 'email',
            'names': 'Email'
          },
          {
            'data': 'role.name',
            'names': 'Role'
          },
          {
            'data': 'created_at',
            'names': 'Created At',
            render: function (data, type) {
              if (type === 'display') {
                return moment(data.created_at).format("DD MMMM YYYY HH:MM:SS")
              }

              return data
            }
          }
        ],
        listDataUsers: []
      }
    },
    methods: {
      getListUsers: function () {
        let self = this
        self.$store.dispatch('getUsers', {
          success: function (res) {
            var listData = res.body.data
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                self.listDataUsers.push(listData[i])
              }
            } else {
              self.listDataUsers = []
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
        'listUsers'
      ])
    }
  }
</script>

<style scoped></style>