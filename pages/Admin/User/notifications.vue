<template>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Notifications
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.Notifications }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
    export default {
        data() {
            return {
                desserts: [{
                        name: 'Frozen Yogurt',
                        Notifications: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        Notifications: 237,
                    },
                    {
                        name: 'Eclair',
                        Notifications: 262,
                    },
                    {
                        name: 'Cupcake',
                        Notifications: 305,
                    },
                    {
                        name: 'Gingerbread',
                        Notifications: 356,
                    },
                    {
                        name: 'Jelly bean',
                        Notifications: 375,
                    },
                    {
                        name: 'Lollipop',
                        Notifications: 392,
                    },
                    {
                        name: 'Honeycomb',
                        Notifications: 408,
                    },
                    {
                        name: 'Donut',
                        Notifications: 452,
                    },
                    {
                        name: 'KitKat',
                        Notifications: 518,
                    },
                ],
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Notifications',
    });
</script>