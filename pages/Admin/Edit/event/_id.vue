<template>
    <div>
        <form v-for="event in findManyEvents" :key="event.id" @submit.prevent="addEvent">
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
              aria-controls="v-tabs-home" aria-selected="true">Edit Event</a>
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
                      <td><input :value="event.name" name="eventName" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Amount of Tickets Available</td>
                      <td><input :value="event.tickets" name="eventTickets" type="number" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event City</td>
                      <td><select id="city" :value="event.city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city" :value="city">{{ city.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event State</td>
                      <td><select id="state" :value="event.state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :value="states">{{ states.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event Country</td>
                      <td><select id="country" :value="event.country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event Postal Code</td>
                      <td><input :value="event.postalcode" name="eventPostalCode" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event Start Date</td>
                      <td><input :value="event.start" name="eventStart" type="datetime-local" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Event End Date</td>
                      <td><input :value="event.end" name="eventEnd" type="datetime-local" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td><select id="category" :value="event.category" name="template" class="form-category">
                          <option v-for="category in findManyCategories" :key="category" :value="category">
                            {{ category.name }}</option>
                        </select></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Content
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <textarea :value="event.description" cols="40" rows="10"></textarea>
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
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Images and Videos
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <td>
                        <div class="file-upload-wrapper">
                          <input type="file" id="input-file-now" class="file-upload-input"
                            data-mdb-file-upload="file-upload" data-mdb-accepted-extensions="image/*" />
                        </div>
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

  import findManyEvents from "~/graphql/query/findManyEvents";
  import findManyStates from '~/graphql/query/findManyStates'
  import findManyCountries from '~/graphql/query/findManyCountries'
  import findManyCities from '~/graphql/query/findManyCities'
  import findManyCategories from '~/graphql/query/findManyCategories'

  const DELETE_EVENT = gql`
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

const UPDATE_EVENT = gql`
  mutation updateOneevents($id: Int!){
  updateOneEvents(where: {id: $id}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Event'
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
   async deleteEvent(event){
    await this.$apollo.mutate({
        mutation: DELETE_EVENT,
        variables: {
          id: event.id
        },
        refetchQueries: [
          {
            query: findManyEvents
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/marketing/events'})
            }).catch(err => console.log(err));
    },
    async updateEvent(event){
    await this.$apollo.mutate({
        mutation: UPDATE_EVENT,
        variables: {
          id: event.id
        },
        refetchQueries: [
          {
            query: findManyEvents
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyEvents: {
      query: findManyEvents,
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
      },
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>