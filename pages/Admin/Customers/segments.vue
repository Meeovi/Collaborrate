<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-segment"><input type="button" class="btn btn-warning" value="Add Segment"></a>
        
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
        <tbody v-for="segments in allSegmentsList" :key="segments.id">
          <tr>
            <td><input id="segmentID" type="text" name=" id" /></td>
            <td><input type="text" name="segment" /></td>
            <td><input type="text" name="status" /></td>
            <td><input type="select" :options="allCategoriesList.name" id="segmentStatus" name="status"></td>
            <td><input type="select" :options="allWebsitesList.name" id="segmentWebsite" name="website"></td>
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
 import  allSegmentsList from '~/apollo/queries/customers/segments'
 import  allWebsitesList from '~/apollo/queries/shop/website'
 import  allCategoriesList from '~/apollo/queries/shop/categories'

export default {
   data() {
    return {
      allSegmentsList: [],
      allWebsitesList: [],
      allCategoriesList: []
    }
  },
  apollo: {
    allSegmentsList: {
      prefetch: true,
      query: allSegmentsList
    },
    allWebsitesList: {
      prefetch: true,
      query: allWebsitesList
    },
    allCategoriesList: {
      prefetch: true,
      query: allCategoriesList
    }
  }, 
    head: {
      title: 'Customers Segments'
    }
  }

</script>
