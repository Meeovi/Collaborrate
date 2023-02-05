<template>
  <div>
    <form enctype="multipart/form-data"  v-for="product_types in findManyProduct_types" :key="product_types" @submit.prevent="updateProduct_Type(product-types)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteProduct_Type(product-types)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Product" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Product</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
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
                              <input id="productTypesLabel" :hint="product_typestype_name" type="text" required />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Product Types</td>
                            <td>
                              <select name="filterOptions" id="filterOptions" :hint="product_typesfilter_options">
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
                              <input id="productTypesValue" :hint="product_typestaxes" type="text" />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Name</td>
                            <td>
                              <input id="productTypesValue" :hint="product_typesmeta_name" type="text" />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta URL</td>
                            <td>
                              <input id="productTypesValue" :hint="product_typesmeta_url" type="text" />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Description</td>
                            <td>
                              <input id="productTypesValue" :hint="product_typesmeta_description" type="text" />
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                    <div class="col-lg-6">
                      <v-table class="table">
                        <thead>
                          <tr>
                            <th>
                              <h5>Shipping</h5>
                            </th>
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
                              <select name="isShippable" id="isShippable" :hint="product_typesisShippable">
                                <option value="shipped">Can Be Shipped</option>
                                <option value="cant shipped">Cannot Be Shipped</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                  </div>
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
  /* eslint-disable camelcase */
  import gql from "graphql-tag";
  import findManyProduct_types from "../../graphql/query/findManyProduct_types";

  const UPDATE_PRODUCT_TYPE = gql`
    mutation ($type_name:String!,$taxes:String!, $filter_options:String!, $id:String!, $isShippable:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $position:String!, $prod_id:String!,){
    updateOneProduct_attribute(data: {type_name: $type_name, taxes: $taxes, filter_options: $filter_options, id: $id, isShippable: $isShippable, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, position: $position, prod_id: $prod_id,} where: {id: $id}) {
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

  const DELETE_PRODUCT_TYPE = gql`
  mutation updateOneproduct_types($id: Int){
  deleteOneProduct_types(where: {id: $id}){
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
`;

  export default {
    head: {
      name: 'Edit Product Type'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deleteProduct_Type(product_type) {
        await this.$apollo.mutate({
          mutation: DELETE_PRODUCT_TYPE,
          variables: {
            id: product_type.id
          },
          refetchQueries: [{
              query: findManyProduct_types
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../inventory/product-types'
          })
        }).catch(err => console.log(err));
      },
      async updateProduct_Type(product_type) {
        await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_TYPE,
          variables: {
            id: product_type.id
          },
          refetchQueries: [{
              query: findManyProduct_types
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyProduct_types: {
        query: findManyProduct_types,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
        }
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

  li {
    display: inline-block;
  }

  .form-switch .form-check-input:checked[type=checkbox]:after,
  .form-switch .form-check-input:after {
    margin-top: -7px;
  }

</style>
