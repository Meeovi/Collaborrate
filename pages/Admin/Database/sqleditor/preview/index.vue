<template>
    <div>
        <v-row>
            <v-col class="sqlSection" cols="12">
                <h5>Preview Features</h5>
                <h6>Some features are released as Previews (Beta).</h6>
                <h6>Click on any feature to activate it and test it out before its final production release.</h6>
            </v-col>

            <v-table fixed-header height="100vh" class="contentRight">
                <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Description
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
                    <tr v-for="item in preview" :key="item.title">
                        <td>{{ item.title }}</td>
                        <td>{{ item.description }}</td>
                        <td><a :href="`/${item.title}`">Activate</a></td>
                    </tr>
                </tbody>
            </v-table>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    const { data: preview } = await useAsyncData('preview', () => queryContent('/preview/').find())
</script>