export default {
  // api_base_path: 'http://localhost/wanode-api/public',
  api_base_path: 'https://api-dev.permaibabyshop.cloud',
  api: {
    login: '/api/login',
    logout: '/api/logout',
    register: '/api/register',
    users: {
      me: '/api/me',
      // edit_profile: '/api/profile/edit',
      add_user: '/api/users',
      list_user: '/api/users'
    },
    roles: {
      list_role: '/api/roles',
      // add_role: '/api/roles',
      // edit_profile: '/api/profile/edit',
      // list_user: '/api/users'
    },
    menus: '/api/menu',
    masterdata: {
      products: {
        list_products: '/api/products',
        add_products: '/api/products',
        list_categories: '/api/categories',
        add_categories: '/api/categories'
      },
      supplier: {
        list_supplier: '/api/suppliers',
        add_supplier: '/api/suppliers'
      },
      branch: {
        list_branch: '/api/branches',
        add_branch: '/api/branches'
      },
      pack: {
        list_pack: '/api/packs',
        add_pack: '/api/packs'
      },
    },
    distributions: {
      purchase_order: {
        list_po: '/api/purchase_orders',
        add_po: '/api/purchase_orders'
      },
      distribution_in: {
        list_di: '/api/di',
        add_di: '/api/di'
      },
      distribution_out: {
        list_do: '/api/do',
        add_do: '/api/do'
      }
    }
  },
  AUTH_TOKEN: 'AUTH_TOKEN',
  CREDENTIALS: 'CREDENTIALS',
  user_id: 'user_id',
  user_data: 'user_data',
  getApiPath (path) {
    return this.api_base_path + path
  },
  default: {
    limit: 20
  }
}
