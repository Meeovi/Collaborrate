<template>
  <div>
    <form v-for="checklist in checklists" :key="checklist.id" @submit.prevent="addChecklist()">
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="visitsAddOptions">
                <li>
                  <input type="submit" value="Save"  />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Username</td>
              <td>
                <input :value="checklist.username" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Regional Manager</td>
              <td>
                <input :value="checklist.regional_manager" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Manager</td>
              <td>
                <input :value="checklist.manager" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Start Date</td>
              <td>
                <input :value="checklist.start_date" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">End Date</td>
              <td>
                <input :value="checklist.end_date" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Region</td>
              <td>
                <input :value="checklist.region" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Location</td>
              <td>
                <input :value="checklist.location" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country</td>
              <td>
                <input :value="checklist.country" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <div class="form-wrapper">
                  <form>
                    <button type="group" name="description" :repeatable="true" value="Add Notes"
                      add-value="+ Add Description">
                      <div class="description">
                        <input :value="checklist.description" name="name" type="text" value="Description" />
                      </div>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <FormulateInput :value="checklist.media" type="image" name="headshot" label="Select an image to upload" validation="mime:image/jpeg,image/png,image/gif" />{{ checklist.media }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
import  gql from 'graphql-tag'
//import  checklists from '~/graphql/mutation/createOneChecklist'

const DELETE_CHECKLIST = gql`
  mutation deleteOnechecklists($id: BigInt){
  deleteOneChecklist(where: {id: $id}){
    country
      description
      id
      location
      manager
      media
      prod_id
      project
      region
      regional_manager
      task
      ticket
      trainings
      type
      username
  }
}
`;
const UPDATE_CHECKLIST = gql`
  mutation updateOnechecklists($id: BigInt){
  updateOneChecklist(data: {username: $username, ticket: $ticket, regional_manager: $regional_manager, region: $region, project: $project, type: $type, media: $media, manager: $manager, location: $location, description: $description, country: $country, task: $task}, (where: {id: $id})){
    country
      description
      id
      location
      manager
      media
      prod_id
      project
      region
      regional_manager
      task
      ticket
      trainings
      type
      username
  }
}
`;
export default {
    head: {
        name: 'Edit Checklist'
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
   async deleteChecklist(checklist){
    await this.$apollo.mutate({
        mutation: DELETE_CHECKLIST,
        variables: {
          id: checklist.id
        },
        refetchQueries: [
          {
            query: checklists
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/marketing/checklists'})
            }).catch(err => console.log(err));
    },
    async updateChecklist(checklist){
    await this.$apollo.mutate({
        mutation: UPDATE_CHECKLIST,
        variables: {
          id: checklist.id
        },
        refetchQueries: [
          {
            query: checklists
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    checklists: {
      query: checklists,
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

  li {
    display: inline-block;
  }
.form-wrapper {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: .5em;
  box-sizing: border-box;
}
@media (min-width: 650px) {
  .reminder {
    display: flex;
  }
}

@media (min-width: 720px) {
  .reminder {
    display: block;
  }
}

@media (min-width: 850px) {
  .reminder {
    display: flex;
  }
  .reminder .formulate-input {
    margin-right: 1.5em;
  }
}
.reminder .formulate-input {
  margin-right: 2em;
  margin-bottom: 0;
}

strong {
  display: block;
  margin: 1em 0;
}

strong.price {
  margin-top: 1.25em;
  margin-bottom: 0;
  height: 2.5em;
  display: inline-flex;
  align-items: center;
}
</style>
