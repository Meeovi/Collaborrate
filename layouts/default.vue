<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>
      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start icon="fas fa-hurricane"></v-icon>ALTERNATE
        </a></v-app-bar-title>
      <v-spacer></v-spacer>

      <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
        <v-list-item><addDatasource /></v-list-item>
        <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-circle-question"></v-icon>Help
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="Documentation" value="documentation" href="https://www.alternatecms.com/docs">
              </v-list-item>
              <v-list-item title="Discussions" value="discussions"
                href="https://github.com/Meeovi/alternatecms/discussions"></v-list-item>
              <v-list-item title="Versions" value="versions" href="https://github.com/Meeovi/alternatecms/releases">
              </v-list-item>
              <v-list-item title="Official Site" value="official site" href="https://www.alternatecms.com">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col>
          <v-btn variant="flat" href="/Admin/Notifications/">
            <v-icon start icon="fas fa-bell"></v-icon>
          </v-btn>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer expand-on-hover v-model="drawer" :rail="rail" @click="rail = false">
            <v-list-item prepend-icon="fas fa-user-circle" title="Profile">
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>
            
            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="fas fa-home" title="Home" value="home" href="/"></v-list-item>
                <v-list-group prepend-icon="fas fa-feather-pointed" value="content manager">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Content Manager"></v-list-item>
                  </template>
                  <v-list-item prepend-icon="fas fa-arrows-to-circle" title="Content Manager" value="Content Manager" href="/Admin/Content/manager"></v-list-item>
                  <v-list-item prepend-icon="fas fa-th" title="Categories" value="Categories" href="/Admin/Content/Categories"></v-list-item>
                  <v-list-item prepend-icon="fas fa-tag" title="Tags" value="Tags" href="/Admin/Content/Tags"></v-list-item>
                  <v-list-item prepend-icon="fas fa-desktop" title="Pages" value="desktop" href="/Admin/Content/PageManager/"></v-list-item>
                  <v-list-item prepend-icon="fas fa-icons" title="Media Manager" value="media manager" href="/Admin/Content/Media/"></v-list-item>
                </v-list-group>

                <!--Blog-->
              <v-list-group prepend-icon="fas fa-feather" value="blog">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Blog"></v-list-item>
                  </template>
                  <v-list-item prepend-icon="fas fa-pen-nib" title="Blog Dashboard" value="Blog Dashboard" href="/Admin/Blog/Dashboard"></v-list-item>
                  <v-list-item prepend-icon="fas fa-pen" title="Posts" value="Posts" href="/Admin/Blog/Posts"></v-list-item>
                  <v-list-item prepend-icon="fas fa-file-pen" title="Drafts" value="Drafts" href="/Admin/Blog/Drafts"></v-list-item>
                  <v-list-item prepend-icon="fas fa-rss" title="Scheduled" value="Scheduled" href="/Admin/Blog/Scheduled"></v-list-item>
                  <v-list-item prepend-icon="fas fa-pen-to-square" title="Published" value="Published" href="/Admin/Blog/Published"></v-list-item>
              </v-list-group>
              
                <!--Commerce-->
              <v-list-group prepend-icon="fas fa-store" value="commerce">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Commerce"></v-list-item>
                  </template>
                  <v-list-item prepend-icon="fas fa-shop" title="Dashboard" value="Dashboard" href="/Admin/Commerce/"></v-list-item>
                  <v-list-item prepend-icon="fas fa-handshake" title="Agreements" value="Agreements" href="/Admin/Commerce/Agreements"></v-list-item>
                  <v-list-item prepend-icon="fas fa-bag-shopping" title="Attributes" value="Attributes" href="/Admin/Commerce/Attributes"></v-list-item>
                  <v-list-item prepend-icon="fas fa-check-double" title="Channels" value="Channels" href="/Admin/Commerce/Channels"></v-list-item>
                  <v-list-item prepend-icon="fas fa-object-group" title="Collections" value="Collections" href="/Admin/Commerce/Collections"></v-list-item>
                  <v-list-item prepend-icon="fas fa-tags" title="Discounts" value="Discounts" href="/Admin/Commerce/Discounts"></v-list-item>
                  <v-list-item prepend-icon="fas fa-receipt" title="Invoices" value="Invoices" href="/Admin/Commerce/Invoices"></v-list-item>
                  <v-list-item prepend-icon="fas fa-credit-card" title="Payments" value="Payments" href="/Admin/Commerce/Payments"></v-list-item>
                  <v-list-item prepend-icon="fas fa-camera-retro" title="Product Types" value="Product Types" href="/Admin/Commerce/product-types"></v-list-item>
                  <v-list-item prepend-icon="fas fa-basket-shopping" title="Products" value="Products" href="/Admin/Commerce/Products"></v-list-item>
                  <v-list-item prepend-icon="fas fa-file-contract" title="Quotes" value="Quotes" href="/Admin/Commerce/Quotes"></v-list-item>
                  <v-list-item prepend-icon="fas fa-scale-balanced" title="Sales" value="Sales" href="/Admin/Commerce/Sales"></v-list-item>
                  <v-list-item prepend-icon="fas fa-scale-unbalanced-flip" title="Transactions" value="Transactions" href="/Admin/Commerce/Transactions"></v-list-item>
                  <v-list-item prepend-icon="fas fa-people-group" title="Vendors" value="Vendors" href="/Admin/Commerce/Vendors"></v-list-item>
                  <v-list-item prepend-icon="fas fa-warehouse" title="Warehouses" value="Warehouses" href="/Admin/Commerce/Warehouses"></v-list-item>
                  <v-list-item prepend-icon="fas fa-hand-sparkles" title="Wishlists" value="Wishlists" href="/Admin/Commerce/Wishlists"></v-list-item>
              </v-list-group>

              <!--Marketing-->
              <v-list-group prepend-icon="fas fa-chart-simple" value="marketing">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Marketing"></v-list-item>
                  </template>
                  <v-list-item prepend-icon="fas fa-timeline" title="Marketing Home" value="Marketing Home" href="/Admin/Marketing/"></v-list-item>
                  <v-list-item prepend-icon="fas fa-envelope" title="Communications" value="Communications" href="/Admin/Marketing/Communications"></v-list-item>
                  <v-list-item prepend-icon="fas fa-bullhorn" title="Engagement" value="Engagement" href="/Admin/Marketing/Engagement"></v-list-item>
                  <v-list-item prepend-icon="fas fa-person-rays" title="Events" value="Events" href="/Admin/Marketing/Events"></v-list-item>
                  <v-list-item prepend-icon="fas fa-magnifying-glass-arrow-right" title="Seo" value="Seo" href="/Admin/Marketing/Seo"></v-list-item>
              </v-list-group>

              <!--Database-->
              <v-list-group prepend-icon="fas fa-database" value="database">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Database"></v-list-item>
                  </template>
                  <v-list-item prepend-icon="fas fa-server" title="SQL Editor" value="SQL Editor" href="/Admin/Database/sqleditor"></v-list-item>
                  <v-list-item prepend-icon="fas fa-database" title="Database" value="Database" href="/Admin/Database/Database"></v-list-item>
                  <v-list-item prepend-icon="fas fa-diagram-predecessor" title="Edge Functions" value="Edge Functions" href="/Admin/Database/edgefunctions"></v-list-item>
                  <v-list-item prepend-icon="fas fa-bug" title="Logs" value="Logs" href="/Admin/Database/Logs"></v-list-item>
                  <v-list-item prepend-icon="fas fa-link" title="API Docs" value="API Docs" href="/Admin/Database/apidocs"></v-list-item>
                  <v-list-item prepend-icon="fas fa-eye" title="API Studio" value="API Studio" href="/Admin/Database/apistudio"></v-list-item>
              </v-list-group>
              
              <v-list-item prepend-icon="fas fa-users" title="Users" value="Users" href="/Admin/Users"></v-list-item>
              <v-list-item prepend-icon="fas fa-chart-simple" title="Dashboards" value="dashboards"
                href="/Admin/Dashboard/explorer"></v-list-item>
              <v-list-item prepend-icon="fas fa-chart-column" title="Monitoring" value="monitoring"
                href="/Admin/Monitoring/"></v-list-item>
              
              <v-list-item prepend-icon="fas fa-cubes" title="Integrations" value="integrations"
                href="/Admin/Integrations/"></v-list-item>
              <v-list-item prepend-icon="fas fa-gear" title="Settings" value="settings"
                href="/Admin/Settings/general-settings"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
              <slot />
            </main>
        </v-layout>
      </v-card>
      
    </v-main>
  </v-app>
</template>

<script>
import addDatasource from '../components/dashboards/add-datasource.vue'

  export default {
    components: { addDatasource },
    data() {
      return {
        drawer: null,
        location: 'bottom',
        items: [{
            title: 'Home',
            icon: 'fas fa-home'
          },
          {
            title: 'Content Manager',
            icon: 'fas fa-feather-pointed'
          },
          {
            title: 'Dashboards',
            icon: 'fas fa-chart-simple'
          },
          {
            title: 'Monitoring',
            icon: 'fas fa-chart-column'
          },
          {
            title: 'Database',
            icon: 'fas fa-database'
          },
          {
            title: 'Pages',
            icon: 'fas fa-desktop'
          },
          {
            title: 'Media Manager',
            icon: 'fas fa-icons'
          },
          {
            title: 'Integrations',
            icon: 'fas fa-cubes'
          },
          {
            title: 'Settings',
            icon: 'fas fa-gear'
          },
        ],
        rail: true,
      }
    }
  }
</script>

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('dark')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>