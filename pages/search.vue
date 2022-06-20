<template>
  <lunr-search :lang="lang">
    <template v-slot:default="{ result, index, maxScore, meta }">
      <nuxt-link :to="meta.href">
        {{ meta.title }}
        <span>score: {{ Math.round(100 * result.score / maxScore) }}%</span>
      </nuxt-link>
    </template>
  </lunr-search>
</template>

<script>
export default {
  components: {
    // Note: 'lunr-module' below is a custom webpack alias and
    // does NOT refer to the folder in node_modules
    LunrSearch: () => import('lunr-module/search')
  },
  head: {
    title: 'Search AlternateCMS'
  }
}
</script>