<template>
  <div>
    <!-- Pills navs -->
<ul class="nav nav-pills nav-fill mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="ex2-tab-1"
      data-mdb-toggle="pill"
      href="#ex2-pills-1"
      role="tab"
      aria-controls="ex2-pills-1"
      aria-selected="true"
      >Home</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ex2-tab-2"
      data-mdb-toggle="pill"
      href="#ex2-pills-2"
      role="tab"
      aria-controls="ex2-pills-2"
      aria-selected="false"
      >Extensions</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ex2-tab-3"
      data-mdb-toggle="pill"
      href="#ex2-pills-3"
      role="tab"
      aria-controls="ex2-pills-3"
      aria-selected="false"
      >Themes</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ex2-tab-4"
      data-mdb-toggle="pill"
      href="#ex2-pills-4"
      role="tab"
      aria-controls="ex2-pills-4"
      aria-selected="false"
      >Integrations</a
    >
  </li>
</ul>
<!-- Pills navs -->

<!-- Pills content -->
<div class="tab-content" id="ex2-content">
  <div
    class="tab-pane fade show active"
    id="ex2-pills-1"
    role="tabpanel"
    aria-labelledby="ex2-tab-1"
  >
    <home />
  </div>
  <div
    class="tab-pane fade"
    id="ex2-pills-2"
    role="tabpanel"
    aria-labelledby="ex2-tab-2"
  >
    <extensions />
  </div>
  <div
    class="tab-pane fade"
    id="ex2-pills-3"
    role="tabpanel"
    aria-labelledby="ex2-tab-3"
  >
    <themes />
  </div>
  <div
    class="tab-pane fade"
    id="ex2-pills-4"
    role="tabpanel"
    aria-labelledby="ex2-tab-4"
  >
    <integrations />
  </div>
</div>
<!-- Pills content -->
  </div>
</template>

<script>
import  home from '~/components/integrations/sections/home'
import  extensions from '~/components/integrations/sections/extensions'
import  integrations from '~/components/integrations/sections/integrations'
import  themes from '~/components/integrations/sections/themes'

  export default {
    layout: 'dashboard',
    components: {
        home,
        extensions,
        integrations,
        themes,
    },
    head: {
      title: 'Integrations Marketplace'
    }
  }

</script>
