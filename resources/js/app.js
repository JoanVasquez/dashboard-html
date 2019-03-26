
(function() {
  $(document).ready(function() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    let linearChart = document.getElementById('linear-chart').getContext('2d');
    new Chart(linearChart, {
      type: 'bar',
      data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambriedge', 'New Bedford'],
        datasets: [
          {
            label: 'POPULATION',
            data: [
              617594,
              181045,
              153060,
              706953,
              105162
            ],
            backgroundColor: [
              'rgba(255, 121, 121,0.8)',
              'rgba(235, 77, 75,0.8)',
              'rgba(255, 190, 118,0.8)',
              'rgba(240, 147, 43,0.8)',
              'rgba(34, 166, 179,0.8)',
              'rgba(126, 214, 223,0.8)'
            ],
            borderWidth: 2,
            borderColor: '#777'
            //backgroundColor: 'green'
          }
        ]
      }
    });

    let pieChart = document.getElementById('pie-chart').getContext('2d');

    new Chart(pieChart, {
      type: 'polarArea',
      data: {
        labels: ['JavaScript', 'Python', 'Ruby', 'C#', 'Java'],
        datasets: [
          {
            data: [
              947,
            840,
            682,
            469,
            980
            ],
            backgroundColor: [
              'rgba(255, 121, 121,0.8)',
              'rgba(235, 77, 75,0.8)',
              'rgba(255, 190, 118,0.8)',
              'rgba(240, 147, 43,0.8)',
              'rgba(34, 166, 179,0.8)',
              'rgba(126, 214, 223,0.8)'
            ],
            borderWidth: 2,
            borderColor: '#777'
            //backgroundColor: 'green'
          }
        ]
      }
    });

  });
})();