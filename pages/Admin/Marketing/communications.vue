<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-email"><input type="submit" class="btn btn-warning" value="Send Email" /></a>
        <!--<a class="navbar-brand" href="/admin/marketing/email/email-designer"><input type="submit" class="btn btn-warning" style="float:right; right: 15px; position: absolute;" value="Email Designer" /></a>-->
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Email</th>
            <th>Email Subject</th>
            <th>Email Created On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="emails in emails" :key="emails.id">
          <tr>
            <td>{{ emails.id }}</td>
            <td>{{ emails.cc }}</td>
            <td>{{ emails.subject }}</td>
            <td>{{ emails.created_at }}</td>
            <td><a :href="`/admin/edit/email/${emails.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  emails from '~/graphql/queries/marketing/emails'

export default {
  data() {
    return {
      emails: [],
    }
  },
  apollo: {
    emails: {
      prefetch: true,
      query: emails
    }
  }, 
    head: {
      title: 'Communications'
    }
  }

</script>
