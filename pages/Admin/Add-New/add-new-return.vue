<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Return" @click="addReturn" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Return</a>
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
                        <td style="text-align: right;">Returns Name</td>
                        <td>
                            <FormulateInput id="returnsName" v-model="name" type="returnsName" required />
                            <p for="name">Name of the return</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Time limit of validity</td>
                        <td>
                            <FormulateInput id="returnsName" v-model="validity" type="returnsName" required />
                            <p for="validity">How many days after the delivery date does the customer have to return a product?</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Returns prefix</td>
                        <td>
                            <FormulateInput id="returnsName" v-model="return_prefix" type="returnsName" required />
                            <p for="returnsPrefix">Prefix used for returns name (e.g. RE00001).</p>
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
import { returns } from "~/apollo/queries/sales/returns";

const ADD_RETURNS = gql`
    mutation ($name:String!,$validity:String!,$return_prefix:String){
    insert_returns(objects: {name: $name, validity: $validity, return_prefix: $return_prefix}) {
        affected_rows
        returning {
            name
            validity
            return_prefix
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        validity: " ",
        return_prefix: " ",
      }
  },
    head: {
        title: 'Add New Return'
    }, 
   /* eslint-disable camelcase */
  methods: {
      async addReturn() {
            const name = this.name;
            const validity = this.validity;
            const return_prefix = this.return_prefix;
            await this.$apollo.mutate({
                mutation: ADD_RETURNS,
                variables: {
                    name,
                    validity,
                    return_prefix,
                 },
        update: (cache, { data: { insertReturns }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedReturn = insertReturns.returning;
                            console.log(insertedReturn)
                            cache.writeQuery({
                                query: returns
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../sales/returns'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.validity = ' ';
                this.return_prefix = ' ';
            },
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
    width: 50%;
}

li {
    display: inline-block;
}
</style>