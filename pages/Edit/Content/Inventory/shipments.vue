<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/add-new-shipment">
          <input type="submit" class="btn btn-warning" hint="Create new Shipment"></a>
      </div>
    </nav>
    <br>
    <div class="table table-responsive">
      <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Carrier Name</th>
            <th>Logo</th>
            <th>Transit Time</th>
            <th>Transit Speed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="shipments in findManyShipments" :key="shipments.id">
          <tr>
            <td>{{ shipments.id }}</td>
            <td>{{ shipments.carrier_name }}</td>
            <td>{{ shipments.image }}</td>
            <td>{{ shipments.transit_time }}</td>
            <td>{{ shipments.speed_grade }}</td>
            <td><a :href="`/admin/edit/shipment/${shipments.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 import  findManyShipments from '../../graphql/query/findManyShipments'

export default {
  data() {
    return {
      findManyShipments: [],
    }
  },
  apollo: {
    findManyShipments: {
      prefetch: true,
      query: findManyShipments
    }
  }, 
    head: {
      title: 'Shipments'
    }
  }

</script>
