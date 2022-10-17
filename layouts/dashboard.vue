<template>
  <div>
    <main class="mb-5" style="margin-top: -55px;">
      <Header />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
    components: {
        Header,
        Footer
    },
}
</script>