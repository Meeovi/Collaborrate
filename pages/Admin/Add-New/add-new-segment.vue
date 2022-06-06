<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Segment" @click="addSegment" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Segment</a>
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
                        <td style="text-align: right;">Segment Name</td>
                        <td><FormulateInput v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput
  type="textarea" id="description" v-model="description" name="description" cols="50" rows="10" label="Add a short Description" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned to Website</td>
                        <td><FormulateInput v-model="website" name="website" type="url" /></td>
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
import { segments } from "~/apollo/queries/customers/segments.gql";

const ADD_SEGMENTS = gql`
    mutation ($name:String!,$description:String,$website:String,$status:String,$apply_to:String){
    insert_segments(objects: {name: $name, description: $description, website: $website, status: $status, apply_to: $apply_to}) {
        affected_rows
        returning {
            name
            status
            website
            description
            apply_to
            }
  }
}`;

export default {
    data() {
    return {
        website: " ",
        name: " ",
        description: " ",
        status: " ",
        apply_to: " ",

      }
  },
  methods: {/* eslint-disable camelcase */
      async addSegment() {
            const name = this.name;
            const status = this.status;
            const description = this.description;
            const website = this.website;
            const apply_to = this.apply_to;
            await this.$apollo.mutate({
                mutation: ADD_SEGMENTS,
                variables: {
                    name,
                    description,
                    website,
                    status,
                    apply_to,
                },
        update: (cache, { data: { insertSegments }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedSegment = insertSegments.returning;
                            console.log(insertedSegment)
                            cache.writeQuery({
                                query: segments
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../customers/segments'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.website = ' ';
                this.status = ' ';
                this.apply_to = ' ';
            },
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Segment'
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
</style>