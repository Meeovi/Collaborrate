<template>
    <div>
        <v-row>
            <v-col class="sqlSection" cols="12">
                <h5>PostgreSQL Extensions</h5>
                <h6>PostgreSQL allows you to extend your database functionality by installing and activating packages known as extensions. For example, the citext extension adds a case-insensitive string data type. Some extensions, such as citext, are supplied directly by PostgreSQL, while other extensions are developed externally.</h6>
                <h6>Click on any extension to activate it and add it to your postgresql database.</h6>
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
                    <tr v-for="item in postextensions" :key="item.title">
                        <td>{{ item.title }}</td>
                        <td>{{ item.description }}</td>
                        <td><a :href="`/${item.title}`">Execute</a></td>
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
    const { data: postextensions } = await useAsyncData('post-extensions', () => queryContent('/post-extensions/').find())
</script>