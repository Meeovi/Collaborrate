<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-gift-certificates"><FormulateInput type="button">Create New Gift Certificates</FormulateInput></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Expiration</th>
            <th>Description</th>
            <th>Gift Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="certificates in gift_certificates" :key="certificates.id">
          <tr>
            <td>{{ certificates.name }}</td>
            <td>{{ certificates.discount }}</td>
            <td>{{ certificates.expiration }}</td>
            <td>{{ certificates.excerpt }}</td>
            <td>{{ certificates.type }}</td>
            <td><a :href="`/admin/edit/gift-certificate/${certificates.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gift_certificates from '~/apollo/queries/sales/gift_certificates'

export default {
  data() {
    return {
      gift_certificates: [],
    }
  },
  apollo: {
    gift_certificates: {
      prefetch: true,
      query: gift_certificates
    }
  },
    head: {
      title: 'Gift Certificates and Gift Cards'
    }
  }

</script>
