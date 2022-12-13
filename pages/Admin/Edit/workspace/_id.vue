<template>
    <div>
        <form v-for="workspace in findManyWorkspaces" :key="workspace.id" @submit.prevent="updateWorkspace(workspace)">
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <a class="navbar-brand">
                    <button type="reset" class="btn btn-warning" @click="deleteWorkspace(workspace)">Delete</button></a>
                <a class="navbar-brand">
                    <input type="submit" class="btn btn-warning" value="Save Workspace" /></a>
                </div>
            </nav>
            <br>
        <div class="row">
          <div class="col-3">
            <!-- Tab navs -->
            <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
              <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
                aria-controls="v-tabs-home" aria-selected="true">Edit Workspace</a>
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
                        <td style="text-align: right;">Workspace Name</td>
                        <td>
                          <input :value="workspace.name" name="workspaceName" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Workspace Author</td>
                        <td>
                          <input :value="workspace.author" name="workspaceAuthor" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Category</td>
                        <td>
                          <select id="category" :value="workspace.categories" name="template" class="form-category">
                            <option v-for="category in findManyCategories" :key="category" :value="category">{{ category.name }}</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Code</td>
                        <td>
                          <input :value="workspace.code" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">description</td>
                        <td>
                            <textarea :value="workspace.description" rows="10" cols="50"></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Ticket</td>
                        <td>
                          <select id="category" :value="workspace.ticket" name="template" class="form-category">
                            <option v-for="ticket in findManyTickets" :key="ticket" :value="ticket">{{ ticket.name }}</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Customers</td>
                        <td>
                          <select id="customersWorkspace" :value="workspace.customer" name="template" class="form-category">
                            <option v-for="customer in findManyCustomers" :key="customer" :value="customer">{{ customer.name }}</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Media</td>
                        <td>
                          <input :value="workspace.media" name="workspaceMedia" type="image" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Project</td>
                        <td>
                          <select id="category" :value="workspace.project" name="template" class="form-category">
                            <option v-for="project in findManyProjects" :key="project" :value="project">{{ project.name }}</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Is Workspace public or private?</td>
                        <td>
                        <select name="workspacePublic" id="workspacePublic" :value="workspace.isPublic">
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                        </select>
                      </td>
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
  import gql from "graphql-tag";
  import findManyWorkspaces from "~/graphql/query/findManyWorkspaces";
  import findManyCategories from "~/graphql/query/findManyCategories"
  
    const UPDATE_WORKSPACE = gql`
      mutation ($name: String!, $shops: String!, $category: String!, $author: String!, $brands: String, $code: String, $customers: String, $description: String, $isPublic: String, $media: String, $projects: String, $products: String, $tasks: String, $users: String) {
      updateOneWorkspaces(data: {author: $author, brands: $brand, category: $category, code: $code, customers: $customers, description: $description, isPublic: $isPublic, media: $media, name: $name, products: $products, projects: $projects, shops: $shops, tasks: $tasks, users: $users}) {
        author
        brands
        categories
        category
        code
        customers
        description
        isPublic
        media
        name
        products
        projects
        shops
        tasks
        users
    }
  }`;

  const DELETE_WORKSPACE = gql`
    mutation deleteOneWorkspaces($id: Int){
    deleteOneWorkspaces(where: {id: $id}){
        author
        brands
        categories
        category
        code
        customers
        description
        isPublic
        media
        name
        products
        projects
        shops
        tasks
        users
    }
}`;

export default {
    head: {
        name: 'Edit Workspace'
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
   async deleteWorkspace(workspace){
    await this.$apollo.mutate({
        mutation: DELETE_WORKSPACE,
        variables: {
          id: workspace.id
        },
        refetchQueries: [
          {
            query: findManyWorkspaces
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../content/workspaces'})
            }).catch(err => console.log(err));
    },
    async updateWorkspace(workspace){
    await this.$apollo.mutate({
        mutation: UPDATE_WORKSPACE,
        variables: {
          id: workspace.id
        },
        refetchQueries: [
          {
            query: findManyWorkspaces
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyWorkspaces: {
      query: findManyWorkspaces,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
      findManyProjects: {
        prefetch: true,
        query: findManyProjects
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyTickets: {
        prefetch: true,
        query: findManyTickets
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
  