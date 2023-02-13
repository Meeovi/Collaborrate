<template>
    <div>
        <v-table fixed-header height="100vh" class="contentRight">
            <thead>
                <tr>
                    <th class="text-left">
                        Message
                    </th>
                    <th class="text-left">
                        Timestamp
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
        title: 'Notifications'
    })

    const {
        data: schema
    } = await useAsyncData('home', () => queryContent('/').find())
</script>