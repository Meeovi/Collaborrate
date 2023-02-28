<template>
  <v-row justify="left">
    <v-col cols="3">
        <mediaOptions />
    </v-col>
  </v-row>
</template>

<script>
  import mediaOptions from './options'

  export default {
    components: {
      mediaOptions
    },
    data() {
      return {
        dialog: false,
      }
    },
  }
</script>

<script setup>
  useHead({
    title: 'Albums - Media Manager'
  })
</script>