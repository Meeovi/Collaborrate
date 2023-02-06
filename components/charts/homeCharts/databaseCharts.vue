<template>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <table id="datatable">
            <thead>
                <tr>
                    <th></th>
                    <th>Boys</th>
                    <th>Girls</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>2016</th>
                    <td>30 386</td>
                    <td>28 504</td>
                </tr>
                <tr>
                    <th>2017</th>
                    <td>29 173</td>
                    <td>27 460</td>
                </tr>
                <tr>
                    <th>2018</th>
                    <td>28 430</td>
                    <td>26 690</td>
                </tr>
                <tr>
                    <th>2019</th>
                    <td>28 042</td>
                    <td>26 453</td>
                </tr>
                <tr>
                    <th>2020</th>
                    <td>27 063</td>
                    <td>25 916</td>
                </tr>
                <tr>
                    <th>2021</th>
                    <td>28 684</td>
                    <td>27 376</td>
                </tr>
            </tbody>
        </table>
    </figure>
</template>

<script>
    export default {
        mounted() {
            Highcharts.chart('container', {
                data: {
                    table: 'datatable'
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Live births in Norway'
                },
                subtitle: {
                    text: 'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: 'Amount'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.point.y + ' ' + this.point.name.toLowerCase();
                    }
                }
            });
        }
    }
</script>