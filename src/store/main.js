import mainApi from '@/api/main'
import config from '@/config'
import router from '@/router'

export const state = {
  credentials: {start: true},
  password: {},
  meh: {},
  logout: {},
  userData: {},
  listMenu: [],
  listProducts: [],
  listCategories: [],
  listSupplier: [],
  listBranchs: [],
  listPacks: [],
  listPo: [],
  listDi: [],
  listDo: [],
  listUsers: [],
  branch: {},
  pack: {},
  category: {},
  product: {},
  supplier: {},
  addPo: {},
  addDi: {},
  addDo: {},
}

export const mutations = {
  setCredentials (state, data) {
    state.credentials = data
    // store to localStorage
    if (window.localStorage) {
      window.localStorage.setItem(config.AUTH_TOKEN, data.token)
      window.localStorage.setItem(config.CREDENTIALS, JSON.stringify(data))
    }
  },
  setLogout (state, data) {
    state.logout = data
    // store to localStorage
  },
  setMeh (state, data) {
    state.meh = data
    if (window.localStorage) {
      window.localStorage.setItem(config.user_id, data.id)
      window.localStorage.setItem(config.user_data, JSON.stringify(data))
    }
  },
  setUserData (state, data) {
    state.userData = data
  },
  setListMenu (state, data) {
    state.listMenu = data
  },
  setListProducts (state, data) {
    state.listProducts = data
  },
  setListCategories (state, data) {
    state.listCategories = data
  },
  setListSupplier (state, data) {
    state.listSupplier = data
  },
  setListBranch (state, data) {
    state.listBranchs = data
  },
  setlistPacks (state, data) {
    state.listPacks = data
  },
  setSendChats (state, data) {
    state.sendChat = data
  },
  setCredentialsNoSave (state, data) {
    state.credentials = data
  },
  setEditProfiles (state, data) {
    state.editProfile = data
  },
  setlistUsers (state, data) {
    state.listUsers = data
  },
  setDataBranch (state, data) {
    state.branch = data
  },
  setDataPack (state, data) {
    state.pack = data
  },
  setDataCategory (state, data) {
    state.category = data
  },
  setDataProduct (state, data) {
    state.product = data
  },
  setDataSupplier (state, data) {
    state.supplier = data
  },
  setlistPo (state, data) {
    state.listPo = data
  },
  setListDi (state, data) {
    state.listDi = data
  },
  setListDo (state, data) {
    state.listDo = data
  },
  setAddPo (state, data) {
    state.addPo = data
  },
  setAddDi (state, data) {
    state.addDi = data
  },
  setAddDo (state, data) {
    state.addDo = data
  },
}

export const getters = {
  loggedIn (state) {
    return typeof state.credentials !== 'undefined' &&
      typeof state.credentials.token !== 'undefined' &&
      state.credentials.token !== ''
  },
  credentials (state) {
    return state.credentials ? state.credentials : {}
  },
  logout (state) {
    return state.logout
  },
  meh (state) {
    return state.meh
  },
  userData (state) {
    return state.userData ? state.userData : {}
  },
  listMenu (state) {
    return state.listMenu
  },
  listProducts (state) {
    return state.listProducts
  },
  listCategories (state) {
    return state.listCategories
  },
  listSupplier (state) {
    return state.listSupplier
  },
  listBranchs (state) {
    return state.listBranchs
  },
  listPacks (state) {
    return state.listPacks
  },
  sendChat (state) {
    return state.sendChat
  },
  listUsers (state) {
    return state.listUsers
  },
  branch (state) {
    return state.branch
  },
  pack (state) {
    return state.pack
  },
  category (state) {
    return state.category
  },
  product (state) {
    return state.product
  },
  supplier (state) {
    return state.supplier
  },
  listPo (state) {
    return state.listPo
  },
  listDi (state) {
    return state.listDi
  },
  listDo (state) {
    return state.listDo
  },
  addPo (state) {
    return state.addPo
  },
  addDi (state) {
    return state.addDi
  },
  addDo (state) {
    return state.addDo
  },
}

export const actions = {
  // registerSimpleCustomer ({commit}, {data, success, error}) {
  //   mainApi.registerSimpleCustomer(data, function (response) {
  //     commit('setSimpleCustomer', response.body)
  //     if (typeof success === 'function') {
  //       success(response)
  //     }
  //   }, error => {
  //     console.log(error.body)
  //   })
  // },
  // register ({commit}, {data, success, error}) {
  //   mainApi.register(data, function (response) {
  //     if (response.body.success === true) {
  //       success(response)
  //     }
  //   }, error)
  // },
  login ({commit}, {data, success, error}) {
    mainApi.login(data, function (response) {
      if (response.body.success === true) {
        commit('setCredentials', response.body.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  logout ({commit}, {data, success, error}) {
    mainApi.logout(data, function (response) {
      if (response.body.success === true) {
        commit('setLogout', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  // getCredentials ({commit}) {
  //   // if not logged in
  //   // console.log('getting cred')
  //   var c = null
  //   if (window.localStorage) {
  //     c = window.localStorage.getItem(config.CREDENTIALS)
  //   }
  //   if (c) {
  //     try {
  //       c = JSON.parse(c)
  //     } catch (e) {
  //       // nothing
  //     }
  //   }
  //   if (c && c.token && c.token !== '') {
  //     commit('setCredentialsNoSave', c)
  //   }
  // },
  // getUserData ({commit}) {
  //   // if not logged in
  //   console.log('getting user data')
  //   var c = null
  //   if (window.localStorage) {
  //     c = window.localStorage.getItem(config.user_data)
  //   }
  //   if (c) {
  //     try {
  //       c = JSON.parse(c)
  //     } catch (e) {
  //       // nothing
  //     }
  //   }
  //   if (c && c.token && c.token !== '') {
  //     commit('setCredentialsNoSave', c)
  //   }
  // },
  // // Get MEH
  getMeh ({commit}) {
    mainApi.getMeh(function (response) {
      if (response.body.success === true) {
        commit('setMeh', response.body.data)
      }
      if (router.name === 'login') {
        router.push('/')
      }
    }, error => {
      if (router.name !== 'login') {
        window.localStorage.clear()
        // router.push('/auth-pages/login')
      }
      console.log(error.body)
    })
  },
  getMenu ({success, error}) {
    mainApi.getMenu(function (response) {
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      if (typeof error === 'function') {
        error(errors.body)
      }
      console.log(errors.body)
    })
  },
  getProducts ({commit}, {params, success, error}) {
    mainApi.getProducts(params, function (response) {
      if (response.body.success === true) {
        commit('setListProducts', response.body.data.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  getCategories ({commit}, {success, error}) {
    mainApi.getCategories(function (response) {
      if (response.body.success === true) {
        commit('setListCategories', response.body.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  getSupplier ({commit}, {success, error}) {
    mainApi.getSupplier(function (response) {
      if (response.body.success === true) {
        commit('setListSupplier', response.body.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  getBranch ({commit}, {success, error}) {
    mainApi.getBranch(function (response) {
      if (response.body.success === true) {
        commit('setListBranch', response.body.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  getPacks ({commit}, {success, error}) {
    mainApi.getPacks(function (response) {
      if (response.body.success === true) {
        commit('setlistPacks', response.body.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  saveBranch ({commit}, {data, success, error}) {
    mainApi.saveBranch(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setDataBranch', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  savePack ({commit}, {data, success, error}) {
    mainApi.savePack(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setDataPack', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  saveCategory ({commit}, {data, success, error}) {
    mainApi.saveCategory(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setDataCategory', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  saveProduct ({commit}, {data, success, error}) {
    mainApi.saveProduct(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setDataProduct', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  saveSupplier ({commit}, {data, success, error}) {
    mainApi.saveSupplier(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setDataSupplier', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  //distributions
  getPurchaseOrder ({commit}, {params, success, error}) {
    mainApi.getPurchaseOrder(params, function (response) {
      if (response.body.success === true) {
        commit('setlistPo', response.body.data.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  getDistributionIn ({commit}, {params, success, error}) {
    mainApi.getDistributionIn(params, function (response) {
      if (response.body.success === true) {
        commit('setListDi', response.body.data.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  getDistributionOut ({commit}, {params, success, error}) {
    mainApi.getDistributionOut(params, function (response) {
      if (response.body.success === true) {
        commit('setListDo', response.body.data.data)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors.body)
      console.log(errors.body)
    })
  },
  savePurchaseOrder ({commit}, {data, success, error}) {
    mainApi.savePurchaseOrder(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setAddPo', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  saveDistributionOut ({commit}, {data, success, error}) {
    mainApi.saveDistributionOut(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setAddDo', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
  saveDistributionIn ({commit}, {data, success, error}) {
    mainApi.saveDistributionIn(data, function (response) {
      if (response.body.success === true || response.status === 201) {
        commit('setAddDi', response.body)
      }
      if (typeof success === 'function') {
        success(response)
      }
    }, errors => {
      error(errors)
    })
  },
}
