<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-wishlist"><input type="submit" class="btn btn-warning" value="Add New Wishlist"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Wishlist ID</th>
            <th>Wishlist Name</th>
            <th>Quantity</th>
            <th>Visibility</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="wishlists in wishlists" :key="wishlists.id">
          <tr>
            <td>{{ wishlists.id }}</td>
            <td>{{ wishlists.name }}</td>
            <td>{{ wishlists.quantity }}</td>
            <td>{{ wishlists.visibility }}</td>
            <td>{{ wishlists.created_at }}</td>
            <td><a :href="`/admin/edit/wishlist/${wishlists.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  wishlists from '~/graphql/queries/shop/wishlists'

export default {
  data() {
    return {
      wishlists: [],
    }
  },
  apollo: {
    wishlists: {
      prefetch: true,
      query: wishlists
    }
  },
    head: {
      title: 'Wishlists'
    }
  }

</script>
