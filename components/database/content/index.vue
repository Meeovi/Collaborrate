<template>
    <v-table fixed-header height="100vh" class="contentRight">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th>
                    Action
                </th>
                <th>
                    <createContent />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in read" :key="item.name">
                <td>{{ item.name }}</td>
                <td><a href="``">View</a>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import createContent from './LeftCreateTable.vue'

    export default {
        components: { createContent }
    }
</script>

<script setup>
    useHead({
        title: 'Overview - Database'
    })

    const { data: read } = await useFetch('/api/read')
</script>