<template>
    <div>
        <form v-for="website in findManyWebsites" :key="website.id" @submit.prevent="updateWebsite(website)">
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <a class="navbar-brand">
                    <button type="reset" class="btn btn-warning" @click="deleteWebsite(website)">Delete</button></a>
                <a class="navbar-brand">
                    <input type="submit" class="btn btn-warning" value="Save Website" /></a>
                </div>
            </nav>
            <br>
        <div class="row">
          <div class="col-3">
            <!-- Tab navs -->
            <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
              <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
                aria-controls="v-tabs-home" aria-selected="true">Edit Website</a>
            </div>
            <!-- Tab navs -->
          </div>
  
          <div class="col-9">
            <div id="v-tabs-tabContent" class="tab-scope">
              <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
                <div class="table table-responsive">
                  <table class="table">
                    <tbody class="row">
                      <tr class="col-lg-6">
                        <td>
                          <label for="name">Website Name</label><br>
                          <input :value="website.name" type="text" required />
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="url">Website URL</label><br>
                          <input :value="website.url" type="text" name="Type" require>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="category">Website Category</label><br>
                          <select id="category" :value="website.category" name="template" class="form-category">
                            <option v-for="category in findManyCategories" :key="category" :value="category.name">{{ category.name }}</option>
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="shop">Shops for this website</label><br>
                          <select id="shop" :value="website.shop" name="template" class="form-category">
                            <option v-for="shop in findManyShops" :key="shop" :value="shop">{{ shop.name }}</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br><br>
                <div id="accordionExample" class="accordion">
                  <div class="accordion-item">
                    <h2 id="headingThree" class="accordion-header">
                      <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                      data-mdb-parent="#accordionExample">
                      <div class="accordion-body">
                        <td>
                          <input :value="website.image" type="image" name="headshot" />
                        </td>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import gql from "graphql-tag";
  import findManyWebsites from "~/graphql/query/findManyWebsites";
  import findManyCategories from "~/graphql/query/findManyCategories"
  
    const UPDATE_WEBSITE = gql`
      mutation ($name: String!, $shop: String!, $category: String!, $url: String!, $image: String) {
      updateOneWebsites(data: {name: $name, shop: $shop, category: $category, url: $url, image: $image} where: {id: $id}) {
          url
          name
          category
          shop
          image
    }
  }`;

  const DELETE_WEBSITE = gql`
    mutation deleteOneWebsites($id: Int){
    deleteOneWebsites(where: {id: $id}){
        url
        name
        category
        shop
        image
    }
}`;

export default {
    head: {
        name: 'Edit Website'
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
   async deleteWebsite(website){
    await this.$apollo.mutate({
        mutation: DELETE_WEBSITE,
        variables: {
          id: website.id
        },
        refetchQueries: [
          {
            query: findManyWebsites
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../content/websites'})
            }).catch(err => console.log(err));
    },
    async updateWebsite(website){
    await this.$apollo.mutate({
        mutation: UPDATE_WEBSITE,
        variables: {
          id: website.id
        },
        refetchQueries: [
          {
            query: findManyWebsites
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyWebsites: {
      query: findManyWebsites,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
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
  
  </style>
  