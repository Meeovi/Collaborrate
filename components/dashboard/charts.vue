<template>
    <div>
      <line-chart :data="chartData"></line-chart>
    </div>
</template>

<script>
export default {
    data: {
      chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    }
  }
</script>