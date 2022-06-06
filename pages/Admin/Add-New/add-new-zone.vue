<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Zone" @click="addZone" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Zone</a>
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
                      <td style="text-align: right;">Code</td>
                      <td>
                        <FormulateInput v-model="code" type="text" required label="Example would be US, WORLD, etc." />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Type</td>
                      <td>
                        <FormulateInput v-model="type" type="text" required :options="{first: 'Country', second: 'Province', third: 'Zone'}" label="What type of zone is this?" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name</td>
                      <td>
                        <FormulateInput v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Scope</td>
                      <td>
                        <FormulateInput v-model="scope" type="select" label="What is this zone used for?"
                          :options="{first: 'Shipping', second: 'Tax'}" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="country" name="template" class="form-category">
                          <option v-for="country in country" :key="country" :value="country">{{ country.name }}</option>
                        </select>
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
  import zones from "~/apollo/queries/system/zones"
  import country from "~/apollo/queries/shop/countries"

  const ADD_ZONES = gql `
    mutation ($code:String!,$name:String!$type:String!,$scope:String!,$country:String!){
    insert_zones(objects: {code: $code, name: $name, type: $type, scope: $scope, country: $country}) {
        affected_rows
        returning {
            code
            name
            type
            scope
            country
    }
  }
}`;

  export default {

    data() {
      return {
        code: " ",
        name: " ",
        type: " ",
        scope: " ",
        country: [],
      }
    },
    head: {
      title: 'Add New Zone'
    },
    /* eslint-disable camelcase */

    methods: {
      async addZone() {
        const code = this.code;
        const name = this.name;
        const type = this.type;
        const scope = this.scope;
        const country = this.country;
        await this.$apollo.mutate({
          mutation: ADD_ZONES,
          variables: {
            code,
            name,
            type,
            scope,
            country,
          },
          update: (cache, {
            data: {
              insertZones
            }
          }) => {
            try {
              const insertedZone = insertZones.returning;
              console.log(insertedZone)
              cache.writeQuery({
                query: zones
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../system/zones'
          })
        }).catch(err => console.log(err));
        this.code = ' ';
        this.name = ' ';
        this.type = ' ';
        this.scope = ' ';
        this.country = ' ';
      },
    },
    apollo: {
      country: {
        prefetch: true,
        query: country
      }
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
