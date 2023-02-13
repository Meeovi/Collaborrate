<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h5>Usage</h5>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="6">
                <h5>Usage</h5>
                <lineChart />
            </v-col>
            <v-divider></v-divider>
            <v-spacer></v-spacer>

            <v-col cols="11">
                <h5>Query List</h5>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Operation ID
                            </th>
                            <th class="text-left">
                                Operation Name
                            </th>
                            <th class="text-left">
                                Operation Type
                            </th>
                            <th class="text-left">
                                Role
                            </th>
                            <th class="text-left">
                                Request Count
                            </th>
                            <th class="text-left">
                                Client Name
                            </th>
                            <th class="text-left">
                                Average response size(kB)
                            </th>
                            <th class="text-left">
                                Average exection time(ms)
                            </th>
                            <th class="text-left">
                                Error Count
                            </th>
                            <th class="text-left">
                                Transport
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in schema" :key="item.name">
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td><a href="``">View</a>{{ item.calories }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import lineChart from '../charts/Monitoring/usageChart.vue'

    export default {
        components: {
            lineChart
        }
    }
</script>

<script setup>
    useHead({
        title: 'Usage - Monitoring'
    })
</script>