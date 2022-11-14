<template>
  <div class="modal-content">
    <div v-for="mediamanager in mediamanager" :key="mediamanager.id" class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">{{ mediamanager.name }} Details</h5>
      <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
    </div>
    <div v-for="mediamanager in mediamanager" :key="mediamanager.id" class="modal-body">
      <section class="testimonials1 cid-t878PR58k2" id="testimonials1-x">
        <div>
          <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
            <strong>{{ mediamanager.name }}</strong></h3>
          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <div class="image-wrapper">
                <img src="assets/images/team2.jpg" alt="Mobirise">
              </div>
            </div>
            <div class="col-12 col-md col-lg-4">
              <div class="text-wrapper">
                <p class="mbr-text mbr-fonts-style mb-4 display-7">Description: {{ mediamanager.description }}</p>
                <p class="name mbr-fonts-style mb-1 display-4">
                  <strong>Created At: {{ mediamanager.created_at }}</strong></p>
                <p class="position mbr-fonts-style display-4">
                  <strong>Versions: {{ mediamanager.versions }}</strong><br>
                  <strong>Keywords: {{ mediamanager.keywords }}</strong><br>
                  <strong>Content Type: {{ mediamanager.content_type }}</strong><br>
                  <strong>Copyright: {{ mediamanager.copyright }}</strong><br><br>
                  <strong>Dimensions: {{ mediamanager.dimensions }}</strong><br>
                  <strong>Expiration Date: {{ mediamanager.expiration_date }}</strong><br>
                  <strong>Author(s): {{ mediamanager.author }}</strong><br>
                  <strong>Member(s): {{ mediamanager.members }}</strong><br><br>
                  <strong>Watername: {{ mediamanager.watermark_name }}</strong><br>
                  <strong>Watermedia: {{ mediamanager.watermark_media }}</strong><br>
                  <strong>Watermark Description: {{ mediamanager.watermark_description }}<br></strong><br>
                  <strong>Brands: {{ mediamanager.brands }}</strong><br>
                  <strong>Tags: {{ mediamanager.tags }}</strong><br>
                  <strong>Agreements: {{ mediamanager.agreements }}</strong><br>
                  <strong>Tasks Name: {{ mediamanager.task_name }}</strong><br>
                  <strong>Tasks Type: {{ mediamanager.task_type }}</strong><br>
                  <strong>Tasks Description: {{ mediamanager.task_description }}<br></strong><br>
                  <strong>Products: {{ mediamanager.products }}</strong><br>
                  <strong>Albums: {{ mediamanager.albums }}</strong>
                  <strong>Workspaces: {{ mediamanager.workspace }}</strong>
                  <strong>Status: {{ mediamanager.status }}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#mediaModal">{{ mediamanager.id }}</button>
      </div>
      <div class="modal fade" id="mediaModal" tabindex="-1" aria-labelledby="mediaModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <mediaedit />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
 /* // eslint-disable-next-line camelcase
  import gql from 'graphql-tag'
  //import mediamanager from '~/graphql/mutation/createOneMediamanager'

  const DELETE_MEDIAMANAGER = gql `
  mutation delete_mediamanager($id: Int!){
  delete_mediamanager(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

  const UPDATE_MEDIAMANAGER = gql `
  mutation update_mediamanager($id: Int!){
  update_mediamanager(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

  export default {
    head: {
      name: 'Media Details'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deleteMediamanager(mediamanager) {
        await this.$apollo.mutate({
          mutation: DELETE_MEDIAMANAGER,
          variables: {
            id: mediamanager.id
          },
          refetchQueries: [{
              query: mediamanager
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../admin/content/mediamanager'
          })
        }).catch(err => console.log(err));
      },
      async updateMediamanager(mediamanager) {
        await this.$apollo.mutate({
          mutation: UPDATE_MEDIAMANAGER,
          variables: {
            id: mediamanager.id
          },
          refetchQueries: [{
              query: mediamanager
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      mediamanager: {
        query: mediamanager,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
        }
      }
    }
  } */

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
