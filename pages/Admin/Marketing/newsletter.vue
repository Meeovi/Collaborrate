<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
            <a class="navbar-brand" href="/admin/add-new/add-new-newsletter"><input type="submit" class="btn btn-warning" value="Create A Newsletter" /></a>
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
        <tbody v-for="newsletter_subscribers in allNewsletter_subscribersList" :key="newsletter_subscribers.id">
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
 import  allNewsletter_subscribersList from '~/apollo/queries/marketing/newsletter_subscribers'

export default {
  data() {
    return {
      allNewsletter_subscribersList: [],
    }
  },
  apollo: {
    allNewsletter_subscribersList: {
      prefetch: true,
      query: allNewsletter_subscribersList
    }
  }, 
    head: {
      title: 'Customer Engagement'
    }
  }

</script>
