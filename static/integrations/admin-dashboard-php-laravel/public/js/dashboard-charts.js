/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/dashboard-charts.js":
/*!******************************************!*\
  !*** ./resources/js/dashboard-charts.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

initStaticCharts();
getDynamicChartData();

function getDynamicChartData() {
  fetch("/performance/traffic", {
    method: "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var impressions = data.map(function (value) {
      return value.impressions;
    });
    var clicks = data.map(function (value) {
      return value.clicks;
    });
    var dates = data.map(function (value) {
      return value["created_at"];
    });
    initDynamicChart(impressions, clicks, dates);
  })["catch"](function (error) {
    return console.log(error);
  });
}

function initDynamicChart(impressions, clicks, dates) {
  var optionsChartImpressionsAndClicks = {
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          stacked: false
        }]
      }
    }
  };
  var dataChartImpressionsAndClicks = {
    type: "line",
    data: {
      labels: dates,
      datasets: [{
        label: "Impressions",
        data: impressions
      }, {
        label: "Clicks",
        data: clicks,
        backgroundColor: "rgba(66, 133, 244, 0.0)",
        borderColor: "#33b5e5",
        pointBorderColor: "#33b5e5",
        pointBackgroundColor: "#33b5e5"
      }]
    }
  };
  new mdb.Chart(document.getElementById("chart-impressions-and-clicks"), dataChartImpressionsAndClicks, optionsChartImpressionsAndClicks);
}

function initStaticCharts() {
  // Chart devices options
  var chartDevicesOptions = {
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
          formatter: function formatter(value, ctx) {
            var sum = 0;
            var dataArr = dataChartDevices1.data.datasets[0].data;
            dataArr.map(function (data) {
              sum += data;
            });
            var percentage = (value * 100 / sum).toFixed(2) + "%";
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
  }; // Chart devices 1

  var dataChartDevices1 = {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{
        label: "Traffic",
        data: [2112, 2343, 2545],
        backgroundColor: ["rgba(63, 81, 181, 0.5)", "rgba(77, 182, 172, 0.5)", "rgba(66, 133, 244, 0.5)"]
      }]
    }
  };
  new mdb.Chart(document.getElementById("chart-devices-1"), dataChartDevices1, chartDevicesOptions); // Chart devices 2

  var dataChartDevices2 = {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{
        label: "Traffic",
        data: [2112, 2943, 1545],
        backgroundColor: ["rgba(63, 81, 181, 0.5)", "rgba(77, 182, 172, 0.5)", "rgba(66, 133, 244, 0.5)"]
      }]
    }
  };
  new mdb.Chart(document.getElementById("chart-devices-2"), dataChartDevices2, chartDevicesOptions);
  var optionsChartPagesAndQueries = {
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          stacked: false
        }]
      }
    }
  };
  var dataChartPagesAndQueries = {
    type: "line",
    data: {
      labels: ["06.08.2020", "07.08.2020", "08.08.2020", "09.08.2020", "10.08.2020", "11.08.2020", "12.08.2020"],
      datasets: [{
        label: "Unique pages",
        data: [25, 49, 40, 21, 56, 75, 30]
      }, {
        label: "Unique queries",
        data: [58, 18, 30, 59, 46, 77, 90],
        backgroundColor: "rgba(66, 133, 244, 0.0)",
        borderColor: "#33b5e5",
        pointBorderColor: "#33b5e5",
        pointBackgroundColor: "#33b5e5"
      }]
    }
  };
  new mdb.Chart(document.getElementById("chart-pages-and-queries"), dataChartPagesAndQueries, optionsChartPagesAndQueries);
}

/***/ }),

/***/ 2:
/*!************************************************!*\
  !*** multi ./resources/js/dashboard-charts.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/admin-dashboard-php-laravel/resources/js/dashboard-charts.js */"./resources/js/dashboard-charts.js");


/***/ })

/******/ });