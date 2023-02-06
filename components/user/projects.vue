<template>
    <div>
        <v-row>
            <v-col cols="2"><projects /></v-col>
            <v-col cols="10"></v-col>
            <v-col cols="12" class="homeTitle">
                <h3>Your Projects</h3>
            </v-col>
            <v-col cols="4" v-for="data in scripts" :key="data.id">
                <a href="/"><v-card append-icon="fas fa-arrow-right" theme="dark" :title="data.title" :text="data.description"></v-card></a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import projects from './addAccount/add-project.vue'

export default {
    components: { projects }
}
</script>

<script setup>
    useHead({
        title: 'System Projects',
    });
    const { data: scripts } = await useAsyncData(() => $fetch("/api/pages"));
</script>