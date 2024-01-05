import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import layout from '../layout'

Vue.use(Router)

let router = new Router({
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard')
        }
      ]
    },
    {
      path: '/auth-pages',
      component: {
        render (c) { return c('router-view') }
      },
      meta: {auth: false},
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/auth/auth-pages/login')
        },
        // {
        //   path: 'register',
        //   name: 'register',
        //   component: () => import('@/pages/auth/auth-pages/register')
        // }
      ]
    },
    {
      path: '/product',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/products/product/list',
          name: 'Products List',
          component: () => import('@/pages/masterdata/products/list')
        },
        {
          path: '/products/product/new',
          name: 'New Product',
          component: () => import('@/pages/masterdata/products/add')
        },
      ]
    },
    {
      path: '/categories',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/products/categories/list',
          name: 'Category List',
          component: () => import('@/pages/masterdata/categories/list')
        },
        {
          path: '/products/categories/new',
          name: 'New Category',
          component: () => import('@/pages/masterdata/categories/add')
        }
      ]
    },
    {
      path: '/branchs',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/branch/list',
          name: 'Branchs',
          component: () => import('@/pages/masterdata/branchs/list')
        },
        {
          path: '/branch/new',
          name: 'New Branch',
          component: () => import('@/pages/masterdata/branchs/add')
        }
      ]
    },
    {
      path: '/packs',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/pack/list',
          name: 'Packs',
          component: () => import('@/pages/masterdata/packs/list')
        },
        {
          path: '/pack/new',
          name: 'New Packs',
          component: () => import('@/pages/masterdata/packs/add')
        }
      ]
    },
    {
      path: '/suppliers',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/supplier/list',
          name: 'Suppliers',
          component: () => import('@/pages/masterdata/suppliers/list')
        },
        {
          path: '/supplier/new',
          name: 'New Suppliers',
          component: () => import('@/pages/masterdata/suppliers/add')
        }
      ]
    },
    {
      path: '/purchases',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/purchases/po/list/:page',
          name: 'Purchase Order List',
          component: () => import('@/pages/purchase_orders/list')
        },
        {
          path: '/purchases/po/new',
          name: 'New Purchase Order',
          component: () => import('@/pages/purchase_orders/add')
        },
        {
          path: '/purchases/po/detail/:id',
          name: 'Detail Purchase Order',
          component: () => import('@/pages/purchase_orders/detail')
        },
      ]
    },
    {
      path: '/users',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/users/list',
          name: 'User List',
          component: () => import('@/pages/users/list')
        },
        {
          path: '/users/new',
          name: 'Add User',
          component: () => import('@/pages/users/add')
        },
        {
          path: '/users/role/list',
          name: 'User Roles',
          component: () => import('@/pages/users/roles')
        }
      ]
    },
    {
      path: '/settings',
      component: layout,
      meta: {auth: true},
      children: [
        // {
        //   path: '/settings/masterdata/product/manage/:page',
        //   name: 'Manage Products',
        //   component: () => import('@/pages/masterdata/products')
        // },
        // {
        //   path: '/settings/masterdata/product/categories',
        //   name: 'Categories',
        //   component: () => import('@/pages/masterdata/categories')
        // },
        // {
        //   path: '/settings/masterdata/suppliers/list',
        //   name: 'Supplier',
        //   component: () => import('@/pages/masterdata/suppliers')
        // },
        {
          path: '/settings/masterdata/branch/add',
          name: 'Add Branch',
          component: () => import('@/pages/settings/masterdata/branchs')
        },
        {
          path: '/settings/masterdata/pack/add',
          name: 'Add Pack',
          component: () => import('@/pages/settings/masterdata/packs')
        }
      ]
    },
    {
      path: '/distributions',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/distributions/in/new',
          name: 'Add Distribution In',
          component: () => import('@/pages/distributions/distributions_in/add')
        },
        {
          path: '/distributions/in/list/:page',
          name: 'Distribution In List',
          component: () => import('@/pages/distributions/distributions_in/list')
        },
        {
          path: '/distributions/in/detail/:id',
          name: 'Distribution In Detail',
          component: () => import('@/pages/distributions/distributions_in/detail')
        },
        {
          path: '/distributions/out/new',
          name: 'Add Distribution Out',
          component: () => import('@/pages/distributions/distributions_out/add')
        },
        {
          path: '/distributions/out/list/:page',
          name: 'Distribution Out List',
          component: () => import('@/pages/distributions/distributions_out/list')
        },
        {
          path: '/distributions/out/detail/:id',
          name: 'Distribution Out Detail',
          component: () => import('@/pages/distributions/distributions_out/detail')
        },
      ]
    },
    {
      path: '/reports',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/report/stock/list',
          name: 'Stocks',
          component: () => import('@/pages/masterdata/stocks/list')
        }
      ]
    },
    {
      path: '/finance_accounting',
      component: layout,
      meta: {auth: true},
      children: [
        {
          path: '/finance_accounting/sales',
          name: 'Finance Sales',
          component: () => import('@/pages/finance_accounting/sales/list')
        },
        {
          path: '/finance_accounting/petty_cash',
          name: 'Finance Petty Cash',
          component: () => import('@/pages/finance_accounting/petty_cash/list')
        },
        {
          path: '/finance_accounting/bank',
          name: 'Finance Bank',
          component: () => import('@/pages/finance_accounting/bank/list')
        },
        {
          path: '/finance_accounting/purchase',
          name: 'Finance Purchase',
          component: () => import('@/pages/finance_accounting/purchase/list')
        },
        {
          path: '/finance_accounting/memorials',
          name: 'Finance Memorials',
          component: () => import('@/pages/finance_accounting/memorials/list')
        },
        {
          path: '/finance_accounting/general_ledger',
          name: 'Finance General Ledger',
          component: () => import('@/pages/finance_accounting/general_ledger/list')
        },
        {
          path: '/finance_accounting/receivables',
          name: 'Finance Receivables',
          component: () => import('@/pages/finance_accounting/receivables/list')
        },
        {
          path: '/finance_accounting/dept',
          name: 'Finance Dept',
          component: () => import('@/pages/finance_accounting/dept/list')
        },
        {
          path: '/finance_accounting/assets',
          name: 'Finance Assets',
          component: () => import('@/pages/finance_accounting/assets/list')
        },
        {
          path: '/finance_accounting/reconciliation',
          name: 'Finance Reconciliation',
          component: () => import('@/pages/finance_accounting/reconciliation/list')
        },
        {
          path: '/finance_accounting/trial_balance',
          name: 'Finance Trial Balance',
          component: () => import('@/pages/finance_accounting/trial_balance/list')
        },
        {
          path: '/finance_accounting/retained_earnings',
          name: 'Finance Retained Earnings',
          component: () => import('@/pages/finance_accounting/retained_earnings/list')
        },
        {
          path: '/finance_accounting/income_statement',
          name: 'Finance Income Statement',
          component: () => import('@/pages/finance_accounting/income_statement/list')
        },
      ]
    },
  ]
})

router.afterEach((to, from, next) => {
  try {
    let elems = document.getElementsByTagName('main')
    for (let i in elems) {
      elems[i].scrollTop = 0
    }
  } catch (err) {
    return
  }
  if (typeof next === 'function') {
    next()
  }
})

// function getMenu () {
//   store.dispatch('getMenu', {
//     success: function (response) {
//       console.log(router)
//       console.log(response.body)
//     },
//     error: (err) => {
//       console.log(err)
//     }
//   })
// }

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    console.log(store.getters.loggedIn)
    if (store.getters.loggedIn) {
      // getMenu()
      next()
      return
    } else {
      next('/auth-pages/login')
    }
  }
  next()
})

export default router
