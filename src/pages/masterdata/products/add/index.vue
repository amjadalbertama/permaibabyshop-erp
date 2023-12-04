<template>
  <section class="add-product">
    <div class="loading-overlay" v-if="loading">
      <div class="loading-center">
        <Spinner name="cube-grid" color="#0cf24d" />
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
            <p class="card-description">Add your data product here</p>
            <!-- <div class="w-100 text-center">
              <h4 class="card-title">Still in Progress...</h4>
            </div> -->
            <form class="forms-sample" novalidate>
              <div class="row mb-3">
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="name">Product Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Type Your Product Name Here..." v-model="product.name" name="name" :class="{'is-invalid': errors.has('name')}" data-vv-name="name" v-validate data-vv-rules="required" />
                  </div>
                </div>
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="sku">SKU</label>
                    <input type="text" class="form-control" id="sku" placeholder="Type Your Product SKU Here..." v-model="product.sku" sku="sku" :class="{'is-invalid': errors.has('sku')}" data-vv-name="sku" v-validate data-vv-rules="required" />
                  </div>
                </div>
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="categories">Category</label>
                    <select class="form-control" id="categories" :class="{'is-invalid': errors.has('categories')}" placeholder="Choose Your Category of Products Here..." v-model="product.category_id" name="categories_id" data-vv-name="categories" v-validate data-vv-rules="required">
                      <option disabled value="" selected>--- Choose Category ---</option>
                      <template v-if="listCategories.length !== 0">
                        <option v-for="cate in listCategories" :key="cate.category_id" :value="cate.category_id">{{ cate.category_name }}</option>
                      </template>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="pack">Packs</label>
                    <select class="form-control p_input" id="pack" :class="{'is-invalid': errors.has('pack')}" placeholder="Choose Your Pack Here..." v-model="product.pack_id" name="pack_id" data-vv-name="pack" v-validate data-vv-rules="required">
                      <option disabled value="">--- Choose Pack ---</option>
                      <option v-for="pc in listPacks" :key="pc.pack_id" :value="pc.pack_id">{{ pc.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                  <!-- <div class="form-group">
                    <label for="default_purchase_price">Purchase Price</label>
                    <input type="text" class="form-control" id="default_purchase_price" placeholder="Type Your Purchase Price Here..." v-model="product.default_purchase_price" name="default_purchase_price" :class="{'is-invalid': errors.has('default_purchase_price')}" data-vv-name="default_purchase_price" v-validate data-vv-rules="required" @focus="formatPrice(product.default_purchase_price)" />
                  </div> -->
                  <InputCurrency label="Purchase Price" id="default_purchase_price" placeholder="Type Your Purchase Price Here..." v-model="product.default_purchase_price" name="default_purchase_price" :class="{'is-invalid': errors.has('default_purchase_price')}" data-vv-name="default_purchase_price" v-validate data-vv-rules="required"></InputCurrency>
                </div>
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                  <!-- <div class="form-group">
                    <label for="default_unit_price">Unit Price</label>
                    <input type="text" class="form-control" id="default_unit_price" placeholder="Type Your Unit Price Here..." v-model="product.default_unit_price" name="default_unit_price" :class="{'is-invalid': errors.has('default_unit_price')}" data-vv-name="default_unit_price" v-validate data-vv-rules="required" @focus="formatPrice(product.default_unit_price)" />
                  </div> -->
                  <InputCurrency label="Unit Price" id="default_unit_price" placeholder="Type Your Unit Price Here..." v-model="product.default_unit_price" name="default_unit_price" :class="{'is-invalid': errors.has('default_unit_price')}" data-vv-name="default_unit_price" v-validate data-vv-rules="required"></InputCurrency>
                </div>                
                <div class="col-12 col-md-6 col-sm-12 col-xs-12 align-self-center mb-3">
                  <div class="row">
                    <div class="col-12 col-md-2 col-sm-12 col-xs-12 align-self-center mb-3">
                      <label class="toggle-label-custom">Is Active?</label>
                      <div class="form-group no-margin">
                        <label class="toggle-custom">
                          <input class="toggle-checkbox-custom" type="checkbox" v-model="product.is_active">
                          <div class="toggle-switch-custom"></div>
                        </label>
                      </div>
                    </div>
                    <div class="col-12 col-md-2 col-sm-12 col-xs-12 align-self-center mb-3">
                      <label class="toggle-label-custom">Is PPN?</label>
                      <div class="form-group no-margin">
                        <label class="toggle-custom">
                          <input class="toggle-checkbox-custom" type="checkbox" v-model="product.default_is_ppn">
                          <div class="toggle-switch-custom"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label for="notes">Notes</label>
                    <textarea class="form-control form-control-lg" id="notes" rows="5" v-model="product.description"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12 col-sm-12">
                  <button type="submit" class="btn btn-primary me-2" v-on:click="storeProduct">Submit</button>
                  <button class="btn btn-dark">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Spinner from 'vue-spinkit'
  import InputCurrency from '@/components/forms/input-currency'

  export default {
    name: 'AddProduct',
    components: {
      Spinner,
      InputCurrency
    },
    data: function () {
      return {
        loading: false,
        product: {}
      }
    },
    methods: {
      storeProduct: function (e) {
        e.preventDefault()
        let self = this
        self.loading = true
        self.$validator.validateAll()
        self.$toastr.defaultPosition = 'toast-top-right'
        var data = self.product
        console.log(JSON.stringify(data))
        self.$store.dispatch('saveProduct', {data,
          success: function (response) {
            var result = response.body
            if (result.success === true || response.status === 201) {
              self.$toastr.s(result.message)
              self.loading = false
              self.product = {}
            }
          },
          error: (err) => {
            // console.log(error)
            self.responseMessage = err.body.message
            self.$toastr.e(self.responseMessage)
            self.loading = false
          }
        })
      },
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
    },
    computed: {
      ...mapGetters([
        'listCategories',
        'listPacks'
      ]),
      curRouteName: function () {
        return this.$route.name
      },
    },
    watch: {}
  }
</script>

<style scoped>
  .toggle-custom {
    cursor: pointer;
    display: inline-block;
  }

  .toggle-switch-custom {
    display: inline-block;
    background: #ccc;
    border-radius: 16px;
    width: 58px;
    height: 32px;
    position: relative;
    vertical-align: middle;
    transition: background 0.25s;
  }
  .toggle-switch-custom:before, .toggle-switch-custom:after {
    content: "";
  }
  .toggle-switch-custom:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    width: 24px;
    height: 24px;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: left 0.25s;
  }
  .toggle-custom:hover .toggle-switch-custom:before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
  .toggle-checkbox-custom:checked + .toggle-switch-custom {
    background: #56c080;
  }
  .toggle-checkbox-custom:checked + .toggle-switch-custom:before {
    left: 30px;
  }

  .toggle-checkbox-custom {
    position: absolute;
    visibility: hidden;
  }

  .toggle-label-custom {
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
</style>
