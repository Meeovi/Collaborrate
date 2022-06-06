<template>
    <div>
<div id="accordionFlushExample" class="accordion accordion-flush">
  <div class="accordion-item">
    <h2 id="flush-headingOne" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Customer Settings
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
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
                        <td style="text-align: right;">Login as Customer</td>
                        <td><FormulateInput v-model="value" :options="{first: 'Auto Detect', second: 'Manual'}" type="radio"
  label="Use the Manual Selection option on a multi-website setup that has Share Customer Accounts enabled globally. If set to Manual Selection, the Login as Customer admin can select a store view after logging in." /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Share Customer Accounts</td>
                        <td><FormulateInput v-model="value" :options="{first: 'Global', second: 'Per Website'}" type="radio" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Online Minutes Interval</td>
                        <td><FormulateInput v-model="siteUrl" type="text" name="Type" label="Default is (30 minutes).">
                            </FormulateInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Customer Data Lifetime</td>
                        <td><FormulateInput v-model="siteAdminEmail" type="text" name="Type" label="The value is in minutes.">
                            </FormulateInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Send an email after registration</td>
                        <td><FormulateInput v-model="value" :options="{first: 'Yes', second: 'No'}" type="radio" /></td>
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