<template>
    <div>
        <form @submit.prevent="addCustomergroup" >
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Social Group" /></a>
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
                <tbody>
                    <tr>
                        <td style="text-align: right;">Group Name</td>
                        <td><input v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Class</td>
                        <td><input type="text" v-model="tax_class" name="tax" /></td>
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
/* eslint-disable camelcase */
import  gql from "graphql-tag";
import customer_groups from "~/graphql/queries/customers/customerGroups";
// import  tax from '~/graphql/queries/shop/tax'

const ADD_GROUPS = gql`
    mutation ($name:String!,$tax_class:String!,$content:String!,$image:String!,$cover:String!){
    createOneCustomer_group(data: {name: $name, tax_class: $tax_class, content: $content, image: $image,cover: $cover}) {
        name
        tax_class
        content
        image
        cover
  }
}`;

export default {
    data() {
    return {
        tax_class: [],
        name: " ",
        content: " ",
        image: " ",
        cover: " ",
      }
  },
  methods: {
      async addGroup() {
            const name = this.name;
            const tax_class = this.tax_class;
            const content = this.content;
            const image = this.image;
            const cover = this.cover;
            await this.$apollo.mutate({
                mutation: ADD_GROUPS,
                variables: {
                    name,
                    tax_class,
                    content,
                    image,
                    cover
                },
        update: (cache, { data: { insertTax }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedTax = insertTax.returning;
                            console.log(insertedTax)
                            cache.writeQuery({
                                query: customer_groups
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
                this.content = ' ';
                this.image = ' ';
                this.cover = ' ';
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
        title: 'Add New Social Group'
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