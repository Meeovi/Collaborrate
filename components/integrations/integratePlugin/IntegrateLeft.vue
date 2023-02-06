<template>
    <div>
        <v-navigation-drawer permanent class="contentLeft">
            <v-list>
                <h4>Plugin Manager</h4>
                <v-divider></v-divider>
                <h6>Plugins ({{ data }})</h6>
                <v-list-item title="Home" value="home">{{ data }}</v-list-item>

                <v-list-item title="Contacts" value="contacts"></v-list-item>

                <v-list-item title="Settings" value="settings"></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

    export default {

    }
</script>

<script setup>

</script>