<template>
    <v-card>
        <v-toolbar style="background-color: azure; color: black;">
            <v-toolbar-title>Database</v-toolbar-title>
        </v-toolbar>
      <v-tabs v-model="tab" style="background-color: azure; color: black;">
        <v-tab value="one">Content</v-tab>
        <v-tab value="two">SQL Editor</v-tab>
        <v-tab value="three">Database</v-tab>
        <v-tab value="four">Edge Functions</v-tab>
        <v-tab value="five">Reports</v-tab>
        <v-tab value="six">Logs</v-tab>
        <v-tab value="seven">API Docs</v-tab>
        <v-tab value="eight">API Studio</v-tab>
      </v-tabs>
  
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <content />
          </v-window-item>
  
          <v-window-item value="two">
            <sqleditor />
          </v-window-item>

          <v-window-item value="three">
            <database />
          </v-window-item>

          <v-window-item value="four">
            <functions />
          </v-window-item>

          <v-window-item value="five">
            <reports />
          </v-window-item>

          <v-window-item value="six">
            <logs />
          </v-window-item>

          <v-window-item value="seven">
            <apidocs />
          </v-window-item>

          <v-window-item value="eight">
            <apistudio />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </template>

<script>
import content from '../../../components/database/content/index.vue'
import sqleditor from '../../../components/database/sqleditor/index.vue'
import database from '../../../components/database/database/index.vue'
import functions from '../../../components/database/edgefunctions/index.vue'
import reports from '../../../components/database/reports/index.vue'
import logs from '../../../components/database/logs/index.vue'
import apidocs from '../../../components/database/apidocs/index.vue'
import apistudio from '../../../components/database/apistudio/index.vue'


  export default {
    components: { content, sqleditor, database, functions, reports, logs, apidocs, apistudio },
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>
    useHead({
        title: 'Database'
    })
</script>