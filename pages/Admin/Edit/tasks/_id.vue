<template>
    <div>
        <form method="POST" enctype="multipart/form-data"  @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="taskAddOptions">
                            <li><input type="submit" value="Save" @click="addTask" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Subject</td>
                        <td><input v-model="subject" type="text" required />{{ tasks.subject }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Start Date</td>
                        <td><input v-model="start_date" type="text" />{{ tasks.start_date }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">End Date</td>
                        <td><input v-model="due_date" type="text" />{{ tasks.due_date }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Priority</td>
                        <td><input v-model="priority" type="text" />{{ tasks.priority }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Status</td>
                        <td><input v-model="status" type="text" />{{ tasks.status }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Related To</td>
                        <td><input v-model="related_to" type="text" />{{ tasks.related_to }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Contact</td>
                        <td><input v-model="contact" type="text" />{{ tasks.contact }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><input v-model="description" type="textarea" />{{ tasks.description }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><input v-model="assigned_to" type="textarea" />{{ tasks.assigned_to }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  tasks from '~/apollo/mutations/customers/tasks'
import  allTasks from '~/apollo/queries/customers/tasks'

const DELETE_TASK = gql `
  mutation delete_tasks($id: Int!){
  delete_tasks(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_TASK = gql `
  mutation update_tasks($id: Int!){
  update_tasks(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Task'
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
   async deleteTask(task){
    await this.$apollo.mutate({
        mutation: DELETE_TASK,
        variables: {
          id: task.id
        },
        refetchQueries: [
          {
            query: allTasks
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../customers/tasks'})
            }).catch(err => console.log(err));
    },
    async updateTask(task){
    await this.$apollo.mutate({
        mutation: UPDATE_TASK,
        variables: {
          id: task.id
        },
        refetchQueries: [
          {
            query: allTasks
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    tasks: {
      query: tasks,
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

li {
    display: inline-block;
}
</style>