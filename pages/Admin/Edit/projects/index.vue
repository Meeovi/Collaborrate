<template>
  <div>
    <form @submit.prevent="addProject()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <tr class="col-lg-6 navbar-brand">
            <td>
              <input v-model="name" type="text" required value="Project Name"
                style="width:500px !important; color: white; background-color: transparent;" />
            </td>
          </tr>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Project" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <!-- Tabs navs -->
                    <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                          aria-controls="ex1-tabs-1" aria-selected="true">Overview</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                          aria-controls="ex1-tabs-2" aria-selected="false">Tasks</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                          aria-controls="ex1-tabs-3" aria-selected="false">Board</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-4" data-mdb-toggle="tab" href="#ex1-tabs-4" role="tab"
                          aria-controls="ex1-tabs-4" aria-selected="false">Timeline</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-5" data-mdb-toggle="tab" href="#ex1-tabs-5" role="tab"
                          aria-controls="ex1-tabs-5" aria-selected="false">Calendar</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-6" data-mdb-toggle="tab" href="#ex1-tabs-6" role="tab"
                          aria-controls="ex1-tabs-6" aria-selected="false">Workflow</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-7" data-mdb-toggle="tab" href="#ex1-tabs-7" role="tab"
                          aria-controls="ex1-tabs-7" aria-selected="false">Goals</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-8" data-mdb-toggle="tab" href="#ex1-tabs-8" role="tab"
                          aria-controls="ex1-tabs-8" aria-selected="false">Reviews</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-9" data-mdb-toggle="tab" href="#ex1-tabs-9" role="tab"
                          aria-controls="ex1-tabs-9" aria-selected="false">Media</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="ex1-tab-10" data-mdb-toggle="tab" href="#ex1-tabs-10" role="tab"
                          aria-controls="ex1-tabs-10" aria-selected="false">Workspaces</a>
                      </li>
                    </ul>
                    <!-- Tabs navs -->

                    <!-- Tabs content -->
                    <div class="tab-content" id="ex1-content">
                      <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                        aria-labelledby="ex1-tab-1">
                        <overview />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                        <list />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                        <board />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                        <timeline />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-5" role="tabpanel" aria-labelledby="ex1-tab-5">
                        <calendar />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-6" role="tabpanel" aria-labelledby="ex1-tab-6">
                        <workflow />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-7" role="tabpanel" aria-labelledby="ex1-tab-7">
                        <goals />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-8" role="tabpanel" aria-labelledby="ex1-tab-8">
                        <messages />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-9" role="tabpanel" aria-labelledby="ex1-tab-9">
                        <files />
                      </div>
                      <div class="tab-pane fade" id="ex1-tabs-10" role="tabpanel" aria-labelledby="ex1-tab-10">
                        <workspaces />
                      </div>
                    </div>
                  </tbody>
                </table> <!-- End of Table -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </form><!-- End of Form -->
  </div>
</template>

<script>
  import overview from '~/components/projects/overview'
  import list from '~/components/projects/list'
  import board from '~/components/projects/board'
  import timeline from '~/components/projects/timeline'
  import calendar from '~/components/projects/calendar'
  import workflow from '~/components/projects/workflow'
  import goals from '~/components/projects/goals'
  import messages from '~/components/projects/messages'
  import files from '~/components/projects/files'
  import workspaces from '~/components/projects/workspaces'
  import settings from '~/components/projects/settings'

  export default {
    components: {
      overview,
      list,
      board,
      timeline,
      calendar,
      workflow,
      goals,
      messages,
      files,
      workspaces,
      settings
    },
    layout: 'dashboard',
    head: {
      title: 'Add A Project'
    }
  }

</script>

<style>

</style>
