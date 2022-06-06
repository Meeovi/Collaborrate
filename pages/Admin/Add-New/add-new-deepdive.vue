<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Deep Dive" @click="addDeepdive" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Deep Dive</a>
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
                      <td style="text-align: right;">Login</td>
                      <td>
                        <FormulateInput v-model="login" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Start Date</td>
                      <td>
                        <FormulateInput v-model="start_date" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">End Date</td>
                      <td>
                        <FormulateInput v-model="end_date" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Attendees</td>
                      <td>
                        <FormulateInput v-model="attendees" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <div class="form-check form-switch">
                          <client-only>
                            <vue-simplemde id="longDescription" v-model="content" />
                          </client-only>
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
    </FormulateForm>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import {
    deepdive
  } from "~/apollo/queries/reports/deepdive";

  const ADD_DEEPDIVE = gql `
    mutation ($login:String!,$whid:String!,$start_date:String!,$content:String!,$end_date:String!,$attendees:String){
    deepdive(objects: {login: $login, whid: $whid, start_date: $start_date, content: $content, end_date: $end_date, attendees: $attendees}) {
        affected_rows
        returning {
            login
            whid
            start_date
            content
            end_date
            attendees
    }
  }
}`;

  export default {
    data() {
      return {
        attendees: [],
        login: " ",
        whid: " ",
        content: " ",
        end_date: " ",
        start_date: " ",
      }
    },
    methods: {
      async addDeepdive() {
        const login = this.login;
        const content = this.content;
        const whid = this.whid;
        // eslint-disable-next-line camelcase
        const start_date = this.start_date;
        // eslint-disable-next-line camelcase
        const end_date = this.end_date;
        const attendees = this.attendees;
        await this.$apollo.mutate({
          mutation: ADD_DEEPDIVE,
          variables: {
            login,
            whid,
            start_date,
            content,
            end_date,
            attendees,
          },
          update: (cache, {
            data: {
              insertDeepdive
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedDeepdive = insertDeepdive.returning;
              console.log(insertedDeepdive)
              cache.writeQuery({
                query: deepdive
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../reports/deep-dive'
          })
        }).catch(err => console.log(err));
        this.login = ' ';
        this.whid = ' ';
        this.start_date = ' ';
        this.content = ' ';
        this.end_date = ' ';
        this.attendees = ' ';
      },

    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Deep Dive'
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
