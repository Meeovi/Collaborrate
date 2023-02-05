<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addAttribute()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Create A New Attribute</a>
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
                    <input id="attributesLabel" v-model="default_label" type="text" required />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Attribute Code</td>
                  <td>
                    <input id="attributesCode" v-model="attribute_code" type="text" hint="This is used internally. Make sure you don’t use spaces"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Default Value</td>
                  <td>
                    <input id="attributesValue" v-model="attribute_value" type="text" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Name</td>
                  <td>
                    <input id="attributesValue" v-model="meta_name" type="text" hint="Used in Search Engine Optimization" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta URL</td>
                  <td>
                    <input id="attributesValue" v-model="meta_url" type="text" hint="Used in Search Engine Optimization"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Description</td>
                  <td>
                    <input id="attributesValue" v-model="meta_description" type="text" hint="Used in Search Engine Optimization"  />
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
                    <select id="status" v-model="attribute_class" name="template" class="form-category">
                          <option value="productAttribute">Product Attribute</option>
                          <option value="contentAttribute">Content Attribute</option>
                        </select>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Storefront Properties</td>
                  <td>
                    <input id="attributesFacetedNavigation" v-model="faceted_navigation" type="checkbox" hint="Use in faceted Navigation" />
                    <input id="attributesPosition" v-model="position" type="text" hint="Position in faceted navigation" />
                    <input id="attributesPublic" v-model="isPublic" type="checkbox" hint="Check to make public" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Dashboard Properties</td>
                  <td>
                    <input id="attributesFilterOptions" v-model="filter_options" type="checkbox" hint="Use in filtering" />
                    <input id="attributesColumnOptions" v-model="column_options" type="checkbox" hint="Add to Column Options" />
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

  const ADD_ATTRIBUTES = gql`
    mutation ($default_label:String!,$allow_html_tags_storefront:String!, $attribute_class:String!, $attribute_code:String!, $attribute_value:String!, $column_options:String!, $faceted_navigation:String!, $filter_options:String!, $id:Int!, $isPublic:String!, $layered_navigation:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $position:String!, $prod_id:String!,){
    createOneAttribute(data: {default_label: $default_label, allow_html_tags_storefront: $allow_html_tags_storefront, attribute_class: $attribute_class, attribute_code: $attribute_code, attribute_value: $attribute_value, column_options: $column_options, faceted_navigation: $faceted_navigation, filter_options: $filter_options, id: $id, isPublic: $isPublic, layered_navigation: $layered_navigation, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, position: $position, prod_id: $prod_id,}) {
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
}`;

  export default {
    data() {
      return {
        default_label: " ",
        allow_html_tags_storefront: " ",
        attribute_class: " ",
        attribute_code: " ",
        attribute_value: " ",
        column_options: " ",
        faceted_navigation: " ",
        filter_options: " ",
        id: " ",
        isPublic: " ",
        layered_navigation: " ",
        meta_description: " ",
        meta_name: " ",
        meta_url: " ",
        position: " ",
        prod_id: " ",
      }
    },
    head: {
      title: 'Add New Attribute'
    },
    /* eslint-disable camelcase */
    methods: {
      async addAttribute() {
        const default_label = this.default_label;
        const attribute_code = this.attribute_code;
        const allow_html_tags_storefront = this.allow_html_tags_storefront;
        const attribute_class = this.attribute_class;
        const attribute_value = this.attribute_value;
        const column_options = this.column_options;
        const faceted_navigation = this.faceted_navigation;
        const filter_options = this.filter_options;
        const id = this.id;
        const isPublic = this.isPublic;
        const layered_navigation = this.layered_navigation;
        const meta_description = this.meta_description;
        const meta_name = this.meta_name;
        const meta_url = this.meta_url;
        const position = this.position;
        const prod_id = this.prod_id;

        await this.$apollo.mutate({
          mutation: ADD_ATTRIBUTES,
          variables: {
            default_label,
            allow_html_tags_storefront,
            attribute_class,
            attribute_code,
            attribute_value,
            column_options,
            faceted_navigation,
            filter_options,
            id,
            isPublic,
            layered_navigation,
            meta_description,
            meta_name,
            meta_url,
            position,
            prod_id,
          },
          update: (cache, {
            data: {
              insertAttributes
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedAttribute = insertAttributes.returning;
              console.log(insertedAttribute)
              cache.writeQuery({
                query: findManyAttributes
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/attributes'
          })
        }).catch(err => console.log(err));
        this.default_label = ' ';
        this.allow_html_tags_storefront = ' ';
        this.attribute_class = ' ';
        this.attribute_code = ' ';
        this.attribute_value = ' ';
        this.column_options = ' ';
        this.faceted_navigation = ' ';
        this.filter_options = ' ';
        this.id = ' ';
        this.isPublic = ' ';
        this.layered_navigation = ' ';
        this.meta_description = ' ';
        this.meta_name = ' ';
        this.meta_url = ' ';
        this.position = ' ';
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
