<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Meeting" @click="addMeeting" /></a>
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
                <FormulateInput v-model="subject" type="text" required />
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
              <td style="text-align: right;">Duration</td>
              <td>
                <FormulateInput v-model="duration" type="datetime-local" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <FormulateInput v-model="status" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Related To</td>
              <td>
                <FormulateInput v-model="related_to" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Reminders</td>
              <td>
                <div class="form-wrapper">
                  <FormulateForm>
                    <FormulateInput type="group" name="reminders" :repeatable="true" label="Add Reminders"
                      add-label="+ Add Reminder">
                      <div class="reminder">
                        <FormulateInput v-model="reminders" name="name" type="text" label="Reminder" />
                      </div>
                    </FormulateInput>
                  </FormulateForm>
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="content" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <FormulateInput v-model="assigned_to" type="textarea" />
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
    meetings
  } from "~/apollo/queries/customers/meetings";
  /* eslint-disable camelcase */

  const ADD_MEETINGS = gql `
    mutation ($subject:String!,$status:String!,$end_date:String!,$content:String!,$assigned_to:String!,$duration:String!,$reminders:String!,$start_date:String!,$related_to:String!){
    insert_meetings(objects: {subject: $subject, status: $status, end_date: $end_date, content: $content, assigned_to: $assigned_to, duration: $duration, reminders: $reminders, start_date: $start_date, related_to: $related_to}) {
        affected_rows
        returning {
            subject
            status
            end_date
            content
            assigned_to
            duration
            reminders
            start_date
            related_to
    }
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
    computed: {
      total() {
        const count = Array.isArray(this.formData.reminders) ? this.formData.reminders.length : 1
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(count * 100)
      }
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
                query: meetings
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
