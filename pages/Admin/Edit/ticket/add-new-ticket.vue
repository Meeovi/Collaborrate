<template>
  <div>
    <form @submit.prevent="addTicket()">
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
                        <select id="severity" v-model="severity" name="template" class="form-category">
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
                        <select id="level" v-model="level" name="template" class="form-category">
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
                        <input v-model="name" name="ticketingName" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Ticket Type</td>
                      <td>
                        <select id="ticketType" v-model="ticket_type" name="template" class="form-category">
                          <option value="troubleTicket">Trouble Ticket</option>
                          <option value="actionItem">Action Item</option>
                          <option value="audit">Audit</option>
                          <option value="investigation">Investigation</option>
                          <option value="case">Case</option>
                          <option value="private">Private</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Ticket Department</td>
                      <td>
                        <input v-model="department" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Account Name</td>
                      <td>
                        <input v-model="account_name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Priority</td>
                      <td>
                        <input v-model="priority" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Requester</td>
                      <td>
                        <input v-model="requester" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Requester Email</td>
                      <td>
                        <input v-model="requester_email" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date</td>
                      <td>
                        <input v-model="date" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea v-model="content" type="text" required cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Team</td>
                      <td>
                        <input v-model="team" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Assigned To</td>
                      <td>
                        <select id="assigned_to" v-model="assigned_to" name="template" class="form-category">
                          <option v-for="users in findManyUsers" :key="users" :value="users">{{ users.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Media</td>
                      <td>
                        <input v-model="media" type="image" value="Upload an Image, Video, PDF, or other file" />
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

  const ADD_TICKETING = gql`
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
      async addTicket() {
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
              insertUser
            }
          }) => {
            try {
              const insertedTicketing = insertTicketing.returning;
              const insertedUser = insertUser.returning;
              console.log(insertedTicketing, insertedUser)
              cache.writeQuery({
                query: ticketings
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../marketing/ticketing'
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
    apollo: {
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
    }
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
