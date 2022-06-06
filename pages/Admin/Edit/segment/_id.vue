<template>
    <div>
        <FormulateForm v-for="segment in segments" :key="segment.id"  method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="segmentAddOptions">
                            <li><FormulateInput type="reset" label="Reset" /></li>
                            <li><FormulateInput type="submit" @click="addSegment" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Segment Name</td>
                        <td><FormulateInput type="text" required />{{ segment.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput
  type="textarea" id="description" name="description" cols="50" rows="10" label="Add a short Description" />{{ segment.description }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned to Website</td>
                        <td><FormulateInput name="website" type="url" />{{ segment.website }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
import segments from '~/apollo/mutations/customers/segments'
import allSegments from '~/apollo/queries/customers/segments'

const DELETE_SEGMENT = gql `
  mutation delete_segments($id: Int!){
  delete_segments(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_SEGMENT = gql `
  mutation update_segments($id: Int!){
  update_segments(where: {id: {_eq: $id}}){
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
            query: allSegments
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/segments/segments'})
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
            query: allSegments
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    segments: {
      query: segments,
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