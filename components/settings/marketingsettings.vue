<template>
    <div>
<div id="accordionFlushExample" class="accordion accordion-flush">
  <div class="accordion-item">
    <h2 id="flush-headingThree" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Marketing Settings
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-mdb-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="generalSettingsAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addGeneralSettings" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">ReCaptcha API Key</td>
                        <td><FormulateInput v-model="tagline" type="password" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Adsense API Key</td>
                        <td><FormulateInput v-model="tagline" type="password" name="Type">
                            </FormulateInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Sitemap URL</td>
                        <td><FormulateInput v-model="tagline" type="url">
                            </FormulateInput></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
  <!--<div class="accordion-item">
    <h2 id="flush-headingFour" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
        Newsletter Subscription Options
      </button>
    </h2>
    <div
      id="flush-collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingFour"
      data-mdb-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="generalSettingsAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addGeneralSettings" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Allow Guess Subscription</td>
                        <td><FormulateInput v-model="tagline" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Need to Confirm</td>
                        <td><FormulateInput v-model="tagline" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                     <tr>
                        <td style="text-align: right;">Confirmation Email Sender</td>
                        <td><FormulateInput v-model="tagline" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                     <tr>
                        <td style="text-align: right;">Success Email Sender</td>
                        <td><FormulateInput v-model="tagline" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>-->
  <div class="accordion-item">
    <h2 id="flush-headingFive" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseFive"
        aria-expanded="false"
        aria-controls="flush-collapseFive"
      >
        Email Settings
      </button>
    </h2>
    <div
      id="flush-collapseFive"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingFive"
      data-mdb-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="generalSettingsAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addGeneralSettings" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Mail Server</td>
                        <td><FormulateInput v-model="tagline" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Port</td>
                        <td><FormulateInput v-model="tagline" type="number" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import gql from "graphql-tag";

import { generalSettings } from "~/apollo/queries/system/settingsgeneral";

const ADD_GENERAL_SETTINGS = gql`
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
        update: (cache, { data: { insertGeneralSettingss }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedGeneralSettings = insertGeneralSettingss.returning;
                            console.log(insertedGeneralSettings)
                            cache.writeQuery({
                                query: generalSettings
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../system/general-settings'})
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