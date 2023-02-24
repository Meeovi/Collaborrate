<template>
    <v-table fixed-header height="100vh" class="contentRight">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Action
                </th>
                <th class="text-right">
                    <createContent />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in read" :key="item.name">
                <td>{{ item.name }}</td>
                <td><a :href="`/Admin/Database/${item.calories}`">View</a></td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import createContent from '../../../components/database/content/InsertAddContent.vue'

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