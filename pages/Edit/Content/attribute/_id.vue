<template>
  <div>
    <form enctype="multipart/form-data"  v-for="attribute in findManyAttributes" :key="attribute.id" @submit.prevent="updateAttribute(attribute)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAttribute(attribute)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Attribute" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Attribute</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
              <tbody>
                <tr>
                  <td style="text-align: right;">Attribute Name</td>
                  <td>
                    <input id="attributesLabel" :hint="attribute.default_label" type="text" required />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Attribute Code</td>
                  <td>
                    <input id="attributesCode" :hint="attribute.attribute_code" type="text"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Default Value</td>
                  <td>
                    <input id="attributesValue" :hint="attribute.attribute_value" type="text" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Name</td>
                  <td>
                    <input id="attributesValue" :hint="attribute.meta_name" type="text" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta URL</td>
                  <td>
                    <input id="attributesValue" :hint="attribute.meta_url" type="text"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Description</td>
                  <td>
                    <input id="attributesValue" :hint="attribute.meta_description" type="text"  />
                  </td>
                </tr>
              </tbody>
            </v-table>
        </div>
          <div class="col-lg-6">
            <v-table class="table">
                <thead>
                <tr>
                  <th><h5>Organization</h5></th>
                  <th scope="col">
                    <li>
                      <p>Define where this attribute should be used in AlternateCMS</p>
                    </li>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: right;">Attribute Class</td>
                  <td>
                    <select id="status" :hint="attribute.attribute_class" name="template" class="form-category">
                          <option value="productAttribute">Product Attribute</option>
                          <option value="contentAttribute">Content Attribute</option>
                        </select>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Storefront Properties</td>
                  <td>
                    <input id="attributesPublic" :hint="attribute.isPublic" type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Dashboard Properties</td>
                  <td>
                    <input id="attributesFilterOptions" :hint="attribute.filter_options" type="checkbox" />
                    <input id="attributesColumnOptions" :hint="attribute.column_options" type="checkbox" />
                  </td>
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
  import  gql from "graphql-tag";
  import findManyAttributes from "../../graphql/query/findManyAttributes";

  const DELETE_ATTRIBUTES = gql`
    mutation ($id: Int!){
    deleteOneProduct_attributes(where: {id: $id}){
        default_label
        allow_html_tags_storefront
        attribute_class
        attribute_code
        attribute_value
        column_options
        faceted_navigation
        filter_options
        id
        isPublic
        layered_navigation
        meta_description
        meta_name
        meta_url
        position
        prod_id
}`;

const UPDATE_ATTRIBUTE = gql`
  mutation updateOneAttributes($id: Int!){
  updateOneProduct_attributes(data: {default_label: $default_label, allow_html_tags_storefront: $allow_html_tags_storefront, attribute_class: $attribute_class, attribute_code: $attribute_code, attribute_value: $attribute_value, column_options: $column_options, faceted_navigation: $faceted_navigation, filter_options: $filter_options, id: $id, isPublic: $isPublic, layered_navigation: $layered_navigation, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, position: $position, prod_id: $prod_id}, (where: {id: $id})){
    default_label
        allow_html_tags_storefront
        attribute_class
        attribute_code
        attribute_value
        column_options
        faceted_navigation
        filter_options
        id
        isPublic
        layered_navigation
        meta_description
        meta_name
        meta_url
        position
        prod_id
  }
}
`;

export default {
    head: {
        name: 'Edit Attribute'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteAttribute(attribute){
    await this.$apollo.mutate({
        mutation: DELETE_ATTRIBUTES,
        variables: {
          id: attribute.id
        },
        refetchQueries: [
          {
            query: findManyAttributes
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/attributes'})
            }).catch(err => console.log(err));
    },
    async updateAttribute(attribute){
    await this.$apollo.mutate({
        mutation: UPDATE_ATTRIBUTE,
        variables: {
          id: attribute.id
        },
        refetchQueries: [
          {
            query: findManyAttributes
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    attributes: {
      query: attributes,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
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

.form-switch .form-check-input:checked[type=checkbox]:after, .form-switch .form-check-input:after {
    margin-top: -7px;
}
</style>