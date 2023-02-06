<template>
  <div>
    <v-card class="metricsVcard">
      <v-toolbar color="warning">
        <v-col cols="9">
          <v-toolbar-title>Media Manager</v-toolbar-title>
        </v-col>
        <v-col cols="2">
          <v-file-input multiple label="Upload Media" class="mediaUpload"></v-file-input>
        </v-col>
      </v-toolbar>
        <v-tabs v-model="tab" color="warning">
          <v-tab value="option-1">
            <v-icon start>
              mdi-account
            </v-icon>
            Overview
          </v-tab>
          <v-tab value="option-2">
            <v-icon start>
              mdi-lock
            </v-icon>
            Files
          </v-tab>
          <v-tab value="option-3">
            <v-icon start>
              mdi-access-point
            </v-icon>
            Albums
          </v-tab>
          <v-tab value="option-4">
            <v-icon start>
              mdi-access-point
            </v-icon>
            Workflows
          </v-tab>
          <v-tab value="option-5">
            <v-icon start>
              mdi-access-point
            </v-icon>
            Guidelines
          </v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="tab" class="mediaSections">
            <v-window-item value="option-1">
              <v-card flat>
                <overview />
              </v-card>
            </v-window-item>
            <v-window-item value="option-2">
              <v-card flat>
                <files />
              </v-card>
            </v-window-item>
            <v-window-item value="option-3">
              <v-card flat>
                <albums />
              </v-card>
            </v-window-item>
            <v-window-item value="option-4">
              <v-card flat>
                <workflow />
              </v-card>
            </v-window-item>
            <v-window-item value="option-5">
              <v-card flat>
                <guidelines />
              </v-card>
            </v-window-item>
          </v-window>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import overview from '~/components/content/media/overview'
  import files from '~/components/content/media/files'
  import albums from '~/components/content/media/albums'
  import workflow from '~/components/content/media/workflow'
  import guidelines from '~/components/content/media/guidelines'

  export default {
    components: {
      overview,
      files,
      albums,
      workflow,
      guidelines
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