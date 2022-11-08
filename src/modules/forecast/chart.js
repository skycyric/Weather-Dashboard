const chart = new CanvasJS.Chart('chartContainer', {
  title: {
    text: 'Weekly Weather Forecast',
  },
  axisY: {
    suffix: ' °C',
    maximum: 40,
    gridThickness: 0,
  },
  toolTip: {
    shared: true,
    content:
      '{name} </br> <strong>Temperature: </strong> </br> Min: {y[0]} °C, Max: {y[1]} °C',
  },
  data: [
    {
      type: 'rangeSplineArea',
      fillOpacity: 0.1,
      color: '#91AAB1',
      indexLabelFormatter: formatter,
      dataPoints: [
        { label: 'Monday', y: [15, 26], name: 'rainy' },
        { label: 'Tuesday', y: [15, 27], name: 'rainy' },
        { label: 'Wednesday', y: [13, 27], name: 'sunny' },
        { label: 'Thursday', y: [14, 27], name: 'sunny' },
        { label: 'Friday', y: [15, 26], name: 'cloudy' },
        { label: 'Saturday', y: [17, 26], name: 'sunny' },
        { label: 'Sunday', y: [16, 27], name: 'rainy' },
      ],
    },
  ],
});

chart.render();
