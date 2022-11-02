<template>
    <div>
        <form  v-for="opportunities in findManyOpportunities" :key="opportunities.id" @submit.prevent="addOpportunity">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Opportunity" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Opportunity</a>
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
                      <td><input :value="opportunities.currency" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Opportunity Amount</td>
                      <td><input :value="opportunities.amount" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Sales Stage</td>
                      <td><select id="salesStage" :value="opportunities.sales_stage">
                          <option value="prospecting">Prospecting</option>
                          <option value="qualification">Qualification</option>
                          <option value="needAnalysis">Need Analysis</option>
                          <option value="valueProposition">Value Proposition</option>
                          <option value="decisionMakers">Identifying Decision Makers</option>
                          <option value="perceptionAnalysis">Perception Analysis</option>
                          <option value="proposal">Proposal/Price Quote</option>
                          <option value="negotiationReview">Negotiation/Review</option>
                          <option value="closedWon">Closed Won</option>
                          <option value="closedLost">Closed Lost</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Probability (%)</td>
                      <td><input :value="opportunities.probability" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Next Step</td>
                      <td><input :value="opportunities.next_step" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><textarea :value="opportunities.description" cols="40" rows="10"></textarea></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expected Close Date</td>
                      <td><input :value="opportunities.expected_close_date" type="datetime-local" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Type</td>
                      <td><select id="opportunityType" :value="opportunities.type">
                          <option value="exBusiness">Existing Business</option>
                          <option value="newBusiness">New Business</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Lead Source</td>
                      <td><select id="leadSource" :value="opportunities.lead_source">
                          <option value="coldCall">Cold Call</option>
                          <option value="exCustomer">Existing Customer</option>
                          <option value="website">Website</option>
                          <option value="selfGenerated">Self Generated</option>
                          <option value="staff">Staff Member</option>
                          <option value="partner">Partner</option>
                          <option value="publicRelations">Public Relations</option>
                          <option value="directMail">Direct Mail</option>
                          <option value="conference">Conference</option>
                          <option value="tradeShow">Trade Show</option>
                          <option value="wordMouth">Word of Mouth</option>
                          <option value="email">Email</option>
                          <option value="campaign">Campaign</option>
                          <option value="other">Other</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Campaign</td>
                      <td><select id="campaign" :value="opportunities.campaign">
                          <option v-for="campaign in findManyCampaigns" :key="campaign.id" :value="campaign">
                            {{ campaign.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Assigned To</td>
                      <td><select id="assignedTo" :value="opportunities.assigned_to">
                          <option v-for="users in findManyUsers" :key="users.id" :value="users">
                            {{ users.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Categories</td>
                      <td><select id="categories" :value="opportunities.categories">
                          <option v-for="categories in findManyCategories" :key="categories.id" :value="categories">
                            {{ categories.name }}
                          </option>
                        </select></td>
                    </tr>
                  </tbody>
                </table>
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
  /* eslint-disable camelcase */

  import findManyOpportunities from "~/graphql/query/findManyOpportunities";
  import findManyUsers from '~/graphql/query/findManyUsers'
  import findManyCategories from '~/graphql/query/findManyCategories'
  

  const DELETE_OPPORTUNITY = gql`
    mutation ($name: String!, $next_step: String!, $name: String!, $grand_total: String!, $categories: String!, $quote_stage: String!, $valid_until: String!, $lead_source: String!, $expected_close_date: String!, $assigned_to: String!, $description: String!, $currency: String!, $campaign: String!, $amount: String!, $account_name: String!, $next_step: String!, $created_at: String!, $probability: String!, $sales_stage: String!, $type: String!){
    createOneOpportunities(data: {name: $name, next_step: $next_step, name: $name, grand_total: $grand_total, categories: $categories, quote_stage: $quote_stage, valid_until: $valid_until, lead_source: $lead_source, expected_close_date: $expected_close_date, assigned_to: $assigned_to, description: $description, currency: $currency, campaign: $campaign, amount: $amount, account_name: $account_name, created_at: $created_at, probability: $probability, sales_stage: $sales_stage,type: $type,}) {
        categories
        name
        grand_total
        quote_stage
        valid_until
        lead_source
        expected_close_date
        assigned_to
        description
        currency
        campaign
        amount
        account_name
        next_step
        opportunity
        created_at
        probability
        sales_stage
        discount
        type
  }
}`;

const UPDATE_OPPORTUNITY = gql`
  mutation updateOneopportunities($id: Int!){
  updateOneOpportunities(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Opportunity'
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
   async deleteOpportunity(opportunity){
    await this.$apollo.mutate({
        mutation: DELETE_OPPORTUNITY,
        variables: {
          id: opportunity.id
        },
        refetchQueries: [
          {
            query: findManyOpportunities
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/customers/opportunities'})
            }).catch(err => console.log(err));
    },
    async updateOpportunity(opportunity){
    await this.$apollo.mutate({
        mutation: UPDATE_OPPORTUNITY,
        variables: {
          id: opportunity.id
        },
        refetchQueries: [
          {
            query: findManyOpportunities
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyOpportunities: {
      query: findManyOpportunities,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
    findManyCampaigns: {
        prefetch: true,
        query: findManyCampaigns
      },
    findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
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