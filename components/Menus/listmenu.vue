<template>
    <div>
        <v-card>
            <v-list min-width="300">
                <v-list lines="one">
                    <v-list-item title="Org name" subtitle="Org Link"
                        prepend-avatar="../../../assets/images/alternatecms.png"></v-list-item>
                </v-list>
                <v-list-item title="Create List" value="Create List" href="/app/create"></v-list-item>
                <v-list-item title="Create Roadmap" value="Create Roadmap" href="/app/create"></v-list-item>
                <v-list-item title="Create Goal" value="Create Goal" href="/app/create"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="Preferences" value="Preferences" href="/app/settings"></v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <div>
                        <v-menu :location="location">
                            <template v-slot:activator="{ props }">
                                <v-btn variant="text" v-bind="props">
                                    Administration
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item title="Manage Apps" href=""></v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-list-item>

                <v-divider></v-divider>
                <v-list-item>
                    <div>
                        <v-menu :location="location">
                            <template v-slot:activator="{ props }">
                                <v-btn variant="text" v-bind="props">
                                    Tools
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item title="Workflow Builder" href=""></v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-list-item>

                <v-divider></v-divider>
                <v-list-item>
                    <div>
                        <v-menu :location="location">
                            <template v-slot:activator="{ props }">
                                <v-btn variant="text" v-bind="props">
                                    Sign Out
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item title="Sign Out of " href=""></v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            location: 'end',
        }),
    }
</script>

<script setup>

</script>