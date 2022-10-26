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
                <input v-model="active" type="checkbox" />{{ template.active }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Template Name</td>
              <td>
                <input v-model="name" type="text" required />{{ template.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Orientation</td>
              <td>
                <input v-model="orientation" type="text" />{{ template.orientation }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <input v-model="content" type="textarea" />{{ template.description }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Header</td>
              <td>
                <input v-model="header" type="text" placeholder="#" required />{{ template.header }}
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">Footer</td>
              <td>
                <input v-model="footer" type="text" />{{ template.footer }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Page Size</td>
              <td>
                <input v-model="page_size" type="text" />{{ template.page_size }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <input v-model="height" type="text" />{{ template.height }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Type</td>
              <td>
                <input v-model="type" type="text" />{{ template.type }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin allHeader</td>
              <td>
                <input v-model="margin_header" type="text" />{{ template.margin_header }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Bottom</td>
              <td>
                <input v-model="margin_bottom" type="text" />{{ template.margin_bottom }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Left</td>
              <td>
                <input v-model="margin_left" type="text" />{{ template.margin_left }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Right</td>
              <td>
                <input v-model="margin_right" type="text" />{{ template.margin_right }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Top</td>
              <td>
                <input v-model="margin_top" type="text" />{{ template.margin_top }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <input v-model="assigned_to" type="text" />{{ template.assigned_to }}
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
import  findManyTemplates from '~/graphql/generated/mutations/createOneChannels'

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
