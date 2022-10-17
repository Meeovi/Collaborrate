<template>
  <div>
    <div class="row">
      <div class="col-md-11">
        <p>API Endpoint</p>
      </div>
      <div class="col-md-1">
        <a href="https://docs.alternatecms.com">View Docs <i class="fas fa-file-alt"></i></a>
      </div>
      <div class="col">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-cloud"></i></span>
          <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" disabled />
        </div>
      </div>
    </div>

    <table class="table align-middle mb-0 bg-white">
      <thead class="bg-light">
        <tr>
          <th>Date</th>
          <th>User</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="fw-normal mb-1">Software engineer</p>
            <p class="text-muted mb-0">IT department</p>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                class="rounded-circle" />
              <div class="ms-3">
                <p class="fw-bold mb-1">John Doe</p>
                <p class="text-muted mb-0">john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>Published</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {

  }

</script>
