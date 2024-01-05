<template>
  <section class="stocks">
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
            <h4 class="card-title no-margin">Stock Reports</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <form class="row align-items-center" novalidate onsubmit="return false">
              <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="branch">Cabang / Gudang</label>
                  <select class="form-control p_input" id="branch" :class="{'is-invalid': errors.has('branch')}" placeholder="Choose Your Branch Here..." v-model="branch_id" name="branch_id" data-vv-name="branch" v-validate data-vv-rules="required">
                    <option disabled :value="null">--- Pilih Gudang ---</option>
                    <option v-for="br in listBranchs" :key="br.branch_id" :value="br.branch_id">{{ br.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                <button type="submit" class="btn btn-primary me-2 p-2" @click="getListProducts">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card" v-if="listDataProducts.length != 0">
        <div class="card">
          <div class="card-body">
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
                            <b-button variant="info" class="btn-md-custom" @click="getListProducts"><i class="mdi mdi-magnify"></i></b-button>
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
                    <b-table :items="listDataProducts" :fields="fields" :busy="isBusy" class="mt-3" responsive bordered hover id="list-product-table" sort-icon-right head-variant="success">
                      <template #table-busy>
                        <div class="text-center text-danger my-2">
                          <b-spinner class="align-middle"></b-spinner>
                          <strong>Loading...</strong>
                        </div>
                      </template>

                      <template #cell(id)="data">
                        <span class="text-white">{{ data.item.id }}</span>
                      </template>
                      <template #cell(name)="data">
                        <span class="text-white">{{ data.item.name }}</span>
                      </template>
                      <template #cell(sku)="data">
                        <span class="text-white">{{ data.item.sku }}</span>
                      </template>
                      <template #cell(default_purchase_price)="data">
                        <span class="text-white">Rp {{ formatPrice(data.item.default_purchase_price) }}</span>
                      </template>
                      <template #cell(default_unit_price)="data">
                        <span class="text-white">Rp {{ formatPrice(data.item.default_unit_price) }}</span>
                      </template>
                      <template #cell(category)="data">
                        <span class="text-white">{{ data.item.category.category_name }}</span>
                      </template>
                      <template #cell(pack)="data">
                        <span class="text-white">{{ data.item.pack.pack_name }}</span>
                      </template>
                      <template #cell(action)="data">
                        <button class="btn btn-info btn-md mx-2" v-b-modal.modal-product @click="viewStock(data.item)">View Stock</button>
                      </template>
                    </b-table>
                  </div>
                  <div class="col-12 col-md-12 col-xs-12 mt-3">
                    <b-pagination
                      align="right"
                      v-model="page"
                      :total-rows="totalData"
                      :per-page="limit"
                      aria-controls="list-product-table"
                      @input="getListProducts"
                    ></b-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-product" :title="selectedProduct.name" v-if="selectedProduct != null">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Branch Name</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="qty in selectedProduct.product_quantities" :key="qty.product_id">
              <td scope="col" class="text-white">{{ qty.branch.branch_name }}</td>
              <td scope="col" class="text-white">Stock</td>
              <td scope="col" class="text-white">{{ qty.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <template #modal-footer>
        <div class="w-100">
          <b-button class="btn btn-danger text-white float-right" @click="hideModal">Close</b-button>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  // import paginationtable from '@/components/paginations/PaginationTable'

  export default {
    name: 'Stocks',
    components: {
      // paginationtable,
    },
    mounted () {
      // this.getListProducts()
    },
    data: function () {
      return {
        branch_id: null,
        fields: [
          {
            'key': 'id',
            // sortable: true,
            'label': '#ID'
          },
          {
            'key': 'name',
            // sortable: true,
            'label': 'Name'
          },
          {
            'key': 'sku',
            // sortable: true,
            'label': 'sku'
          },
          {
            'key': 'default_purchase_price',
            // sortable: true,
            'label': 'Purchase Price'
          },
          {
            'key': 'default_unit_price',
            // sortable: true,
            'label': 'Unit Price'
          },
          {
            'key': 'category',
            // sortable: true,
            'label': 'Category'
          },
          {
            'key': 'pack',
            // sortable: true,
            'label': 'Pack'
          },
          // {
          //   'key': 'is_active',
          //   // sortable: true,
          //   'label': 'Is Active?'
          // },
          {
            'key': 'action',
            // sortable: true,
            'label': 'Action'
          },
        ],
        listDataProducts: [],
        dataProducts: {},
        limit: 10,
        sortKey: '',
        sortOrder: 1,
        reverse: false,
        search: '',
        isBusy: false,
        totalData: 0,
        page: 1,
        selectedProduct: null,
      }
    },
    methods: {
      getListProducts: function (e) {
        e.preventDefault()
        let self = this
        self.isBusy = true
        var params = {
          page: self.page,
          order: "desc",
          // order_by: "created_at",
          search: self.search !== '' ? self.search : '',
          branch_id: self.branch_id != null ? self.branch_id : ""
        }
        self.listDataProducts = []
        this.$store.dispatch('getProducts', {params,
          success: function (res) {
            self.isBusy = false
            self.dataProducts = res.body.data
            self.totalData = self.dataProducts.total

            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                // if (self.page == 1) {
                //   listData[i].id = startIndex + i
                // }
                listData[i].id = startIndex + i
                self.listDataProducts.push(listData[i])
              }
            }
          },
          error: (err) => {
            if (err.success === false && err.message === "Unauthorised") {
              // self.$router.push('/auth-pages/login')
            }
          }
        })
      },
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      viewStock: function (item) {
        this.selectedProduct = item
      },
      hideModal() {
        this.$root.$emit('bv::hide::modal', 'modal-product', '#btnShow')
      },
      // sortBy(key) {
      //   if (this.sortKey === key) {
      //     this.sortOrder = -this.sortOrder; // Toggle the sort order if the same column is clicked
      //   } else {
      //     this.sortKey = key;
      //     this.sortOrder = 1; // Default to ascending order for a new column
      //   }
      // },
      // toggleBusy() {
      //   this.isBusy = !this.isBusy
      // }
    },
    computed: {
      ...mapGetters([
        'listBranchs',
        'loggedIn',
      ]),
      curPage: function () {
        return this.page
      },
      // sortedItems() {
      //   const key = this.sortKey
      //   const order = this.sortOrder

      //   return this.listDataProducts.slice().sort((a, b) => {
      //     if (a[key] > b[key]) return order
      //     if (a[key] < b[key]) return -order
      //     return 0;
      //   });
      // }
    },
    watch: {
      curPage: function (curPage) {
        let self = this
        var params = {
          page: curPage,
          order: "desc",
          // order_by: "created_at",
          search: self.search !== '' ? self.search : '',
          branch_id: self.branch_id != null ? self.branch_id : ""
        }
        self.listDataProducts = []
        this.$store.dispatch('getProducts', {params,
          success: function (res) {
            self.dataProducts = res.body.data
            var listData = res.body.data.data
            var startIndex = (params.page - 1) * self.limit + 1
            // var endIndex = Math.min(startIndex + self.limit - 1, startIndex + listData.length - 1)
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                listData[i].id = startIndex + i
                self.listDataProducts.push(listData[i])
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

<style></style>
