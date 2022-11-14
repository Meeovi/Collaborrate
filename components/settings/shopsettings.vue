<template>
  <div>
    <div id="accordionFlushExample" class="accordion accordion-flush">
      <div class="accordion-item">
        <h2 id="flush-headingOne" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Product Settings
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                    </th>
                    <th scope="col" class="generalSettingsAddOptions">
                      <li>
                        <input type="submit" label="Save" @submit.prevent="addGeneralSettings" />
                      </li>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: right;">Product Videos</td>
                    <td>
                      <input v-model="siteTitle" type="text" required label="YouTube API Key" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Global out-of-stock threshold</td>
                    <td>
                      <input v-model="tagline" type="text">
                      
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Track inventory by default</td>
                    <td>
                      <input v-model="siteUrl" type="checkbox"
                        label="If checked, then inventory is being tracked">
                      
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Adminstration Email Address</td>
                    <td>
                      <input v-model="siteAdminEmail" type="text" name="Type">
                      
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Tax Categories</td>
                    <td>
                      <input v-model="value"
                        :options="{first: 'Apps and Games', second: 'Athletic/Sporting Goods', third: 'Arts and Design', fourth: 'Auto Parts'}"
                        type="select" placeholder="Select an option" label="--Please Select--" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingTwo" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Currencies
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/admin/edit/currency/add-new-currency">
                    <button type="button" class="btn btn-danger">Create Currency</button>
                  </a>
                </div>
              </nav>
              <br>
              <div class="table table-responsive table-bordered orderTable col">
                <h4>Currencies</h4>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Currency ID</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Region</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="currencies in currencies" :key="currencies">
                      <td>{{ currencies.id }}</td>
                      <th>{{ currencies.code }}</th>
                      <td>{{ currencies.name }}</td>
                      <td>{{ currencies.region }}</td>
                      <td><a :href="`/admin/edit/currency/${currencies.id}`">Edit</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingThree" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Multi-Vendor Options
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                    </th>
                    <th scope="col" class="generalSettingsAddOptions">
                      <li>
                        <input type="submit" label="Save" @submit.prevent="addGeneralSettings" />
                      </li>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: right;">Enable Vendor Review System</td>
                    <td>
                      <input v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Admin Approval Required</td>
                    <td>
                      <input v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Allow Customer To Rate Vendor Only If They Have Purchased Vendor's
                      Product</td>
                    <td>
                      <input v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Enable Vendor MultiShipping System</td>
                    <td>
                      <input v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Enable Product Assignment</td>
                    <td>
                      <input v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Vendor Multi Shipping - Carrier Title</td>
                    <td>
                      <input v-model="tagline" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Vendor Multi Shipping - Method Title</td>
                    <td>
                      <input v-model="tagline" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Vendor Multi Shipping - Charge Transfer To</td>
                    <td>
                      <input v-model="tagline" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Calculate Commission Fee</td>
                    <td>
                      <input v-model="tagline" type="select"
                        :options="{first: 'Percentage', second: 'Fixed'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Commission Fee</td>
                    <td>
                      <input v-model="tagline" type="number" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingFour" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
            Content Management
          </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                    </th>
                    <th scope="col" class="generalSettingsAddOptions">
                      <li>
                        <input type="submit" label="Save" @submit.prevent="addGeneralSettings" />
                      </li>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: right;">GeneralSettings Name</td>
                    <td>
                      <input v-model="tagline" type="text" required />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">GeneralSettings Type</td>
                    <td>
                      <input v-model="tagline" type="text" name="Type">
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingFive" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
            Zones
          </button>
        </h2>
        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/admin/edit/zone/add-new-zone">
                    <button type="button" class="btn btn-danger">Create Zone</button>
                  </a>
                </div>
              </nav>
              <br>
              <div class="table table-responsive table-bordered orderTable col">
                <h4>Zones</h4>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="zones in findManyZones" :key="zones">
                      <th>{{ zones.code }}</th>
                      <td>{{ zones.name }}</td>
                      <td>{{ zones.type }}</td>
                      <td><a :href="`/admin/edit/zone/${zones.id}`">Edit</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingSix" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
            Channels
          </button>
        </h2>
        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/admin/edit/channel/add-new-channel">
                    <button type="button" class="btn btn-danger">Create Channel</button>
                  </a>
                </div>
              </nav>
              <br>
              <div class="table table-responsive table-bordered orderTable col">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Currency</th>
                      <th>Default Zone</th>
                      <th>Default Shipping</th>
                      <th>Default Language</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="channels in findManyChannels" :key="channels">
                      <th>{{ channels.name }}</th>
                      <td>{{ channels.code }}</td>
                      <td>{{ channels.default_zone }}</td>
                      <td>{{ channels.default_shipping }}</td>
                      <td>{{ channels.default_lang }}</td>
                      <td><a :href="`/admin/edit/channel/${channel.id}`">Edit</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <paymentsettings />
      <div class="accordion-item">
        <h2 id="flush-headingSeven" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
            Cities
          </button>
        </h2>
        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/admin/edit/city/add-new-city">
                    <button type="button" class="btn btn-danger">Add New City</button>
                  </a>

                </div>
              </nav>
              <br>
              <div class="table table-responsive">
                <table id="table" data-toggle="table" class="table">
                  <thead class="table table-dark">
                    <tr>
                      <th>City ID</th>
                      <th>City Title</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Postal Code</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody v-for="cities in findManyCities" :key="cities.id">
                    <tr>
                      <td>{{ cities.id }}</td>
                      <td>{{ cities.name }}</td>
                      <td>{{ cities.state }}</td>
                      <td>{{ cities.country }}</td>
                      <td>{{ cities.postalCode }}</td>
                      <td><a :href="`/admin/edit/city/${cities.id}`">View</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingEight" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
            States
          </button>
        </h2>
        <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/admin/edit/state/add-new-state">
                    <button type="button" class="btn btn-danger">Add New State</button>
                  </a>

                </div>
              </nav>
              <br>
              <div class="table table-responsive">
                <table id="table" data-toggle="table" class="table">
                  <thead class="table table-dark">
                    <tr>
                      <th>State ID</th>
                      <th>State Title</th>
                      <th>Description</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody v-for="states in findManyStates" :key="states.id">
                    <tr>
                      <td>{{ states.id }}</td>
                      <td>{{ states.name }}</td>
                      <td>{{ states.description }}</td>
                      <td>{{ states.country }}</td>
                      <td><a :href="`/admin/edit/states/${states.id}`">View</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingNine" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
            Countries
          </button>
        </h2>
        <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/admin/edit/country/add-new-country">
                    <button type="button" class="btn btn-danger">Add New Country</button>
                  </a>

                </div>
              </nav>
              <br>
              <div class="table table-responsive">
                <table id="table" data-toggle="table" class="table">
                  <thead class="table table-dark">
                    <tr>
                      <th>Country ID</th>
                      <th>Country Title</th>
                      <th>Country Description</th>
                      <th>Country Image</th>
                      <th>Region</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody v-for="countries in findManyCountries" :key="countries.id">
                    <tr>
                      <td>{{ countries.id }}</td>
                      <td>{{ countries.name }}</td>
                      <td>{{ countries.description }}</td>
                      <td>{{ countries.image }}</td>
                      <td>{{ countries.region }}</td>
                      <td><a :href="`/admin/edit/country/${countriess.id}`">View</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="flush-headingTen" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
            Taxes
          </button>
        </h2>
        <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/admin/edit/tax/add-new-tax">
                    <button type="button" class="btn btn-danger">Add New Tax</button>
                  </a>

                </div>
              </nav>
              <br>
              <div class="table table-responsive">
                <table id="table" data-toggle="table" class="table">
                  <thead class="table table-dark">
                    <tr>
                      <th>Tax ID</th>
                      <th>Tax Name</th>
                      <th>Rate</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody v-for="tax in findManyTaxes" :key="tax.id">
                    <tr>
                      <td>{{ tax.id }}</td>
                      <td>{{ tax.name }}</td>
                      <td>{{ tax.tax_rates }}</td>
                      <td><a :href="`/admin/edit/tax/${tax.id}`">View</a></td>
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
</template>

<script>
  import gql from "graphql-tag";

  import {
    generalSettings
  } from "~/graphql/query/findManySettings";
  import paymentsettings from '~/components/settings/paymentsettings';
  import currencies from '~/graphql/query/findManyCurrencies'
  import findManyCities from '~/graphql/query/findManyCities'
  import findManyStates from '~/graphql/query/findManyStates'
  import findManyCountries from '~/graphql/query/findManyCountries'
  import findManyChannels from '~/graphql/query/findManyChannels'
  import findManyZones from '~/graphql/query/findManyZones'
  import findManyTaxes from '~/graphql/query/findManyTaxes'

  const ADD_GENERAL_SETTINGS = gql `
    mutation ($siteTitle:String!,$tagline:String,$siteUrl:String,$siteAdminEmail:String,$value:String){
    createOnegeneralSettings(objects: {siteTitle: $siteTitle, tagline: $tagline, siteUrl: $siteUrl, siteAdminEmail: $siteAdminEmail, value: $value}) {
        affected_rows
        returning {
            siteTitle
            tagline
            siteUrl
            siteAdminEmail
            value
    }
  }
}`;

  export default {
    components: {
      paymentsettings
    },
    data() {
      return {
        cities: [],
        states: [],
        countries: [],
        zones: [],
        currencies: [],
        channels: [],
        tax_rates: [],
        tax: [],
        siteUrl: [],
        siteTitle: " ",
        tagline: " ",
        siteAdminEmail: " ",
        value: " ",

      }
    },
    methods: {
      async addGeneralSettings() {
        const siteTitle = this.siteTitle;
        const siteAdminEmail = this.siteAdminEmail;
        const tagline = this.tagline;
        const siteUrl = this.siteUrl;
        const value = this.value;
        await this.$apollo.mutate({
          mutation: ADD_GENERAL_SETTINGS,
          variables: {
            siteTitle,
            tagline,
            siteUrl,
            siteAdminEmail,
            value,
          },
          update: (cache, {
            data: {
              insertGeneralSettingss
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedGeneralSettings = insertGeneralSettingss.returning;
              console.log(insertedGeneralSettings)
              cache.writeQuery({
                query: generalSettings
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../system/general-settings'
          })
        }).catch(err => console.log(err));
        this.siteTitle = ' ';
        this.tagline = ' ';
        this.siteUrl = ' ';
        this.siteAdminEmail = ' ';
        this.value = ' ';
      },

    },
    apollo: {
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyZones: {
        prefetch: true,
        query: findManyZones
      },
      currencies: {
        prefetch: true,
        query: currencies
      },
      findManyChannels: {
        prefetch: true,
        query: findManyChannels
      },
      findManyTaxes: {
        prefetch: true,
        query: findManyTaxes
      },
    }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'General Settings'
    }
  }

</script>

<style>

</style>
