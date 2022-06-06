<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Task" @click="addTask" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Task</a>
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
                        <td><FormulateInput v-model="subject" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Start Date</td>
                        <td><FormulateInput v-model="start_date" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">End Date</td>
                        <td><FormulateInput v-model="due_date" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Priority</td>
                        <td><FormulateInput v-model="priority" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Status</td>
                        <td><FormulateInput v-model="status" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Related To</td>
                        <td><FormulateInput v-model="related_to" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Contact</td>
                        <td><FormulateInput v-model="contact" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput v-model="description" type="textarea" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><FormulateInput v-model="assigned_to" type="textarea" /></td>
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

import { tasks } from "~/apollo/queries/customers/tasks";
/* eslint-disable camelcase */

const ADD_TASKS = gql`
    mutation ($subject:String!,$status:String!,$due_date:String!,$description:String!,$assigned_to:String!,$priority:String!,$contact:String!,$start_date:String!,$related_to:String!){
    insert_tasks(objects: {subject: $subject, status: $status, due_date: $due_date, description: $description, assigned_to: $assigned_to, priority: $priority, contact: $contact, start_date: $start_date, related_to: $related_to}) {
        affected_rows
        returning {
            subject
            status
            due_date
            description
            assigned_to
            priority
            contact
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
        description: " ",
        assigned_to: " ",
        priority: " ",
        contact: " ",
        start_date: " ",
        related_to: " ",
      }
  },
    head: {
        title: 'Add New Task'
    },
  methods: {
      async addTask() {
            const subject = this.subject;
            const description = this.description;
            const status = this.status;
            const due_date = this.due_date;
            const assigned_to = this.assigned_to;
            const priority = this.priority;
            const contact = this.contact;
            const start_date = this.start_date;
            const related_to = this.related_to;
            await this.$apollo.mutate({
                mutation: ADD_TASKS,
                variables: {
                    subject,
                    status,
                    due_date,
                    description,
                    assigned_to,
                    priority,
                    contact,
                    start_date,
                    related_to,
                },
        update: (cache, { data: { insertTasks }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedTask = insertTasks.returning;
                            console.log(insertedTask)
                            cache.writeQuery({
                                query: tasks
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../customers/tasks'})
                }).catch(err => console.log(err));
                this.subject = ' ';
                this.status = ' ';
                this.due_date = ' ';
                this.description = ' ';
                this.assigned_to = ' ';
                this.priority = ' ';
                this.contact = ' ';
                this.start_date = ' ';
                this.related_to = ' ';
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