<template>
  <div>
    <form @submit.prevent="addChecklist">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Checklist" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Checklist</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody class="row">
                    <tr class="col-md-6">
                      <td style="text-align: right;">Checklist Type</td>
                      <td>
                        <select name="checklistType" id="checklistType" v-model="type">
                          <option value="checklist">Checklist</option>
                          <option value="roadmap">Roadmap</option>
                          <option value="board">Product Board</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Username</td>
                      <td>
                        <input v-model="username" type="textarea" />
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Regional Manager</td>
                      <td>
                        <input v-model="regional_manager" type="text" required />
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Manager</td>
                      <td>
                        <input v-model="manager" type="text" />
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Start Date</td>
                      <td>
                        <input v-model="start_date" type="datetime-local" />
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">End Date</td>
                      <td>
                        <input v-model="end_date" type="datetime-local" />
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Region</td>
                      <td>
                        <select id="region" v-model="region" name="template" class="form-category">
                          <option value="NA">North America</option>
                          <option value="SA">South America</option>
                          <option value="CA">Central America</option>
                          <option value="EU">Europe</option>
                          <option value="AS">Asia</option>
                          <option value="OA">Oceania</option>
                          <option value="AN">Antartica</option>
                          <option value="AF">Africa</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Location</td>
                      <td>
                        <input v-model="location" type="text" />
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="country" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-md-6">
                      <td style="text-align: right;">Media</td>
                      <td>
                        <FormulateInput v-model="media" type="image" name="headshot" label="Select an image to upload"
                          validation="mime:image/jpeg,image/png,image/gif" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea v-model="description" cols="80" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr style="min-height:auto;">
                      <td style="text-align: right;">Task</td>
                      <td>
                        <div class="form-wrapper">
                          <FormulateInput type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task"
                            validation="required">
                            <div class="task" style="padding-bottom:10px;">
                              <FormulateInput name="task" v-model="task" validation="required" />
                            </div>
                          </FormulateInput>
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
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import checklists from "~/graphql/query/checklists";
  import findManyCountries from '~/graphql/query/findManyCountries'
  /* eslint-disable camelcase */

  const ADD_CHECKLISTS = gql `
    mutation ($username:String!, $ticket:String!, $regional_manager:String!, $region:String!, $project:String!, $type:String!, $media:String!, $manager:String!, $location:String!, $description:String!, $country:String!, $task:String!){
    createOneChecklist(data: {username: $username, ticket: $ticket, regional_manager: $regional_manager, region: $region, project: $project, type: $type, media: $media, manager: $manager, location: $location, description: $description, country: $country, task: $task}) {
      country
      description
      id
      location
      manager
      media
      prod_id
      project
      region
      regional_manager
      task
      ticket
      trainings
      type
      username
  }
}`;

  export default {

    data() {
      return {
        region: " ",
        location: " ",
        description: " ",
        username: " ",
        regional_manager: " ",
        manager: " ",
        start_date: " ",
        end_date: " ",
        media: " ",
        ticket: " ",
        project: " ",
        type: " ",
        task: " ",
        country: " ",
      }
    },
    head: {
      title: 'Create A Checklist'
    },
    methods: {
      async addChecklist() {
        const region = this.region;
        const description = this.description;
        const location = this.location;
        const end_date = this.end_date;
        const username = this.username;
        const regional_manager = this.regional_manager;
        const manager = this.manager;
        const start_date = this.start_date;
        const media = this.media;
        const ticket = this.ticket;
        const project = this.project;
        const type = this.type;
        const country = this.country;
        const task = this.task;
        await this.$apollo.mutate({
          mutation: ADD_CHECKLISTS,
          variables: {
            username,
            ticket,
            regional_manager,
            region,
            start_date,
            end_date,
            project,
            type,
            media,
            manager,
            location,
            description,
            country,
            task
          },
          update: (cache, {
            data: {
              insertChecklists
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedChecklist = insertChecklists.returning;
              console.log(insertedChecklist)
              cache.writeQuery({
                query: checklists
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../reports/checklists'
          })
        }).catch(err => console.log(err));
        this.region = ' ';
        this.description = ' ';
        this.location = ' ';
        this.end_date = ' ';
        this.username = ' ';
        this.regional_manager = ' ';
        this.manager = ' ';
        this.start_date = ' ';
        this.media = ' ';
        this.ticket = ' ';
        this.project = ' ';
        this.type = ' ';
        this.country = ' ';
        this.task = ' ';
      },

    },
    apollo: {
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      }
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

</style>
