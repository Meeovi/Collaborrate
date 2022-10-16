<template>
    <div>
        <form  v-for="meeting in findManyMeetings" :key="meeting.id" @submit.prevent="addMeeting">
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
              aria-controls="v-tabs-home" aria-selected="true">Edit Meeting</a>
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

  const DELETE_MEETING = gql `
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

const UPDATE_MEETING = gql`
  mutation updateOnemeeting($id: Int!){
  updateOnemeeting(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Meeting'
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
   async deleteMeeting(meeting){
    await this.$apollo.mutate({
        mutation: DELETE_MEETING,
        variables: {
          id: meeting.id
        },
        refetchQueries: [
          {
            query: findManyMeetings
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../customers/meetings'})
            }).catch(err => console.log(err));
    },
    async updateMeeting(meeting){
    await this.$apollo.mutate({
        mutation: UPDATE_MEETING,
        variables: {
          id: meeting.id
        },
        refetchQueries: [
          {
            query: findManyMeetings
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyMeetings: {
      query: findManyMeetings,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>