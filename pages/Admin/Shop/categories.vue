/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-category"><FormulateInput type="button">Add New Category</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark"> 
          <tr>
            <th>Category Title</th>
            <th>Description</th>
            <th>SEO Title</th>
            <th>SEO Keywords</th>
            <th>SEO Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="categories in categories" :key="categories.id">
          <tr>
            <td>{{ categories.name }}</td>
            <td>{{ categories.content }}</td>
            <td>{{ categories.meta_title }}</td>
            <td>{{ categories.meta_keywords }}</td>
            <td>{{ categories.meta_description }}</td>
            <td><a :href="`/admin/edit/category/${categories.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
 import categories from '~/apollo/queries/shop/categories'

export default {
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categories
    }
  }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Categories'
    }
  }

</script>
