<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <h1 style="text-align:center !important;color:white !important;width:100%;">Integrations Marketplace</h1>
    </nav>
    <br>

    <div class="row">
      <div class="col-3">
        <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
          <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
            aria-controls="v-tabs-home" aria-selected="true">General</a>
          <a id="v-tabs-catalog-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-catalog" role="tab"
            aria-controls="v-tabs-catalog" aria-selected="false">Sales</a>
          <a id="v-tabs-security-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-security" role="tab"
            aria-controls="v-tabs-security" aria-selected="false">Customers</a>
            <a id="v-tabs-customers-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-customers" role="tab"
            aria-controls="v-tabs-customers" aria-selected="false">Marketing</a>
            <a id="v-tabs-sales-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-sales" role="tab"
            aria-controls="v-tabs-sales" aria-selected="false">Reports</a>
            <a id="v-tabs-payments-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-payments" role="tab"
            aria-controls="v-tabs-payments" aria-selected="false">Shop</a>
            <a id="v-tabs-other-tab" class="nav-link" data-mdb-toggle="tab" href="#v-tabs-other" role="tab"
            aria-controls="v-tabs-other" aria-selected="false">Settings</a>
        </div>
      </div>

      <div class="col-9">
        <div id="v-tabs-tabContent" class="tab-content">
          <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
            <toppicks />
          </div>
          <div id="v-tabs-catalog" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-catalog-tab">
            <Sales />
          </div>
          <div id="v-tabs-security" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-security-tab">
            <Customers />
          </div>
          <div id="v-tabs-customers" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-customers-tab">
            <Marketings />
          </div>
          <div id="v-tabs-sales" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-sales-tab">
            <Reports />
          </div>
          <div id="v-tabs-payments" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-payments-tab">
            <Shops />
          </div>
          <div id="v-tabs-other" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-other-tab">
            <Users />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import toppicks from '~/components/integrations/toppicks'
import Sales from '~/components/integrations/sales'
import Marketings from '~/components/integrations/marketing'
import Customers from '~/components/integrations/customers'
import Reports from '~/components/integrations/reports'
import Shops from '~/components/integrations/shop'
import Users from '~/components/integrations/settings'

  export default {
    layout: 'dashboard',
    components: {
        toppicks,
        Sales,
        Marketings,
        Customers,
        Reports,
        Shops,
        Users
    },
    head: {
      title: 'Integrations'
    }
  }

</script>
