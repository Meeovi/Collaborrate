<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-shipment"><FormulateInput type="button">Create new Shipment</FormulateInput></a>

      </div>
    </nav>
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
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
        <tbody v-for="shipments in shipments" :key="shipments.id">
          <tr>
            <td>{{ shipments.id }}</td>
            <td>{{ shipments.carrier_name }}</td>
            <td>{{ shipments.image }}</td>
            <td>{{ shipments.transit_time }}</td>
            <td>{{ shipments.speed_grade }}</td>
            <td><a :href="`/admin/edit/shipment/${shipments.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import shipments from '~/apollo/queries/sales/shipments'

export default {
  data() {
    return {
      shipments: [],
    }
  },
  apollo: {
    shipments: {
      prefetch: true,
      query: shipments
    }
  }, 
    head: {
      title: 'Shipments'
    }
  }

</script>
