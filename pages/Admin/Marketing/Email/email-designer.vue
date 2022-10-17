<template>
  <div id="app">
    <div>
      <div id="bar">
        <input type="submit" class="btn btn-warning" style="display: inline-block;" @submit.prevent="saveDesign">Save Design</button>
        <input type="submit" class="btn btn-warning" style="display: inline-block;" @submit.prevent="exportHtml">Export HTML</button>
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