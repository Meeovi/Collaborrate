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
                    <createSql />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in read" :key="item.name">
                <td>{{ item.name }}</td>
                <td><a href="``">Edit</a>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import createSql from './add-sql.vue'

    export default {
        components: { createSql }
    }
</script>

<script setup>
    useHead({
        title: 'SQL Editor - Database'
    })

    const { data: read } = await useFetch('/api/read')
</script>