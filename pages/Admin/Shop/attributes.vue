/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-attribute"><input type="submit" class="btn btn-warning" value="Add New Attribute"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Attribute Name</th>
            <th>Attribute Code</th>
            <th>Attribute Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="attributes in allProduct_attributeList" :key="attributes.id">
          <tr>
            <td>{{ attributes.default_label }}</td>
            <td>{{ attributes.attribute_code }}</td>
            <td>{{ attributes.default_value }}</td>
            <td><a :href="`/admin/edit/attribute/${attributes.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  allProduct_attributeList from '~/apollo/queries/shop/attributes.gql'

export default {
  data() {
    return {
      allProduct_attributeList: [],
    }
  },
  apollo: {
    allProduct_attributeList: {
      prefetch: true,
      query: allProduct_attributeList
    }
  }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Attributes'
    }
  }

</script>
