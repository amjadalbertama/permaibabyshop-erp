<template>
  <div class="row">
    <div class="col-12 col-md-12 mb-3">
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-primary">
            <tr>
              <th v-for="col in columns" :key="col.data">{{ col.names }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, index) in items" :key="index">
              <td>
                <div class="form-group no-margin">
                  <select class="form-control" id="products" :class="{'is-invalid': errors.has('products')}" placeholder="Choose Your Products Here..." v-model="p.product_id" name="products_id" data-vv-name="products" v-validate data-vv-rules="required" @change="pickedItem(index)">
                    <option disabled value="">--- Pilih Produk ---</option>
                    <template v-if="listDataProducts.length !== 0">
                      <option v-for="prd in listDataProducts" :key="prd.product_id" :value="prd.product_id">{{ prd.name }}</option>
                    </template>
                  </select>
                </div>
              </td>
              <td>
                <div class="form-group no-margin">
                  <textarea class="form-control form-control-sm p_input" id="description" rows="3" v-model="p.description"></textarea>
                </div>
              </td>
              <td>
                <InputCurrencySymbol labelClass="d-none" id="purchase_price" placeholder="Type Your Price Here..." v-model="p.purchase_price" name="purchase_price" :class="{'is-invalid': errors.has('purchase_price')}" data-vv-name="purchase_price" v-validate data-vv-rules="required" @input="subtotal(index)"></InputCurrencySymbol>
              </td>
              <td>
                <div class="form-group no-margin">
                  <select class="form-control p_input" id="pack" :class="{'is-invalid': errors.has('pack')}" placeholder="Choose Your Pack Here..." v-model="p.pack_id" name="pack_id" data-vv-name="pack" v-validate data-vv-rules="required">
                    <option v-for="(pc, ix) in listPacks" :key="ix" :value="pc.pack_id">{{ pc.name }}</option>
                  </select>
                </div>
              </td>
              <td>
                <span class="text-white">Rp {{ formatPrice(p.subtotalPack) }}</span>
              </td>
              <td>
                <div class="form-group no-margin">
                  <input type="text" class="form-control p_input" id="quantity" placeholder="Type Your Quantity Here..." v-model="p.quantity" name="quantity" :class="{'is-invalid': errors.has('quantity')}" data-vv-name="quantity" v-validate data-vv-rules="required" @input="subtotal(index)" />
                </div>
              </td>
              <td>
                <div class="form-group no-margin">
                  <input type="text" class="form-control p_input" id="discount" placeholder="%" v-model="p.discount" name="discount" :class="{'is-invalid': errors.has('discount')}" data-vv-name="discount" v-validate data-vv-rules="required" @input="subtotal(index)" />
                </div>
              </td>
              <td>
                <div class="form-group no-margin">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Rp</span>
                    </div>
                    <input type="text" class="form-control p_input readonly" id="subtotal" placeholder="0" v-model="p.subtotal" name="subtotal" :class="{'is-invalid': errors.has('subtotal')}" data-vv-name="subtotal" v-validate data-vv-rules="required" @input="calculateTotal(index)" readonly />
                  </div>
                </div>
              </td>
              <td>
                <div class="form-group no-margin">
                  <select class="form-control p_input" id="is_ppn" :class="{'is-invalid': errors.has('is_ppn')}" placeholder="Choose Your Pack Here..." v-model="p.is_ppn" name="is_ppn_id" data-vv-name="is_ppn" v-validate data-vv-rules="required">
                    <option disabled value="">--- Pilih Pajak ---</option>
                    <option value="0">Tidak</option>
                    <option value="1">Ya</option>
                  </select>
                </div>
              </td>
              <td>
                <button class="btn btn-danger btn-social-icon" @click="removeField(index)" v-if="index !== 0 || items.length !== 1"><i class="mdi mdi-trash-can"></i></button>
                <button class="btn btn-danger btn-social-icon" @click="removeField(index)" v-else disabled><i class="mdi mdi-trash-can"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import InputCurrencySymbol from '@/components/forms/input-currency-symbol'

  export default {
    name: 'Repeater',
    components: {
      InputCurrencySymbol
    },
    data: function () {
      return {
        listDataProducts: [],
        totalByPack: 0
      }
    },
    mounted: function () {
      this.getListProducts()
      
    },
    props: ['columns', 'items'],
    methods: {
      getListProducts: function () {
        let self = this
        var params = {
          page: 1,
          order: "asc",
          order_by: "name",
          limit: 1000
        }
        this.$store.dispatch('getProducts', {params,
          success: function (res) {
            self.dataProducts = res.body.data
            var listData = res.body.data.data
            if (listData.length != 0) {
              for (var i = 0; i < listData.length; i++) {
                self.listDataProducts.push(listData[i])
              }
            }
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
      removeField: function (id) {
        var self = this
        self.items.splice(id, 1)
      },
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      subtotal: function (index) {
        this.$set(this.items, index, {
          ...this.items[index],
          subtotal: this.calculateTotal(index),
        })
      },
      calculateTotal(index) {
        // Calculate total for the specified item
        const item = this.items[index]
        console.log(item.discount)
        if (item.discount === 0 || item.discount === "") {
          return this.formatPrice(item.quantity * item.purchase_price)
        } else {
          return this.formatPrice(item.quantity * item.purchase_price * (item.discount / 100))
        }
      },
      pickedItem: function (index) {
        var self = this
        self.setData(index)
      },
      setData: function (index) {
        var self = this
        var product = self.listDataProducts.find(function(v) {
          return v.product_id === self.items[index].product_id
        })
        self.$set(self.items, index, {
          ...self.items[index],
          description: product.description,
          purchase_price: Number(product.default_purchase_price),
          subtotalPack: product.default_purchase_price * product.pack.pack_qty,
          pack_id: product.pack_id,
          is_ppn: product.is_ppn
        })
      },
    },
    computed: {
      ...mapGetters([
        'listProducts',
        'listPacks'
      ]),
    },
    watch: {}
  }
</script>

<style scoped lang="css"></style>