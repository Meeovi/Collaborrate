<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable>
      <template v-slot:activator="{ props }">
        <v-card class="mx-auto" max-width="200" v-bind="props">
          <v-img class="align-end text-white" height="200" width="200"
            src="../../../assets/images/apachelogo.png" cover>
            <v-card-title style="width:100%;text-align:center;">Apache Thrift</v-card-title>
          </v-img>
        </v-card>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h6">Connect to Apache Thrift Service</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" justify="center">
                <h1>Apache Thrift</h1>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Name*" id="sourceName" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Hostname*" id="sourceHostname" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Port*" id="sourcePort" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Path to IDL File*" id="sourceIdl" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Path to Thrift Service" id="pathService" hint="/thrift"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Service Name*" id="serviceName" required></v-text-field>
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
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
      }
    },
  }
</script>