<template>
  <div>
    <table class="table">
      <tbody class="row">
        <tr>
          <th>Task Name</th>
          <th>Assignee</th>
          <th>Start Date</th>
          <th>Due Date</th>
          <th>Related Link</th>
          <th>Ticket</th>
          <th>Status</th>
          <th>Section Rule</th>
        </tr>
        <div class="form-wrapper">
          <FormulateInput type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task" validation="required">
            <div class="task" style="padding-bottom:10px;">
              <!--Tasks-->
              <tr>
                <td>
                  <FormulateInput name="task" v-model="tasks" validation="required" />
                </td>
              </tr>
              <!--Assignee-->
              <tr>
                <td><select id="users" v-model="users">
                    <option v-for="users in findManyUsers" :key="users.id" :value="users">
                      {{ users.name }}</option>
                  </select></td>
              </tr>
              <!--Due Date-->
              <tr>
                <td>
                  <input v-model="end_date" type="datetime-local" required value="End Date" />
                </td>
              </tr>
              <!--Related Link-->
              <tr>
                <td>
                  <input v-model="websites" type="text" value="Websites" required />
                </td>
              </tr>
              <!--Ticket-->
              <tr>
                <td>
                  <input v-model="ticket_id" name="ticket" type="text" />
                </td>
              </tr>
              <!--Section Rule-->
              <tr>
                <td>
                  <input v-model="section_rule" type="number" value="Product Height" />
                </td>
              </tr>
            </div>
          </FormulateInput>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Editor from '~/components/Editor.vue'

  export default {

    components: {
      Editor
    },
  }

</script>

<style>

</style>
