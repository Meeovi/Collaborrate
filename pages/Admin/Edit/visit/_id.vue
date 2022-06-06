<template>
  <div>
    <FormulateForm v-for="visit in visits" :key="visit.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="visitsAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addVisit" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Username</td>
              <td>
                <FormulateInput v-model="username" type="textarea" />{{ visits.username }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Reason</td>
              <td>
                <FormulateInput v-model="reason" type="text" required />{{ visits.reason }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Start Date</td>
              <td>
                <FormulateInput v-model="start_date" type="text" />{{ visits.start_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">End Date</td>
              <td>
                <FormulateInput v-model="end_date" type="text" />{{ visits.end_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Emergency</td>
              <td>
                <FormulateInput v-model="emergency" type="text" />{{ visits.emergency }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Location</td>
              <td>
                <FormulateInput v-model="location" type="text" />{{ visits.location }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Task</td>
              <td>
                <FormulateInput v-model="task" type="text" />{{ visits.task }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <vue-simplemde id="longDescription" v-model="content" />{{ visits.content }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Meetings</td>
              <td>
                <div class="form-wrapper">
                  <FormulateForm>
                    <FormulateInput type="group" name="meeting" :repeatable="true" label="Add Meetings"
                      add-label="+ Add Meeting">
                      <div class="reminder">
                        <FormulateInput v-model="meeting" name="name" type="text" label="Meeting" />{{ visits.meeting }}
                      </div>
                    </FormulateInput>
                  </FormulateForm>
                </div>
              </td>
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
import visits from '~/apollo/mutations/marketing/visits'
import allVisits from '~/apollo/queries/marketing/visits'

const DELETE_VISIT = gql `
  mutation delete_visits($id: Int!){
  delete_visits(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_VISIT = gql `
  mutation update_visits($id: Int!){
  update_visits(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Visit'
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
   async deleteVisit(visit){
    await this.$apollo.mutate({
        mutation: DELETE_VISIT,
        variables: {
          id: visit.id
        },
        refetchQueries: [
          {
            query: allVisits
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/visits'})
            }).catch(err => console.log(err));
    },
    async updateVisit(visit){
    await this.$apollo.mutate({
        mutation: UPDATE_VISIT,
        variables: {
          id: visit.id
        },
        refetchQueries: [
          {
            query: allVisits
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    visits: {
      query: visits,
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
