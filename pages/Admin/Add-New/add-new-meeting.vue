<template>
  <div>
    <form @submit.prevent="addMeeting">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Meeting" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Meeting</a>
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
                      <td style="text-align: right;">Subject</td>
                      <td>
                        <input v-model="subject" type="text" required />
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
                      <td style="text-align: right;">Duration</td>
                      <td>
                        <input v-model="duration" type="number" placeholder="In minutes" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Status</td>
                      <td>
                        <select id="status" v-model="status" name="template" class="form-category">
                          <option value="planned">Planned</option>
                          <option value="ongoing">Ongoing</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Related To</td>
                      <td>
                        <div class="form-wrapper">
                          <FormulateInput type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task"
                            validation="required">
                            <div class="task" style="padding-bottom:10px;">
                              <FormulateInput name="task" v-model="related_to" validation="required" />
                            </div>
                          </FormulateInput>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Reminders</td>
                      <td>
                        <textarea v-model="reminders" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <client-only><Editor v-model="content" /></client-only>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Assigned To</td>
                      <td><select id="assignedTo" v-model="assigned_to">
                          <option v-for="users in findManyUsers" :key="users.id" :value="users">
                            {{ users.name }}
                          </option>
                        </select></td>
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

  import findManyMeetings from "~/graphql/queries/customers/meetings";
  import findManyUsers from '~/graphql/queries/system/users'
  /* eslint-disable camelcase */

  const ADD_MEETINGS = gql `
    mutation ($subject:String!,$status:String!,$end_date:String!,$content:String!,$assigned_to:String!,$duration:String!,$reminders:String!,$start_date:String!,$related_to:String!){
    createOneMeetings(data: {subject: $subject, status: $status, end_date: $end_date, content: $content, assigned_to: $assigned_to, duration: $duration, reminders: $reminders, start_date: $start_date, related_to: $related_to}) {
        subject
        status
        content
        assigned_to
        duration
        reminders
        start_date
        end_date
        related_to
  }
}`;

  export default {
    data() {
      return {
        subject: " ",
        status: " ",
        content: " ",
        assigned_to: " ",
        duration: " ",
        reminders: " ",
        start_date: " ",
        end_date: " ",
        related_to: " ",
      }
    },
    head: {
      title: 'Add New Meeting'
    },
    methods: {
      async addMeeting() {
        const subject = this.subject;
        const content = this.content;
        const status = this.status;
        const end_date = this.end_date;
        const assigned_to = this.assigned_to;
        const duration = this.duration;
        const reminders = this.reminders;
        const start_date = this.start_date;
        const related_to = this.related_to;
        await this.$apollo.mutate({
          mutation: ADD_MEETINGS,
          variables: {
            subject,
            status,
            end_date,
            content,
            assigned_to,
            duration,
            reminders,
            start_date,
            related_to,
          },
          update: (cache, {
            data: {
              insertMeetings
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedMeeting = insertMeetings.returning;
              console.log(insertedMeeting)
              cache.writeQuery({
                query: findManyMeetings
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../customers/meetings'
          })
        }).catch(err => console.log(err));
        this.subject = ' ';
        this.status = ' ';
        this.end_date = ' ';
        this.content = ' ';
        this.assigned_to = ' ';
        this.duration = ' ';
        this.reminders = ' ';
        this.start_date = ' ';
        this.related_to = ' ';
      },

    },
    apollo: {
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
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
