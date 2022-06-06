<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
        <div class="row">
          <div class="col-lg-6">
            <table class="table">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th scope="col" class="productTypesAddOptions">
                    <li>
                      <FormulateInput type="submit" label="Save" @click="addProduct_Type" />
                    </li>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style="text-align: right;">Product Type Name</td>
                  <td>
                    <FormulateInput id="productTypesLabel" v-model="type_name" type="text" required />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Product Types</td>
                  <td>
                    <FormulateInput id="productTypesCode" v-model="product_type" type="radio" :options="{first: 'Regular product type', second: 'Gift card product type'}" label="This is used internally. Make sure you don’t use spaces"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Taxes</td>
                  <td>
                    <FormulateInput id="productTypesValue" v-model="taxes" type="text" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Name</td>
                  <td>
                    <FormulateInput id="productTypesValue" v-model="meta_name" type="text" label="Used in Search Engine Optimization" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta URL</td>
                  <td>
                    <FormulateInput id="productTypesValue" v-model="meta_url" type="text" label="Used in Search Engine Optimization"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Description</td>
                  <td>
                    <FormulateInput id="productTypesValue" v-model="meta_description" type="text" label="Used in Search Engine Optimization"  />
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
          <div class="col-lg-6">
            <table class="table">
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
                    <FormulateInput id="productTypesShippable" v-model="isShippable" type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </FormulateForm>
  </div>
</template>

<script>
/* eslint-disable camelcase */
  import gql from "graphql-tag";
  import {
    product_types
  } from "~/apollo/queries/shop/product-type";

  const ADD_PRODUCT_TYPES = gql `
    mutation ($type_name:String!,$taxes:String!, $filter_options:String!, $id:String!, $isShippable:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $position:String!, $prod_id:String!,){
    insert_product_attribute(objects: {type_name: $type_name, taxes: $taxes, filter_options: $filter_options, id: $id, isShippable: $isShippable, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, position: $position, prod_id: $prod_id,}) {
        affected_rows
        returning {
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
                query: product_types
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/product-types'
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
