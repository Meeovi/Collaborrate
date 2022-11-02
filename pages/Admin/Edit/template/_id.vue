<template>
  <div>
    <form v-for="template in findManyTemplates" :key="template.id" @submit.prevent="addTemplate()">
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="templateAddOptions">
                <li>
                  <input type="submit" value="Save" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Active</td>
              <td>
                <input :value="template.active" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Template Name</td>
              <td>
                <input :value="template.name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Orientation</td>
              <td>
                <input :value="template.orientation" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <input :value="template.content" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Header</td>
              <td>
                <input :value="template.header" type="text" placeholder="#" required />
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">Footer</td>
              <td>
                <input :value="template.footer" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Page Size</td>
              <td>
                <input :value="template.page_size" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <input :value="template.height" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Type</td>
              <td>
                <input :value="template.type" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin allHeader</td>
              <td>
                <input :value="template.margin_header" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Bottom</td>
              <td>
                <input :value="template.margin_bottom" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Left</td>
              <td>
                <input :value="template.margin_left" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Right</td>
              <td>
                <input :value="template.margin_right" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Top</td>
              <td>
                <input :value="template.margin_top" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <input :value="template.assigned_to" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import  gql from 'graphql-tag'
import  findManyTemplates from '~/graphql/mutation/createOneChannels'

const DELETE_PDF_TEMPLATE = gql`
  mutation deleteOnetemplates($id: Int!){
  deleteOneTemplates(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

const UPDATE_PDF_TEMPLATE = gql`
  mutation updateOnetemplates($id: Int!){
  updateOneTemplates(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Template'
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
   async deleteTemplate(template){
    await this.$apollo.mutate({
        mutation: DELETE_PDF_TEMPLATE,
        variables: {
          id: template.id
        },
        refetchQueries: [
          {
            query: findManyTemplates
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/templates'})
            }).catch(err => console.log(err));
    },
    async updateTemplate(template){
    await this.$apollo.mutate({
        mutation: UPDATE_PDF_TEMPLATE,
        variables: {
          id: template.id
        },
        refetchQueries: [
          {
            query: findManyTemplates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyTemplates: {
      query: findManyTemplates,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
