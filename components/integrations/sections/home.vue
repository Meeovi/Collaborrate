<template>
<div>
  <div class="row">
    <h3 class="headerh3">Top Extensions</h3>
    <div class="col-sm-4" v-for="plugins in findManyPlugins" :key="plugins.id">
      <div class="card">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  </div>
  <div class="row">
    <h3 class="headerh3">Top Themes</h3>
    <div class="col-sm-4" v-for="plugins in findManyPlugins" :key="plugins.id">
      <div class="card">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  </div>
  <div class="row">
    <h3 class="headerh3">Top Integrations</h3>
    <div class="col-sm-4" v-for="plugins in findManyPlugins" :key="plugins.id">
      <div class="card">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import findManyPlugins from '~/graphql/query/findManyPlugins'

export default {
  data() {
    return {
      findManyPlugins: [],
    }
  },
  apollo: {
    findManyPlugins: {
      prefetch: true,
      query: findManyPlugins
    }
  }, 
    
}
</script>

<style>
.headerh3 {
    width: 100%;
    text-align: center;
}
</style>