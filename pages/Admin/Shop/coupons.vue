<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-coupon"><input type="button" class="btn btn-warning" value="Create New Coupons"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Expiration</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="coupons in allCouponsList" :key="coupons.id">
          <tr>
            <td>{{ coupons.name }}</td>
            <td>{{ coupons.discount }}</td>
            <td>{{ coupons.expiration }}</td>
            <td>{{ coupons.published }}</td>
            <td><a :href="`/admin/edit/coupon/${coupons.id}`">Edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  allCouponsList from '~/apollo/queries/shop/coupons'

export default {
  data() {
    return {
      allCouponsList: [],
    }
  },
  apollo: {
    allCouponsList: {
      prefetch: true,
      query: allCouponsList
    }
  },
    head: {
      title: 'Coupons'
    }
  }

</script>
