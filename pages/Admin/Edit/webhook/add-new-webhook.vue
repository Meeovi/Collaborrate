<template>
    <div>
      <form @submit.prevent="addWebhook()">
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">
              <button type="reset" class="btn btn-warning">Reset</button></a>
            <a class="navbar-brand">
              <input type="submit" class="btn btn-warning" value="Save Webhook" /></a>
          </div>
        </nav>
        <br>
        <div class="row">
          <div class="col-3">
            <!-- Tab navs -->
            <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
              <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
                aria-controls="v-tabs-home" aria-selected="true">Create A New Webhook</a>
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
                        <td style="text-align: right;">Webhook Name</td>
                        <td><input id="webhooksName" v-model="name" type="webhooksName" required /></td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Webhook URL</td>
                        <td><input id="webhooksURL" v-model="url" type="webhooksUrl" required /></td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Webhook Headers</td>
                        <td><input id="webhooksURL" v-model="url" type="webhooksUrl" required /></td>
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
    import findManyWebhooks from "~/graphql/query/findManyWebhooks";
  
    const ADD_WEBHOOKS = gql`
      mutation ($name:String!,$url:String){
      createOneWebhooks(data: {name: $name, url: $url}) {
          name
          url
    }
  }`;
  
    export default {
      data() {
        return {
          name: " ",
          url: " ",
        }
      },
  
      methods: {
        async addWebhook() {
          const name = this.name;
          const url = this.url;
          await this.$apollo.mutate({
            mutation: ADD_WEBHOOKS,
            variables: {
              name,
              url,
            },
            update: (cache, {
              data: {
                insertWebhooks
              }
            }) => {
              // Read data from cache for this query
              try {
                const insertedWebhook = insertWebhooks.returning;
                console.log(insertedWebhook)
                cache.writeQuery({
                  query: findManyWebhooks
                })
              } catch (err) {
                console.error(err)
              }
            }
          }).then(() => {
            this.$router.push({
              path: '../../system/general-settings'
            })
          }).catch(err => console.log(err));
          this.name = ' ';
          this.url = ' ';
        },
      },
      head: {
        title: 'Add New Webhook'
      },
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
  