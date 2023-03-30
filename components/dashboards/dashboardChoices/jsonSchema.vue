<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        scrollable
      >
        <template v-slot:activator="{ props }">
        <v-card class="mx-auto" max-width="200" v-bind="props">
            <v-img class="align-end text-white" height="200" width="200"
                src="../../../assets/images/jsonlogo.png" cover>
                <v-card-title style="width:100%;text-align:center;">JSON</v-card-title>
            </v-img>
        </v-card>
    </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" justify="center">
                <h1>JSON</h1>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Name*" id="jsonName" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Endpoint" id="jsonEndpoint*" hint="https://some-service-url/endpoint-path/" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Description" id="jsonDescription" hint="Your chance to describe the operation! Make sure the description is clear and concise."></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-autocomplete id="jsonType" :items="['Query', 'Mutation', 'Subscription']" label="Json Type" hint="Type field is set the opertion type: Query, Mutation or Subscription"></v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Operation Headers" id="operationHeaders"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Schema Headers" id="schemaHeaders"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>