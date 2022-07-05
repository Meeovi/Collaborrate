<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-knowledgebase"><input type="submit" class="btn btn-warning" value="Create New Knowledge" /></a>
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
        <tbody v-for="knowledgebase in allKnowledgebaseList" :key="knowledgebase.id">
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
 import  allKnowledgebaseList from '~/apollo/queries/system/knowledgebase'

export default {
  data() {
    return {
      allKnowledgebaseList: [],
    }
  },
  apollo: {
    allKnowledgebaseList: {
      prefetch: true,
      query: allKnowledgebaseList
    }
  }, 
    head: {
      title: 'Knowledgebase'
    }
  }

</script>
