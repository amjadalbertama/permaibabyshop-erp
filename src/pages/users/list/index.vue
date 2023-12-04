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
            <!-- <template v-if="listDataPacks.length === 0">
              <data-table :values="listPacks" :columns="columns"></data-table>
            </template>
            <template v-else>
              <data-table :values="listDataPacks" :columns="columns"></data-table>
            </template> -->
            <data-table :values="listUsers" :columns="columns"></data-table>
          </div>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
  // import { mapGetters } from 'vuex'
  import DataTable from '@/components/tables/datatables'

  export default {
    name: 'UsersList',
    components: {
      DataTable
    },
    created () {
      // this.getListPacks()
    },
    data: function () {
      return {
        columns: [
          {
            'data': 'id',
            'names': 'ID'
          },
          {
            'data': 'name',
            'names': 'Name'
          },
          {
            'data': 'email',
            'names': 'Email'
          },
          {
            'data': 'role',
            'names': 'Role'
          },
          {
            'data': 'created_at',
            'names': 'Created At'
          }
        ],
        listUsers: [
          {
            "id": "ecd41eb4-b164-483e-94ee-030ad2ac010d",
            "name": "Super Admin",
            "email": "sadmin@example.com",
            "role": "Super Admin",
            "created_at": "2023-09-18 14:09:26.000"
          }
        ]
      }
    },
    methods: {
      // getListPacks: function () {
      //   let self = this
      //   this.$store.dispatch('getPacks', {
      //     success: function (res) {
      //       var listData = res.body.data
      //       if (listData.length != 0) {
      //         for (var i = 0; i < listData.length; i++) {
      //           self.listDataPacks.push(listData[i])
      //         }
      //       }
      //     },
      //     error: (err) => {
      //       console.log(err)
      //     }
      //   })
      // }
    },
    computed: {
      // ...mapGetters([
      //   'listPacks'
      // ])
    }
  }
</script>

<style scoped></style>