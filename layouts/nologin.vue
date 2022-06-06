<template>
    <div>
        <div>
           <Nuxt /> 
        </div>
        <Footer />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js' defer></script>
    </div>
</template>

<script>
import Footer from '~/components/Footer'
  
export default {
    components: {
        Footer
    },
}
</script>