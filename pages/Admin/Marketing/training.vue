<template>
  <div class="row">
    <div class="card" v-for="training in allTrainingsList" :key="training.id">
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
    </div>
  </div>
</template>

<script>
 import  allTrainingsList from '~/apollo/queries/marketing/trainings'

export default {
  data() {
    return {
      allTrainingsList: [],
    }
  },
  apollo: {
    allTrainingsList: {
      prefetch: true,
      query: allTrainingsList
    }
  }, 
    head: {
      title: 'Trainings'
    }
  }

</script>
