<template>
    <div>
        <v-toolbar class="databasebar" style="background-color: crimson; color: white;">
            <v-row>
                <v-col cols="6">
                    <h5>API Studio</h5>
                </v-col>
                <v-col cols="6"></v-col>
            </v-row>
        </v-toolbar>
        <iframe class="apiStudio" src="http://localhost:4000/graphql" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
    useHead({
        title: 'API Studio - Database'
    })
</script>