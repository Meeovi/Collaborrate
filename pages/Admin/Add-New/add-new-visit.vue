<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Visit" @click="addVisit" /></a>
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
                        <FormulateInput v-model="username" type="textarea" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Reason</td>
                      <td>
                        <FormulateInput v-model="reason" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Start Date</td>
                      <td>
                        <FormulateInput v-model="start_date" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">End Date</td>
                      <td>
                        <FormulateInput v-model="end_date" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Emergency</td>
                      <td>
                        <FormulateInput v-model="emergency" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Location</td>
                      <td>
                        <FormulateInput v-model="location" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Task</td>
                      <td>
                        <FormulateInput v-model="task" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <vue-simplemde id="longDescription" v-model="content" />
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
                                <FormulateInput v-model="meeting" name="name" type="text" label="Meeting" />
                              </div>
                            </FormulateInput>
                          </FormulateForm>
                        </div>
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

  import {
    visits
  } from "~/apollo/queries/marketing/visits";
  /* eslint-disable camelcase */

  const ADD_VISITS = gql `
    mutation ($reason:String!,$location:String!,$end_date:String!,$content:String!,$username:String!,$emergency:String!,$meeting:String!,$start_date:String!,$task:String!){
    insert_visits(objects: {reason: $reason, location: $location, end_date: $end_date, content: $content, username: $username, emergency: $emergency, meeting: $meeting, start_date: $start_date, task: $task}) {
        affected_rows
        returning {
            reason
            location
            end_date
            content
            username
            emergency
            meeting
            start_date
            task
    }
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
    computed: {
      total() {
        const count = Array.isArray(this.formData.visits) ? this.formData.visits.length : 1
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(count * 100)
      }
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
              insertVisits
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedVisit = insertVisits.returning;
              console.log(insertedVisit)
              cache.writeQuery({
                query: visits
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/visits'
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
