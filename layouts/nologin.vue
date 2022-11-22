<template>
    <div>
        <div style="min-height:90vh">
            <Nuxt />
        </div>
        <Footer />
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