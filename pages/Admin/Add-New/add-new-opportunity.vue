<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Opportunity" @click="addOpportunity" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Opportunity</a>
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
                        <td style="text-align: right;">Currency</td>
                        <td><FormulateInput v-model="currency" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Opportunity Amount</td>
                        <td><FormulateInput v-model="amount" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Sales Stage</td>
                        <td><FormulateInput v-model="sales_stage" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Probability (%)</td>
                        <td><FormulateInput v-model="probability" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Next Step</td>
                        <td><FormulateInput v-model="next_step" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput v-model="description" type="textarea" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Expected Close Date</td>
                        <td><FormulateInput v-model="expected_close_date" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Type</td>
                        <td><FormulateInput v-model="type" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Lead Source</td>
                        <td><FormulateInput v-model="lead_source" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Campaign</td>
                        <td><FormulateInput v-model="campaign" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><FormulateInput v-model="assigned_to" type="text" required /></td>
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
/* eslint-disable camelcase */

import { opportunities } from "~/apollo/queries/customers/opportunities";
import categories from '~/apollo/queries/shop/categories'

const ADD_OPPORTUNITIES = gql `
    mutation ($name: String!, $next_step: String!, $name: String!, $grand_total: String!, $categories: String!, $quote_stage: String!, $valid_until: String!, $lead_source: String!, $expected_close_date: String!, $assigned_to: String!, $description: String!, $currency: String!, $campaign: String!, $amount: String!, $account_name: String!, $next_step: String!, $created_at: String!, $probability: String!, $sales_stage: String!, $type: String!){
    insert_opportunities(objects: {name: $name, next_step: $next_step, name: $name, grand_total: $grand_total, categories: $categories, quote_stage: $quote_stage, valid_until: $valid_until, lead_source: $lead_source, expected_close_date: $expected_close_date, assigned_to: $assigned_to, description: $description, currency: $currency, campaign: $campaign, amount: $amount, account_name: $account_name, created_at: $created_at, probability: $probability, sales_stage: $sales_stage,type: $type,}) {
        affected_rows
        returning {
            name
            lead_source
            expected_close_date
            assigned_to
            description
            currency
            campaign
            amount
            account_name
            categories
            next_step
            created_at
            currency
            probability
            sales_stage
            discount
            grand_total
            id
            opportunity
            type
    }
  }
}`;

  export default {
    data() {
      return {
        categories: [],
        name: " ",
        grand_total: " ",
        quote_stage: " ",
        valid_until: " ",
        lead_source: " ",
        expected_close_date: " ",
        assigned_to: " ",
        description: " ",
        currency: " ",
        campaign: " ",
        amount: " ",
        account_name: " ",
        next_step: " ",
        opportunity: " ",
        created_at: " ",
        probability: " ",
        sales_stage: " ",
        discount: " ",
        type: " ",
      }
    },
    methods: {
      async addOpportunity() {
        const name = this.name;
        const categories = this.categories;
        const lead_source = this.lead_source;
        const expected_close_date = this.expected_close_date;
        const assigned_to = this.assigned_to;
        const description = this.description;
        const currency = this.currency;
        const campaign = this.campaign;
        const amount = this.amount;
        const account_name = this.account_name;
        const next_step = this.next_step;
        const created_at = this.created_at;
        const probability = this.probability;
        const sales_stage = this.sales_stage;
        const discount = this.discount;
        const opportunity = this.opportunity;
        const type = this.type;

        await this.$apollo.mutate({
          mutation: ADD_OPPORTUNITIES,
          variables: {
            name,
            opportunity,
            categories,
            lead_source,
            expected_close_date,
            assigned_to,
            description,
            currency,
            campaign,
            amount,
            account_name,
            next_step,
            created_at,
            probability,
            sales_stage,
            discount,
            type,
          },
          update: (cache, {
            data: {
              insertCategories
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              console.log(insertedCategory)
              cache.writeQuery({
                query: opportunities
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../customers/opportunities'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.grand_total = ' ';
        this.categories = ' ';
        this.quote_stage = ' ';
        this.valid_until = ' ';
        this.lead_source = ' ';
        this.expected_close_date = ' ';
        this.assigned_to = ' ';
        this.description = ' ';
        this.currency = ' ';
        this.campaign = ' ';
        this.amount = ' ';
        this.account_name = ' ';
        this.categories = ' ';
        this.next_step = ' ';
        this.name = ' ';
        this.created_at = ' ';
        this.currency = ' ';
        this.probability = ' ';
        this.sales_stage = ' ';
        this.type = ' ';
      },

    },
    apollo: {
      categories: {
        prefetch: true,
        query: categories
      }
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Opportunity'
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