// Sidenav -->
  const sidenav = document.getElementById("sidenav-1");
  const instance = mdb.Sidenav.getInstance(sidenav);

  let innerWidth = null;

  const setMode = (e) => {
    // Check necessary for Android devices
    if (window.innerWidth === innerWidth) {
      return;
    }

    innerWidth = window.innerWidth;

    if (window.innerWidth < 1400) {
      instance.changeMode("over");
      instance.hide();
    } else {
      instance.changeMode("side");
      instance.show();
    }
  };

  setMode();

  // Event listeners
  window.addEventListener("resize", setMode);

// Chart users & sessions -->
  const dataUsersSessions = {
    type: "line",
    data: {
      labels: [
        "20 Sep",
        "21 Sep",
        "22 Sep",
        "23 Sep",
        "24 Sep",
        "25 Sep",
        "26 Sep",
      ],
      datasets: [
        {
          label: "Users",
          data: [650, 590, 800, 810, 560, 550, 400],
        },
        {
          label: "Sessions",
          data: [750, 690, 900, 910, 660, 750, 500],
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#33b5e5",
          pointBorderColor: "#33b5e5",
          pointBackgroundColor: "#33b5e5",
        },
      ],
    },
  };

  new mdb.Chart(
    document.getElementById("chart-users-sessions"),
    dataUsersSessions
  );

// Chart revenue & conversion -->
  const optionsRevenueConversion = {
    options: {
      scales: {
        yAxes: [
          {
            display: true,
            position: "left",
            id: "y-axis-1",
            ticks: {
              callback: function (value, index, values) {
                return "$" + value;
              },
            },
          },
          {
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  const dataRevenueConversion = {
    type: "line",
    data: {
      labels: [
        "20 Sep",
        "21 Sep",
        "22 Sep",
        "23 Sep",
        "24 Sep",
        "25 Sep",
        "26 Sep",
      ],
      datasets: [
        {
          label: "Transcations",
          yAxisID: "y-axis-1",
          data: [21, 23, 25, 34, 23, 19, 9],
          order: 2,
        },
        {
          label: "Conversion rate %",

          yAxisID: "y-axis-2",
          data: [1.5, 2, 0.5, 3, 1.2, 4, 3.4],
          type: "line",
          order: 1,
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#94DFD7",
          borderWidth: 2,
          pointBorderColor: "#94DFD7",
          pointBackgroundColor: "#94DFD7",
          lineTension: 0.0,
        },
      ],
    },
  };

  new mdb.Chart(
    document.getElementById("chart-revenue-conversion"),
    dataRevenueConversion,
    optionsRevenueConversion
  );

// Chart site health -->
  const optionsSiteHealth = {
    options: {
      scales: {
        yAxes: [
          {
            display: true,
            position: "left",
            id: "y-axis-1",
            ticks: {
              callback: function (value, index, values) {
                return value + " " + "%";
              },
            },
          },
          {
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  const dataSiteHealth = {
    type: "line",
    data: {
      labels: [
        "20 Sep",
        "21 Sep",
        "22 Sep",
        "23 Sep",
        "24 Sep",
        "25 Sep",
        "26 Sep",
      ],
      datasets: [
        {
          label: "Bounce rate",
          yAxisID: "y-axis-1",
          data: [51, 53, 55, 54, 53, 59, 59],
          order: 2,
        },
        {
          label: "Avg. Page Load Time (sec)",

          yAxisID: "y-axis-2",
          data: [1.5, 2, 0.5, 3, 1.2, 4, 3.4],
          type: "line",
          order: 1,
          backgroundColor: "rgba(66, 133, 244, 0.0)",
          borderColor: "#94DFD7",
          borderWidth: 2,
          pointBorderColor: "#94DFD7",
          pointBackgroundColor: "#94DFD7",
          lineTension: 0.0,
        },
      ],
    },
  };

  new mdb.Chart(
    document.getElementById("chart-site-health"),
    dataSiteHealth,
    optionsSiteHealth
  );

// Chart device performance -->
  const optionDevicePerformance = {
    options: {
      scales: {
        yAxes: [
          {
            stacked: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            stacked: false,
          },
        ],
      },
    },
  };

  const dataDevicePerformance = {
    type: "bar",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],

      datasets: [
        {
          label: "Users",
          data: [510, 653, 255],
        },
        {
          label: "Page views",
          data: [1251, 1553, 1355],
          backgroundColor: "#94DFD7",
          borderColor: "#94DFD7",
        },
      ],
    },
  };

  new mdb.Chart(
    document.getElementById("chart-device-performance"),
    dataDevicePerformance,
    optionDevicePerformance
  );

// Chart device transactions -->
  const optionTransactions = {
    options: {
      scales: {
        yAxes: [
          {
            display: true,
            position: "left",
            id: "y-axis-1",
          },
          {
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              beginAtZero: true,
              callback: function (value, index, values) {
                return value + " " + "%";
              },
            },
          },
        ],
        xAxes: [
          {
            stacked: false,
          },
        ],
      },
    },
  };

  const dataTransactions = {
    type: "bar",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],

      datasets: [
        {
          label: "Transactions",
          data: [51, 65, 25],
          yAxisID: "y-axis-1",
        },
        {
          label: "Conversion rate %",
          data: [0.2, 0.8, 0.4],
          yAxisID: "y-axis-2",
          backgroundColor: "#94DFD7",
          borderColor: "#94DFD7",
        },
      ],
    },
  };

  new mdb.Chart(
    document.getElementById("chart-transactions"),
    dataTransactions,
    optionTransactions
  );

// Chart sessions -->
  // Pie chart with plugin
  const dataSessions = {
    type: "pie",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          label: "Traffic",
          data: [3230, 4531, 1832],
          backgroundColor: [
            "rgba(63, 81, 181, 0.5)",
            "rgba(77, 182, 172, 0.5)",
            "rgba(66, 133, 244, 0.5)",
          ],
        },
      ],
    },
  };

  const optionsSessions = {
    dataLabelsPlugin: true,
    options: {
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = dataSessions.data.datasets[0].data;
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
                size: "14",
              },
            },
          },
        },
      },
    },
  };

  new mdb.Chart(
    document.getElementById("chart-sessions"),
    dataSessions,
    optionsSessions
  );