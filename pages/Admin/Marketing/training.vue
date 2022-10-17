<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-training"><input type="submit" class="btn btn-warning" value="Add New Training"></a>
        
      </div>
    </nav>
    <br>
    <!-- Tabs navs -->
    <ul class="nav nav-pills mb-3" id="ex-with-icons" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="ex-with-icons-tab-1" data-mdb-toggle="tab" href="#ex-with-icons-tabs-1"
          role="tab" aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i
            class="fas fa-graduation-cap fa-fw me-2"></i>Training</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex-with-icons-tab-2" data-mdb-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
          aria-controls="ex-with-icons-tabs-2" aria-selected="false"><i
            class="fas fa-chalkboard fa-fw me-2"></i>Courses</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex-with-icons-tab-3" data-mdb-toggle="tab" href="#ex-with-icons-tabs-3" role="tab"
          aria-controls="ex-with-icons-tabs-3" aria-selected="false"><i class="fas fa-user-graduate fa-fw me-2"></i>Exams</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex-with-icons-tab-4" data-mdb-toggle="tab" href="#ex-with-icons-tabs-4" role="tab"
          aria-controls="ex-with-icons-tabs-4" aria-selected="false"><i class="fas fa-user-edit fa-fw me-2"></i>Notes</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex-with-icons-tab-5" data-mdb-toggle="tab" href="#ex-with-icons-tabs-5" role="tab"
          aria-controls="ex-with-icons-tabs-5" aria-selected="false"><i class="fas fa-book-open fa-fw me-2"></i>Materials</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="ex-with-icons-tab-6" data-mdb-toggle="tab" href="#ex-with-icons-tabs-6" role="tab"
          aria-controls="ex-with-icons-tabs-6" aria-selected="false"><i class="fas fa-chalkboard-teacher fa-fw me-2"></i>Schools</a>
      </li>
    </ul>
    <!-- Tabs navs -->

    <!-- Tabs content -->
    <div class="tab-content" id="ex-with-icons-content">
      <div class="tab-pane fade show active" id="ex-with-icons-tabs-1" role="tabpanel"
        aria-labelledby="ex-with-icons-tab-1">
        <all />
      </div>
      <div class="tab-pane fade" id="ex-with-icons-tabs-2" role="tabpanel" aria-labelledby="ex-with-icons-tab-2">
        <courses />
      </div>
      <div class="tab-pane fade" id="ex-with-icons-tabs-3" role="tabpanel" aria-labelledby="ex-with-icons-tab-3">
        <exams />
      </div>
      <div class="tab-pane fade" id="ex-with-icons-tabs-4" role="tabpanel" aria-labelledby="ex-with-icons-tab-4">
        <notes />
      </div>
      <div class="tab-pane fade" id="ex-with-icons-tabs-5" role="tabpanel" aria-labelledby="ex-with-icons-tab-5">
        <materials />
      </div>
      <div class="tab-pane fade" id="ex-with-icons-tabs-6" role="tabpanel" aria-labelledby="ex-with-icons-tab-6">
        <schools />
      </div>
    </div>
    <!-- Tabs content -->
  </div>
</template>

<script>
import all from '~/pages/Admin/Marketing/LMS/all'
import courses from '~/pages/Admin/Marketing/LMS/courses'
import digitalboard from '~/pages/Admin/Marketing/LMS/digitalboard'
import materials from '~/pages/Admin/Marketing/LMS/materials'
import notes from '~/pages/Admin/Marketing/LMS/notes'
import schools from '~/pages/Admin/Marketing/LMS/schools'

export default {
    components: {all, courses, digitalboard, materials, notes, schools},
    layout: 'dashboard',
    head: {
      title: 'Training'
    }
  }

</script>
