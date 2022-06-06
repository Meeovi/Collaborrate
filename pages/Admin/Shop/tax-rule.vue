<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-taxrule"><FormulateInput type="button">Add New Tax Rule</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Tax ID</th>
            <th>Tax Name</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="tax_rule in tax_rule" :key="tax_rule.id">
          <tr>
            <td>{{ tax_rule.id }}</td>
            <td>{{ tax_rule.name }}</td>
            <td>{{ tax_rule.tax_rate }}</td>
            <td><a :href="`/admin/edit/taxrule/${tax_rule.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import tax_rule from '~/apollo/queries/shop/taxrule'

export default {
  data() {
    return {
      tax_rule: [],
    }
  },
  apollo: {
    tax_rule: {
      prefetch: true,
      query: tax_rule
    }
  },
    head: {
      title: 'Tax Rule'
    }
  }

</script>
