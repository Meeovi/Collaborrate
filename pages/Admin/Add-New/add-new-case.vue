<template>
  <div>
    <form @submit.prevent="addCase">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Case" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Case</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td><select name="state" id="state" v-model="state">
                          <option value="open">Open</option>
                          <option value="closed">Closed</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Type</td>
                      <td><select name="caseType" id="caseType" v-model="type">
                          <option value="public">Administration</option>
                          <option value="private">Product</option>
                          <option value="user">User</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Subject</td>
                      <td><input v-model="subject" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><textarea v-model="description" cols="40" rows="10"></textarea></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Resolution</td>
                      <td><textarea v-model="resolution" cols="40" rows="10"></textarea></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Assigned To</td>
                      <td><select id="country" v-model="assigned_to" name="template" class="form-category">
                          <option v-for="contacts in findManyCustomers" :key="contacts" :value="contacts">
                            {{ contacts.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Priority</td>
                      <td><select name="priority" id="priority" v-model="priority">
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Status</td>
                      <td><select name="status" id="status" v-model="status">
                          <option value="resolved">Resolved</option>
                          <option value="unresolved">Unresolved</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Account Name</td>
                      <td><input v-model="account_name" type="text" /></td>
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
  /* eslint-disable camelcase */
  import findManyCases from "~/graphql/queries/reports/cases";
  import findManyUsers from "~/graphql/queries/shop/countries"

  const ADD_CASES = gql `
    mutation ($status:String!,$state:String,$assigned_to:String,$description:String,$resolution:String!,$subject:String!,$type:String!,$priority:String!,$account_name:String){
    createOneCases(data: {status: $status, state: $state, assigned_to: $assigned_to, description: $description, resolution: $resolution, subject: $subject, type: $type, priority: $priority}) {
        assigned_to
        status
        state
        description
        resolution
        account_name
        type
        priority
        subject
  }
}`;

  export default {
    data() {
      return {
        assigned_to: [],
        status: " ",
        state: " ",
        description: " ",
        resolution: " ",
        account_name: " ",
        type: " ",
        priority: " ",
        subject: " ",
      }
    },
    methods: {
      async addCase() {
        const status = this.status;
        const description = this.description;
        const state = this.state;
        const assigned_to = this.assigned_to;
        const priority = this.priority;
        const account_name = this.account_name;
        const subject = this.subject;
        const type = this.type;
        const resolution = this.resolution;
        await this.$apollo.mutate({
          mutation: ADD_CASES,
          variables: {
            description,
            assigned_to,
            account_name,
            priority,
            resolution,
            state,
            status,
            subject,
            type,
          },
          update: (cache, {
            data: {
              insertCases
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCase = insertCases.returning;
              console.log(insertedCase)
              cache.writeQuery({
                query: findManyCases
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../reports/cases'
          })
        }).catch(err => console.log(err));
        this.status = ' ';
        this.description = ' ';
        this.state = ' ';
        this.assigned_to = ' ';
        this.priority = ' ';
        this.account_name = ' ';
        this.subject = ' ';
        this.type = ' ';
        this.resolution = ' ';
      },
    },
    apollo: {
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Case'
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
