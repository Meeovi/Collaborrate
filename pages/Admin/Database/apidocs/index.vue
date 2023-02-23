<template>
    <div>
        <v-table fixed-header height="100vh" class="contentRight">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in schema" :key="item.name">
                    <td>{{ item.title }}</td>
                    <td><a href="``">View</a>{{ item.calories }}</td>
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
        title: 'API Docs - Database'
    })

    const {
        data: schema
    } = await useAsyncData('home', () => queryContent('/').find())
</script>