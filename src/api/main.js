import config from '@/config'
import Vue from 'vue'
// import store from '@/store'

function getAuthToken () {
  if (window.localStorage) {
    return {
      headers: {
        Authorization: 'bearer ' + window.localStorage.getItem(config.AUTH_TOKEN),
        "Content-Type": "application/json"
      }
    }
  }
  return {}
}

function getParams (params) {
  return {
    params: params
  }
}

function postData (path, data, success, fail) {
  Vue.http.post(path, data, getAuthToken()).then(function (response) {
    if (success) {
      success(response)
    }
  }, error => {
    if (fail) {
      fail(error)
    }
  })
}

function getData (path, success, fail) {
  Vue.http.get(path, getAuthToken()).then(function (response) {
    if (success) {
      // console.log(success)
      success(response)
    }
  }, error => {
    if (fail) {
      fail(error)
    }
  })
}

function getDataWithParam (path, params, success, fail) {
  Vue.http.get(path + '/' + params, getAuthToken()).then(function (response) {
    if (success) {
      // console.log(success)
      success(response)
    }
  }, error => {
    if (fail) {
      fail(error)
    }
  })
}

function getDataWithQuery (path, params, success, fail) {
  var dataHeaders = getAuthToken()
  var dataParams = getParams(params)
  var customData = {
    params: dataParams.params,
    headers: dataHeaders.headers
  }
  Vue.http.get(path, customData).then(function (response) {
    if (success) {
      // console.log(success)
      success(response)
    }
  }, error => {
    if (fail) {
      fail(error)
    }
  })
}

export default {
  // Register Simple Customer
  registerSimpleCustomer (data, success, fail) {
    postData(config.getApiPath(config.api.register_simple), data, success, fail)
  },
  // Login
  login (data, success, fail) {
    postData(config.getApiPath(config.api.login), data, success, fail)
  },
  logout (data, success, fail) {
    postData(config.getApiPath(config.api.logout), data, success, fail)
  },
  // Register
  register (data, success, fail) {
    postData(config.getApiPath(config.api.register), data, success, fail)
  },
  // Get Profile
  getMeh (success, fail) {
    getData(config.getApiPath(config.api.users.me), success, fail)
  },
  // Get Menu
  getMenu (success, fail) {
    getData(config.getApiPath(config.api.menus), success, fail)
  },
  // Get Product
  getProducts (params, success, fail) {
    getDataWithQuery(config.getApiPath(config.api.masterdata.products.list_products), params, success, fail)
  },
  // Get Categories
  getCategories (success, fail) {
    getData(config.getApiPath(config.api.masterdata.products.list_categories), success, fail)
  },
  getSupplier (success, fail) {
    getData(config.getApiPath(config.api.masterdata.supplier.list_supplier), success, fail)
  },
  getOneSupplier (params, success, fail) {
    getDataWithParam(config.getApiPath(config.api.masterdata.supplier.list_supplier), params, success, fail)
  },
  getBranch (success, fail) {
    getData(config.getApiPath(config.api.masterdata.branch.list_branch), success, fail)
  },
  getPacks (success, fail) {
    getData(config.getApiPath(config.api.masterdata.pack.list_pack), success, fail)
  },
  saveBranch (data, success, fail) {
    postData(config.getApiPath(config.api.masterdata.branch.add_branch), data, success, fail)
  },
  savePack (data, success, fail) {
    postData(config.getApiPath(config.api.masterdata.pack.add_pack), data, success, fail)
  },
  saveCategory (data, success, fail) {
    postData(config.getApiPath(config.api.masterdata.products.add_categories), data, success, fail)
  },
  saveProduct (data, success, fail) {
    postData(config.getApiPath(config.api.masterdata.products.add_products), data, success, fail)
  },
  saveSupplier (data, success, fail) {
    postData(config.getApiPath(config.api.masterdata.supplier.add_supplier), data, success, fail)
  },
  // Get Distributions
  getPurchaseOrder (params, success, fail) {
    getDataWithQuery(config.getApiPath(config.api.distributions.purchase_order.list_po), params, success, fail)
  },
  getOnePurchaseOrder (params, success, fail) {
    getDataWithParam(config.getApiPath(config.api.distributions.purchase_order.list_po), params, success, fail)
  },
  getDistributionIn (params, success, fail) {
    getDataWithQuery(config.getApiPath(config.api.distributions.distribution_in.list_di), params, success, fail)
  },
  getDistributionOut (params, success, fail) {
    getDataWithQuery(config.getApiPath(config.api.distributions.distribution_out.list_do), params, success, fail)
  },
  savePurchaseOrder (data, success, fail) {
    postData(config.getApiPath(config.api.distributions.purchase_order.add_po), data, success, fail)
  },
  saveDistributionIn (data, success, fail) {
    postData(config.getApiPath(config.api.distributions.distribution_in.add_di), data, success, fail)
  },
  saveDistributionOut (data, success, fail) {
    postData(config.getApiPath(config.api.distributions.distribution_out.add_do), data, success, fail)
  },
  // Get Users
  getUsers (success, fail) {
    getData(config.getApiPath(config.api.users.list_user), success, fail)
  },
  saveUser (data, success, fail) {
    postData(config.getApiPath(config.api.users.add_user), data, success, fail)
  },
  getRoles (success, fail) {
    getData(config.getApiPath(config.api.roles.list_role), success, fail)
  },
}
