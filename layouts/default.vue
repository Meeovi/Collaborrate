<template>
  <v-app :theme="theme">
    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="mainbar" permanent :rail="rail" @click="rail = false">
            <ul>
              <v-list-item>
                <a href="/"><img class="logobrand" src="../assets/images/alternatecms.png" /></a>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item>
                <v-btn stacked variant="text" title="Change Background"
                  :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
              </v-list-item>

              <li>
                <customermenu />
              </li>

              <li>
                <contentmenu />
              </li>

              <li>
                <projectmenu />
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

              <li>
                <v-row justify="center">
                  <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable fullscreen>
                    <template>
                      <v-btn stacked size="x-small" prepend-icon="fas fa-users-line" variant="text" href="/Admin/Teams/">Teams</v-btn>
                    </template>
                  </v-dialog>
                </v-row>
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
  import projectmenu from '../components/Menus/Default/projectmenu.vue'
  import contentmenu from '../components/Menus/Default/contentmenu.vue'
  import customermenu from '../components/Menus/Default/customermenu.vue'
  import inventorymenu from '../components/Menus/Default/inventorymenu.vue'
  import marketingmenu from '../components/Menus/Default/marketingmenu.vue'
  import reportsmenu from '../components/Menus/Default/reportsmenu.vue'
  import salesmenu from '../components/Menus/Default/salesmenu.vue'
  import settingsmenu from '../components/Menus/Default/settingsmenu.vue'

  export default {
    components: {
      projectmenu,
      contentmenu,
      customermenu,
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