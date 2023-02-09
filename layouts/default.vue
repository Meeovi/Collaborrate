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
          <v-btn variant="flat" href="/admin/user/">
            <v-icon start icon="fas fa-user-circle"></v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn variant="flat">
            <v-icon start icon="fas fa-bell"></v-icon>
          </v-btn>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer expand-on-hover v-model="drawer" :rail="rail" @click="rail = false">
            <v-list-item prepend-icon="fas fa-user" title="Profile Name">
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
                  <v-list-item prepend-icon="fas fa-feather" title="Blog" value="Blog" href="/Admin/Content/Blog"></v-list-item>
                  <v-list-item prepend-icon="fas fa-th" title="Categories" value="Categories" href="/Admin/Content/Categories"></v-list-item>
                  <v-list-item prepend-icon="fas fa-tag" title="Tags" value="Tags" href="/Admin/Content/Tags"></v-list-item>
                  <v-list-item prepend-icon="fas fa-shopping-cart" title="Inventory" value="Inventory" href="/Admin/Content/Inventory"></v-list-item>
                  <v-list-item prepend-icon="fas fa-bullhorn" title="Marketing" value="Marketing" href="/Admin/Content/Marketing"></v-list-item>
                  <v-list-item prepend-icon="fas fa-desktop" title="Pages" value="desktop" href="/Admin/Content/PageManager/"></v-list-item>
                  <v-list-item prepend-icon="fas fa-icons" title="Media Manager" value="media manager" href="/Admin/Content/Media/"></v-list-item>
                </v-list-group>
              <v-list-item prepend-icon="fas fa-users" title="Customers" value="Customers" href="/Admin/Customers"></v-list-item>
              <!--<v-list-item prepend-icon="fas fa-chart-simple" title="Dashboards" value="dashboards"
                href="/Admin/Dashboard/explorer"></v-list-item>
              <v-list-item prepend-icon="fas fa-chart-column" title="Monitoring" value="monitoring"
                href="/Admin/Monitoring/"></v-list-item>
              <v-list-item prepend-icon="fas fa-database" title="Database" value="database"
                href="/Admin/Database/editor"></v-list-item>-->
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
  export default {
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