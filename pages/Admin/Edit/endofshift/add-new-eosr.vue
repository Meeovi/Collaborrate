<template>
    <div>
      <form @submit.prevent="addEosr">
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">
              <button type="reset" class="btn btn-warning">Reset</button></a>
            <a class="navbar-brand">
              <input type="submit" class="btn btn-warning" value="Save End of Shift Report" /></a>
          </div>
        </nav>
        <br>
        <div class="row">
          <div class="col-3">
            <!-- Tab navs -->
            <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
              <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
                aria-controls="v-tabs-home" aria-selected="true">Create A New End of Shift Report</a>
            </div>
            <!-- Tab navs -->
          </div>
  
          <div class="col-9">
            <div id="v-tabs-tabContent" class="tab-scope">
              <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
                <div class="table table-responsive">
                  <table class="table">
                    <tbody class="row">
                      <tr>
                        <td style="text-align: right;">End of Shift Report Type</td>
                        <td>
                          <select name="checklistType" id="checklistType" v-model="type">
                            <option value="checklist">Checklist</option>
                            <option value="roadmap">Roadmap</option>
                            <option value="board">Product Board</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Login</td>
                        <td>
                          <input v-model="login" type="textarea" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Tickets</td>
                        <td>
                          <select id="tickets" v-model="tickets" name="template" class="form-category">
                            <option v-for="tickets in ticketings" :key="tickets" :value="tickets">
                              {{ tickets.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Change Management</td>
                        <td>
                          <select id="mcms" v-model="mcms" name="template" class="form-category">
                            <option v-for="mcms in findManyProjects" :key="mcms" :value="mcms">
                              {{ mcms.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Location</td>
                        <td>
                          <input v-model="whid" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Projects</td>
                        <td>
                          <select id="projects" v-model="projects" name="template" class="form-category">
                            <option v-for="projects in findManyProjects" :key="projects" :value="projects">
                              {{ projects.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Media</td>
                        <td>
                          <FormulateInput v-model="media" type="image" name="headshot" label="Select an image to upload"
                            validation="mime:image/jpeg,image/png,image/gif" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Notes</td>
                        <td>
                        <client-only><Editor v-model="content" /></client-only>
                        </td>
                      </tr>
                      <tr style="min-height:auto;">
                        <td style="text-align: right;">Note for Next Shift</td>
                        <td>
                          <div class="form-wrapper">
                            <FormulateInput type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task"
                              validation="required">
                              <div class="nextShift" style="padding-bottom:10px;">
                                <FormulateInput name="nextShift" v-model="next_shift" validation="required" />
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
    import endofshifts from "~/graphql/query/endofshifts";
    import findManyProjects from '~/graphql/query/findManyProjects'
    import ticketings from '~/graphql/query/ticketings'
    /* eslint-disable camelcase */
  
    const ADD_EOSR = gql`
      mutation ($login:String!, $tickets:String!, $project:String!, $type:String!, $media:String!, $whid:String!, $content:String!, $projects:String!, $nextShift:String!){
      createOneEndofshift(data: {login: $login, tickets: $tickets, type: $type, media: $media, manager: $manager, whid: $whid, content: $content, projects: $projects, nextShift: $nextShift}) {
        projects
        content
        id
        whid
        media
        project
        nextShift
        tickets
        type
        login
    }
  }`;
  
    export default {
  
      data() {
        return {
          whid: " ",
          content: " ",
          login: " ",
          media: " ",
          tickets: " ",
          type: " ",
          nextShift: " ",
          projects: " ",
        }
      },
      head: {
        title: 'Create A End of Shift Report'
      },
      methods: {
        async addEosr() {
          const content = this.content;
          const whid = this.whid;
          const login = this.login;
          const media = this.media;
          const tickets = this.tickets;
          const type = this.type;
          const projects = this.projects;
          const nextShift = this.nextShift;
          await this.$apollo.mutate({
            mutation: ADD_EOSR,
            variables: {
              login,
              tickets,
              type,
              media,
              whid,
              content,
              projects,
              nextShift
            },
            update: (cache, {
              data: {
                insertEosr
              }
            }) => {
              // Read data from cache for this query
              try {
                const insertedEosr = insertEosr.returning;
                console.log(insertedEosr)
                cache.writeQuery({
                  query: endofshifts
                })
              } catch (err) {
                console.error(err)
              }
            }
          }).then(() => {
            this.$router.push({
              path: '../../reports/eosr'
            })
          }).catch(err => console.log(err));
          this.content = ' ';
          this.whid = ' ';
          this.login = ' ';
          this.media = ' ';
          this.tickets = ' ';
          this.type = ' ';
          this.projects = ' ';
          this.nextShift = ' ';
        },
  
      },
      apollo: {
        findManyProjects: {
          prefetch: true,
          query: findManyProjects
        },
        ticketings: {
          prefetch: true,
          query: ticketings
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
  