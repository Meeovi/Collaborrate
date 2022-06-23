<template>
  <div>
    <main class="mb-5" style="margin-top: -55px;">
      <Header />
      <Breadcrumbs />
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Breadcrumbs from '~/components/Breadcrumbs'
import Footer from '~/components/Footer'

export default {
    components: {
        Header,
        Breadcrumbs,
        Footer
    },
}
</script>