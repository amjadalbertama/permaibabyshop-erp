<template>
  <section class="products">
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
            <h4 class="card-title">Purchase Orders</h4>
            <!-- <div class="table-responsive mb-3">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>PO Number</th>
                    <th>Supplier Name</th>
                    <th>Branch Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="listDataPo.length !== 0">
                    <tr v-for="lp in listDataPo" :key="lp.purchase_order_id">
                      <td class="text-white">{{ lp.id }}</td>
                      <td class="text-white">{{ lp.po_number }}</td>
                      <td class="text-white">{{ lp.supplier.company_name }}</td>
                      <td class="text-white">{{ lp.branch.name }}</td>
                      <td class="">
                        <template v-if="lp.status === false">
                          <div class="badge badge-danger badge-pill">Unpaid</div>
                        </template>
                        <template v-else>
                          <div class="badge badge-success badge-pill">Paid</div>
                        </template>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <nav class="mb-3">
              <paginationtable :page="curPage" :path="'/distributions/po/list/'" :total-page="dataPo.last_page"></paginationtable>
            </nav> -->
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <div class="row">
                  <div class="col-12 col-md-12 col-xs-12">
                    <b-table :items="listDataPo" :fields="fields" :busy="isBusy" class="mt-3" responsive bordered hover id="po-table" sort-icon-right head-variant="success">
                      <template #table-busy>
                        <div class="text-center text-danger my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>Loading...</strong>
                        </div>
                      </template>

                      <template #cell(id)="data">
                        <span class="text-white">{{ data.item.id }}</span>
                      </template>
                      <template #cell(po_number)="data">
                        <span class="text-white">{{ data.item.po_number }}</span>
                      </template>
                      <template #cell(supplier_name)="data">
                        <span class="text-white">{{ data.item.supplier.company_name }}</span>
                      </template>
                      <template #cell(branch_name)="data">
                        <span class="text-white">{{ data.item.branch.name }}</span>
                      </template>
                      <template #cell(status)="data">
                        <template v-if="data.item.status === false">
                          <div class="badge badge-danger badge-pill">Unpaid</div>
                        </template>
                        <template v-else>
                          <div class="badge badge-success badge-pill">Paid</div>
                        </template>
                      </template>
                      <template #cell(action)>
                        <button class="btn btn-warning btn-md mx-2">View</button>
                      </template>
                    </b-table>
                  </div>
                  <div class="col-12 col-md-12 col-xs-12 mt-3">
                    <b-pagination
                      align="right"
                      v-model="$route.params.page"
                      :total-rows="totalData"
                      :per-page="limit"
                      aria-controls="po-table"
                      @input="getListPo"
                    ></b-pagination>
                  </div>
                </div>
              </div>
            </div>
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
    name: 'PurchaseOrder',
    components: {
      // paginationtable
    },
    mounted () {
      this.getListPo()
    },
    data: function () {
      return {
        columns: [
          {
            'data': 'po_number',
            'names': 'PO Number'
          },
          {
            'data': 'supplier.company_name',
            'names': 'Supplier Name'
          },
          {
            'data': 'branch.name',
            'names': 'Branch Name'
          },
          {
            'data': 'status',
            'names': 'Status'
          }
        ],
        fields: [
          {
            'key': 'id',
            // sortable: true,
            'label': '#ID'
          },
          {
            'key': 'po_number',
            // sortable: true,
            'label': 'PO Number'
          },
          {
            'key': 'supplier_name',
            // sortable: true,
            'label': 'Supplier Name'
          },
          {
            'key': 'branch_name',
            // sortable: true,
            'label': 'Branch Name'
          },
          {
            'key': 'status',
            // sortable: true,
            'label': 'Status'
          },
          {
            'key': 'action',
            // sortable: true,
            'label': 'Action'
          }
        ],
        listDataPo: [],
        dataPo: {},
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
      getListPo: function () {
        let self = this
        self.isBusy = true
        var params = {
          page: self.$route.params.page,
          order: "desc",
          order_by: "created_at"
        }
        self.listDataPo = []
        this.$store.dispatch('getPurchaseOrder', {params,
          success: function (res) {
            self.isBusy = false
            self.dataPo = res.body.data
            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                listData[i].id = startIndex + i
                self.listDataPo.push(listData[i])
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
      curRouteName: function () {
        return this.$route.name
      },
      curPage: function (curPage) {
        let self = this
        self.isBusy = true
        var params = {
          page: curPage,
          order: "desc",
          order_by: "created_at"
        }
        self.listDataPo = []
        this.$store.dispatch('getPurchaseOrder', {params,
          success: function (res) {
            self.isBusy = false
            self.dataPo = res.body.data
            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                listData[i].id = startIndex + i
                self.listDataPo.push(listData[i])
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