<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        scrollable
      >
        <template v-slot:activator="{ props }">
        <v-card class="mx-auto" max-width="200" v-bind="props">
            <v-img class="align-end text-white" height="200" width="200"
                src="../../../assets/images/grpclogo.png" cover>
                <v-card-title style="width:100%;text-align:center;">GRPC / Protobuf</v-card-title>
            </v-img>
        </v-card>
    </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" justify="center">
                <h1>GRPC / PROTOBUF</h1>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Name*" id="grpcName" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Endpoint*" id="grpcEndpoint*" hint="http://localhost:50051" required></v-text-field>
              </v-col>
              <h6>If you have configured reflection in your gRPC server, you don't need to provide source</h6>
              <v-col cols="6">
                <v-text-field label="Source*" id="grpcSource" hint="grpc/proto/Example.proto"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Metadata Authorization" id="grpcAuthorization" hint="Bearer {context.headers['x-my-token']}"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field type="number" label="Request Timeout" id="grpcTimeout" hint="Request timeout in milliseconds Default: 200000"></v-text-field>
              </v-col>
              <v-col cols="6">
                <div class="text-subtitle-1 text-medium-emphasis">Prefix to collect Query method default: list, get</div>
                <v-autocomplete id="grpcPrefixMethod" :items="['get', 'post']" label="Prefix Query Method"></v-autocomplete>
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