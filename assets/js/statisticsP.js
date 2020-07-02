google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(curveLineChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['APIs', 'Number of users'],
    ['Authentication APi ', 11,],
    ['Email API',      2],
    ['SMS API',  2],
    ['Weather API', 2],
    ['CurrencyConverter API',    7]
  ]);

  var options = {
    title: 'A statistics of MicroAPI Users',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

function curveLineChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2017',  1000,      400],
      ['2018',  1170,      460],
      ['2019',  660,       120],
      ['2020',  1030,      540]
    ]);

    var options = {
      title: 'Our Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }