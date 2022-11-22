<template>
  <div>
    <table class="table">
      <tbody class="row">
        <tr>
          <th>Last updated on  </th>
        </tr>
        <div class="form-wrapper col-md-4">
          <FormulateInput type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task" validation="required" class="col-md-4">
              <div class="task" style="padding-bottom:10px;">
                <!--Tasks-->
                <div class="row">
                  <tr class="col">
                    <td>
                      <FormulateInput name="task" v-model="tasks" validation="required" />
                    </td>
                  </tr><br><br>
                  <!--Assignee-->
                  <tr class="col">
                    <td><select id="users" v-model="users">
                        <option v-for="users in findManyUsers" :key="users.id" :value="users">
                          {{ users.name }}</option>
                      </select></td>
                  </tr><br><br>
                  <!--Due Date-->
                  <tr class="col">
                    <td>
                      <input v-model="end_date" type="datetime-local" required value="End Date" />
                    </td>
                  </tr><br><br>
                  <!--Related Link-->
                  <tr class="col">
                    <td>
                      <input v-model="websites" type="text" value="Websites" required />
                    </td>
                  </tr><br><br>
                </div>
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
