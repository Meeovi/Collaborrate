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
            <a class="sidenav-link"><i class="fas fa-money-bill fa-fw me-3" style="color: white;"></i><span>Sales</span></a>
            <ul class="sidenav-collapse">
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/orders">Orders</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/invoices">Invoices</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/shipments">Shipments</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/credit-memos">Credit Memos</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/returns">Returns</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/agreements">Agreements</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/transactions">Transactions</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/certificates">Gift Certificates & Gift Cards</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/sales/quotes">Quotes</a>
              </li><br>
            </ul>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link"><i class="fas fa-users fa-fw me-3" style="color: white;"></i><span>Customers</span></a>
            <ul class="sidenav-collapse">
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/all-customers">All Customers</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/online-customers">Online Customers</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/segments">Segments</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/social-groups">Social Groups</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/opportunities">Opportunities</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/leads">Leads</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/to-do">To Do</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/customers/meetings">Meetings</a>
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
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/invitations">Invitations</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/seo">Search Engine Optimization</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/newsletter">Newsletter</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/communications">Communications</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/rewards">Rewards</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/reviews">Reviews</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/contracts">Contracts</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/ticketing">Ticketing</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/training">Training</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/checklists">Checklists</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/marketing/visits">Visits</a>
              </li><br>
            </ul>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link" style="color: white;" href="">
              <i class="fas fa-chart-pie fa-fw me-3" style="color: white;"></i><span>Reports</span></a>
            <ul class="sidenav-collapse">
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/reports">Reports</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/deep-dive">Deep Dive</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/eosr">End of Shift Reports</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/surveys">Surveys</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/cases">Cases</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/team-scheduler">Team Scheduler</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/ooto">Out of the Office Reporting Tool</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/statistics">Statistics</a>
              </li><br>
              <!--<li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/reports/calendars">Calendars</a>
              </li><br>-->
            </ul>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link" style="color: white;" href="">
              <i class="fas fa-edit fa-fw me-3" style="color: white;"></i><span>Content</span></a>
            <ul class="sidenav-collapse">
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/content/pages">Pages</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/content/blog">Blog</a>
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
                <a class="sidenav-link" style="color: white;" href="/admin/shop/products">Products</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/product-types">Product Types</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/categories">Categories</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/collections">Collections</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/occassions">Occassions</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/brands">Brands</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/manufacturers">Manufacturers</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/attributes">Attributes</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/shops">Shops</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/partners">Partners</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/coupons">Coupons</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/warehouses">Warehouses</a>
              </li><br>
              <li class="sidenav-item">
                <a class="sidenav-link" style="color: white;" href="/admin/shop/wishlists">Wishlists</a>
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
                <a class="sidenav-link" style="color: white;" href="/admin/system/knowledgebase">Knowledgebase</a>
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
            <i class="fas fa-bars"></i>
          </button>
          <a class="navbar-brand" href="/">
            <div class="metroname" style="color:orange;">ALTERNATE</div>
            <div class="metroname" style="color:powderblue;">CMS</div>
          </a>
          <!-- Search form -->
          <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
          <form class="d-none d-md-flex input-group w-auto my-auto">
            <input autocomplete="off" type="search" class="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)' style="width: 525px;" />
            <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
          </form>
          </div>

          <!-- Right links -->
          <ul class="navbar-nav ms-auto d-flex flex-row">
            <!-- Notification dropdown -->
            <li class="nav-item dropdown">
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

            <!-- Icon dropdown -->
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
            </li>

            <!-- Avatar -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22"
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
                  <a class="dropdown-item" target="_blank" href="http://127.0.0.1:4002/graphql">Graphql Playground</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="http://localhost:5858/">Rest API Documentation</a>
                </li>
                <li>
                  <a class="dropdown-item" aria-current="page" href="/logout">Logout</a>
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

</script>
<style>

</style>
