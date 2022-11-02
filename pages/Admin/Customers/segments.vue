<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/segment/add-new-segment"><input type="submit" class="btn btn-warning" value="Add Segment"></a>
        
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Segment</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="segments in findManySegments" :key="segments.id">
          <tr>
            <td>{{ segments.id }}</td>
            <td>{{ segments.name }}</td>
            <td><a :href=segments.website>{{ segments.website }}</a></td>
            <td><a :href="`/admin/edit/segments/${segments.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

 import  findManySegments from '~/graphql/query/findManySegments'

export default {
   data() {
    return {
      findManySegments: [],
    }
  },
  apollo: {
    findManySegments: {
      prefetch: true,
      query: findManySegments
    },
  }, 
    head: {
      title: 'Customers Segments'
    }
  }

</script>
