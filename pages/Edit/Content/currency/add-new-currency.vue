<template>
  <div>
    <form enctype="multipart/form-data"  @submit="addCurrency">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" hint="Delete"  @click="deleteNewsletter(newsletter)" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" hint="Save Currency"
              @submit.prevent="addCurrency" /></a>
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
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td><input v-model="code" type="text" hint="Example is AUD for Australia" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name</td>
                      <td><input v-model="name" type="text" hint="Example is Australian Dollar" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Region</td>
                      <td><select id="region" v-model="region" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                            {{ countries.name }}
                          </option>
                        </select></td>
                    </tr>
                  </tbody>
                </v-table>
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
  import findManyCurrencies from "../../graphql/query/findManyCurrencies"
  import findManyCountries from "../../graphql/query/findManyCountries"

  const ADD_CURRENCIES = gql `
    mutation ($code:String!,$name:String!$region:String!){
    createOneCurrencies(data: {code: $code, name: $name, region: $region}) {
        code
        name
        region
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
          update: (cache, {
            data: {
              insertCurrencies
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCurrency = insertCurrencies.returning;
              console.log(insertedCurrency)
              cache.writeQuery({
                query: findManyCurrencies
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
        this.code = ' ';
        this.name = ' ';
        this.region = ' ';
      },
    },
    apollo: {
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
