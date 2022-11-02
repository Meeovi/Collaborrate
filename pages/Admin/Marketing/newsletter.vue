<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
            <a class="navbar-brand" href="/admin/edit/newletter/add-new-newsletter"><input type="submit" class="btn btn-warning" value="Create A Newsletter" /></a>
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
        <tbody v-for="newsletters in findManyNewsletters" :key="newsletters.id">
          <tr>
            <td>{{ newsletters.id }}</td>
            <td>{{ newsletters.email }}</td>
            <td>{{ newsletters.created_at }}</td>
            <td><a :href="`/admin/edit/agreement/${agreements.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  findManyNewsletters from '~/graphql/query/findManyNewsletters'

export default {
  data() {
    return {
      findManyNewsletters: [],
    }
  },
  apollo: {
    findManyNewsletters: {
      prefetch: true,
      query: findManyNewsletters
    }
  }, 
    head: {
      title: 'Customer Engagement'
    }
  }

</script>
