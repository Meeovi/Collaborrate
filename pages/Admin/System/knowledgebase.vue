<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-knowledgebase"><FormulateInput type="button" label="Create New Knowledge"></FormulateInput></a>
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Approver</th>
            <th>Revision</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="knowledgebase in knowledgebase" :key="knowledgebase.id">
          <tr>
            <td>{{ knowledgebase.id }}</td>
            <td>{{ knowledgebase.name }}</td>
            <td>{{ knowledgebase.author }}</td>
            <td>{{ knowledgebase.approver }}</td>
            <td>{{ knowledgebase.revision }}</td>
            <td>{{ knowledgebase.created_at }}</td>
            <td><a :href="`/admin/edit/knowledgebase/${knowledgebase.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import knowledgebase from '~/apollo/queries/system/knowledgebase'

export default {
  data() {
    return {
      knowledgebase: [],
    }
  },
  apollo: {
    knowledgebase: {
      prefetch: true,
      query: knowledgebase
    }
  }, 
    head: {
      title: 'Knowledgebase'
    }
  }

</script>
