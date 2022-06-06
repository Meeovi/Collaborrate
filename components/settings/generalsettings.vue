<template>
  <div>
    <div id="accordionFlushExample" class="accordion accordion-flush">
      <div class="accordion-item">
        <h2 id="flush-headingOne" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            General Settings
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
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
                    <td style="text-align: right;">Site Title</td>
                    <td>
                      <FormulateInput v-model="siteTitle" type="text" required />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Site Tagline</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" name="Type">
                      </FormulateInput>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Site Website Address (URL)</td>
                    <td>
                      <FormulateInput v-model="siteUrl" type="text" name="Type">
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
                    <td style="text-align: right;">Your Industry</td>
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
            Storage Settings
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
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
                    <td style="text-align: right;">AWS S3 API Key</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" required
                        label="AWS S3 is a storage service by Amazon." />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Google Drive API Key</td>
                    <td>
                      <FormulateInput v-model="tagline" type="text" name="Type"
                        label="Google Drive is a personal cloud storage service by Google.">
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
        <h2 id="flush-headingThree" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Media Library
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
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
                    <td style="text-align: right;">Responsive friendly upload</td>
                    <td>
                      <FormulateInput v-model="value" :options="{first: 'OFF', second: 'ON'}" type="radio"
                        label="Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset." />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Size Optimization</td>
                    <td>
                      <FormulateInput v-model="tagline" :options="{first: 'OFF', second: 'ON'}" type="radio"
                        label="Enabling this option will reduce the image size and slightly reduce its quality." />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Auto Orientation</td>
                    <td>
                      <FormulateInput v-model="siteUrl" :options="{first: 'OFF', second: 'ON'}" type="radio"
                        label="Enabling this option will automatically rotate the image according to EXIF orientation tag." />
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
            Languages
          </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
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
                    <td style="text-align: right;">Translations</td>
                    <td>
                      <FormulateInput v-model="languages"
                        :options="{first: 'First', second: 'Second', third: 'Third', fourth: 'Fourth'}" type="select"
                        placeholder="Select an option" label="List of store languages" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <providersettings />
      <apitokensettings />
      <webhooks />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import providersettings from '~/components/settings/providersettings';
import apitokensettings from '~/components/settings/apitokensettings';
import webhooks from '~/components/settings/webhooks'
import { generalSettings } from "~/apollo/queries/system/settingsgeneral";

const ADD_GENERAL_SETTINGS = gql `
    mutation ($siteTitle:String!,$tagline:String,$siteUrl:String,$siteAdminEmail:String,$languages:String,$value:String){
    insert_generalSettings(objects: {siteTitle: $siteTitle, tagline: $tagline, siteUrl: $siteUrl, siteAdminEmail: $siteAdminEmail, languages: $languages, value: $value}) {
        affected_rows
        returning {
            siteTitle
            tagline
            siteUrl
            siteAdminEmail
            value
            languages
    }
  }
}`;

export default {
    data() {
      return {
        siteUrl: [],
        siteTitle: " ",
        tagline: " ",
        siteAdminEmail: " ",
        value: " ",
        languages: " ",
      }
    },
    head: {
      title: 'General Settings'
    },
    methods: {
      async addGeneralSettings() {
        const siteTitle = this.siteTitle;
        const siteAdminEmail = this.siteAdminEmail;
        const tagline = this.tagline;
        const siteUrl = this.siteUrl;
        const value = this.value;
        const languages = this.languages;
        await this.$apollo.mutate({
          mutation: ADD_GENERAL_SETTINGS,
          variables: {
            siteTitle,
            tagline,
            siteUrl,
            siteAdminEmail,
            value,
            languages,
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
        this.languages = ' ';
      },

    },
    // eslint-disable-next-line vue/order-in-components
    components: {providersettings, apitokensettings, webhooks}
  }

</script>

<style>

</style>
