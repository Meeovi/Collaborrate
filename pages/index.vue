<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="row">
<<<<<<< HEAD
      <div class="welcomebanner"
        style="width:100%;height:300px;background-image:url(../assets/images/matrix.jpg);background-size: contain;">
        <p style="z-index:99; width:100%;text-align:center;font-size:50px;color:white;position:relative;top:30%;">
          Welcome to AlternateCMS</p>
      </div>
      <charts />
=======
      <div class="welcomebanner">
        <p>Welcome to AlternateCMS</p>
      </div><br>
      <!--<charts />--> <br>
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
      <sales />
      <orders />
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
<<<<<<< HEAD
        <mostviewed />
      </div>
      <div id="ex2-pills-2" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-2">
        <bestsellers />
=======
      <!--  <bestsellers /> -->
      </div>
      <div id="ex2-pills-2" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-2">
      <mostviewed />
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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
  import sales from '~/components/dashboard/sales/sales'
  import orders from '~/components/dashboard/orders/orders'
  import mostviewed from '~/components/dashboard/mostviewed/mostviewed'
  import bestsellers from '~/components/dashboard/bestsellers/bestsellers'
  import { mapGetters } from 'vuex'
  
export default {
<<<<<<< HEAD
  computed: {
    ...mapGetters(['loggedInUser']),
  },
=======
 /* computed: {
    ...mapGetters(['loggedInUser']),
  }, */
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    components: {
      Newcustomers,
      Customerslimit,
      Reviewslimit,
      posts,
      sales,
      orders,
      mostviewed,
<<<<<<< HEAD
      bestsellers,
      charts,
      // chat
=======
      //bestsellers,
      charts,
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    },

    layout: 'dashboard',
    head: {
      title: 'AlternateCMS'
    }
  }

</script>
