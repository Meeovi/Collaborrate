<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        scrollable
      >
        <template v-slot:activator="{ props }">
        <v-card class="mx-auto" max-width="200" v-bind="props">
            <v-img class="align-end text-white" height="200" width="200"
                src="../../../assets/images/neo4jlogo.png" cover>
                <v-card-title style="width:100%;text-align:center;">Neo4j</v-card-title>
            </v-img>
        </v-card>
    </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" justify="center">
                <h1>NEO4J</h1>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Name*" id="neo4jName" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field type="url" label="URL*" id="neoEndpoint" hint="neo4j://localhost" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Source" id="neo4jSource" hint="3306" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Username*" id="neo4jUsername" hint="neo4j" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password" id="neo4jPassword*" hint="MY_PASSWORD" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Database" id="neo4jDatabase*" hint="employees" required></v-text-field>
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