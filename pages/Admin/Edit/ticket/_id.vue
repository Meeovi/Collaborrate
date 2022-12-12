<template>
  <div>
    <form v-for="ticketing in ticketing" :key="ticketing.id" @submit.prevent="addTicket()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Ticket" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Ticket</a>
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
                      <td style="text-align: right;">Severity</td>
                      <td>
                        <select id="severity" :value="ticket.severity" name="template" class="form-category">
                          <option value="5">5</option>
                          <option value="4">4</option>
                          <option value="3">3</option>
                          <option value="2">2</option>
                          <option value="1">1</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Stage of Ticket</td>
                      <td>
                        <select id="level" :value="ticket.level" name="template" class="form-category">
                          <option value="Assigned">Assigned</option>
                          <option value="Pending">Pending</option>
                          <option value="WorkInProgress">Work in Progress</option>
                          <option value="Researching">Researching</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Ticket Name</td>
                      <td>
                        <input :value="ticket.name" name="ticketingName" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Ticket Type</td>
                      <td>
                        <select id="ticketType" :value="ticket.ticket_type" name="template" class="form-category">
                          <option value="troubleTicket">Trouble Ticket</option>
                          <option value="actionItem">Action Item</option>
                          <option value="audit">Audit</option>
                          <option value="investigation">Investigation</option>
                          <option value="private">Private</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Ticket Department</td>
                      <td>
                        <input :value="ticket.department" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Account Name</td>
                      <td>
                        <input :value="ticket.account_name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Priority</td>
                      <td>
                        <input :value="ticket.priority" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Requester</td>
                      <td>
                        <input :value="ticket.requester" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Requester Email</td>
                      <td>
                        <input :value="ticket.requester_email" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date</td>
                      <td>
                        <input :value="ticket.date" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea :value="ticket.content" type="text" required cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Team</td>
                      <td>
                        <input :value="ticket.team" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Assigned To</td>
                      <td>
                        <select id="assigned_to" :value="ticket.assigned_to" name="template" class="form-category">
                          <option v-for="users in findManyUsers" :key="users" :value="users">{{ users.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Media</td>
                      <td>
                        <input :value="ticket.media" type="image" help="Upload an Image, Video, PDF, or other file" />
                      </td>
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
  /* eslint-disable camelcase */
  import ticketings from "~/graphql/query/ticketings";
  import findManyUsers from "~/graphql/query/findManyUsers";

  const DELETE_TICKETING = gql`
    mutation ($name: String!,$department: String!,$comment: String!,$location: String!,$content: String!,$level: String!,$media: String!,$requester: String!,$requester_email: String!,$assigned_to: String!,$account_name: String!,$severity: String!,$team: String!,$resolution: String!,$status: String!,$ticket_type: String!,$priority: String!,$date: String!){
    createOneTicketing(data: {name: $name,department: $department,comment: $comment,location: $location,content: $content,assigned_to: $assigned_to,account_name: $account_name,level: $level,media: $media,requester: $requester,requester_email: $requester_email,resolution: $resolution,team: $team,severity: $severity,status: $status,ticket_type: $ticket_type,date: $date,priority: $priority}) {
        account_name
        countries
        thumbnail
        name
        department
        comment
        location
        content
        websites
        level
        media
        assigned_to
        requester
        requester_email
        resolution
        status
        team
        severity
        ticket_type
        date
        priority
  }
}`;

const UPDATE_TICKETING = gql`
  mutation updateOneticketing($id: Int!){
  updateOneticketing(where: {id: $id}){
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
            query: ticketing
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/marketing/ticketing'})
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
            query: ticketing
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
