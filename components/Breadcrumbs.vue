<template>
    <div>
      <section class="info3 cid-t0swL5imvs mbr-parallax-background" id="info3-a">
    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(187, 187, 187);">
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-12 col-lg-10" style="color: transparent;">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                            <strong><div v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem" class="breadcrumb-item"><p property="item" typeof="WebPage" :href="crumb.path" ><span property="name">{{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}</span></p><meta property="position" :content="index + 2" /></div></strong>
                        </h4>
                        <p v-for="(crumb, index) in crumbs" class="mbr-text mbr-fonts-style mb-4 display-7 breadcrumb-item pageTitle" :key="index" property="itemListElement" typeof="ListItem" style="color: black;font-size: 20px;">
                            {{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
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
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
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
.card {
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>