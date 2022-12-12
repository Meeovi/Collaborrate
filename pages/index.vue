<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="row">
      <div class="welcomebanner">
        <p>Welcome to AlternateCMS</p>
      </div><br>
      <!--<charts />--> <br>
      <tickets />
      <projects />
      <posts />
    </div>
    <ul id="ex1" class="nav nav-pills nav-fill mb-3" role="tablist">
      <li class="nav-item" role="presentation">
        <a id="ex2-tab-1" class="nav-link active" data-mdb-toggle="pill" href="#ex2-pills-1" role="tab"
          aria-controls="ex2-pills-1" aria-selected="true">Best Sellers</a>
      </li>
      <li class="nav-item" role="presentation">
        <a id="ex2-tab-2" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-2" role="tab"
          aria-controls="ex2-pills-2" aria-selected="false">Most Viewed Products</a>
      </li>
      <li class="nav-item" role="presentation">
        <a id="ex2-tab-3" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-3" role="tab"
          aria-controls="ex2-pills-3" aria-selected="false">New Customers</a>
      </li>
      <li class="nav-item" role="presentation">
        <a id="ex2-tab-4" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-4" role="tab"
          aria-controls="ex2-pills-4" aria-selected="false">Customers</a>
      </li>
      <li class="nav-item" role="presentation">
        <a id="ex2-tab-5" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-5" role="tab"
          aria-controls="ex2-pills-5" aria-selected="false">Reviews</a>
      </li>
    </ul>
    <!-- Pills navs -->

    <!--Pills content-->
    <div id="ex2-content" class="tab-content">
      <div id="ex2-pills-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="ex2-tab-1">
      <!--  <bestsellers /> -->
      </div>
      <div id="ex2-pills-2" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-2">
      <mostviewed />
      </div>
      <div id="ex2-pills-3" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-3">
        <Newcustomers />
      </div>
      <div id="ex2-pills-4" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-4">
        <Customerslimit />
      </div>
      <div id="ex2-pills-5" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-5">
        <Reviewslimit />
      </div>
    </div>
  </div>
</template>

<script>
  import charts from '~/components/dashboard/charts/charts'
  import Customerslimit from '~/components/customerslimit'
  import Newcustomers from '~/components/newcustomers'
  import Reviewslimit from '~/components/reviewslimit'
  import posts from '~/components/dashboard/posts/posts'
  import tickets from '~/components/dashboard/tickets/tickets'
  import projects from '~/components/dashboard/projects/projects'
  import mostviewed from '~/components/dashboard/mostviewed/mostviewed'
  import bestsellers from '~/components/dashboard/bestsellers/bestsellers'


export default {
 /* computed: {
    ...mapGetters(['loggedInUser']),
  }, */
    components: {
      Newcustomers,
      Customerslimit,
      Reviewslimit,
      posts,
      tickets,
      projects,
      mostviewed,
      //bestsellers,
      charts,
    },
    layout: 'dashboard',
    head: {
      title: 'AlternateCMS'
    }
  }

</script>
