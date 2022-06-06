<template>
  <div class="row">
    <div class="col-lg-6">
      <h3 style="">Sales Reports</h3>
      <line-chart :data="chartData"></line-chart>
    </div>
    <div class="col-lg-6">
      <h3 style="">Customers Reports</h3>
      <line-chart :data="chartData"></line-chart>
    </div>
    <div class="col-lg-6">
      <h3 style="">Marketing Reports</h3>
      <line-chart :data="chartData"></line-chart>
    </div>
    <div class="col-lg-6">
      <h3 style="">Content Reports</h3>
      <line-chart :data="chartData"></line-chart>
    </div>
    <div class="col-lg-6">
      <h3 style="">Shop Reports</h3>

    </div>
  </div>
</template>

<script>

export default {
    data: {
      chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    },
  layout: 'dashboard',
  head: {
    title: 'Reports'
  }
}
</script>