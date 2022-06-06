<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="blue"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        @ {{ new Date().getFullYear() }} — <strong><a href="https://www.alternatecms.com">Powered by AlternateCMS</a></strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        
      ],
    }),
  }
</script>

<style>
#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}
</style>
