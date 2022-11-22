<template>
  <div>
    <table class="table">
      <tbody class="row">
        <tr class="col-lg-6">
          <td>
            <label for="goal_collaborators">Goal Name</label><br>
            <input v-model="goal_name" type="url" value="Meta URL" />
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="goal_collaborators">Goal Collaborators</label><br>
            <select id="category" v-model="goal_collaborators">
              <option v-for="goal_collaborators in findManyUsers" :key="goal_collaborators.id"
                :value="goal_collaborators">
                {{ goal_collaborators.name }}</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="goal_collaborators">Goal Update method</label><br>
            <select id="goal_updatemethod" v-model="goal_updatemethod">
              <option value="email">Email</option>
              <option value="text">Text</option>
              <option value="call">Call</option>
              <option value="meeting">Meeting</option>
              <option value="any">Any Method</option>
            </select>
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="goal_collaborators">Goal Privacy</label><br>
            <input v-model="goal_privacy" type="text" value="Meta Title" required />
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="goal_collaborators">Goal Progress Source</label><br>
            <input v-model="goal_progress_source" type="text" value="What is your Goal Progress Source" />
          </td>
        </tr>
        <tr class="col-lg-6">
          <td>
            <label for="goal_collaborators">Goal Measurement</label><br>
            <input v-model="goal_measurement" value="Add a Goal Measurement">
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
