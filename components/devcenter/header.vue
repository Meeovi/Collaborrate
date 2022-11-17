<template>
    <div>
        <!-- Container for demo purpose -->
<div class="container my-5 py-5">

  <!-- Section: Design Block -->
  <section class="mb-10 text-center">
    <h3 class="mb-5">Developer Center</h3>
    <div class="row gx-lg-5">
      <div class="col-lg-6 col-md-12 mb-6 mb-lg-0">
        <div class="card shadow-2-strong">
          <div
               class="bg-image hover-overlay ripple shadow-4-strong rounded mx-3"
               data-mdb-ripple-color="light"
               style="margin-top: -15px"
               >
            <img
                 src="../../static/images/rest.png"
                 class="img-fluid"
                 />
            <a href="#!">
              <div
                   class="mask"
                   style="background-color: rgba(251, 251, 251, 0.15)"
                   ></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Rest APIs</h5>
            <a href="http://localhost:4000/swagger" target="_blank" class="btn btn-primary">Documentation</a>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-6 mb-lg-0">
        <div class="card shadow-2-strong">
          <div
               class="bg-image hover-overlay ripple shadow-4-strong rounded mx-3"
               data-mdb-ripple-color="light"
               style="margin-top: -15px"
               >
            <img
                 src="../../static/images/devcenter.jpg"
                 class="img-fluid"
                 />
            <a href="#!">
              <div
                   class="mask"
                   style="background-color: rgba(251, 251, 251, 0.15)"
                   ></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">GRAPHQL</h5>
            <a href="http://127.0.0.1:4000/graphql" target="_blank" class="btn btn-primary">Server</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
</template>

<script>

export default {
    
}
</script>