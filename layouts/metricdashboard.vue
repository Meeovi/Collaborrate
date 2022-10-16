<template>
  <div>
    <main>
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