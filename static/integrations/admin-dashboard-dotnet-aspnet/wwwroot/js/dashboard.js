  (function() {
    const datatableInstance = new mdb.Datatable(document.getElementById('table-impression-and-clicks'), {
      columns: [
        {
          label: 'Day',
          field: 'day'
        },
        {
          label: 'Impressions',
          field: 'impressions'
        },
        {
          label: 'Clicks',
          field: 'clicks'
        },
        {
          label: 'Site CTR',
          field: 'ctr'
        },
        {
          label: 'Average Position',
          field: 'position'
        }
      ],
      rows: []
    })
    
    fetch('/performance/traffic')
      .then(response => response.json())
      .then(data => {
        // Impressions & clicks Chart
        const optionsChartImpressionsAndClicks = {
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  stacked: false,
                },
              ],
            },
          },
        };

        const dataChartImpressionsAndClicks = {
          type: "line",
          data: {
            labels: data.map(entry => new Date(entry.createdAt).toDateString()),
            datasets: [
              {
                label: "Impressions",
                data: data.map(entry => entry.impressions)
              },
              {
                label: "Clicks",
                data: data.map(entry => entry.clicks),
                backgroundColor: "rgba(66, 133, 244, 0.0)",
                borderColor: "#33b5e5",
                pointBorderColor: "#33b5e5",
                pointBackgroundColor: "#33b5e5",
              },
            ]
          }
        };

        const chartInstance = new mdb.Chart(
          document.getElementById("chart-impressions-and-clicks"),
          dataChartImpressionsAndClicks,
          optionsChartImpressionsAndClicks
        );

        // Impressions & clicks Table

        datatableInstance.update({
          rows: data.map(entry => ({
            ...entry,
            ctr: `${(entry.clicks / entry.impressions * 100).toFixed(2)}%`,
            day: new Date(entry.createdAt).toDateString()
          }))
        })

      })

    // Chart devices options
    const chartDevicesOptions = {
      dataLabelsPlugin: true,
      options: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 10,
          },
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = dataChartDevices1.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + "%";
              return percentage;
            },
            color: "white",
            labels: {
              title: {
                font: {
                  size: "9",
                },
              },
            },
          },
        },
      },
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
              "rgba(66, 133, 244, 0.5)",
            ],
          },
        ],
      },
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
              "rgba(66, 133, 244, 0.5)",
            ],
          },
        ],
      },
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
              stacked: false,
            },
          ],
        },
      },
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
          "12.08.2020",
        ],
        datasets: [
          {
            label: "Unique pages",
            data: [25, 49, 40, 21, 56, 75, 30],
          },
          {
            label: "Unique queries",
            data: [58, 18, 30, 59, 46, 77, 90],
            backgroundColor: "rgba(66, 133, 244, 0.0)",
            borderColor: "#33b5e5",
            pointBorderColor: "#33b5e5",
            pointBackgroundColor: "#33b5e5",
          },
        ],
      },
    };

    new mdb.Chart(
      document.getElementById("chart-pages-and-queries"),
      dataChartPagesAndQueries,
      optionsChartPagesAndQueries
    );

  })()