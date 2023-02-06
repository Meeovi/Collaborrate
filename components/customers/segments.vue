<template>
    <div>
        <v-toolbar>
            <v-col cols="10">
                <v-toolbar-title>Segments</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createSegment />
            </v-col>
        </v-toolbar>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Segment</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-for="segments in findManySegments" :key="segments.id">
                <tr>
                    <td>{{ segments.id }}</td>
                    <td>{{ segments.name }}</td>
                    <td><a :href=segments.website>{{ segments.website }}</a></td>
                    <td><a :href="`/admin/edit/segments/${segments.id}`">View</a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createSegment from './addCustomer/add-segment.vue'
    import findManySegments from '../../graphql/query/findManySegments.gql'

    export default {
        components: {
            createSegment,
            //editUser
        },
        data() {
            return {
                findManySegments: [],
            }
        },
        apollo: {
            findManySegments: {
                prefetch: true,
                query: findManySegments
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Segments',
    });
</script>