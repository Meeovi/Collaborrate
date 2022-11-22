<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/review/add-new-review"><input type="submit" class="btn btn-warning" value="Create A Review"></a>
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Customer Name</th>
            <th>Review</th>
            <th>Website</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="reviews in findManyReviews" :key="reviews.id">
          <tr>
            <td>{{ reviews.first_name }} {{ reviews.last_name }}</td>
            <td>{{ reviews.content }}</td>
            <td><a :href=reviews.websites>{{ reviews.websites }}</a></td>
            <td>{{ reviews.created_at }}</td>
            <td><a :href="`/admin/edit/review/${reviews.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import findManyReviews from '~/graphql/query/findManyReviews'

export default {
  data() {
    return {
      findManyReviews: [],
    }
  },
  apollo: {
    findManyReviews: {
      prefetch: true,
      query: findManyReviews
    }
  }, 
    head: {
      title: 'Reviews'
    }
  }

</script>
