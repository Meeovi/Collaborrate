<template>
  <div>
    <h1>You are Secure</h1>
    <b-button to="/" variant="success">Callback</b-button>
  </div>
</template>

<script>
  export default {
    middleware: ['auth']
  }

</script>
<style scoped>
</style>
