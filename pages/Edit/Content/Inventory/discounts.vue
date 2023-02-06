<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/add-new-discounts"><input type="submit" class="btn btn-warning" hint="Create New Discount"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Expiration</th>
            <th>Description</th>
            <th>Gift Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="discounts in discounts" :key="discounts.id">
          <tr>
            <td>{{ discounts.name }}</td>
            <td>{{ discounts.discount }}</td>
            <td>{{ discounts.expiration }}</td>
            <td>{{ discounts.excerpt }}</td>
            <td>{{ discounts.type }}</td>
            <td>{{ discounts.creditMemo }}</td>
            <td>{{ discounts.billToName }}</td>
            <td>{{ discounts.refunded }}</td>
            <td><a :href="`/admin/edit/gift-certificate/${discounts.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  discounts from '../../graphql/query/findManyDiscounts'

export default {
  data() {
    return {
      discounts: [],
    }
  },
  apollo: {
    discounts: {
      prefetch: true,
      query: discounts
    }
  },
    head: {
      title: 'Discounts'
    }
  }

</script>
