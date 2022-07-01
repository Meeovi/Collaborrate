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
                        <tbody v-for="reviews in allReviewsLimit" :key="reviews.id">
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
import allReviewsLimit from '~/apollo/queries/marketing/reviews'

export default {
  data() {
    return {
      allReviewsLimit: [],
    }
  },
  apollo: {
    allReviewsLimit: {
      prefetch: true,
      query: allReviewsLimit
    },
  },
}
</script>