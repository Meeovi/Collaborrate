<template>
  <div>
    <form  v-for="project in findManyProjects" :key="project.id" @submit.prevent="updateProject(project)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-customers">
            <button type="reset" class="btn btn-warning" @click="deleteProject(project)">Delete</button></a>
          <a class="navbar-customers">
            <input type="submit" class="btn btn-warning" value="Save Project" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Project</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody class="row">
                    <tr class="col-lg-6">
                      <td>
                        <label for="type">Project Type</label><br>
                        <select id="type" :value="project.type">
                          <option value="team">Team Project</option>
                          <option value="mega">Mega Project</option>
                          <option value="individual">Individual Project</option>
                          <option value="sprint">Sprint Planning</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="assignee">Assigned To</label><br>
                        <select id="productAttribute" :value="project.assignee" name="template" class="form-attribute">
                          <option v-for="assignee in product_assignee" :key="assignee.id" :value="product_attribute">
                            {{ assignee.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.start_date" type="datetime-local" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.end_date" type="datetime-local" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.goal_timeperiod" type="datetime-local" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.name" type="text" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="priority" :value="project.priority">
                          <option value="critical">Critical</option>
                          <option value="high">High</option>
                          <option value="high">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="doing" :value="project.doing">
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
                        <select id="done" :value="project.done">
                          <option value="not started">Completed</option>
                          <option value="in progress">Cancelled</option>
                          <option value="at risk">At Risk</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.ticket_id" name="ticket" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.project_manager" type="number" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="stockStatus" :value="project.considerworkingdays">
                          <option value="days">Can Work Days</option>
                          <option value="nights">Can Work Nights</option>
                          <option value="daysandnights">Days and Nights</option>
                          <option value="weekends">Can Work Weekends</option>
                          <option value="holidays">Can Work Holidays</option>
                          <option value="selectdays">Can Work Select Days</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.section_rule" type="number" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.company" type="number" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="visibility" :value="project.visibility">
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          <option value="draft">Draft</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="categories">Categories</label><br>
                        <select id="category" :value="project.categories">
                          <option v-for="categories in findManyCategories" :key="categories.id" :value="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="customers">Customers</label><br>
                        <select id="category" :value="project.customers">
                          <option v-for="customers in findManyCustomers" :key="customers.id" :value="customers">
                            {{ customers.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="goal_collaborators">Goal Collaborators</label><br>
                        <select id="category" :value="project.goal_collaborators">
                          <option v-for="goal_collaborators in findManyUsers" :key="goal_collaborators.id"
                            :value="goal_collaborators">
                            {{ goal_collaborators.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tickets">Tickets</label><br>
                        <select id="category" :value="project.ticketing">
                          <option v-for="tickets in ticketings" :key="tickets.id" :value="tickets">
                            {{ tickets.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tags">Tags</label><br>
                        <select id="category" :value="project.tags">
                          <option v-for="tags in findManyTags" :key="tags.id" :value="tags">
                            {{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="workspaces">Workspace</label><br>
                        <select id="category" :value="project.workspaces">
                          <option v-for="workspaces in findManyWorkspaces" :key="workspaces.id" :value="workspaces">
                            {{ workspaces.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="users">Assigned Staff</label><br>
                        <select id="users" :value="project.users">
                          <option v-for="users in findManyUsers" :key="users.id" :value="users">
                            {{ users.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="zone">Zones</label><br>
                        <select id="zone" :value="project.zone">
                          <option v-for="zone in findManyZones" :key="zone.id" :value="zone">
                            {{ zone.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="goal_updatemethod" :value="project.goal_updatemethod">
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
                        <input :value="project.goal_privacy" type="text"  required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.goal_progress_source" type="text"  />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.goal_measurement">
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :value="project.goal_name" type="url" />
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="product">Related Products</label><br>
                        <select id="product" :value="project.product">
                          <option v-for="product in findManyProducts" :key="product.id" :value="product">
                            {{ product.name }}</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Content
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Task</td>
                              <td>
                                <div class="form-wrapper">
                                  <FormulateInput type="group" name="taskGroup" :repeatable="true"
                                    add-label="+ Add Task" validation="required">
                                    <div class="task" style="padding-bottom:10px;">
                                      <FormulateInput name="task" :value="project.tasks" validation="required" />
                                    </div>
                                  </FormulateInput>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <textarea :value="project.resource" cols="50" rows="10"></textarea>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingFive" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Upload Product File(s)
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <td>
                        <div class="file-upload-wrapper">
                          <input type="file" id="input-file-now" class="file-upload-input"
                            data-mdb-file-upload="file-upload" />
                        </div>
                      </td>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </form>
                    <div>
                      <div class="product-footer">
                        <li><a href="/admin/edit/add-new-workspace" target="_blank">
                            <input type="submit" class="btn btn-warning" value="Add New Workspace" /></a></li>
                        <li><a href="/admin/edit/add-new-ticket" target="_blank">
                            <input type="submit" class="btn btn-warning" value="Edit Ticket" /></a></li>
                        <li><a href="/admin/edit/add-new-training" target="_blank">
                            <input type="submit" class="btn btn-warning" value="Add New Training" /></a></li>
                      </div>
                    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import findManyProducts from "~/graphql/query/findManyProducts"
  import findManyProjects from "~/graphql/query/findManyProjects"
  import findManyCategories from "~/graphql/query/findManyCategories"
  import findManyWorkspaces from "~/graphql/query/findManyWorkspaces"
  import findManyCustomers from "~/graphql/query/findManyCustomers"
  import ticketings from "~/graphql/query/ticketings"
  import findManyUsers from "~/graphql/query/findManyUsers"
  import findManyTags from "~/graphql/query/findManyTags"
  import findManyZones from "~/graphql/query/findManyZones"

  const UPDATE_PROJECT = gql`
      mutation ($assignee: String!, $customers: String!, $categories: String!, $tasks: String!, $users: String!, $doing: String!, $workspaces: String!, $created_at: String!, $done: String!, $end_date: String!, $file: String!, $format: String!, $height: String!, $id: String!, $image: String!, $goal_collaborators: String!, $goal_measurement: String!, $ticketing: String!, $name: String!, $goal_name: String!, $goal_privacy: String!, $goal_progress_source: String!, $goal_timeperiod: String!, $goal_updatemethod: String!, $priority: String!, $product: String!, $project_manager: String!, $resource: String!, $section_rule: String!, $staff_id: String!, $start_date: String!, $task_id: String!, $status: String!, $ticket_id: String!, $tags: String!, $considerworkingdays: String!, $method: String!, $type: String!, $team: String!, $visibility: String!, $websites: String!, $company: String!, $zone: String!){
      updateOneProjects(data: {assignee: $assignee, customers: $customers, categories: $categories, tasks: $tasks, users: $users, doing: $doing, workspaces: $workspaces, created_at: $created_at, done: $done, end_date: $end_date, file: $file, format: $format, height: $height, id: $id, image: $image, goal_collaborators: $goal_collaborators, goal_measurement: $goal_measurement, ticketing: $ticketing, name: $name, goal_name: $goal_name, goal_privacy: $goal_privacy, goal_progress_source: $goal_progress_source, goal_timeperiod: $goal_timeperiod, goal_updatemethod: $goal_updatemethod, priority: $priority, product: $product, project_manager: $project_manager, resource: $resource, section_rule: $section_rule, staff_id: $staff_id, start_date: $start_date, task_id: $task_id, status: $status, ticket_id: $ticket_id, tags: $tags, considerworkingdays: $considerworkingdays, method: $method, type: $type, team: $team, visibility: $visibility, websites: $websites, company: $company, zone: $zone} where: {id: $id}) {
          assignee
          customers
          categories
          tasks
          users
          doing
          workspaces
          created_at
          done
          end_date
          file
          format
          height
          id
          image
          goal_collaborators
          goal_measurement
          ticketing
          name
          goal_name
          goal_privacy
          goal_progress_source
          goal_timeperiod
          goal_updatemethod
          priority
          product
          project_manager
          resource
          section_rule
          staff_id
          start_date
          task_id
          status
          ticket_id
          tags
          considerworkingdays
          method
          type
          team
          visibility
          websites
          company
          zone
    }
  }`;

const DELETE_PROJECT = gql`
      mutation (id: Int){
      deleteOneProjects(where: {id: $id}) {
          assignee
          customers
          categories
          tasks
          users
          doing
          workspaces
          created_at
          done
          end_date
          file
          format
          height
          id
          image
          goal_collaborators
          goal_measurement
          ticketing
          name
          goal_name
          goal_privacy
          goal_progress_source
          goal_timeperiod
          goal_updatemethod
          priority
          product
          project_manager
          resource
          section_rule
          staff_id
          start_date
          task_id
          status
          ticket_id
          tags
          considerworkingdays
          method
          type
          team
          visibility
          websites
          company
          zone
    }
  }`;

export default {
    head: {
      name: 'Edit Project'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deleteProject(project) {
        await this.$apollo.mutate({
          mutation: DELETE_PROJECT,
          variables: {
            id: project.id
          },
          refetchQueries: [{
              query: findManyProjects
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../content/projects'
          })
        }).catch(err => console.log(err));
      },
      async updateProject(project) {
        await this.$apollo.mutate({
          mutation: UPDATE_PROJECT,
          variables: {
            id: project.id
          },
          refetchQueries: [{
              query: findManyProjects
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyWorkspaces: {
        prefetch: true,
        query: findManyWorkspaces
      },
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
      ticketings: {
        prefetch: true,
        query: ticketings
      },
      findManyTags: {
        prefetch: true,
        query: findManyTags
      },
      findManyZones: {
        prefetch: true,
        query: findManyZones
      },
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
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

</style>