<template>
    <div>
        <form v-for="segment in findManySegments" :key="segment.id" @submit.prevent="addSegment()">

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">
      <button type="reset" class="btn btn-warning">Reset</button></a>
    <a class="navbar-brand">

      <input type="submit" class="btn btn-warning" value="Save Segment" /></a>

  </div>
</nav>
<br>
<div class="row">
  <div class="col-3">
    <!-- Tab navs -->
    <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
      <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
        aria-controls="v-tabs-home" aria-selected="true">Edit Segment</a>
    </div>
    <!-- Tab navs -->
  </div>

  <div class="col-9">
    <div id="v-tabs-tabContent" class="tab-scope">
      <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
        <div class="table table-responsive">
          <table class="table">
            <tbody>
              <tr>
                <td style="text-align: right;">Segment Name</td>
                <td><input :value="segment.name" type="text" required /></td>
              </tr>
              <tr>
                <td style="text-align: right;">Description</td>
                <td><textarea :value="segment.description" cols="40" rows="10"></textarea></td>
              </tr>
              <tr>
                <td style="text-align: right;">Assigned to Website</td>
                <td><input :value="segment.website" name="website" type="url" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</div>
</template>

<script>
import gql from "graphql-tag";
import findManySegments from "~/graphql/query/findManySegments";

const DELETE_SEGMENT = gql`
mutation ($name:String!,$description:String,$website:String,$status:String,$apply_to:String){
createOneSegments(data: {name: $name, description: $description, website: $website, status: $status, apply_to: $apply_to}) {
  website
  name
  description
  status
  apply_to
}
}`;

const UPDATE_SEGMENT = gql`
  mutation updateOnesegments($id: Int!){
  updateOneSegments(where: {id: $id}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Segment'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteSegment(segment){
    await this.$apollo.mutate({
        mutation: DELETE_SEGMENT,
        variables: {
          id: segment.id
        },
        refetchQueries: [
          {
            query: findManySegments
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/customers/segments'})
            }).catch(err => console.log(err));
    },
    async updateSegment(segment){
    await this.$apollo.mutate({
        mutation: UPDATE_SEGMENT,
        variables: {
          id: segment.id
        },
        refetchQueries: [
          {
            query: findManySegments
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManySegments: {
      query: findManySegments,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>