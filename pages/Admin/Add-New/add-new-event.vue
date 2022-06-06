<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Event" @click="addEvent" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Event</a>
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
                        <td style="text-align: right;">Event Name</td>
                        <td><FormulateInput v-model="name" name="eventName" type="text" label="Name of the Event" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Amount of Tickets Available</td>
                        <td><FormulateInput v-model="tickets" name="eventTickets" type="text" label="Enter amount of tickets for event" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event City</td>
                        <td><FormulateInput v-model="city" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event State</td>
                        <td><FormulateInput v-model="state" type="text" placeholder="$" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event Country</td>
                        <td><FormulateInput v-model="country" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event Postal Code</td>
                        <td><FormulateInput v-model="postalcode" name="eventPostalCode" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event Start Date</td>
                        <td><FormulateInput v-model="start" name="eventStart" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Event End Date</td>
                        <td><FormulateInput v-model="end" name="eventEnd" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Category</td>
                        <td><FormulateInput v-model="category" name="productCategory" type="text" /></td>
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
                                                <vue-simplemde id="longDescription" v-model="content" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingThree" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                    </FormulateInput>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <td><FormulateInput type="image" name="headshot" v-model="image" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/></td>
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

import { events } from "~/apollo/queries/marketing/events";
// import category from "~/apollo/queries/shop/category"
// import countries from "~/apollo/queries/shop/countries"
// import attributes from "~/apollo/queries/shop/attributes"

const ADD_EVENTS = gql`
    mutation ($image: Upload!,$name: String!,$postalcode: String!,$start: String!,$end: String!,$tickets: String!,$content: String!,$country: String!,$city: String!,$state: String!,$category: String){
    insert_events(objects: {image: $image,name: $name,postalcode: $postalcode,start: $start,end: $end,tickets: $tickets,country: $country,content: $content,category: $category,city: $city,state: $state}) {
        affected_rows
        returning {
            image
            name
            postalcode
            start
            end
            tickets
            country
            content
            category
            city
            state
    }
  }
}`;

export default {
    data() {
        return {
            category: [],
            attributes: [],
            image: " ",
            name: " ",
            postalcode: " ",
            start: " ",
            end: " ",
            tickets: " ",
            country: " ",
            content: " ",
            city: " ",
            state: " ",
            options: {
                url: "../../media/",
                imageWidth: 150,
                maxFilesize: 10,
                createImageThumbnails: true,
                maxThumbnailFileSize: 4,
                duplicateCheck: true,
                includeStyling: true,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
  },
    head: {
        title: 'Add New Event'
    },
  methods: {
      async addEvent() {
            const image = this.image;
            const name = this.name;
            // eslint-disable-next-line camelcase
            const postalcode = this.postalcode;
            const start = this.start;
            // eslint-disable-next-line camelcase
            const end = this.end;
            // eslint-disable-next-line camelcase
            const tickets = this.tickets;
            const country = this.country;
            const content = this.content;
            const category = this.category;
            const city = this.city;
            const state = this.state;

            await this.$apollo.mutate({
                mutation: ADD_EVENTS,
                variables: {
                    image,
                    name,
                    postalcode,
                    start,
                    end,
                    tickets,
                    country,
                    content,
                    category,
                    city,
                    state,
                 },
        update: (cache, { data: { insertCategories, insertCountries }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            const insertedCountries = insertCountries.returning;
                            console.log(insertedCategory, insertedCountries)
                            cache.writeQuery({
                                query: events
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../marketing/events'})
                }).catch(err => console.log(err));
                    this.image = ' ';
                    this.name = ' ';
                    this.postalcode = ' ';
                    this.start = ' ';
                    this.end = ' ';
                    this.tickets = ' ';
                    this.country = ' ';
                    this.content = ' ';
                    this.category = ' ';
                    this.city = ' ';
                    this.state = ' ';
                },
        },
        apollo: {/*
                    category: {
                    prefetch: true,
                    query: category
                    },
                 countries: {
                    prefetch: true,
                    query: countries
                    },
                    attributes: {
                    prefetch: true,
                    query: attributes
                    } */
            } 
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>