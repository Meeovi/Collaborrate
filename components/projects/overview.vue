<template>
  <div>
    <table class="table">
      <tbody class="row">
        <tr class="col-lg-6">
          <td>
            <label for="type">Project Type</label><br>
            <select id="type" v-model="type">
              <option value="team">Team Project</option>
              <option value="mega">Mega Project</option>
              <option value="individual">Individual Project</option>
              <option value="sprint">Sprint Planning</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="type">Project Company</label><br>
            <input v-model="company" type="text" value="Company" />
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="type">Project Priority</label><br>
            <select id="priority" v-model="priority">
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="high">Medium</option>
              <option value="low">Low</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="type">Project Status</label><br>
            <select id="doing" v-model="doing">
              <option value="not started">Not Started</option>
              <option value="in progress">In Progress</option>
              <option value="at risk">At Risk</option>
              <option value="on hold">On Hold</option>
              <option value="completed">Completed</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="type">Project Completion Status</label><br>
            <select id="done" v-model="done">
              <option value="not started">Completed</option>
              <option value="in progress">Cancelled</option>
              <option value="at risk">At Risk</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
                <td>
                  <label for="type">Project Visibility</label><br>
                  <select id="visibility" v-model="visibility">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="draft">Draft</option>
                  </select>
                </td>
              </tr>
        <tr>
          <label for="description">Project Summary</label><br>
          <td>
            <client-only>
              <Editor v-model="resource" />
            </client-only>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="assignee">Assigned To</label><br>
            <select id="productAttribute" v-model="assignee" name="template" class="form-attribute">
              <option v-for="assignee in product_assignee" :key="assignee.id" :value="assignee.name">
                {{ assignee.name }}</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="categories">Categories</label><br>
            <select id="category" v-model="categories">
              <option v-for="categories in findManyCategories" :key="categories.id" :value="categories.name">
                {{ categories.name }}</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="customers">Customers</label><br>
            <select id="category" v-model="customers">
              <option v-for="customers in findManyCustomers" :key="customers.id" :value="customers.name">
                {{ customers.name }}</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="zone">Zones</label><br>
            <select id="zone" v-model="zone">
              <option v-for="zone in findManyZones" :key="zone.id" :value="zone">
                {{ zone.name }}</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="tags">Tags</label><br>
            <select id="category" v-model="tags">
              <option v-for="tags in findManyTags" :key="tags.id" :value="tags.name">
                {{ tags.name }}</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="users">Assigned Staff</label><br>
            <select id="users" v-model="users">
              <option v-for="users in findManyUsers" :key="users.id" :value="users.username">
                {{ users.name }}</option>
            </select>
          </td>
        </tr>
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
