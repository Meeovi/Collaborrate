<template>
  <div>
    <!-- Jumbotron -->
    <div class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      style="background-image: url('/images/mbr-1.png');overlay: 0.7 gray;">
      <p v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem"
        style="color: black;font-size: 20px;">
        {{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}</p>
    </div>
  </div>
</template>

<script>
  const titleCase = require('ap-style-title-case')
  export default {
    props: {
      title: {
        type: String,
        default: null,
      },
    },
    computed: {
      crumbs() {
        const fullPath = this.$route.fullPath
        const params = fullPath.startsWith('/') ?
          fullPath.substring(1).split('/') :
          fullPath.split('/')
        const crumbs = []
        let path = ''
        params.forEach((param, index) => {
          path = `${path}/${param}`
          const match = this.$router.match(path)
          if (match.name !== null) {
            crumbs.push({
              title: titleCase(param.replace(/-/g, ' ')),
              ...match,
            })
          }
        })
        return crumbs
      },
    },
  }

</script>

<style>
  .breadcrumb-item {
    display: inline-block;
  }

</style>
