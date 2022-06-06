
<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Contract" @click="addContract" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Contract</a>
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
              <td style="text-align: right;">Contract Title</td>
              <td>
                <FormulateInput v-model="contract_title" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contract Value</td>
              <td>
                <FormulateInput v-model="contract_value" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Start Date</td>
              <td>
                <FormulateInput v-model="start_date" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">End Date</td>
              <td>
                <FormulateInput v-model="end_date" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Renewal Reminder Date</td>
              <td>
                <FormulateInput v-model="renewal_reminder" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Customer Signed Date</td>
              <td>
                <FormulateInput v-model="company_signed_date" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Company Signed Date</td>
              <td>
                <FormulateInput v-model="company_signed_date" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="description" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contract Manager</td>
              <td>
                <FormulateInput v-model="contract_manager" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <FormulateInput v-model="status" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Account</td>
              <td>
                <FormulateInput v-model="account" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contact</td>
              <td>
                <FormulateInput v-model="contact" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Opportunity</td>
              <td>
                <FormulateInput v-model="opportunity" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contract Type</td>
              <td>
                <FormulateInput v-model="type" type="text" required />
              </td>
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
              Line Items
            </FormulateInput>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Currency</td>
                      <td>
                        <FormulateInput v-model="currency" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Total</td>
                      <td>
                        <FormulateInput v-model="total" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td>
                        <FormulateInput v-model="discount" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Subtotal</td>
                      <td>
                        <FormulateInput v-model="subtotal" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping</td>
                      <td>
                        <FormulateInput v-model="shipping" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping Tax</td>
                      <td>
                        <FormulateInput v-model="shipping_tax" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax</td>
                      <td>
                        <FormulateInput v-model="tax" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Grand Total</td>
                      <td>
                        <FormulateInput v-model="grand_total" type="text" required />
                      </td>
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
      </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import {
    contracts
  } from "~/apollo/queries/marketing/contracts";
/* eslint-disable camelcase */
  const ADD_CONTRACTS = gql `
    mutation ($account: String!, $company_signed_date: String!, $contact: String!, $contract_manager: String!, $contract_title: String!, $contract_type: String!, $contract_value: String!, $currency: String!, $customer_signed_date: String!, $description: String!, $discount: String!, $end_date: String!, $grand_total: String!, $line_items: String!, $opportunity: String!, $renewal_reminder: String!, $shipping: String!, $shipping_tax: String!, $start_date: String!, $status: String!, $total: String!, $tax: String!, $subtotal: String){
    insert_contracts(objects: {account: $account, company_signed_date: $company_signed_date, contact: $contact, contract_manager: $contract_manager, contract_title: $contract_title, contract_type: $contract_type, contract_value: $contract_value, currency: $currency, customer_signed_date: $customer_signed_date, description: $description, discount: $discount, end_date: $end_date, grand_total: $grand_total, line_items: $line_items, opportunity: $opportunity, renewal_reminder: $renewal_reminder, shipping: $shipping, shipping_tax: $shipping_tax, start_date: $start_date, status: $status, total: $total, tax: $tax, subtotal: $subtotal}) {
        affected_rows
        returning {
            account
            company_signed_date
            contact
            contract_manager
            contract_title
            contract_type
            contract_value
            currency
            customer_signed_date
            description
            discount
            end_date
            grand_total
            line_items
            opportunity
            renewal_reminder
            shipping
            shipping_tax
            start_date
            status
            total
            tax
            subtotal
    }
  }
}`;

  export default {
    data() {
      return {
        account:" ",
        company_signed_date:" ",
        contact:" ",
        contract_manager:" ",
        contract_title:" ",
        contract_type:" ",
        contract_value:" ",
        currency:" ",
        customer_signed_date:" ",
        description:" ",
        discount:" ",
        end_date:" ",
        grand_total:" ",
        line_items:" ",
        opportunity:" ",
        renewal_reminder:" ",
        shipping:" ",
        shipping_tax:" ",
        start_date:" ",
        status:" ",
        total:" ",
        tax:" ",
        subtotal:" ",
      }
    },
    head: {
      title: 'Add New Contract'
    },
    methods: {
      async addContract() {
        const account = this.account;
        const company_signed_date = this.company_signed_date;
        const contact = this.contact;
        const contract_manager = this.contract_manager;
        const contract_title = this.contract_title;
        const contract_type = this.contract_type;
        const contract_value = this.contract_value;
        const currency = this.currency;
        const customer_signed_date = this.customer_signed_date;
        const description = this.description;
        const discount = this.discount;
        const end_date = this.end_date;
        const grand_total = this.grand_total;
        const line_items = this.line_items;
        const opportunity = this.opportunity;
        const renewal_reminder = this.renewal_reminder;
        const shipping = this.shipping;
        const shipping_tax = this.shipping_tax;
        const start_date = this.start_date;
        const status = this.status;
        const total = this.total;
        const tax = this.tax;
        const subtotal = this.subtotal;
        await this.$apollo.mutate({
          mutation: ADD_CONTRACTS,
          variables: {
            account,
            company_signed_date,
            contact,
            contract_manager,
            contract_title,
            contract_type,
            contract_value,
            currency,
            customer_signed_date,
            description,
            discount,
            end_date,
            grand_total,
            line_items,
            opportunity,
            renewal_reminder,
            shipping,
            shipping_tax,
            start_date,
            status,
            total,
            tax,
            subtotal,
          },
          update: (cache, {
            data: {
              insertContracts
            }
          }) => {
            try {
              const insertedContract = insertContracts.returning;
              console.log(insertedContract)
              cache.writeQuery({
                query: contracts
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/contracts'
          })
        }).catch(err => console.log(err));
        this.account = ' ';
        this.company_signed_date = ' ';
        this.contact = ' ';
        this.contract_manager = ' ';
        this.contract_title = ' ';
        this.contract_type = ' ';
        this.contract_value = ' ';
        this.currency = ' ';
        this.customer_signed_date = ' ';
        this.description = ' ';
        this.discount = ' ';
        this.end_date = ' ';
        this.grand_total = ' ';
        this.line_items = ' ';
        this.opportunity = ' ';
        this.renewal_reminder = ' ';
        this.shipping = ' ';
        this.shipping_tax = ' ';
        this.start_date = ' ';
        this.status = ' ';
        this.total = ' ';
        this.tax = ' ';
        this.subtotal = ' ';
      },

    },
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

</style>
