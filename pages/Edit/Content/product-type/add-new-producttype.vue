<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addProduct_Type" >
        <div class="row">
          <div class="col-lg-6">
            <v-table class="table">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th scope="col" class="productTypesAddOptions">
                    <li>
                      <input type="submit" hint="Save" />
                    </li>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style="text-align: right;">Product Type Name</td>
                  <td>
                    <input id="productTypesLabel" v-model="type_name" type="text" required />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Product Types</td>
                  <td>
                    <select name="filterOptions" id="filterOptions" v-model="filter_options">
                          <option value="digital">Digital</option>
                          <option value="physical">Physical</option>
                          <option value="service">Service</option>
                          <option value="subscription">Subscription</option>
                        </select>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Taxes</td>
                  <td>
                    <input id="productTypesValue" v-model="taxes" type="text" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Name</td>
                  <td>
                    <input id="productTypesValue" v-model="meta_name" type="text" hint="Used in Search Engine Optimization" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta URL</td>
                  <td>
                    <input id="productTypesValue" v-model="meta_url" type="text" hint="Used in Search Engine Optimization"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Description</td>
                  <td>
                    <input id="productTypesValue" v-model="meta_description" type="text" hint="Used in Search Engine Optimization"  />
                  </td>
                </tr>
              </tbody>
            </v-table>
        </div>
          <div class="col-lg-6">
            <v-table class="table">
                <thead>
                <tr>
                  <th><h5>Shipping</h5></th>
                  <th scope="col">
                    <li>
                      <p>Define if this item is shippable in AlternateCMS</p>
                    </li>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: right;">Is this product shippable?</td>
                  <td>
                    <select name="isShippable" id="isShippable" v-model="isShippable">
                          <option value="shipped">Can Be Shipped</option>
                          <option value="cant shipped">Cannot Be Shipped</option>
                        </select>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable camelcase */
  import  gql from "graphql-tag";
  import 
    findManyProduct_types
  from "../../graphql/query/findManyProduct_types";

  const ADD_PRODUCT_TYPES = gql`
    mutation ($type_name:String!,$taxes:String!, $filter_options:String!, $id:String!, $isShippable:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $position:String!, $prod_id:String!,){
    createOneProduct_attribute(data: {type_name: $type_name, taxes: $taxes, filter_options: $filter_options, id: $id, isShippable: $isShippable, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, position: $position, prod_id: $prod_id,}) {
        type_name
        taxes
        filter_options
        id
        isShippable
        meta_description
        meta_name
        meta_url
        prod_id
  }
}`;

  export default {
    data() {
      return {
        type_name: " ",
        taxes: " ",
        filter_options: " ",
        id: " ",
        isShippable: " ",
        meta_description: " ",
        meta_name: " ",
        meta_url: " ",
        prod_id: " ",
      }
    },
    head: {
      title: 'Add New Product Type'
    },
    /* eslint-disable camelcase */
    methods: {
      async addProduct_Type() {
        const type_name = this.type_name;
        const taxes = this.taxes;
        const filter_options = this.filter_options;
        const id = this.id;
        const isShippable = this.isShippable;
        const meta_description = this.meta_description;
        const meta_name = this.meta_name;
        const meta_url = this.meta_url;
        const prod_id = this.prod_id;

        await this.$apollo.mutate({
          mutation: ADD_PRODUCT_TYPES,
          variables: {
            type_name,
            taxes,
            filter_options,
            id,
            isShippable,
            meta_description,
            meta_name,
            meta_url,
            prod_id,
          },
          update: (cache, {
            data: {
              insertProduct_Types
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedProduct_Type = insertProduct_Types.returning;
              console.log(insertedProduct_Type)
              cache.writeQuery({
                query: findManyProduct_types
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/product-types'
          })
        }).catch(err => console.log(err));
        this.type_name = ' ';
        this.taxes = ' ';
        this.filter_options = ' ';
        this.id = ' ';
        this.isShippable = ' ';
        this.meta_description = ' ';
        this.meta_name = ' ';
        this.meta_url = ' ';
        this.prod_id = ' ';
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

  .form-switch .form-check-input:checked[type=checkbox]:after,
  .form-switch .form-check-input:after {
    margin-top: -7px;
  }

</style>
