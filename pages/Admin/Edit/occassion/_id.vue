<template>
  <div>
    <FormulateForm v-for="occassion in occassions" :key="occassion.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Occassion" @click="addOccassion" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit New Occassion</a>
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
                        <FormulateInput v-model="code" type="text" required />{{ occassions.code }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Occassion Name</td>
                      <td>
                        <FormulateInput v-model="name" type="text" />{{ occassions.name }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="categories">Categories</label><br>
                        <select id="categories" v-model="category" name="template" class="form-category">
                          <option v-for="categories in categoriess" :key="categories" :value="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tags">Tags</label><br>
                        <select id="tags" v-model="tags" name="template" class="form-category">
                          <option v-for="tags in tagss" :key="tags" :value="tags">
                            {{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="products">Products</label><br>
                        <select id="products" v-model="products" name="template" class="form-category">
                          <option v-for="products in productss" :key="products" :value="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="wishlists">Wishlists</label><br>
                        <select id="wishlists" v-model="wishlists" name="template" class="form-category">
                          <option v-for="wishlists in wishlistss" :key="wishlists" :value="wishlistss">
                            {{ wishlists.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <FormulateInput v-model="description" type="textarea" label="Description" />{{ occassions.description }}
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

  import occassions from "~/apollo/mutations/shop/occassions";

// eslint-disable-next-line camelcase

const DELETE_OCCASSION = gql `
  mutation delete_occassions($id: Int!){
  delete_occassions(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_OCCASSION = gql `
  mutation update_occassions($id: Int!){
  update_occassions(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Occassion'
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
   async deleteOccassion(occassion){
    await this.$apollo.mutate({
        mutation: DELETE_OCCASSION,
        variables: {
          id: occassion.id
        },
        refetchQueries: [
          {
            query: allOccassions
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/occassions'})
            }).catch(err => console.log(err));
    },
    async updateOccassion(occassion){
    await this.$apollo.mutate({
        mutation: UPDATE_OCCASSION,
        variables: {
          id: occassion.id
        },
        refetchQueries: [
          {
            query: allOccassions
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    occassions: {
      query: occassions,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
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

</style>
