<template>
    <div>
        <v-row>
            <v-col class="sqlSection" cols="12">
                <h5>Scripts</h5>
                <h6>Quick scripts to run on your database.</h6>
                <h6>Click on any script to fill the query box, modify the script, then click Run.</h6>
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
                    <tr v-for="item in snippets" :key="item.title">
                        <td>{{ item.title }}</td>
                        <td>{{ item.description }}</td>
                        <td><a :href="`/${item.title}`">Run</a></td>
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
    const { data: snippets } = await useAsyncData('snippets', () => queryContent('/snippets/').find())
</script>