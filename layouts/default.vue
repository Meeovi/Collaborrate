<template>
  <v-app :theme="theme">
    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="mainbar" permanent :rail="rail" @click="rail = false">
           <ul>
            <v-list-item>
              <a href="/"><img class="logobrand" src="../assets/images/alternatecms.png"/></a>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-btn stacked variant="text" title="Change Background" :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
            </v-list-item>
            
              <li>
                <contentmenu />
              </li>

              <li>
                <blogmenu />
              </li>

              <li>
                <marketingmenu />
              </li>

              <li>
                <reportsmenu />
              </li>

              <li>
                <salesmenu />
              </li>

              <li>
                <inventorymenu />
              </li>

              <v-divider></v-divider>
              <li>
                <settingsmenu />
              </li>
            </ul>


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
  import blogmenu from '../components/Menus/Default/blogmenu.vue'
  import contentmenu from '../components/Menus/Default/contentmenu.vue'
  import databasemenu from '../components/Menus/Default/databasemenu.vue'
  import inventorymenu from '../components/Menus/Default/inventorymenu.vue'
  import marketingmenu from '../components/Menus/Default/marketingmenu.vue'
  import reportsmenu from '../components/Menus/Default/reportsmenu.vue'
  import salesmenu from '../components/Menus/Default/salesmenu.vue'
  import settingsmenu from '../components/Menus/Default/settingsmenu.vue'

  export default {
    components: {
      blogmenu,
      contentmenu,
      databasemenu,
      inventorymenu,
      marketingmenu,
      reportsmenu,
      salesmenu,
      settingsmenu,
      addDatasource
    },
    data() {
      return {
        drawer: null,
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