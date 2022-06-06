<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/system/import-management">
          <FormulateInput type="button">Import Data</FormulateInput>
        </a>
        <a class="navbar-brand" href="/admin/system/export-management">
          <FormulateInput type="button" style="float:right; right: 15px; position: absolute;">Export Data
          </FormulateInput>
        </a>
      </div>
    </nav>
    <br>

    <div class="row">
      <div class="col-3">
        <!-- Tab navs -->
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
        </div>
      </div>

      <div class="col-9">
        <div id="v-tabs-tabContent" class="tab-content">
          <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
            <Generalsettings />
          </div>
          <div id="v-tabs-catalog" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-catalog-tab">
            <Salesettings />
          </div>
          <div id="v-tabs-security" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-security-tab">
            <Customersettings />
          </div>
          <div id="v-tabs-customers" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-customers-tab">
            <Marketingsettings />
          </div>
          <div id="v-tabs-sales" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-sales-tab">
            <Reportsettings />
          </div>
          <div id="v-tabs-payments" class="tab-pane fade" role="tabpanel" aria-labelledby="v-tabs-payments-tab">
            <Shopsettings />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Generalsettings from '~/components/settings/generalsettings'
import Salesettings from '~/components/settings/salesettings'
import Marketingsettings from '~/components/settings/marketingsettings'
import Customersettings from '~/components/settings/customersettings'
import Reportsettings from '~/components/settings/reportsettings'
import Shopsettings from '~/components/settings/shopsettings'

  export default {

    components: {
        Generalsettings,
        Salesettings,
        Marketingsettings,
        Customersettings,
        Reportsettings,
        Shopsettings,
    },
    head: {
      title: 'General Settings'
    }
  }

</script>
