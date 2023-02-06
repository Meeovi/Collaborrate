<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/partner/add-new-partner"><input type="submit" class="btn btn-warning" hint="Add A New Partner"></a>
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>FulFillment Partner</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Public</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="partner in partners" :key="partner">
            <td>{{ partner.name }}</td>
            <td>{{ partner.address }}</td>
            <td>{{ partner.city }}</td>
            <td>{{ partner.state }}</td>
            <td>{{ partner.country }}</td>
            <td>{{ partner.isPublic }}</td>
            <td><a :href="`/admin/edit/partner/${partner.id}`">Edit</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 import  partners from '../../graphql/query/findManyPartners'

export default {
  data() {
    return {
      partners: [],
    }
  },
  apollo: {
    partners: {
      prefetch: true,
      query: partners
    }
  }, 
    head: {
      title: 'Partners'
    }
  }

</script>
