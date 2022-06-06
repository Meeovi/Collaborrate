<template>
  <div id="app">
    <div>
      <div id="bar">
        <FormulateInput type="button" style="display: inline-block;" @click="saveDesign">Save Design</FormulateInput>
        <FormulateInput type="button" style="display: inline-block;" @click="exportHtml">Export HTML</FormulateInput>
      </div>

    </div>
  </div>
</template>

<script>
  
export default {

    layout: 'dashboard',
    head: {
        title: 'Email Designer'
    },
  }
</script>

<style>

</style>