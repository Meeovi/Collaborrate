<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="x-small" v-bind="props" class="insertAddBtn">
                    <v-icon start icon="fas fa-file-pen"></v-icon>Create A Dashboard
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Create A New Dashboard</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row class="choiceGrid">
                            <v-col>
                                <apacheThrift />
                            </v-col>

                            <v-col>
                                <graphql />
                            </v-col>

                            <v-col>
                                <grpcProtobuf />
                            </v-col>

                            <v-col>
                                <jsonSchema />
                            </v-col>

                            <v-col>
                                <mongodb />
                            </v-col>
                            
                            <v-col>
                                <mysql />
                            </v-col>

                            <v-col>
                                <neo4j />
                            </v-col>

                            <v-col>
                                <odata />
                            </v-col>

                            <v-col>
                                <openapiSwagger />
                            </v-col>

                            <v-col>
                                <postgresql />
                            </v-col>

                            <v-col>
                                <soap />
                            </v-col>

                            <v-col>
                                <sqlite />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import apacheThrift from './dashboardChoices/apacheThrift.vue'
import graphql from './dashboardChoices/graphql.vue'
import grpcProtobuf from './dashboardChoices/grpcProtobuf.vue'
import jsonSchema from './dashboardChoices/jsonSchema.vue'
import mongodb from './dashboardChoices/mongodb.vue'
import mysql from './dashboardChoices/mysql.vue'
import neo4j from './dashboardChoices/neo4j.vue'
import odata from './dashboardChoices/odata.vue'
import openapiSwagger from './dashboardChoices/openapiSwagger.vue'
import postgresql from './dashboardChoices/postgresql.vue'
import soap from './dashboardChoices/soap.vue'
import sqlite from './dashboardChoices/sqlite.vue'

    export default {
        components: { apacheThrift, graphql, grpcProtobuf, jsonSchema, mongodb, mysql, neo4j, odata, openapiSwagger, postgresql, soap, sqlite },
        data: () => ({
            dialog: false,
        }),
    }
</script>