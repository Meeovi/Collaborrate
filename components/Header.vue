<template>
  <header>
    <!-- Sidenav -->
    <nav id="sidenav-1" class="sidenav bg-primary" data-mdb-hidden="true">
      <ul class="sidenav-menu">
        <li class="sidenav-item">
          <a class="sidenav-link">
            <i class="fas fa-home fa-fw me-3" style="color: white;"></i><span>Main Dashboard</span></a>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link"><i class="fas fa-users fa-fw me-3"
              style="color: white;"></i><span>Customers</span></a>
          <ul class="sidenav-collapse">
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/customers/customers">Customers</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/customers/segments">Segments</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/customers/reviews">Reviews</a>
            </li><br>
          </ul>
        </li>

        <li class="sidenav-item">
          <a class="sidenav-link" style="color: white;" href="">
            <i class="fab fa-slideshare fa-fw me-3" style="color: white;"></i><span>Marketing</span></a>
          <ul class="sidenav-collapse">
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/marketing/events">Events</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/marketing/newsletter">Newsletter</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/marketing/rewards">Rewards</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/marketing/visits">Visits</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/marketing/agreements">Agreements</a>
            </li><br>
          </ul>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link" style="color: white;" href="">
            <i class="fas fa-chart-pie fa-fw me-3" style="color: white;"></i><span>Reports</span></a>
          <ul class="sidenav-collapse">
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/reports/eosr">End of Shift Reports</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/reports/cases">Cases</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/reports/team-scheduler">Team Scheduler</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/reports/dashboards">Dashboards</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/reports/ooto">Out of the Office Reporting
                Tool</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/reports/tickets">Ticket Management</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/reports/checklists">Checklists</a>
            </li><br>
          </ul>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link" style="color: white;" href="">
            <i class="fas fa-edit fa-fw me-3" style="color: white;"></i><span>Content Management</span></a>
          <ul class="sidenav-collapse">
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/pages">Pages</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/blog">Blog</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/categories">Categories</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/media-manager">Media Manager</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/tags">Tags</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/glossary">Glossary</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/projects">Projects</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/websites">Websites</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/content/workspaces">Workspaces</a>
            </li><br>
          </ul>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link" style="color: white;" href="">
            <i class="fas fa-shopping-basket fa-fw me-3" style="color: white;"></i><span>Inventory</span></a>
          <ul class="sidenav-collapse">
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/products">Products</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/product-types">Product Types</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/collections">Collections</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/brands">Brands</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/manufacturers">Manufacturers</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/attributes">Attributes</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/vendors">Multi-Vendor</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/partners">Partners</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/warehouses">Warehouses</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/wishlists">Wishlists</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/orders">Orders</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/invoices">Invoices</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/shipments">Shipments</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/returns">Returns</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/transactions">Transactions</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/discounts">Discounts</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/inventory/quotes">Quotes</a>
            </li><br>
          </ul>
        </li>
        <hr style="color: white;" />
        <h6 style="color: white; width:100%; text-align:left; padding-left: 20px;">General</h6>
        <li class="sidenav-item">
          <a class="sidenav-link" style="color: white;" href="">
            <i class="fas fa-cogs fa-fw me-3" style="color: white;"></i><span>System</span></a>
          <ul class="sidenav-collapse">
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/system/general-settings">General Settings</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/system/integrations">Integrations</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/system/role-manager">Role Manager</a>
            </li><br>
            <li class="sidenav-item">
              <a class="sidenav-link" style="color: white;" href="/admin/system/devcenter">Developer Center</a>
            </li><br>
          </ul>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link" style="color: white;" href="">
            <i class="fas fa-calendar fa-fw me-3" style="color: white;"></i><span>Profile</span></a>
        </li>
      </ul>
    </nav>
    <!-- Sidenav -->

    <!-- Navbar -->
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-primary fixed-top" style="z-index:999999">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggler -->
        <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn btn-primary"
          aria-controls="#sidenav-1" aria-haspopup="true">
          <i class="fas fa-bars"> Menu</i>
        </button>
        <a class="navbar-brand" href="/">
          <div class="metroname" style="color:orange;">ALTERNATE</div>
          <div class="metroname" style="color:powderblue;">CMS</div>
        </a>
        <!-- Search form -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
          <MainSearch />
        </div>

        <ul class="navbar-nav ms-auto d-flex flex-row">
          <colormode />
      <!--    <li class="nav-item dropdown">
            <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
              role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Some news</a></li>
              <li><a class="dropdown-item" href="#">Another news</a></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              <i class="flag-united-kingdom flag m-0"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#"><i class="flag-united-kingdom flag"></i>English
                  <i class="fa fa-check text-success ms-2"></i></a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
              </li>
            </ul>
          </li>-->

          <!-- Avatar -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
              id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <img src="" class="rounded-circle fas fa-user-circle" height="22"
                alt="" loading="lazy" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="/user/my-account">My Profile</a>
              </li>
              <li>
                <a class="dropdown-item" target="_blank" href="/admin/">Customer View</a>
              </li>
              <li>
                <a class="dropdown-item" style="color: white;" href="/admin/system/devcenter">Developer Center</a>
              </li><br>
              <li>
                <a class="dropdown-item" aria-current="page" @click.prevent="handleLogout">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>
import MainSearch from '~/components/MainSearch.vue'
import colormode from '~/components/colormode.vue'
// import { mapGetters } from 'vuex'

export default {
 // middleware: 'auth',

  methods: {
  /*  async handleLogout() {
      this.$nuxt.$loading.start()
      await this.$auth.logout()
    } */
  },
    components: {
      MainSearch,
      colormode
    },
}
</script>

<style>

</style>
