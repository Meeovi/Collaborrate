initStaticCharts();
getDynamicChartData();

function getDynamicChartData() {
    fetch("/performance/traffic", {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            const impressions = data.map(value => value.impressions);
            const clicks = data.map(value => value.clicks);
            const dates = data.map(value => value["created_at"]);

            initDynamicChart(impressions, clicks, dates);
        })
        .catch(error => console.log(error));
}

function initDynamicChart(impressions, clicks, dates) {
    const optionsChartImpressionsAndClicks = {
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        stacked: false
                    }
                ]
            }
        }
    };

    const dataChartImpressionsAndClicks = {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Impressions",
                    data: impressions
                },
                {
                    label: "Clicks",
                    data: clicks,
                    backgroundColor: "rgba(66, 133, 244, 0.0)",
                    borderColor: "#33b5e5",
                    pointBorderColor: "#33b5e5",
                    pointBackgroundColor: "#33b5e5"
                }
            ]
        }
    };

    new mdb.Chart(
        document.getElementById("chart-impressions-and-clicks"),
        dataChartImpressionsAndClicks,
        optionsChartImpressionsAndClicks
    );
}

function initStaticCharts() {
    // Chart devices options
    const chartDevicesOptions = {
        dataLabelsPlugin: true,
        options: {
            legend: {
                position: "right",
                labels: {
                    boxWidth: 10
                }
            },
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = dataChartDevices1.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = ((value * 100) / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: "white",
                    labels: {
                        title: {
                            font: {
                                size: "9"
                            }
                        }
                    }
                }
            }
        }
    };

    // Chart devices 1
    const dataChartDevices1 = {
        type: "doughnut",
        data: {
            labels: ["Desktop", "Mobile", "Tablet"],
            datasets: [
                {
                    label: "Traffic",
                    data: [2112, 2343, 2545],
                    backgroundColor: [
                        "rgba(63, 81, 181, 0.5)",
                        "rgba(77, 182, 172, 0.5)",
                        "rgba(66, 133, 244, 0.5)"
                    ]
                }
            ]
        }
    };

    new mdb.Chart(
        document.getElementById("chart-devices-1"),
        dataChartDevices1,
        chartDevicesOptions
    );

    // Chart devices 2
    const dataChartDevices2 = {
        type: "doughnut",
        data: {
            labels: ["Desktop", "Mobile", "Tablet"],
            datasets: [
                {
                    label: "Traffic",
                    data: [2112, 2943, 1545],
                    backgroundColor: [
                        "rgba(63, 81, 181, 0.5)",
                        "rgba(77, 182, 172, 0.5)",
                        "rgba(66, 133, 244, 0.5)"
                    ]
                }
            ]
        }
    };

    new mdb.Chart(
        document.getElementById("chart-devices-2"),
        dataChartDevices2,
        chartDevicesOptions
    );

    const optionsChartPagesAndQueries = {
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        stacked: false
                    }
                ]
            }
        }
    };

    const dataChartPagesAndQueries = {
        type: "line",
        data: {
            labels: [
                "06.08.2020",
                "07.08.2020",
                "08.08.2020",
                "09.08.2020",
                "10.08.2020",
                "11.08.2020",
                "12.08.2020"
            ],
            datasets: [
                {
                    label: "Unique pages",
                    data: [25, 49, 40, 21, 56, 75, 30]
                },
                {
                    label: "Unique queries",
                    data: [58, 18, 30, 59, 46, 77, 90],
                    backgroundColor: "rgba(66, 133, 244, 0.0)",
                    borderColor: "#33b5e5",
                    pointBorderColor: "#33b5e5",
                    pointBackgroundColor: "#33b5e5"
                }
            ]
        }
    };

    new mdb.Chart(
        document.getElementById("chart-pages-and-queries"),
        dataChartPagesAndQueries,
        optionsChartPagesAndQueries
    );
}
