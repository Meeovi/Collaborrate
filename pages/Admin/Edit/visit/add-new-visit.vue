<template>
  <div>
    <form @submit.prevent="addVisit()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Visit" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Visit</a>
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
                      <td style="text-align: right;">Username</td>
                      <td>
                        <input v-model="username" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Reason</td>
                      <td>
                        <select id="reason" v-model="reason" name="template" class="form-category">
                          <option value="business">Business Meeting</option>
                          <option value="checklist">Checklist Visit</option>
                          <option value="generalProject">General Project Development</option>
                          <option value="launch">Launch Activities</option>
                          <option value="lifecycle">Lifecycle Projects</option>
                          <option value="general">General</option>
                          <option value="incidents">Resolve Incidents / Reactive Site Visit</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Start Date</td>
                      <td>
                        <input v-model="start_date" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">End Date</td>
                      <td>
                        <input v-model="end_date" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Emergency</td>
                      <td>
                        <select id="emergency" v-model="emergency" name="template" class="form-category">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Location</td>
                      <td>
                        <input v-model="location" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Task</td>
                      <td>
                        <div class="form-wrapper">
                          <FormulateInput type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task"
                            validation="required">
                            <div class="task" style="padding-bottom:10px;">
                              <FormulateInput name="task" v-model="task" validation="required" />
                            </div>
                          </FormulateInput>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Visit Description</td>
                      <td>
                        <client-only><Editor v-model="content" /></client-only>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meetings</td>
                        <td>
                          <input v-model="meeting" type="text" />
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
  import  gql from "graphql-tag";

  import findManyVisits from "~/graphql/query/findManyVisits";
  /* eslint-disable camelcase */

  const ADD_VISITS = gql`
    mutation ($reason:String!,$location:String!,$end_date:String!,$content:String!,$username:String!,$emergency:String!,$meeting:String!,$start_date:String!,$task:String!){
    createOneVisits(data: {reason: $reason, location: $location, end_date: $end_date, content: $content, username: $username, emergency: $emergency, meeting: $meeting, start_date: $start_date, task: $task}) {
        reason
        location
        content
        username
        emergency
        meeting
        start_date
        end_date
        task
  }
}`;

  export default {
    data() {
      return {
        reason: " ",
        location: " ",
        content: " ",
        username: " ",
        emergency: " ",
        meeting: " ",
        start_date: " ",
        end_date: " ",
        task: " ",
      }
    },
    head: {
      title: 'Add New Visit'
    },
    methods: {
      async addVisit() {
        const reason = this.reason;
        const content = this.content;
        const location = this.location;
        const end_date = this.end_date;
        const username = this.username;
        const emergency = this.emergency;
        const meeting = this.meeting;
        const start_date = this.start_date;
        const task = this.task;
        await this.$apollo.mutate({
          mutation: ADD_VISITS,
          variables: {
            reason,
            location,
            end_date,
            content,
            username,
            emergency,
            meeting,
            start_date,
            task,
          },
          update: (cache, {
            data: {
              insertVisits,
              insertMeetings
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedVisit = insertVisits.returning;
              const insertedMeeting = insertMeetings.returning;
              console.log(insertedVisit, insertedMeeting)
              cache.writeQuery({
                query: findManyVisits
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../marketing/visits'
          })
        }).catch(err => console.log(err));
        this.reason = ' ';
        this.location = ' ';
        this.end_date = ' ';
        this.content = ' ';
        this.username = ' ';
        this.emergency = ' ';
        this.meeting = ' ';
        this.start_date = ' ';
        this.task = ' ';
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
