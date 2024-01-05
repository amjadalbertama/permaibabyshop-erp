<template>
  <section class="distributionOut">
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
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Distribution Out</h4>
            <div class="table-responsive mb-3">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th># ID</th>
                    <th>Distribution Out Number</th>
                    <th>Branch</th>
                    <th>Status</th>
                    <th>Printed</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="listDataDo.length !== 0">
                    <tr v-for="lp in listDataDo" :key="lp.distribution_out_id">
                      <td class="text-white">{{ lp.id }}</td>
                      <td class="text-white">{{ lp.do_number }}</td>
                      <td class="text-white" v-if="lp.branch !== null">{{ lp.branch.name }}</td>
                      <td class="text-white" v-else>{{ lp.branch_id }}</td>
                      <td class="">
                        <template v-if="lp.status === false">
                          <div class="badge badge-danger badge-pill">Unpaid</div>
                        </template>
                        <template v-else>
                          <div class="badge badge-success badge-pill">Paid</div>
                        </template>
                      </td>
                      <td class="text-white" v-if="lp.is_print === false">
                        <button type="button" class="btn btn-social-icon btn-block btn-primary"><i class="mdi mdi-printer"></i></button>
                      </td>
                      <td class="text-white" v-else>
                        <button type="button" class="btn btn-social-icon btn-block btn-primary" disabled><i class="mdi mdi-printer"></i></button>
                      </td>
                      <td>
                        <router-link class="btn btn-info btn-md mx-2" :to="'/distributions/out/detail/' + lp.distribution_out_id">View</router-link>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <nav class="mb-3">
              <paginationtable :page="curPage" :path="'/distributions/do/list/'" :total-page="dataDo.last_page"></paginationtable>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import { mapGetters } from 'vuex'
  import paginationtable from '@/components/paginations/PaginationTable'

  export default {
    name: 'DistributionOut',
    components: {
      paginationtable
    },
    mounted () {
      this.getListDo()
    },
    data: function () {
      return {
        columns: [
          {
            "data": "distribution_out_id",
            "names": "Distribution In ID"
          },
          {
            "data": "do_number",
            "names": "Distribution In Number"
          },
          {
            "data": "branch_id",
            "names": "ID Branch"
          },
          {
            "data": "status",
            "names": "Status"
          },
          {
            "data": "is_print",
            "names": "Printed?"
          },
          {
            "data": "action",
            "names": "Action"
          },
        ],
        listDataDo: [],
        dataDo: {},
        limit: 10
      }
    },
    methods: {
      getListDo: function () {
        let self = this
        var params = {
          page: self.$route.params.page,
          order: "desc",
          order_by: "created_at"
        }
        self.listDataDo = []
        this.$store.dispatch('getDistributionOut', {params,
          success: function (res) {
            self.dataDo = res.body.data
            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                listData[i].id = startIndex + i
                self.listDataDo.push(listData[i])
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
      curPage: function () {
        return parseInt(this.$route.params.page)
      }
    },
    watch: {
      curPage: function (curPage) {
        let self = this
        var params = {
          page: curPage,
          order: "desc",
          order_by: "created_at"
        }
        self.listDataDo = []
        this.$store.dispatch('getDistributionOut', {params,
          success: function (res) {
            self.dataProducts = res.body.data
            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                listData[i].id = startIndex + i
                self.listDataDo.push(listData[i])
              }
            }
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    }
  }
</script>

<style scoped></style>