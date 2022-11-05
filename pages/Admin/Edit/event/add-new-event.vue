<template>
  <div>
    <form @submit.prevent="addEvent">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Event" /></a>
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
                      <td><input v-model="name" name="eventName" type="text" value="Name of the Event" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event Type</td>
                      <td><input v-model="type" name="eventType" type="text" value="Type of Event" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Amount of Tickets Available</td>
                      <td><input v-model="tickets" name="eventTickets" type="number"
                          value="Enter amount of tickets for event" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event City</td>
                      <td><select id="city" v-model="city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city" :value="city">{{ city.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event State</td>
                      <td><select id="state" v-model="state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :value="states">{{ states.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event Country</td>
                      <td><select id="country" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event Postal Code</td>
                      <td><input v-model="postalcode" name="eventPostalCode" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event Start Date</td>
                      <td><input v-model="start" name="eventStart" type="datetime-local" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event End Date</td>
                      <td><input v-model="end" name="eventEnd" type="datetime-local" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td><select id="category" v-model="category" name="template" class="form-category">
                          <option v-for="category in findManyCategories" :key="category" :value="category">
                            {{ category.name }}</option>
                        </select></td>
                    </tr>
                    <tr>
                      <div class="file-upload-wrapper">
                        <input type="file" id="input-file-now" class="file-upload-input"
                          data-mdb-file-upload="file-upload" data-mdb-accepted-extensions="image/*" />
                      </div>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <div class="form-check form-switch">
                          <textarea v-model="description" cols="40" rows="10"></textarea>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingTwo" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Create Invitations
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <tr>
                        <td style="text-align: right;">Invitation Customer Name</td>
                        <td><input v-model="name" name="eventName" type="text" value="Name of the Invitation"
                             /></td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Invitation Customer Billing Address</td>
                        <td><input v-model="name" name="eventName" type="text" value="Billing Address" /></td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Invitation Payment</td>
                        <td><input v-model="name" name="eventName" type="text" value="Payment for the Invitation"
                             /></td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Invitation Grand Total Purchased</td>
                        <td><input v-model="name" name="eventName" type="text"
                            value="Grand Total Purchased of the Invitation"  /></td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Invitation Customer Shipping Address</td>
                        <td><input v-model="name" name="eventName" type="text" value="Shipping Address"  /></td>
                      </tr>
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

  import findManyEvents from "~/graphql/query/findManyEvents";
  import findManyStates from '~/graphql/query/findManyStates'
  import findManyCountries from '~/graphql/query/findManyCountries'
  import findManyCities from '~/graphql/query/findManyCities'
  import findManyCategories from '~/graphql/query/findManyCategories'

  const ADD_EVENTS = gql `
    mutation ($image: Upload!,$name: String!,$postalcode: String!,$start: String!,$end: String!,$tickets: String!,$content: String!,$country: String!,$city: String!,$state: String!,$category: String){
    createOneEvents(data: {image: $image,name: $name,postalcode: $postalcode,start: $start,end: $end,tickets: $tickets,country: $country,content: $content,category: $category,city: $city,state: $state}) {
        category
        attributes
        image
        name
        postalcode
        start
        end
        tickets
        country
        content
        city
        state
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
        state: " "
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
          update: (cache, {
            data: {
              insertCategories,
              insertCountries,
              insertCities,
              insertStates
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountry = insertCountries.returning;
              const insertedCity = insertCities.returning;
              const insertedState = insertStates.returning;
              console.log(insertedCategory, insertedCountry, insertedCity, insertedState)
              cache.writeQuery({
                query: findManyEvents
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../marketing/events'
          })
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
    apollo: {
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
