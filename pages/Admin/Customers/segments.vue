<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-segment"><input type="button" class="btn btn-warning">Add Segment</button></a>
        
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Segment</th>
            <th>Status</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="segments in segments" :key="segments.id">
          <tr>
            <td><input id="segmentID" type="text" name=" id" /></td>
            <td><input type="text" name="segment" /></td>
            <td><input type="text" name="status" /></td>
            <td><input type="select" :options="categories.name" id="segmentStatus" name="status">
                </button></td>
            <td><input type="select" :options="website.name" id="segmentWebsite" name="website">
                </button></td>
          </tr>
          <tr>
            <td>{{ segments.id }}</td>
            <td>{{ segments.name }}</td>
            <td>{{ segments.status }}</td>
            <td>{{ segments.website }}</td>
            <td><a :href="`/admin/edit/segments/${segments.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  segments from '~/apollo/queries/customers/segments'
 import  website from '~/apollo/queries/shop/website'
 import  categories from '~/apollo/queries/shop/categories'

export default {
   data() {
    return {
      segments: [],
      website: [],
      categories: []
    }
  },
  apollo: {
    segments: {
      prefetch: true,
      query: segments
    },
    website: {
      prefetch: true,
      query: website
    },
    categories: {
      prefetch: true,
      query: categories
    }
  }, 
    head: {
      title: 'Customers Segments'
    }
  }

</script>
