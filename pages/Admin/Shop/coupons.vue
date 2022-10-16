<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-coupon"><input type="submit" class="btn btn-warning" value="Create New Coupons"></a>
        
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
        <tbody v-for="coupons in coupons" :key="coupons.id">
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
import  coupons from '~/graphql/queries/shop/coupons'

export default {
  data() {
    return {
      coupons: [],
    }
  },
  apollo: {
    coupons: {
      prefetch: true,
      query: coupons
    }
  },
    head: {
      title: 'Coupons'
    }
  }

</script>
