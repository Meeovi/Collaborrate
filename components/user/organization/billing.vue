<template>
    <v-card>
        <form action="" method="post" @v-on:submit.prevent="addContent()">
            <v-toolbar dark color="primary">
                <v-btn icon dark>
                    <v-icon icon="fas fa-circle-xmark"></v-icon>
                </v-btn>
                <v-card-title>
                    <span class="text-h6">Billing</span>
                </v-card-title>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-card>
                                <v-toolbar>
                                    <v-col cols="12">
                                        <v-toolbar-title>Projects at a glance</v-toolbar-title>
                                    </v-col>
                                </v-toolbar>
                                <v-table fixed-header height="300px" width="100%">
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Name
                                            </th>
                                            <th class="text-left">
                                                Plan
                                            </th>
                                            <th class="text-left">
                                                Billing cycle
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="pages in findManyPages" :key="pages.id">
                                        <tr>
                                            <td>{{ pages.id }}</td>
                                            <td>{{ pages.title }}</td>
                                            <td><a :href="`/admin/database/${pages.id}`">
                                                    <!--<editUser />--></a></td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row>
                                <v-col cols="12">Credit Balance</v-col>
                                <v-col cols="6">
                                    Charges will be deducted from your balance first
                                </v-col>
                                <v-col cols="6">
                                    <p>$</p> <h3>0</h3>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Address Line 1" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Address Line 2"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Postal Code" hint="90802">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="City"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="State"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Country"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label=" Billing Email*" title="Email Address" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Tax ID*" hint="Make sure your Tax ID looks like this. 12345678912" type="password"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
    export default {}
</script>

<script setup>
    useHead({
        title: 'Organization Billing',
    });
</script>