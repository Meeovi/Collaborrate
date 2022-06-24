<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/"><param class=""><p style="color:orange;">Home</p></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <p v-for="(crumb, index) in crumbs" :key="index" property="itemListElement"
            typeof="ListItem" style="color: #1266f1;font-size: 20px;">
            {{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}</p>
        </li>
      </ol>
    </nav>
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
