<template>
  <section class="distributionIn">
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
            <h4 class="card-title">Distribution In</h4>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12 mb-3">
                <div class="row">
                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                    
                  </div>
                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                    
                  </div>
                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                    
                  </div>
                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                    <form class="" novalidate onsubmit="return false">
                      <div class="d-flex align-items-center">
                        <label class="p-2">Search: </label>
                        <b-input-group class="mx-auto">
                          <b-form-input v-model="search"></b-form-input>
                          <b-input-group-append>
                            <b-button variant="info" class="btn-md-custom"><i class="mdi mdi-magnify"></i></b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-xs-12">
                <div class="row">
                  <div class="col-12 col-md-12 col-xs-12">
                    <b-table :items="listDataDi" :fields="fields" :busy="isBusy" class="mt-3" responsive bordered hover id="di-table" sort-icon-right>
                      <template #table-busy>
                        <div class="text-center text-danger my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>Loading...</strong>
                        </div>
                      </template>

                      <template #cell(id)="data">
                        <span class="text-white">{{ data.item.id }}</span>
                      </template>
                      <template #cell(di_number)="data">
                        <span class="text-white">{{ data.item.di_number }}</span>
                      </template>
                      <template #cell(po_number)="data">
                        <span class="text-white" v-if="data.item.purchase_order !== null">{{ data.item.purchase_order.po_number }}</span>
                        <span class="text-white" v-else>-</span>
                      </template>
                      <template #cell(do_number)="data">
                        <span class="text-white" v-if="data.item.distribution_out !== null">{{ data.item.distribution_out.do_number }}</span>
                        <span class="text-white" v-else>-</span>
                      </template>
                      <template #cell(branch)="data">
                        <span class="text-white" v-if="data.item.branch !== null">{{ data.item.branch.name }}</span>
                        <span class="text-white" v-else>-</span>
                      </template>
                      <!-- <template #cell(type)="data">
                        <span class="text-white">{{ data.item.type }}</span>
                      </template> -->
                      <template #cell(status)="data">
                        <template v-if="data.item.status === false">
                          <div class="badge badge-danger badge-pill">Unpaid</div>
                        </template>
                        <template v-else>
                          <div class="badge badge-success badge-pill">Paid</div>
                        </template>
                      </template>
                      <template #cell(is_print)="data">
                        <template v-if="data.item.is_print === false">
                          <button type="button" class="btn btn-social-icon btn-block btn-primary"><i class="mdi mdi-printer"></i></button>
                        </template>
                        <template v-else>
                          <button type="button" class="btn btn-social-icon btn-block btn-primary" disabled><i class="mdi mdi-printer"></i></button>
                        </template>
                      </template>
                      <template #cell(action)="data">
                        <router-link class="btn btn-info btn-md mx-2" :to="'/distributions/in/detail/' + data.item.distribution_in_id">View</router-link>
                      </template>
                    </b-table>
                  </div>
                  <div class="col-12 col-md-12 col-xs-12 mt-3">
                    <b-pagination
                      align="right"
                      v-model="$route.params.page"
                      :total-rows="dataDi.total"
                      :per-page="limit"
                      aria-controls="di-table"
                      @input="getListDi"
                    ></b-pagination>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 col-md-12 col-xs-12">
              <div class="table-responsive mb-3">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th># ID</th>
                      <th>Distribution In Number</th>
                      <th>Purchase Order Number</th>
                      <th>Distribution Out Number</th>
                      <th>Branch</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Printed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="listDataDi.length !== 0">
                      <tr v-for="lp in listDataDi" :key="lp.distribution_in_id">
                        <td class="text-white">{{ lp.id }}</td>
                        <td class="text-white">{{ lp.di_number }}</td>
                        <td class="text-white" v-if="lp.purchase_order !== null">{{ lp.purchase_order.po_number }}</td>
                        <td class="text-white" v-else></td>
                        <td class="text-white" v-if="lp.distribution_out !== null">{{ lp.distribution_out.do_number }}</td>
                        <td class="text-white" v-else>-</td>
                        <td class="text-white" v-if="lp.branch !== null">{{ lp.branch.name }}</td>
                        <td class="text-white" v-else>{{ lp.branch_id }}</td>
                        <td class="text-white">{{ lp.type }}</td>
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
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
              <nav class="mb-3">
                <paginationtable :page="curPage" :path="'/distributions/di/list/'" :total-page="dataDi.last_page"></paginationtable>
              </nav>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import { mapGetters } from 'vuex'
  // import paginationtable from '@/components/paginations/PaginationTable'

  export default {
    name: 'DistributionIn',
    components: {
      // paginationtable
    },
    mounted () {
      this.getListDi()
    },
    data: function () {
      return {
        columns: [
          {
            "data": "distribution_in_id",
            "names": "Distribution In ID"
          },
          {
            "data": "di_number",
            "names": "Distribution In Number"
          },
          {
            "data": "purchase_order_id",
            "names": "Purchase Order ID"
          },
          {
            "data": "distribution_out_id",
            "names": "Distribution Out ID"
          },
          {
            "data": "branch_id",
            "names": "ID Branch"
          },
          // {
          //   "data": "type",
          //   "names": "Type"
          // },
          {
            "data": "status",
            "names": "Status"
          },
          {
            "data": "is_print",
            "names": "Printed?"
          }
        ],
        fields: [
          {
            "key": "id",
            "label": "#ID"
          },
          {
            "key": "di_number",
            "label": "Distribution In Number"
          },
          {
            "key": "po_number",
            "label": "Purchase Order Number"
          },
          {
            "key": "do_number",
            "label": "Distribution Out Number"
          },
          {
            "key": "branch",
            "label": "Branch"
          },
          // {
          //   "key": "type",
          //   "label": "Type"
          // },
          {
            "key": "status",
            "label": "Status"
          },
          {
            "key": "is_print",
            "label": "Printed?"
          },
          {
            "key": "action",
            "label": "Action"
          }
        ],
        listDataDi: [],
        dataDi: {},
        limit: 10,
        sortKey: '',
        sortOrder: 1,
        reverse: false,
        search: '',
        isBusy: false,
        totalData: 0,
      }
    },
    methods: {
      getListDi: function () {
        let self = this
        self.isBusy = true
        var params = {
          page: self.$route.params.page,
          order: "desc",
          order_by: "created_at",
          limit: self.limit
          // search: self.search !== '' ? self.search : ''
        }
        self.listDataDi = []
        this.$store.dispatch('getDistributionIn', {params,
          success: function (res) {
            self.isBusy = false
            self.dataDi = res.body.data
            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                listData[i].id = startIndex + i
                self.listDataDi.push(listData[i])
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
        self.isBusy = true
        var params = {
          page: curPage,
          order: "desc",
          order_by: "created_at",
          limit: self.limit
        }
        self.listDataDi = []
        this.$store.dispatch('getDistributionIn', {params,
          success: function (res) {
            self.isBusy = false
            self.dataProducts = res.body.data
            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                listData[i].id = startIndex + i
                self.listDataDi.push(listData[i])
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