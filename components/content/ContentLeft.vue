<template>
    <div>
        <v-navigation-drawer permanent class="contentLeft">
            <v-list>
                <h4>Content Manager</h4>
                <LeftCreateTable />
                <v-divider></v-divider>
                <h6>Tables ({})</h6>
                <div v-for="data in tables" :key="data">
                    <v-list-item>{{ data.name }}</v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import LeftCreateTable from './LeftCreateTable'

    export default {
        components: { 
            LeftCreateTable,
            //editUser
        },
    /*    data() {
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
const { data: tables } = await useAsyncData(() => $fetch("/api/read"));
</script>