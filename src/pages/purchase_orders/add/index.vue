<template>
  <section class="add-category">
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
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{ $route.name }}</h4>
            <p class="card-description">Add your data PO</p>
            <!-- <div class="w-100 text-center">
              <h4 class="card-title">Still in Progress...</h4>
            </div> -->
            <div class="forms-sample">
              <div class="row mb-3">
                <div class="col-12 col-md-12">
                  <div class="row">
                    <div class="col-6 col-md-6">
                      <div class="form-group">
                        <label for="supplier">Supplier</label>
                        <select class="form-control p_input" id="supplier" :class="{'is-invalid': errors.has('supplier')}" placeholder="Choose Supplier Here..." v-model="po.supplier_id" name="supplier_id" data-vv-name="supplier" v-validate data-vv-rules="required">
                          <option disabled :value="null">--- Pilih Supplier ---</option>
                          <option v-for="sp in listSupplier" :key="sp.supplier_id" v-bind:value="sp.supplier_id">{{ sp.company_name }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6 col-md-6">
                      <div class="form-group">
                        <label for="branch">Cabang/Gudang</label>
                        <select class="form-control p_input" id="branch" :class="{'is-invalid': errors.has('branch')}" placeholder="Choose Your Branch Here..." v-model="po.branch_id" name="branch_id" data-vv-name="branch" v-validate data-vv-rules="required">
                          <option disabled :value="null">--- Pilih Gudang ---</option>
                          <option v-for="br in listBranchs" :key="br.branch_id" :value="br.branch_id">{{ br.name }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-12">
                      <!-- <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control p_input" :class="{'is-invalid': errors.has('email')}" id="email" placeholder="Type Your User Email Here..." v-model="po.email" name="email" data-vv-name="email" v-validate data-vv-rules="required|email">
                        <label id="email-error" class="error mt-2 text-danger d-none" for="email">{{ errors.first('email') }}</label>
                      </div> -->
                    </div>
                    <div class="col-12 col-md-12">
                      <!-- <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control p_input" :class="{'is-invalid': errors.has('email')}" id="email" placeholder="Type Your User Email Here..." v-model="po.email" name="email" data-vv-name="email" v-validate data-vv-rules="required|email">
                        <label id="email-error" class="error mt-2 text-danger d-none" for="email">{{ errors.first('email') }}</label>
                      </div> -->
                    </div>
                  </div>
                  <div class="row">
                    <!-- <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label for="branch">Cabang/Gudang</label>
                        <select class="form-control p_input" id="branch" :class="{'is-invalid': errors.has('branch')}" placeholder="Choose Your Branch Here..." v-model="po.branch_id" name="branch_id" data-vv-name="branch" v-validate data-vv-rules="required">
                          <option disabled :value="null">--- Pilih Gudang ---</option>
                          <option v-for="br in listBranchs" :key="br.branch_id" :value="br.branch_id">{{ br.name }}</option>
                        </select>
                      </div>
                    </div> -->
                  </div>
                </div>
                <div class="col-6 col-md-6">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label for="notes">Notes</label>
                        <textarea class="form-control form-control-lg textarea-custom" id="notes" rows="5" v-model="po.note"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <!-- <div class="col-12 col-md-12">
                  {{ po }}
                </div> -->
                <div class="col-12 col-md-12">
                  <repeater :columns="columns" :items="po.products"></repeater>
                </div>
                <div class="col-12 col-md-12">
                  <button class="btn btn-outline-success btn-md btn-block btn-icon-text" @click="addField"><i class="mdi mdi-plus"></i> Add Product</button>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12">
                  
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12 text-end">
                  <button type="submit" class="btn btn-primary me-2" @click="createPo">Submit</button>
                  <button class="btn btn-dark">Cancel</button>
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
  import { mapGetters } from 'vuex'
  // import Spinner from 'vue-spinkit'
  import repeater from '@/components/repeaters/Repeater'

  export default {
    name: 'AddPo',
    components: {
      // Spinner,
      repeater
    },
    data: function () {
      return {
        po: {
          products: [
            {
              id: 1,
              product_id: "",
              pack_id: 1,
              quantity: 0,
              subtotalPack: 0,
              purchase_price: 0,
              discount: 0,
              is_ppn: false
            }
          ],
        },
        loading: false,
        columns: [
          {
            'data': 'product_id',
            'names': 'Produk'
          },
          {
            'data': 'description',
            'names': 'Deskripsi'
          },
          {
            'data': 'purchase_price',
            'names': 'Harga Satuan'
          },
          {
            'data': 'pack_id',
            'names': 'Satuan'
          },
          {
            'data': 'pack_price',
            'names': ''
          },
          {
            'data': 'quantity',
            'names': 'Kuantitas'
          },
          {
            'data': 'discount',
            'names': 'Diskon'
          },
          {
            'data': 'subtotal',
            'names': 'Jumlah'
          },
          {
            'data': 'is_ppn',
            'names': 'Pajak'
          },
          {
            'data': 'action',
            'names': 'Action'
          }
        ],
      }
    },
    mounted: function () {},
    methods: {
      createPo: function () {
        var self = this
        self.po.user_id = self.meh.id
        console.log(self.po)
      },
      addField: function () {
        var lastObject = this.po.products[this.po.products.length - 1]
        var lastId = lastObject.id + 1
        this.po.products.push({
          id: lastId,
          product_id: "",
          pack_id: 1,
          quantity: 0,
          subtotalPack: 0,
          purchase_price: 0,
          discount: 0,
          is_ppn: false
        })
      },
    },
    computed: {
      ...mapGetters([
        'listSupplier',
        'listBranchs',
        'meh'
      ]),
      curRouteName: function () {
        return this.$route.name
      },
    },
    watch: {}
  }
</script>

<style scoped>
  #notes .textarea-custom {
    min-height: 17.8vh !important;
  }
</style>
