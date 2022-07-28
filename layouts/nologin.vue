<template>
    <div>
        <div>
           <nuxt />
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