<template>
  <div>
      <v-toolbar>
          <v-col>
              <v-toolbar-title>Files</v-toolbar-title>
          </v-col>
      </v-toolbar>
      <v-table fixed-header height="300px" width="100%">
          <thead>
              <tr>
                  <th class="text-left">
                      File ID
                  </th>
                  <th class="text-left">
                      File Name
                  </th>
                  <th class="text-left">
                      File URL
                  </th>
                  <th class="text-left">
                      Created
                  </th>
                  <th class="text-left">
                      Edit
                  </th>
              </tr>
          </thead>
          <tbody v-for="pages in findManyPages" :key="pages.id">
              <tr>
                  <td>{{ pages.id }}</td>
                  <td>{{ pages.title }}</td>
                  <td>{{ pages.url_key }}</td>
                  <td>{{ pages.meta_title }}</td>
                  <td>{{ pages.created_at }}</td>
                  <td><a :href="`/admin/database/${pages.id}`">
                          <!--<editUser />--></a></td>
              </tr>
          </tbody>
      </v-table>
  </div>
</template>

<script>
  //import findManyPages from '../../graphql/query/findManyPages.gql'

  export default {
    /*  data() {
          return {
              findManyPages: [],
          }
      },
      apollo: {
          findManyPages: {
              prefetch: true,
              query: findManyPages
          }
      }, */
  }
</script>

<script setup>
  useHead({
      title: 'Pages',
  })
</script>