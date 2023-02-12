<template>
    <div>
        <v-table fixed-header height="300px">
            <thead>
                <tr>
                    <th class="text-left">
                        Key
                    </th>
                    <th class="text-left">
                        Labels
                    </th>
                    <th class="text-left">
                        Value
                    </th>
                    <th class="text-left">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="metrics in metrics" :key="metrics">
                    <td>{{ metrics[0].key }}</td>
                    <td>{{ metrics.labels }}</td>
                    <td>{{ metrics.value }}</td>
                    <td>{{ metrics.description }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Logs - Database'
    })

    const {
        data: metrics
    } = await useFetch('/api/metrics')
</script>