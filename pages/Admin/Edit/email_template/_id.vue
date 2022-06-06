<template>
  <div>
    <FormulateForm  v-for="email_template in email_templates" :key="email_template.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="email_templateAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addEMAIL_TEMPLATE" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Active</td>
              <td>
                <FormulateInput v-model="active" type="checkbox" />{{ email_template.active }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Template Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />{{ email_template.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Subject</td>
              <td>
                <FormulateInput v-model="subject" type="text" />{{ email_template.subject }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="content" type="textarea" />{{ email_template.description }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Header</td>
              <td>
                <FormulateInput v-model="header" type="text" placeholder="#" required />{{ email_template.header }}
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">Footer</td>
              <td>
                <FormulateInput v-model="footer" type="text" />{{ email_template.footer }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Width</td>
              <td>
                <FormulateInput v-model="width" type="text" />{{ email_template.width }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <FormulateInput v-model="height" type="text" />{{ email_template.height }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Type</td>
              <td>
                <FormulateInput v-model="type" type="text" />{{ email_template.type }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <FormulateInput v-model="media" type="text" />{{ email_template.media }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <FormulateInput v-model="assigned_to" type="text" />{{ email_template.assigned_to }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import gql from 'graphql-tag'
import email_templates from '~/apollo/mutations/marketing/email_templates'
import allEmail_templates from '~/apollo/queries/marketing/email_templates'

const DELETE_EMAIL_TEMPLATE = gql `
  mutation delete_email_templates($id: Int!){
  delete_email_templates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_EMAIL_TEMPLATE = gql `
  mutation update_email_templates($id: Int!){
  update_email_templates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Email Template'
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
   async deleteEmail_template(email_template){
    await this.$apollo.mutate({
        mutation: DELETE_EMAIL_TEMPLATE,
        variables: {
          id: email_template.id
        },
        refetchQueries: [
          {
            query: allEmail_templates
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/email_templates'})
            }).catch(err => console.log(err));
    },
    async updateEmail_template(email_template){
    await this.$apollo.mutate({
        mutation: UPDATE_EMAIL_TEMPLATE,
        variables: {
          id: email_template.id
        },
        refetchQueries: [
          {
            query: allEmail_templates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    email_templates: {
      query: email_templates,
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
