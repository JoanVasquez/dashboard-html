(function() {
  $(document).ready(function() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    if($("#world-map-markers").length) {
      $("#world-map-markers").vectorMap({
        map: "world_mill_en",
        borderColor: "#fff",
        borderOpacity: 0.25,
        borderWidth: 0,
        color: "#e6e6e6",
        regionStyle: {
          initial: {
            fill: "#f4f4f4"
          }
        },
  
        markerStyle: {
          initial: {
            r: 5,
            fill: "#fff",
            "fill-opacity": 1,
            stroke: "#000",
            "stroke-width": 1,
            "stroke-opacity": 0.4
          }
        },
  
        markers: [
          {
            latLng: [21.0, 78.0],
            name: "INDIA : 350"
          },
          {
            latLng: [-33.0, 151.0],
            name: "Australia : 250"
          },
          {
            latLng: [36.77, -119.41],
            name: "USA : 250"
          },
          {
            latLng: [55.37, -3.41],
            name: "UK   : 250"
          },
          {
            latLng: [25.2, 55.27],
            name: "UAE : 250"
          }
        ],
  
        series: {
          regions: [
            {
              values: {
                US: "#49c5b6",
                SA: "#667add",
                AU: "#50d38a",
                IN: "#60bafd",
                GB: "#ff758e"
              },
              attribute: "fill"
            }
          ]
        },
        hoverOpacity: null,
        normalizeFunction: "linear",
        zoomOnScroll: false,
        scaleColors: ["#000000", "#000000"],
        selectedColor: "#000000",
        selectedRegions: [],
        enableZoom: false,
        hoverColor: "#fff"
      });
    }

    Chart.defaults.global.responsive = true;

    let linearChart = document.getElementById('linear-chart');

    if(linearChart) {
      linearChart = linearChart.getContext('2d');
      new Chart(linearChart, {
        type: 'line',
        data: {
          labels: ['JavaScript', 'PHP', '.NET', 'Java', 'R'],
          datasets: [
            {
              label: 'POPULARITY',
              data: [
                617594,
                181045,
                153060,
                706953,
                105162
              ],
              backgroundColor: [
                '#0984e3'
              ],
              borderWidth: 2,
              borderColor: '#777'
              //backgroundColor: 'green'
            }
          ]
        }
      });
    }

    let pieChart = document.getElementById('pie-chart');

    if(document.getElementById('pie-chart')) {
      pieChart = pieChart.getContext('2d');
      new Chart(pieChart, {
        type: 'doughnut',
        data: {
          labels: ['Websites', 'Mobile Apps', 'Webservice'],
          datasets: [
            {
              data: [
                600,
                300,
                150,
              ],
              backgroundColor: [
                '#3498db',
                '#e74c3c',
                '#2ecc71'
              ],
              borderWidth: 1
            }
          ]
        }
      });
    }

    let tasksChart = document.getElementById('tasks-chart');

    if(document.getElementById('tasks-chart')) {
      tasksChart = tasksChart.getContext('2d');
      new Chart(tasksChart, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          datasets: [
            {
              data: [
                505, 409, 654, 800, 723
              ],
              backgroundColor: [
                '#27ae60',
                '#27ae60',
                '#27ae60',
                '#27ae60',
                '#27ae60'
              ]
              //backgroundColor: 'green'
            }
          ]
        }
      });
    }

    let productionChart = document.getElementById('production-chart');

    if(document.getElementById('production-chart')) {
      productionChart = productionChart.getContext('2d');
      new Chart(productionChart, {
        type: 'polarArea',
        data: {
          labels: ['Blog', 'E-Commerce', 'CMS'],
          datasets: [
            {
              label: 'HOMEWORKS HISTORY',
              data: [
                60, 30, 80
              ],
              backgroundColor: [
                '#e74c3c',
                '#2980b9',
                '#8e44ad'
              ]
              //backgroundColor: 'green'
            }
          ]
        }
      });
    }

    let notifications = document.querySelectorAll('.btn-notification');

    if(notifications.length) {
      notifications.forEach((item, index) => {
        item.addEventListener('click', function(event) {
          if(index === 0) {
            toastr.success('Notification Top Right')
          }
        });
      });
    }

  });
})();
