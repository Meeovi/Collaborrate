<template>
  <div>
    <footer class="bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        @ {{ new Date().getFullYear() }} — <strong><a href="https://www.alternatecms.com">Powered by
            AlternateCMS</a></strong>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Default dropup button -->
    <div class="btn-group dropup" style="float: right; right: 5px; bottom: 5px; position: fixed;">
      <button type="button" class="btn btn-warning dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false" style="border-radius:30px;">
        <i class="fas fa-question-circle"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="https://www.alternatecms.com/docs">Documentation</a></li>
        <li><a class="dropdown-item" href="https://github.com/Meeovi/alternatecms/discussions">Discussions</a></li>
        <li><a class="dropdown-item" href="https://github.com/Meeovi/alternatecms/releases">Versions</a></li>
        <li><a class="dropdown-item" href="https://www.alternatecms.com">Official Site</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  #btn-back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
  }

</style>
