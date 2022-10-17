<template>
    <div>
        <div class="table table-responsive table-bordered latestOrders col">
                    <table class="table" >
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Customer First Name</th>
                                <th>Customer Last Name</th>
                                <th>Created On</th>
                                <th>Websites</th>
                            </tr>
                        </thead>
                        <tbody v-for="reviews in findFirstReviews" :key="reviews.id">
                            <tr>
                                <th scope="row">{{reviews.id}}</th>
                                <td>{{reviews.first_name}} {{reviews.last_name}}</td>
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
import findFirstReviews from '~/graphql/queries/marketing/reviewslimit'

export default {
  data() {
    return {
      findFirstReviews: [],
    }
  },
  apollo: {
    findFirstReviews: {
      prefetch: true,
      query: findFirstReviews
    },
  },
}
</script>