<template>
    <div>
        <FormulateForm v-for="event in events" :key="event.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="eventAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addEvent" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Event Name</td>
                        <td><FormulateInput name="eventName" type="text" label="Name of the Event" required />{{ event.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Amount of Tickets Available</td>
                        <td><FormulateInput name="eventTickets" type="text" label="Enter amount of tickets for event" required />{{ event.tickets }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event City</td>
                        <td><FormulateInput type="text" required />{{ event.city }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event State</td>
                        <td><FormulateInput type="text" placeholder="$" required />{{ event.state }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event Event</td>
                        <td><FormulateInput type="text" />{{ event.event }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event Postal Code</td>
                        <td><FormulateInput name="eventPostalCode" type="text" />{{ event.postalcode }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event Start Date</td>
                        <td><FormulateInput name="eventStart" type="text" />{{ event.start }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event End Date</td>
                        <td><FormulateInput name="eventEnd" type="text" />{{ event.end }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Category</td>
                        <td><FormulateInput name="productCategory" type="text" />{{ event.category }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <FormulateInput class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </FormulateInput>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table table-responsive">
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <vue-simplemde id="longDescription" />{{ event.content }}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingThree" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                    </FormulateInput>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <td><FormulateInput type="image" upload-url="/media" name="headshot" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>{{ event.image }}</td>
                    </div>
                </div>
            </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
import events from '~/apollo/mutations/marketing/events'
import allEvents from '~/apollo/queries/marketing/events'

const DELETE_EVENT = gql `
  mutation delete_events($id: Int!){
  delete_events(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_EVENT = gql `
  mutation update_events($id: Int!){
  update_events(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Event'
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
   async deleteEvent(event){
    await this.$apollo.mutate({
        mutation: DELETE_EVENT,
        variables: {
          id: event.id
        },
        refetchQueries: [
          {
            query: allEvents
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/events'})
            }).catch(err => console.log(err));
    },
    async updateEvent(event){
    await this.$apollo.mutate({
        mutation: UPDATE_EVENT,
        variables: {
          id: event.id
        },
        refetchQueries: [
          {
            query: allEvents
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    events: {
      query: events,
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
</style>