<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Social Group" @click="addCustomergroup" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Social Group</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="customerGroupAddOptions">
                            <li><FormulateInput type="submit" @click="addGroup" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Group Name</td>
                        <td><FormulateInput v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Class</td>
                        <td><FormulateInput type="text" v-model="tax_class" name="tax" /></td>
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
/* eslint-disable camelcase */
import gql from "graphql-tag";
import { customer_group } from "~/apollo/queries/customers/customerGroups";
// import tax from '~/apollo/queries/shop/tax'

const ADD_GROUPS = gql`
    mutation ($name:String!,$tax_class:String){
    insert_customer_group(objects: {name: $name, tax_class: $tax_class}) {
        affected_rows
        returning {
            name
            tax_class
    }
  }
}`;

export default {
    data() {
    return {
        tax_class: [],
        name: " ",
      }
  },
  methods: {
      async addGroup() {
            const name = this.name;
            const tax_class = this.tax_class;
            await this.$apollo.mutate({
                mutation: ADD_GROUPS,
                variables: {
                    name,
                    tax_class,
                },
        update: (cache, { data: { insertTax }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedTax = insertTax.returning;
                            console.log(insertedTax)
                            cache.writeQuery({
                                query: customer_group
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../customers/customer-groups'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.tax_class = ' ';
            },
        },
    /* apollo: {
        tax: {
        prefetch: true,
        query: tax
        } 
    }, */
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Customer Group'
    }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>