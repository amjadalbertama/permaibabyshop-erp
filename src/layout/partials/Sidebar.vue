<template>
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a class="sidebar-brand brand-logo" href="/"><img src="@/assets/images/logo_permai_no_draw.svg" alt="logo" /></a>
        <a class="sidebar-brand brand-logo-mini" href="/"><img src="@/assets/images/logo_permai_mini.svg" alt="logo" /></a>
      </div>
      <ul class="nav">
        <li class="nav-item profile">
          <div class="profile-desc">
            <div class="profile-pic">
              <div class="count-indicator">
                <img class="img-xs rounded-circle " src="@/assets/images/faces/face15.jpg" alt="">
                <span class="count bg-success"></span>
              </div>
              <div class="profile-name">
                <h5 class="mb-0 font-weight-normal">{{ meh.name }}</h5>
                <span>Admin Member</span>
              </div>
            </div>
            <a href="#" id="profile-dropdown" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
            <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
              <a href="#" class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-dark rounded-circle">
                    <i class="mdi mdi-cog text-primary"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-dark rounded-circle">
                    <i class="mdi mdi-onepassword  text-info"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-dark rounded-circle">
                    <i class="mdi mdi-calendar-today text-success"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item nav-category">
          <span class="nav-link">Navigation</span>
        </li>
        <li class="nav-item menu-items">
          <a class="nav-link" href="/">
            <span class="menu-icon">
              <i class="mdi mdi-speedometer"></i>
            </span>
            <span class="menu-title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-branch'" :class="{'active': subIsActive('/branch')}">
            <span class="menu-icon">
              <i class="mdi mdi-source-branch text-danger"></i>
            </span>
            <span class="menu-title">Branchs</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-branch">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/branch/new">New Branch</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/branch/list">Branch List</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/product/categories">Categories</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/suppliers/list">Suppliers</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/pack/list">Packs</router-link>
              </li> -->
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-suppliers'" :class="{'active': subIsActive('/suppliers')}">
            <span class="menu-icon">
              <i class="mdi mdi-account-supervisor-circle-outline text-info"></i>
            </span>
            <span class="menu-title">Suppliers</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-suppliers">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/supplier/new">New Supplier</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/supplier/list">Supplier List</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/product/categories">Categories</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/suppliers/list">Suppliers</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/pack/list">Packs</router-link>
              </li> -->
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-packs'" :class="{'active': subIsActive('/packs')}">
            <span class="menu-icon">
              <i class="mdi mdi-package text-warning"></i>
            </span>
            <span class="menu-title">Packs</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-packs">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/pack/new">New Pack</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/pack/list">Pack List</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/product/categories">Categories</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/suppliers/list">Suppliers</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/masterdata/pack/list">Packs</router-link>
              </li> -->
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-basic'" :class="{'active': subIsActive('/products')}">
            <span class="menu-icon">
              <i class="mdi mdi-database text-success"></i>
            </span>
            <span class="menu-title">Products</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item menu-items">
                <span class="nav-link" v-b-toggle="'ui-product'" :class="{'active': subIsActive('/products/product')}">
                  <span class="menu-icon">
                    <i class="mdi mdi-package-variant text-danger"></i>
                  </span>
                  <span class="menu-title">Product</span>
                  <i class="mdi mdi-chevron-down"></i>
                </span>
                <b-collapse accordion="sidebar-accordion-sub" id="ui-product">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/products/product/new">New Product</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/products/product/list">Product List</router-link>
                    </li>
                  </ul>
                </b-collapse>
              </li>
              <li class="nav-item menu-items">
                <span class="nav-link" v-b-toggle="'ui-category'" :class="{'active': subIsActive('/products/categories')}">
                  <span class="menu-icon">
                    <i class="mdi mdi-format-list-bulleted-square text-light"></i>
                  </span>
                  <span class="menu-title">Category</span>
                  <i class="mdi mdi-chevron-down"></i>
                </span>
                <b-collapse accordion="sidebar-accordion-sub" id="ui-category">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/products/categories/new">New Category</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/products/categories/list">Category List</router-link>
                    </li>
                  </ul>
                </b-collapse>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-purchases'" :class="{'active': subIsActive('/purchases')}">
            <span class="menu-icon">
              <i class="mdi mdi-playlist-edit text-warning"></i>
            </span>
            <span class="menu-title">Purchase Order</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-purchases">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/purchases/po/new">New PO</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/purchases/po/list/1">PO List</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-distributions'" :class="{'active': subIsActive('/distributions')}">
            <span class="menu-icon">
              <i class="mdi mdi-package text-light"></i>
            </span>
            <span class="menu-title">Distributions</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-distributions">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item menu-items">
                <span class="nav-link" v-b-toggle="'ui-distribution-in'" :class="{'active': subIsActive('/distributions/in')}">
                  <span class="menu-icon">
                    <i class="mdi mdi-package-down text-success"></i>
                  </span>
                  <span class="menu-title">Distribution In</span>
                  <i class="mdi mdi-chevron-down"></i>
                </span>
                <b-collapse accordion="sidebar-accordion-sub" id="ui-distribution-in">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/distributions/in/new">New Distribution In</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/distributions/in/list/1">Distribution In List</router-link>
                    </li>
                  </ul>
                </b-collapse>
              </li>
              <li class="nav-item menu-items">
                <span class="nav-link" v-b-toggle="'ui-distribution-out'" :class="{'active': subIsActive('/distributions/out')}">
                  <span class="menu-icon">
                    <i class="mdi mdi-package-up text-danger"></i>
                  </span>
                  <span class="menu-title">Distribution Out</span>
                  <i class="mdi mdi-chevron-down"></i>
                </span>
                <b-collapse accordion="sidebar-accordion-sub" id="ui-distribution-out">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/distributions/out/new">New Distribution Out</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/distributions/out/list/1">Distribution Out List</router-link>
                    </li>
                  </ul>
                </b-collapse>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-finance_accounting'" :class="{'active': subIsActive('/finance_accounting')}">
            <span class="menu-icon">
              <i class="mdi mdi-book text-primary"></i>
            </span>
            <span
              class="menu-title-finance"
              v-bind:class="{ 'full-text': isHovered }"
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
            >
              {{ isHovered ? originalText : truncatedText }}
            </span>
            <!-- <span class="menu-title" id="financeTitle">Finance & Accounting</span> -->
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-finance_accounting">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/bank">Bank</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/petty_cash">Petty Cash</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/sales">Sales</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/purchase">Purchase</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/memorials">Memorials</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/general_ledger">General Ledger</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/receivables">Receivables</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/dept">Dept</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/assets">Assets</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/reconciliation">Reconciliation</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/trial_balance">Trial Balance</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/retained_earnings">Retained Earnings</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/finance_accounting/income_statement">Income Statement</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-reports'" :class="{'active': subIsActive('/reports')}">
            <span class="menu-icon">
              <i class="mdi mdi-clipboard-list-outline text-danger"></i>
            </span>
            <span class="menu-title">Reports</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-reports">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item menu-items">
                <span class="nav-link" v-b-toggle="'ui-stocks'" :class="{'active': subIsActive('/stock')}">
                  <span class="menu-icon">
                    <i class="mdi mdi-package-down text-success"></i>
                  </span>
                  <span class="menu-title">Stock</span>
                  <i class="mdi mdi-chevron-down"></i>
                </span>
                <b-collapse accordion="sidebar-accordion-sub" id="ui-stocks">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/report/stock/list">Stock List</router-link>
                    </li>
                  </ul>
                </b-collapse>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item menu-items">
          <span class="nav-link" v-b-toggle="'ui-users'" :class="{'active': subIsActive('/users')}">
            <span class="menu-icon">
              <i class="mdi mdi-account-multiple text-info"></i>
            </span>
            <span class="menu-title">Users</span>
            <i class="mdi mdi-chevron-down"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-users">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/users/new">New User</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/users/list">User List</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/users/role/list">User Roles</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style>
.menu-title-finance {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px; /* Set your desired character limit */
  cursor: pointer;
}

.menu-title-finance.full-text {
  white-space: normal;
  max-width: none;
}
</style>

<script>
  // import Spinner from 'vue-spinkit'
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'sidebar',
    components: {
      // Spinner
    },
    data () {
      return {
        loading: false,
        collapses: [ 
       { show: false },
       { show: false },
       { show: false },
      ],
      isHovered: false,
      originalText: 'Finance & Accounting',
      }
    },
    mounted () {
      const body = document.querySelector('body')
      // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
      document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
        el.addEventListener('mouseover', function () {
          if (body.classList.contains('sidebar-icon-only')) {
            el.classList.add('hover-open')
          }
        })
        el.addEventListener('mouseout', function () {
          if (body.classList.contains('sidebar-icon-only')) {
            el.classList.remove('hover-open')
          }
        })
      })
      // let loggedIn = this.$store.getters.loggedIn
      // if (loggedIn) {
      //   this.$store.dispatch('getMeh')
      // }
      this.$store.dispatch('getMeh')
    },
    methods: {
      collapseAll() {
        var exp_element = document.getElementsByClassName("show");
        if (exp_element.length > 0) {
          var elm_id = exp_element[0].id;
          this.$root.$emit("bv::toggle::collapse", elm_id);
        }
      },
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
          // console.log(path)
          return this.$route.path.indexOf(path) === 0 // current path starts with this path string
        })
      },
      doLogout: function () {
        let self = this
        self.loading = true
        self.$toastr.defaultPosition = 'toast-top-right'
        self.$store.dispatch('logout', {
          success: function (response) {
            self.loading = false
            var theLogout = response.body
            if (theLogout.success === true) {
              self.$toastr.s(theLogout.message)
              window.localStorage.clear()
              self.$router.push('/auth-pages/login')
            }
          },
          error: (err) => {
            self.responseMessage = err.body.message
            self.$toastr.e(self.responseMessage)
            self.loading = false
          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'loggedIn',
        'credentials',
        'meh'
      ]),
      truncatedText() {
      const maxLength = 15; // Set your desired character limit
      return this.originalText.length > maxLength
        ? `${this.originalText.substring(0, maxLength)}...`
        : this.originalText;
      },
    },
    watch: {
      $route () {
        document.querySelector('#sidebar').classList.toggle('active');
      }
    } 
  }
</script>

<style scoped></style>