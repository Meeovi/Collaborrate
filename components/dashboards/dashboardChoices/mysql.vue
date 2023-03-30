<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        scrollable
      >
        <template v-slot:activator="{ props }">
        <v-card class="mx-auto" max-width="200" v-bind="props">
            <v-img class="align-end text-white" height="200" width="200"
                src="../../../assets/images/mysqllogo.png" cover>
                <v-card-title style="width:100%;text-align:center;">Mysql</v-card-title>
            </v-img>
        </v-card>
    </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" justify="center">
                <h1>MYSQL</h1>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Name*" id="mysqlName" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Host" id="mysqlHost*" hint="localhost" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Port" id="mysqlPort*" hint="3306" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="User" id="mysqlUser*" hint="root" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password" id="mysqlPassword*" hint="passwd" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Database" id="mysqlDatabase*" hint="employees" required></v-text-field>
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