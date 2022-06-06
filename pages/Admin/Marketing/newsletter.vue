<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
            <a class="navbar-brand" href="/admin/add-new/add-new-newsletter"><FormulateInput type="button" label="Create A Newsletter"></FormulateInput></a>
          </div>
          </nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Email</th>
            <th>Newsletter Created on</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="newsletter_subscribers in newsletter_subscribers" :key="newsletter_subscribers.id">
          <tr>
            <td>{{ newsletter_subscribers.id }}</td>
            <td>{{ newsletter_subscribers.email }}</td>
            <td>{{ newsletter_subscribers.created_at }}</td>
            <td><a :href="`/admin/edit/agreement/${agreements.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import newsletter_subscribers from '~/apollo/queries/marketing/newsletter_subscribers'

export default {
  data() {
    return {
      newsletter_subscribers: [],
    }
  },
  apollo: {
    newsletter_subscribers: {
      prefetch: true,
      query: newsletter_subscribers
    }
  }, 
    head: {
      title: 'Customer Engagement'
    }
  }

</script>
