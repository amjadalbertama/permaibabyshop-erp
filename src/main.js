import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import messagesID from '../node_modules/vee-validate/dist/locale/id'
import VueResource from 'vue-resource'
import moment from 'moment'
import VueToastr from 'vue-toastr'
// import "bootstrap/dist/css/bootstrap.min.css"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate, {
  locale: 'id',
  dictionary: {
    id: { messages: messagesID }
  },
  fieldsBagName: 'veeFields',
})
Vue.use(VueResource)
Vue.use(moment)
Vue.use(VueToastr)

Vue.config.productionTip = false
// moment.suppressDeprecationWarnings = true

Vue.prototype.$moment = moment
Vue.prototype.$moment.locale("id")

Vue.filter('currency', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'Rp'
  });
  return formatter.format(value);
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('app')
