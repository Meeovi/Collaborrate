<template>
  <div>
    <form @submit.prevent="addApiToken()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Api Token" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Api Token</a>
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
                        <label for="name">Token Name</label><br>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="token">Api Token</label><br>
                        <input v-model="token" type="text" name="Type" id="tokenField" required disabled /><br><br>
                        <input onclick="document.getElementById('tokenField').innerHTML = generateRandomToken(1000000000000,100000000000000000)" type="button" class="btn btn-primary" value="Generate API Token" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="token_type">Token Type</label><br>
                        <select name="tokenType" id="tokenType" v-model="token_type">
                          <option value="Api">Api Token</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="description">Api Token Description</label><br>
                        <textarea id="description" v-model="description" cols="50" rows="10"></textarea>
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
  import apitokens from "~/graphql/query/apitokens";

  require('../../../../packages/core/generators/tokenGenerator')

  const ADD_TOKENS = gql`
      mutation ($name: String!, $description: String!, $token_type: String!, $token: String!) {
      createOneApitokens(data: {name: $name, description: $description, token_type: $token_type, token: $token}) {
          token
          name
          token_type
          description
    }
  }`;

  export default {
    data() {
      return {
        token: [],
        name: " ",
        token_type: " ",
        description: " ",
      }
    },
    head: {
      title: 'Add New Token'
    },
    methods: {
      async addApiToken() {
        const name = this.name;
        const description = this.description;
        const token_type = this.token_type;
        const token = this.token;
        await this.$apollo.mutate({
          mutation: ADD_TOKENS,
          variables: {
            name,
            token_type,
            token,
            description,
          },
          update: (cache, {
            data: {
              insertTokens,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedApiToken = insertTokens.returning;
              console.log(insertedApiToken)
              cache.writeQuery({
                query: apitokens
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
        this.token_type = ' ';
        this.token = ' ';
        this.description = ' ';
      },
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
