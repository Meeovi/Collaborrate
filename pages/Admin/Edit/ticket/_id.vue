<template>
  <div>
    <form v-for="ticketing in ticketing" :key="ticketing.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="ticketingAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addTicketing" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Severity</td>
              <td>
                <input v-model="severity" :options="{first: '1', second: '2', third: '3', four: '4', five: '5'}" type="select"
  value="Choose the severity based the level of the situation" required />{{ ticketing.severity }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Sticketinge of Ticket</td>
              <td>
                <input v-model="level" :options="{first: 'Assigned', second: 'Pending', third: 'Work in Progress', four: 'Researching', five: 'Resolved'}" type="select"
  value="Choose the current phase of the ticket" required />{{ ticketing.level }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Ticket Name</td>
              <td>
                <input v-model="name" name="ticketingName" type="text" required />{{ ticketing.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Ticket Type</td>
              <td>
                <input v-model="ticket_type" name="ticketingName" required :options="{first: 'Trouble Ticket', second: 'Action Item', third: 'Audit', four: 'Patrol Action', five: 'Private'}" type="select"
  value="What type of ticket is this?" />{{ ticketing.ticket_type }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Ticket Department</td>
              <td>
                <input v-model="department" type="text" required />{{ ticketing.department }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Account Name</td>
              <td>
                <input v-model="account_name" type="text" required />{{ ticketing.account_name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Priority</td>
              <td>
                <input v-model="priority" type="text" />{{ ticketing.priority }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Requester</td>
              <td>
                <input v-model="requester" type="text" />{{ ticketing.requester }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Requester Email</td>
              <td>
                <input v-model="requester_email" type="text" required />{{ ticketing.requester_email }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Date</td>
              <td>
                <input v-model="date" type="datetime-local" />{{ ticketing.date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <client-only>
                  <div class="wysiwyg" data-mdb-wysiwyg="wysiwyg" data-mdb-wysiwyg-fixed="true" :content="content"></div>{{ ticketing.content }}
                </client-only>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Team</td>
              <td>
                <input v-model="team" type="text" />{{ ticketing.team }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <input v-model="assigned_to" type="text" />{{ ticketing.assigned_to }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <input v-model="media" type="image" v-on="uploadFile" />{{ ticketing.media }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
import  gql from "graphql-tag";
/* eslint-disable camelcase */
import  ticketing from '~/apollo/mutations/marketing/ticketing'
import  allTicketing from '~/apollo/queries/marketing/ticketing'

const DELETE_TICKETING = gql `
  mutation delete_ticketing($id: Int!){
  delete_ticketing(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_TICKETING = gql `
  mutation update_ticketing($id: Int!){
  update_ticketing(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Ticket'
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
   async deleteTicketing(ticketing){
    await this.$apollo.mutate({
        mutation: DELETE_TICKETING,
        variables: {
          id: ticketing.id
        },
        refetchQueries: [
          {
            query: allTicketing
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/ticketing'})
            }).catch(err => console.log(err));
    },
    async updateTicketing(ticketing){
    await this.$apollo.mutate({
        mutation: UPDATE_TICKETING,
        variables: {
          id: ticketing.id
        },
        refetchQueries: [
          {
            query: allTicketing
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    ticketing: {
      query: ticketing,
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
