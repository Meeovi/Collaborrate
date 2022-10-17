<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">
          <input type="submit" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal" value="Add New Media">
        </a>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <mediasettings />
          </div>
        </div>
      </div>
    </nav>
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Media</th>
          </tr>
        </thead>
        <tbody v-for="mediamanager in mediamanager" :key="mediamanager">
          <tr>
            <td><input type="submit" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#mediaModal">
            {{ mediamanager.media }}</td>
          </tr>
        </tbody>
      </table>
      <!--Modal for Image Details-->
      <div class="modal fade" id="mediaModal" tabindex="-1" aria-labelledby="mediaModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <mediadetails />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import  mediamanager from '~/graphql/queries/content/mediamanager'
import  mediasettings from '~/components/dashboard/media/mediasettings'
import  mediadetails from '~/components/dashboard/media/mediadetails'
  export default {
    data() {
      return {
        mediamanager: [],
      }
    },
    apollo: {
      mediamanager: {
        prefetch: true,
        query: mediamanager
      }
    },
    layout: 'dashboard',
    components: {mediasettings, mediadetails},
    head: {
      title: 'Media Manager'
    }
  }

</script>
