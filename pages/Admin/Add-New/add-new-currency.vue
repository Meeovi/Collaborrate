<template>
  <div>
    <form method="POST" enctype="multipart/form-data" @submit="addCurrency">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="button" class="btn btn-warning" value="Save Currency" @click="addCurrency" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Currency</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-excerpt">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td><input v-model="code" type="text" value="Example is AUD for Australia" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name</td>
                      <td><input v-model="name" type="text" value="Example is Australian Dollar" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Region</td>
                      <td><input v-model="region" type="text" value="What is the country of this currency?" /></td>
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
import  gql from "graphql-tag";
import  currencies from "~/apollo/queries/system/currencies"

const ADD_CURRENCIES = gql`
    mutation ($code:String!,$name:String!$region:String!){
    insert_currencies(objects: {code: $code, name: $name, region: $region}) {
        affected_rows
        returning {
            code
            name
            region
    }
  }
}`;

export default {

    data() {
    return {
            code: " ",
            name: " ",
            region: " ",
        }
  },
    head: {
        title: 'Add New Currency'
    }, 
/* eslint-disable camelcase */
   
  methods: {
      async addCurrency() {
            const code = this.code;
            const name = this.name;
            const region = this.region;
            await this.$apollo.mutate({
                mutation: ADD_CURRENCIES,
                variables: {
                    code,
                    name,
                    region,
                 },
        update: (cache, { data: { insertCurrencies }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCurrency = insertCurrencies.returning;
                            console.log(insertedCurrency)
                            cache.writeQuery({
                                query: currencies
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../system/general-settings'})
                }).catch(err => console.log(err));
                    this.code = ' ';
                    this.name = ' ';
                    this.region = ' ';
                }, 
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
