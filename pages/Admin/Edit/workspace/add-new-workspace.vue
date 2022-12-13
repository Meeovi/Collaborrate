<template>
  <div>
      <form @submit.prevent="addWorkspace()">
          <nav class="navbar navbar-dark bg-dark">
              <div class="container-fluid">
              <a class="navbar-brand">
                  <button type="reset" class="btn btn-warning">Reset</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Create New Workspace</a>
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
                        <input v-model="name" name="workspaceName" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Workspace Author</td>
                      <td>
                        <input v-model="author" name="workspaceAuthor" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td>
                        <select id="category" v-model="categories" name="template" class="form-category">
                          <option v-for="category in findManyCategories" :key="category" :value="category">{{ category.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td>
                        <input v-model="code" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">description</td>
                      <td>
                          <textarea v-model="description" rows="10" cols="50"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Ticket</td>
                      <td>
                        <select id="category" v-model="ticket" name="template" class="form-category">
                          <option v-for="ticket in findManyTickets" :key="ticket" :value="ticket">{{ ticket.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Customers</td>
                      <td>
                        <select id="customersWorkspace" v-model="customer" name="template" class="form-category">
                          <option v-for="customer in findManyCustomers" :key="customer" :value="customer">{{ customer.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Media</td>
                      <td>
                        <input v-model="media" name="workspaceMedia" type="image" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Project</td>
                      <td>
                        <select id="category" v-model="project" name="template" class="form-category">
                          <option v-for="project in findManyProjects" :key="project" :value="project">{{ project.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Is Workspace public or private?</td>
                      <td>
                      <select name="workspacePublic" id="workspacePublic" v-model="isPublic">
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
import findManyCategories from "~/graphql/query/findManyCategories"

  const ADD_WORKSPACE = gql`
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
  export default {
    data() {
      return {
        categories: [],
        name: " ",
        brands: " ",
        code: " ",
        customers: " ",
        projects: " ",
        description: " ",
        isPublic: " ",
        media: " ",
        shops: " ",
        tasks: " ",
        users: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Workspace'
    },

    methods: {
      async addWorkspace() {
        const name = this.name;
        const brands = this.brands;
        const code = this.code;
        const customers = this.customers;
        // eslint-disable-next-line camelcase
        const projects = this.projects;
        const media = this.media;
        const categories = this.categories;
        const description = this.description;
        // eslint-disable-next-line camelcase
        const isPublic = this.isPublic;
        // eslint-disable-next-line camelcase
        const shops = this.shops;
        const tasks = this.tasks;
        const users = this.users;

        await this.$apollo.mutate({
          mutation: ADD_WORKSPACE,
          variables: {
            name,
            brands,
            code,
            customers,
            projects,
            media,
            categories,
            description,
            isPublic,
            shops,
            tasks,
            users,
          },
          update: (cache, {
            data: {
              insertWorkspaces,
              insertCategories,
              insertProjects,
              insertTickets
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedWorkspace = insertWorkspaces.returning;
              const insertedCategories = insertCategories.returning;
              const insertedProjects = insertProjects.returning;
              const insertedTickets = insertTickets.returning;
              console.log(insertedWorkspace, insertedCategories, insertedProjects, insertedTickets)
              cache.writeQuery({
                query: findManyWorkspaces
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../content/workspaces'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.brands = ' ';
        this.code = ' ';
        this.customers = ' ';
        this.projects = ' ';
        this.media = ' ';
        this.categories = ' ';
        this.description = ' ';
        this.isPublic = ' ';
        this.shops = ' ';
        this.tasks = ' ';
        this.categories = ' ';
        this.users = ' ';
      },
    },
    apollo: {
      findManyTickets: {
        prefetch: true,
        query: findManyTickets
      },
      findManyProjects: {
        prefetch: true,
        query: findManyProjects
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
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
