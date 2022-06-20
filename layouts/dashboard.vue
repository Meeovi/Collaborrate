<template>
    <main style="margin-top: 58px">
        <Header />
        <div class="dashboard">
           <Nuxt /> 
        </div>
        <Footer />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js' defer></script>
    </main>
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