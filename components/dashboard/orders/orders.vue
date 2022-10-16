<template>
    <div class="col">
        <div class="table table-responsive table-bordered orderTable col">
                <h4>Last Orders</h4>
                <table class="table" >
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Bill to Name</th>
                            <th>Ship to Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="orders in findManyOrders" :key="orders.id">
                            <td>{{ orders.name }}</td>
                            <td>{{ orders.bill_to_name }}</td>
                            <td>{{ orders.ship_to_name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';

const findManyOrders = gql`{
    findManyOrders(take: 5) {
        id
        status
        ship_to_name
        bill_to_name
  }
}`
export default {
  apollo: {
    findManyOrders: {
      query: findManyOrders,
      prefetch: true,
    },
  },
    
}
</script>

<style scoped>

</style>