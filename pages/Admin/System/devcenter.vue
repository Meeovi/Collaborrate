<template>
  <div>
    <div class="row">
      <div class="col">
        <Header />
      </div>
    </div>
    <!-- Pills navs -->
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="ex3-tab-1" data-mdb-toggle="pill" href="#ex3-pills-1" role="tab"
          aria-controls="ex3-pills-1" aria-selected="true">Activity Logs</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex3-tab-2" data-mdb-toggle="pill" href="#ex3-pills-2" role="tab"
          aria-controls="ex3-pills-2" aria-selected="false">Merge Requests</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex3-tab-3" data-mdb-toggle="pill" href="#ex3-pills-3" role="tab"
          aria-controls="ex3-pills-3" aria-selected="false">Revisions History</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex3-tab-4" data-mdb-toggle="pill" href="#ex3-pills-4" role="tab"
          aria-controls="ex3-pills-4" aria-selected="false">Status</a>
      </li>
    </ul>
    <!-- Pills navs -->

    <!-- Pills content -->
    <div class="tab-content" id="ex2-content">
      <div class="tab-pane fade show active" id="ex3-pills-1" role="tabpanel" aria-labelledby="ex3-tab-1">
        <activity />
      </div>
      <div class="tab-pane fade" id="ex3-pills-2" role="tabpanel" aria-labelledby="ex3-tab-2">
        <merge />
      </div>
      <div class="tab-pane fade" id="ex3-pills-3" role="tabpanel" aria-labelledby="ex3-tab-3">
        <revisions />
      </div>
      <div class="tab-pane fade" id="ex3-pills-4" role="tabpanel" aria-labelledby="ex3-tab-4">
        <status />
      </div>
    </div>
    <!-- Pills content -->
  </div>
</template>

<script>
  import Header from '~/components/devcenter/header'
  import activity from '~/components/devcenter/activity-logs'
  import merge from '~/components/devcenter/merge-requests'
  import revisions from '~/components/devcenter/revisions'
  import status from '~/components/devcenter/status'

  export default {

    components: {
      Header,
      activity,
      merge,
      revisions,
      status
    },
    layout: 'dashboard',
    head: {
      title: 'Developer Center'
    }
  }

</script>
