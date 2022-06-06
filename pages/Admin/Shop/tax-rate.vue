<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-taxrate"><FormulateInput type="button">Add New Tax Rate</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Tax Identifier</th>
            <th>Country</th>
            <th>State/Region</th>
            <th>Zip/Post Code</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="tax_rate in tax_rate" :key="tax_rate.id">
          <tr>
            <td>{{ tax_rate.tax_identifier }}</td>
            <td>{{ tax_rate.country }}</td>
            <td>{{ tax_rate.state }}</td>
            <td>{{ tax_rate.postcode }}</td>
            <td>{{ tax_rate.rate_percent }}</td>
            <td><a :href="`/admin/edit/taxrate/${tax_rate.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import tax_rate from '~/apollo/queries/shop/taxrate'

export default {
  data() {
    return {
      tax_rate: [],
    }
  },
  apollo: {
    tax_rate: {
      prefetch: true,
      query: tax_rate
    }
  },
    head: {
      title: 'Tax Rate'
    }
  }

</script>
