<template>
  <section class="detail_po">
    <div class="loading-overlay" v-if="loading">
      <!-- <div class="loading-center">
        <Spinner name="cube-grid" color="#0cf24d" />
      </div> -->
      <div class="loader-demo-box">
        <div class="flip-square-loader mx-auto"></div>
      </div>
    </div>
    <div class="page-header">
      <h3 class="page-title">{{ $route.name }}</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $route.name }}</li>
        </ol>
      </nav>
    </div>
    <div class="row" v-if="po != null">
      <div class="col-lg-12">
        <div class="card px-2">
          <div class="card-body">
            <div class="container-fluid">
              <h3 class="text-end my-5">Purchase Order&nbsp;&nbsp;#INV-{{ po.purchase_order_id }}</h3>
              <hr>
            </div>
            <div class="container-fluid d-flex justify-content-between">
              <div class="col-lg-3 ps-0">
                <p class="mt-5 mb-2"><b>{{ po.po_number }}</b></p>
                <p>{{ po.branch.name }},<br>Minare SK,<br>Canada, K1A 0G9.</p>
              </div>
              <div class="col-lg-3 pe-0">
                <p class="mt-5 mb-2 text-end"><b>Purchase Order to</b></p>
                <p class="text-end">{{ po.supplier.company_name }},<br> C-201, Beykoz-34800,<br> Canada, K1A 0G9.</p>
              </div>
            </div>
            <div class="container-fluid d-flex justify-content-between">
              <div class="col-lg-3 ps-0">
                <p class="mb-0 mt-5">Purchase Order Date : {{ $moment(po.created_at).format("DD MMMM YYYY") }}</p>
                <p>Due Date : {{ $moment(po.updated_at).format("DD MMMM YYYY") }}</p>
              </div>
            </div>
            <div class="container-fluid mt-5 d-flex justify-content-center w-100">
              <div class="table-responsive w-100">
                <table class="table">
                  <thead>
                    <tr class="bg-dark text-white">
                      <th>#</th>
                      <th>Description</th>
                      <th class="text-start">Quantity</th>
                      <th class="text-start">Unit cost</th>
                      <th class="text-start">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-start">
                      <td class="text-white text-start">1</td>
                      <td class="text-white text-start">Brochure Design</td>
                      <td class="text-white text-start">2</td>
                      <td class="text-white text-start">$20</td>
                      <td class="text-white text-start">$40</td>
                    </tr>
                    <tr class="text-start">
                      <td class="text-white text-start">2</td>
                      <td class="text-white text-start">Web Design Packages(Template) - Basic</td>
                      <td class="text-white text-start">05</td>
                      <td class="text-white text-start">$25</td>
                      <td class="text-white text-start">$125</td>
                    </tr>
                    <tr class="text-start">
                      <td class="text-white text-start">3</td>
                      <td class="text-white text-start">Print Ad - Basic - Color</td>
                      <td class="text-white text-start">08</td>
                      <td class="text-white text-start">$500</td>
                      <td class="text-white text-start">$4000</td>
                    </tr>
                    <tr class="text-start">
                      <td class="text-white text-start">4</td>
                      <td class="text-white text-start">Down Coat</td>
                      <td class="text-white text-start">1</td>
                      <td class="text-white text-start">$5</td>
                      <td class="text-white text-start">$5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="container-fluid mt-5 w-100">
              <p class="text-end mb-2">Sub - Total amount: $12,348</p>
              <p class="text-end">vat (10%) : $138</p>
              <h4 class="text-end mb-5">Total : $13,986</h4>
              <hr>
            </div>
            <div class="container-fluid w-100">
              <a href="#" class="btn btn-primary float-right mt-4 ms-2"><i class="mdi mdi-printer me-1"></i>Print</a>
              <a href="#" class="btn btn-success float-right mt-4"><i class="mdi mdi-telegram me-1"></i>Send Purchase Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DetailPurchaseOrder',
    data() {
      return {
        loading: false,
        po: null
      }
    },
    mounted: function() {
      this.getOnePurchaseOrder(this.$route.params.id)
    },
    methods: {
      getOnePurchaseOrder: function (params) {
        var self = this
        this.$store.dispatch('getOnePurchaseOrder', {params,
          success: function (res) {
            // self.isBusy = false
            self.po = res.body.data
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    },
  }
</script>

<style scoped></style>
