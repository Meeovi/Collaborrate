/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/attribute/add-new-attribute"><input type="submit" class="btn btn-warning" hint="Add New Attribute"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Attribute Name</th>
            <th>Attribute Code</th>
            <th>Attribute Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="attributes in product_attribute" :key="attributes.id">
          <tr>
            <td>{{ attributes.default_label }}</td>
            <td>{{ attributes.attribute_code }}</td>
            <td>{{ attributes.default_value }}</td>
            <td><a :href="`/admin/edit/attribute/${attributes.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  product_attribute from '../../graphql/query/findManyAttributes'

export default {
  data() {
    return {
      product_attribute: [],
    }
  },
  apollo: {
    product_attribute: {
      prefetch: true,
      query: product_attribute
    }
  }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Attributes'
    }
  }

</script>
