<template>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ props }">
          <v-col>
            <v-card class="mx-auto" max-width="400" v-bind="props">
              <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </template>
        <v-card>
          <mediaOptions />
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  
  <script>
    import mediaOptions from '~/components/media/options'
  
    export default {
      components: {
        mediaOptions
      },
      data() {
        return {
          dialogm1: '',
          dialog: false,
        }
      },
    }
  </script>
