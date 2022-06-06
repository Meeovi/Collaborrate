<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Ticket" @click="addTicket" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Ticket</a>
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
                <FormulateInput v-model="severity" :options="{first: '1', second: '2', third: '3', four: '4', five: '5'}" type="select"
  label="Choose the severity based the level of the situation" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Stage of Ticket</td>
              <td>
                <FormulateInput v-model="level" :options="{first: 'Assigned', second: 'Pending', third: 'Work in Progress', four: 'Researching', five: 'Resolved'}" type="select"
  label="Choose the current phase of the ticket" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Ticket Name</td>
              <td>
                <FormulateInput v-model="name" name="ticketingName" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Ticket Type</td>
              <td>
                <FormulateInput v-model="ticket_type" name="ticketingName" required :options="{first: 'Trouble Ticket', second: 'Action Item', third: 'Audit', four: 'Patrol Action', five: 'Private'}" type="select"
  label="What type of ticket is this?" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Ticket Department</td>
              <td>
                <FormulateInput v-model="department" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Account Name</td>
              <td>
                <FormulateInput v-model="account_name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Priority</td>
              <td>
                <FormulateInput v-model="priority" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Requester</td>
              <td>
                <FormulateInput v-model="requester" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Requester Email</td>
              <td>
                <FormulateInput v-model="requester_email" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Date</td>
              <td>
                <FormulateInput v-model="date" type="datetime-local" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                  <vue-simplemde id="longDescription" v-model="content" label="Leave a description about this ticket" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Team</td>
              <td>
                <FormulateInput v-model="team" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <FormulateInput v-model="assigned_to" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <FormulateInput v-model="media" type="file" label="Upload an Image, Video, PDF, or other file" />
              </td>
            </tr>
          </tbody>
        </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
import gql from "graphql-tag";
/* eslint-disable camelcase */
import {ticketing} from "~/apollo/queries/marketing/ticketing";

  const ADD_TICKETING = gql `
    mutation ($name: String!,$department: String!,$comment: String!,$location: String!,$content: String!,$level: String!,$media: String!,$requester: String!,$requester_email: String!,$assigned_to: String!,$account_name: String!,$severity: String!,$team: String!,$resolution: String!,$status: String!,$ticket_type: String!,$priority: String!,$date: String!){
    insert_ticketing(objects: {name: $name,department: $department,comment: $comment,location: $location,content: $content,assigned_to: $assigned_to,account_name: $account_name,level: $level,media: $media,requester: $requester,requester_email: $requester_email,resolution: $resolution,team: $team,severity: $severity,status: $status,ticket_type: $ticket_type,date: $date,priority: $priority}) {
        affected_rows
        returning {
            name
            department
            comment
            location
            content
            assigned_to
            account_name
            websites
            level
            media
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
  }
}`;


  export default {
    data() {
      return {
        account_name: [],
        countries: [],
        thumbnail: " ",
        name: " ",
        department: " ",
        comment: " ",
        location: " ",
        content: " ",
        websites: " ",
        level: " ",
        media: " ",
        assigned_to: " ",
        requester: " ",
        requester_email: " ",
        resolution: " ",
        status: " ",
        team: " ",
        severity: " ",
        ticket_type: " ",
        date: " ",
        priority: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Ticket'
    },

    methods: {
      async addTicketing({ target }) {
        const name = this.name;
        const department = this.department;
        const comment = this.comment;
        const location = this.location;
        const content = this.content;
        const assigned_to = this.assigned_to;
        const account_name = this.account_name;
        const level = this.level;
        const media = this.media;
        const requester = this.requester;
        const requester_email = this.requester_email;
        const resolution = this.resolution;
        const team = this.team;
        const severity = this.severity;
        const status = this.status;
        const ticket_type = this.ticket_type;
        const date = this.date;
        const priority = this.priority;
        
        await this.$apollo.mutate({
          mutation: ADD_TICKETING,
          variables: {
            name,
            department,
            comment,
            location,
            content,
            assigned_to,
            account_name,
            level,
            media,
            requester,
            requester_email,
            resolution,
            team,
            severity,
            status,
            ticket_type,
            date,
            priority,
          },
          update: (cache, {
            data: {
              insertTicketing,
            }
          }) => {
            try {
              const insertedTicketing = insertTicketing.returning;
              console.log(insertedTicketing)
              cache.writeQuery({
                query: ticketing
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/ticketing'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.department = ' ';
        this.comment = ' ';
        this.location = ' ';
        this.content = ' ';
        this.assigned_to = ' ';
        this.account_name = ' ';
        this.level = ' ';
        this.media = ' ';
        this.requester = ' ';
        this.requester_email = ' ';
        this.resolution = ' ';
        this.team = ' ';
        this.severity = ' ';
        this.status = ' ';
        this.ticket_type = ' ';
        this.date = ' ';
        this.priority = ' ';
      },
    },
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

.table li {
  display: inline-block;
}
</style>
