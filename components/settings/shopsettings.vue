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
                        <FormulateInput type="submit" label="Save" @click="addGeneralSettings" />
                      </li>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: right;">Product Videos</td>
                    <td>
                      <FormulateInput v-model="siteTitle" type="text" required label="YouTube API Key" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Global out-of-stock threshold</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text">
                      </FormulateInput>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Track inventory by default</td>
                    <td>
                      <FormulateInput v-model="siteUrl" type="checkbox" label="If checked, then inventory is being tracked">
                      </FormulateInput>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Adminstration Email Address</td>
                    <td>
                      <FormulateInput v-model="siteAdminEmail" type="text" name="Type">
                      </FormulateInput>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Tax Categories</td>
                    <td>
                      <FormulateInput v-model="value"
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
                  <a class="navbar-brand" href="/admin/add-new/add-new-currency">
                    <FormulateInput type="button">Create Currency</FormulateInput>
                  </a>
                </div>
              </nav>
              <br>
              <div class="table table-responsive table-bordered orderTable col">
                <h4>Currencies</h4>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="currencies in currencies" :key="currencies">
                      <th>{{ currencies.created_at }}</th>
                      <td>{{ currencies.login }}</td>
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
                        <FormulateInput type="submit" label="Save" @click="addGeneralSettings" />
                      </li>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: right;">Enable Vendor Review System</td>
                    <td>
                      <FormulateInput v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Admin Approval Required</td>
                    <td>
                      <FormulateInput v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Allow Customer To Rate Vendor Only If They Have Purchased Vendor's
                      Product</td>
                    <td>
                      <FormulateInput v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Enable Vendor MultiShipping System</td>
                    <td>
                      <FormulateInput v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Enable Product Assignment</td>
                    <td>
                      <FormulateInput v-model="tagline" type="select" :options="{first: 'Yes', second: 'No'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Vendor Multi Shipping - Carrier Title</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Vendor Multi Shipping - Method Title</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Vendor Multi Shipping - Charge Transfer To</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Calculate Commission Fee</td>
                    <td>
                      <FormulateInput v-model="tagline" type="select"
                        :options="{first: 'Percentage', second: 'Fixed'}" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Commission Fee</td>
                    <td>
                      <FormulateInput v-model="tagline" type="number" />
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
                        <FormulateInput type="submit" label="Save" @click="addGeneralSettings" />
                      </li>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: right;">GeneralSettings Name</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" required />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">GeneralSettings Type</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" name="Type">
                      </FormulateInput>
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
                  <a class="navbar-brand" href="/admin/add-new/add-new-zone">
                    <FormulateInput type="button">Create Zone</FormulateInput>
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
                    <tr v-for="zones in zones" :key="zones">
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
                  <a class="navbar-brand" href="/admin/add-new/add-new-channel">
                    <FormulateInput type="button">Create Channel</FormulateInput>
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
                    <tr v-for="channels in channels" :key="channels">
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
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import {
    generalSettings
  } from "~/apollo/queries/system/settingsgeneral";
  import paymentsettings from '~/components/settings/paymentsettings';

  const ADD_GENERAL_SETTINGS = gql `
    mutation ($siteTitle:String!,$tagline:String,$siteUrl:String,$siteAdminEmail:String,$value:String){
    insert_generalSettings(objects: {siteTitle: $siteTitle, tagline: $tagline, siteUrl: $siteUrl, siteAdminEmail: $siteAdminEmail, value: $value}) {
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
            path: '../system/general-settings'
          })
        }).catch(err => console.log(err));
        this.siteTitle = ' ';
        this.tagline = ' ';
        this.siteUrl = ' ';
        this.siteAdminEmail = ' ';
        this.value = ' ';
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
