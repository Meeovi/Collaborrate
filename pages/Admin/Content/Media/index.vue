<template>
  <div>
    <v-card class="metricsVcard">
      <v-toolbar style="background-color: lightseagreen;color: black;">
        <v-col cols="9">
          <v-toolbar-title>Media Manager</v-toolbar-title>
        </v-col>
        <v-col cols="2">
          <v-file-input multiple label="Upload Media" class="mediaUpload"></v-file-input>
        </v-col>
      </v-toolbar>
        <v-tabs v-model="tab" style="background-color: lightseagreen;color: black;">
          <v-tab value="option-1">
            <v-icon start>
              mdi-lock
            </v-icon>
            Files
          </v-tab>
          <v-tab value="option-2">
            <v-icon start>
              mdi-access-point
            </v-icon>
            Albums
          </v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="tab" class="mediaSections">
            <v-window-item value="option-1">
              <v-card flat>
                <files />
              </v-card>
            </v-window-item>
            <v-window-item value="option-2">
              <v-card flat>
                <albums />
              </v-card>
            </v-window-item>
          </v-window>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import files from '../../../../components/content/media/files.vue'
  import albums from '../../../../components/content/media/albums.vue'

  export default {
    components: {
      files,
      albums
    },
    data: () => ({
      tab: 'option-1',
    }),
  }
</script>

<script setup>
  useHead({
    title: 'Media Manager',
  })
</script>

<style scoped>

</style>