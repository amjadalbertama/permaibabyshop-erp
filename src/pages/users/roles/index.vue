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
            <data-table :values="listRoles" :columns="columns"></data-table>
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
    name: 'Users List',
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
        ],
        listRoles: [
          {
            "id": 1,
            "name": "Super Admin"
          },
          {
            "id": 2,
            "name": "Admin"
          },
          {
            "id": 3,
            "name": "Manager"
          },
          {
            "id": 4,
            "name": "Supervisor"
          },
          {
            "id": 5,
            "name": "Staff"
          },
          {
            "id": 6,
            "name": "Warehouse"
          },
          {
            "id": 7,
            "name": "Finance/Accounting"
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