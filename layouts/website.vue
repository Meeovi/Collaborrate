<template>
    <v-app :theme="theme">
        <v-app-bar id="topnav" density="compact">
            <v-app-bar-title><a class="logobrand" href="/">
                    <v-icon start icon="fas fa-comments"></v-icon>Collaborrate
                </a></v-app-bar-title>

            <v-list-item title="Home" value="Home" href="/"></v-list-item>
            <v-list-item title="Features" value="Features" href="/website/features"></v-list-item>
            <v-list-item title="About" value="About" href="/website/about"></v-list-item>

            <v-spacer></v-spacer>

            <div class="d-flex align-center flex-column flex-sm-row fill-height">
                <v-col>
                    <ecosystemmenu />
                </v-col>
                <v-col>
                    <v-btn href="/app/">Login / Signup</v-btn>
                </v-col>
            </div>
        </v-app-bar>

        <v-main>
            <v-card>
                <v-layout>
                    <main id="mainWebsite">
                        <slot />
                    </main>
                </v-layout>
            </v-card>
            <FooterNav />
        </v-main>
    </v-app>
</template>

<script>
    import search from '../components/Search/search.vue'
    import ecosystemmenu from '../components/ecosystemmenu.vue'

    export default {
        components: {
            ecosystemmenu,
            search
        },
        data() {
            return {
                drawer: null,
                rail: true,
                loaded: false,
                loading: false,
            }
        },

        methods: {
            onClick() {
                this.loading = true

                setTimeout(() => {
                    this.loading = false
                    this.loaded = true
                }, 2000)
            },
        },
    }
</script>

<script setup>
    import {
        ref
    } from 'vue'

    const theme = ref('light')

    function onClick() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    };
</script>