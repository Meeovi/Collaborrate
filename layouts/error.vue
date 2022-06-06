<template>
  <div v-if="error.statusCode === 404">
    <section data-bs-version="5.1" class="header6 cid-t6MvM5y84W mbr-fullscreen" id="header6-3">



      <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(68, 121, 217);"></div>

      <div class="align-center container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1"><strong>404</strong></h1>

            <p class="mbr-text mbr-white mbr-fonts-style display-7">
              Oops look like you went the wrong way. Go back and try again.</p>
            <div class="mbr-section-btn mt-3"><a class="btn btn-danger display-4" href="/">Go Home</a></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
  props: ['error'],
  components: 'dashboard',
  head: {
    title: '404 - Error Page'
  }
}
</script>
