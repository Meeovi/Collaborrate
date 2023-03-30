<template>
    <div>
        <v-row class="homeSection">
            <v-col cols="6" class="homeTitle">
                <h3>Collaborrate</h3>
                <p class="homeDescription">A powerful, consistent, and flexible headless content management framework. Built using the Nuxtjs
                    framework, Collaborrate provides headless content management system capabilities for sites of
                    all types.</p>
            </v-col>
            <v-col cols="6">
                
            </v-col>
            <v-col cols="12" class="homeRows">
                <v-row>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="12">
                                <a href="https://www.alternatecms.com/docs"><v-card color="green-darken-2" prepend-icon="fas fa-info" theme="dark" title="Documentation" text="Discover the essential concepts, guides, and instructions."></v-card></a>
                            </v-col>
                            <v-col cols="12">
                                <a href="https://www.alternatecms.com/showcase"><v-card color="blue-darken-2" prepend-icon="fas fa-code" theme="dark" title="Code Examples" text="Learn by testing real projects developed by the community."></v-card></a>
                            </v-col>
                            <v-col cols="12">
                                <a href="https://www.alternatecms.com/tutorials"><v-card color="purple-darken-2" prepend-icon="fas fa-play" theme="dark" title="Tutorials" text="Follow step-by-step instructions to use and customizing the Collaborrate."></v-card></a>
                            </v-col>
                            <v-col cols="12">
                                <a href="https://www.alternatecms.com/blog"><v-card color="orange-darken-2" prepend-icon="fas fa-pencil" theme="dark" title="Blog" text="Read the latest news about Collaborrate and the ecosystem."></v-card></a>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="10">
                                <v-card color="yellow-darken-2" theme="dark">
                                    <v-row class="homeRight">
                                        <v-col cols="12">
                                        <h4>Join the Community</h4>
                                        <p>Discuss with team members, contributors and developers on different channels.</p>
                                        <br>
                                        <v-list-item prepend-icon="fas fa-arrow-up-right-from-square" title="See Our Roadmap" value="roadmap" href="https://www.alternatecms.com/roadmap"></v-list-item>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-list-item prepend-icon="fab fa-github" title="Github" value="github" href="https://github.com/meeovi/alternatecms"></v-list-item>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-list-item prepend-icon="fab fa-reddit" title="Reddit" value="reddit" href="https://www.reddit.com/r/AlternateFramework"></v-list-item>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-list-item prepend-icon="fab fa-twitter" title="Twitter" value="twitter" href="https://www.twitter.com/alternatecms"></v-list-item>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-list-item prepend-icon="fas fa-pen-to-square" title="Our Blog" value="blog" href="https://www.alternatecms.com/blog"></v-list-item>
                                    </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4">

            </v-col>
            <v-col cols="4">

            </v-col>
        </v-row>
    </div>
</template>

<script>
    //import datasource from '../components/dashboards/add-datasource.vue'

    export default {
        //components: { datasource }
    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate',
    })
</script>