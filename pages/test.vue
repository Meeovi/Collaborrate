<template>
  <FormulateInput @click="showMessageFromBackend">Show message from backend</FormulateInput>
</template>

<script>
export default {
  methods: {
    async showMessageFromBackend () {

      try {
        const response = await this.$axios.get('/api/test')
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }

    }
  }
}
</script>