<template>
  <div class="row">
    <div class="col-lg-6">
      <h3 style="">Sales Reports</h3>
      <canvas data-mdb-chart="bar" data-mdb-dataset-value="Traffic"
        data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
        data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"></canvas>
    </div>
    <div class="col-lg-6">
      <h3 style="">Customers Reports</h3>
      <canvas data-mdb-chart="bar" data-mdb-dataset-value="Traffic"
        data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
        data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"></canvas>
    </div>
    <div class="col-lg-6">
      <h3 style="">Marketing Reports</h3>
      <canvas data-mdb-chart="bar" data-mdb-dataset-value="Traffic"
        data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
        data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"></canvas>
    </div>
    <div class="col-lg-6">
      <h3 style="">Content Reports</h3>
      <canvas data-mdb-chart="bar" data-mdb-dataset-value="Traffic"
        data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
        data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"></canvas>
    </div>
    <div class="col-lg-6">
      <h3 style="">Shop Reports</h3>
      <canvas data-mdb-chart="bar" data-mdb-dataset-value="Traffic"
        data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
        data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"></canvas>
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