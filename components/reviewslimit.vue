<template>
  <div>
    <div class="table table-responsive table-bordered latestOrders col">
      <table class="table">
        <thead>
          <tr>
            <th>Review ID</th>
            <th>Customer First Name</th>
            <th>Customer Last Name</th>
            <th>Review</th>
            <th>Created On</th>
            <th>Websites</th>
          </tr>
        </thead>
        <tbody v-for="reviews in findManyReviews" :key="reviews.id">
          <tr>
            <th scope="row">{{reviews.id}}</th>
            <td>{{reviews.first_name}}</td>
            <td>{{reviews.last_name}}</td>
            <td>{{reviews.content}}</td>
            <td>{{reviews.created_at}}</td>
            <td>{{reviews.websites}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const findManyReviews = gql`{
    findManyReviews(take: 5) {
        content
        created_at
        first_name
        id
        last_name
        websites
    }
}`
export default {
  apollo: {
    findManyReviews: {
      query: findManyReviews,
      prefetch: true,
    },
  },
}
</script>
