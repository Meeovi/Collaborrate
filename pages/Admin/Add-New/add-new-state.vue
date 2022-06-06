<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save State" @click="addState" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New State</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="statesAddOptions">
                            <li><FormulateInput type="submit" @click="addState" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">State Name</td>
                        <td><FormulateInput id="statesName" v-model="name" type="statesName" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">State Country</td>
                        <td><FormulateInput id="statesCountry" v-model="country" type="statesCountry" required /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <FormulateInput class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </FormulateInput>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table table-responsive">
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <FormulateInput
  type="textarea" id="tagDesc" v-model="description" name="tagDesc" cols="80" rows="10" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
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
import { states } from "~/apollo/queries/shop/states";

const ADD_COUNTRIES = gql`
    mutation ($name:String!,$description:String,$image:String,$country:String){
    insert_states(objects: {name: $name, description: $description, image: $image, country: $country}) {
        affected_rows
        returning {
            name
            description
            image
            country
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        description: " ",
        image: " ",
        country: " ",
      }
  }, 
   
  methods: {
      async addState() {
            const name = this.name;
            const description = this.description;
            const image = this.image;
            const country = this.country;
            await this.$apollo.mutate({
                mutation: ADD_COUNTRIES,
                variables: {
                    name,
                    description,
                    image,
                    country
                 },
        update: (cache, { data: { insertStates }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedState = insertStates.returning;
                            console.log(insertedState)
                            cache.writeQuery({
                                query: states
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/states'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.image = ' ';
                this.country = ' ';
            },
        },
    head: {
        title: 'Add New State'
    },
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