<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark topnav">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <a class="navbar-brand mt-2 mt-lg-0" href="/">
                    <div class="metroname" style="color:red;">ALTERNATE</div> <div class="metroname" style="color:powderblue;">CMS</div>
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!--Sales Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Sales
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/sales/orders">Orders</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/invoices">Invoices</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/shipments">Shipments</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/credit-memos">Credit Memos</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/returns">Returns</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/agreements">Agreements</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/transactions">Transactions</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/certificates">Gift Certificates & Gift Cards</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/quotes">Quotes</a>
                            </li>
                        </ul>
                    </li>
                    <!--Customers Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Customers
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/customers/all-customers">All Customers</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/online-customers">Online Customers</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/segments">Segments</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/social-groups">Social Groups</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/opportunities">Opportunities</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/leads">Leads</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/tasks">Tasks</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/meetings">Meetings</a>
                            </li>
                        </ul>
                    </li>
                    <!--Marketing Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Marketing
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/events">Events</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/invitations">Invitations</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/seo">Search Engine Optimization</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/newsletter">Newsletter</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/communications">Communications</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/rewards">Rewards</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/reviews">Reviews</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/contracts">Contracts</a>
                            </li>
                             <li>
                                <a class="dropdown-item" href="/admin/marketing/ticketing">Ticketing</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/training">Training</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/checklists">Checklists</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/visits">Visits</a>
                            </li>
                        </ul>
                    </li>
                    <!--Content Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Content
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/content/pages">Pages</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/blog">Blog</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/media-manager">Media Manager</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/tags">Tags</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/glossary">Glossary</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/projects">Projects</a>
                            </li>
                        </ul>
                    </li>
                    <!--Reports Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Reports
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/reports/reports">Reports</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/deep-dive">Deep Dive</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/eosr">End of Shift Reports</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/surveys">Surveys</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/cases">Cases</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/team-scheduler">Team Scheduler</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/ooto">Out of the Office Reporting Tool</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/statistics">Statistics</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/calendars">Calendars</a>
                            </li>
                        </ul>
                    </li>
                    <!--Shop Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Shop
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/shop/products">Products</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/product-types">Product Types</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/categories">Categories</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/collections">Collections</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/cities">Cities</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/countries">Countries</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/states">States</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/attributes">Attributes</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/shops">Shops</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/partners">Partners</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/coupons">Coupons</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/warehouses">Warehouses</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/tax-rule">Tax Rule</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/tax-rate">Tax Rate</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            System
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/system/general-settings">General Settings</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/integrations">Integrations</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/role-manager">Role Manager</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/knowledgebase">Knowledgebase</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/help">Help Center</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="d-flex align-items-center">
                <!-- Search -->
                <form class="d-flex input-group w-auto">
                    <input id="search" v-model="query" type="search" class="form-control rounded" label="Search" aria-label="Search" aria-describedby="search-addon" autocomplete="on" @input="search" />
                    <span id="search-addon" class="input-group-text border-0">
                        <i class="fas fa-search"></i>
                    </span>
                </form>

                <a id="navbarDropdownMenuLink" class="text-reset me-3 dropdown-toggle hidden-arrow" href="#"
                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item" href="/admin/">Some news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/admin/">Another news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/admin/">Something else here</a>
                    </li>
                </ul>

                <a id="navbarDropdownMenuLink" class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <span class="fas fa-user-circle"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end"  aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item" href="/user/my-account">My Profile</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/admin/">Customer View</a>
                    </li>
                    <li>
                        <a class="dropdown-item" aria-current="page" href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>        
  </div>
</template>

<script>
/* import { mapGetters } from 'vuex'
    export default {
      computed: {
        ...mapGetters(['isAuthenticated']),
      },
      methods: {
        async userLogout() {
          await this.$auth.logout()
        },
      },
    } */
</script>
<style>

</style>
