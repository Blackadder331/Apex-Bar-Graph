const colorPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

const colorDefault = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-default")
    .trim();

const colorLabel = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-label")
    .trim();

const fontFamily = getComputedStyle(document.documentElement)
    .getPropertyValue("--font-family")
    .trim();

const defaultOptions = {
    chart: {
        toolbar: {show: false, },
        selection: {enabled: false, },
        zoom: {enabled: false, },
        width: "100%",
        height: 250,
        offsetY: 8,
    },
    stroke: { lineCap: "round", },
    dataLabels: { enabled: false, },
    legend: { show:false, },
    states: {
        hover: {
            filter: { type: "none", },
        },
    },
};

var barOptions = {
    ...defaultOptions,
    chart: {
        ...defaultOptions.chart,
        type: "bar",
    },
    tooltip: {
        enabled: true,
        fillSeriesColor: false,
        style: { fontFamily: fontFamily, },
        y: {
            formatter: (value) => {
                return `${value}K`;
            },
        },
    },
    series: [
        {

            name: "Last Year",
            data: [23, 25, 21, 25, 22, 31, 34, 32, 33, 42, 33, 24],
           
        },
        {   
            name: "This Year",
            data: [34, 32, 33, 42, 38, 44, 23, 35, 41, 48, 45, 63],
        },
    ],
    colors: [colorDefault, colorPrimary],
    stoke: { show: false },
    grid: {
        borderColor:
        "rgba(255, 255, 225, 0.05)",
        padding: {
            left: 0,
            right: 0,
            top: -16,
            bottom: -8
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "50%",
            borderRadius: 6,
        },
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        labels: {
            floating: true,
            show: true,
            style: {
                fontFamily,
                colors: colorLabel,
            },
        },
        axisBorder: { show: false, },
        axisTicks: { show: false, },
        crosshairs: { show: false, },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
};

var barChart =
    new ApexCharts(
        document.querySelector("#bar-chart"),
        barOptions
    );

barChart.render();



// Dark mode


document.getElementById('dark-mode-btn').addEventListener('click', function() {
// Toggle the 'dark-mode' class on the body element
document.body.classList.toggle('dark-mode');

// Toggle the 'dark-mode' class on the .container element
document.querySelector('.container').classList.toggle('dark-mode');
document.querySelector('.dark-mode-btn').classList.toggle('dark-mode');

// Change the content of the .dark-mode-btn element
if (document.getElementById('dark-mode-btn').innerHTML === '🌞') {
    document.getElementById('dark-mode-btn').innerHTML = '🌙';
} else {
    document.getElementById('dark-mode-btn').innerHTML = '🌞';
    }


// Get the current mode (dark or light)
const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';

// Define the options for the chart in dark mode
const darkOptions = {
  ...barOptions,
  colors: ['#9f9f9f', '#ffb628'], // change the colors to white and gray
  xaxis: {
    ...barOptions.xaxis,
    labels: {
      ...barOptions.xaxis.labels,
      colors: '#ffb628', // change the color of the labels to white
    },
  },
};

// Update the chart options based on the current mode
if (currentMode === 'dark') {
  barChart.updateOptions(darkOptions);
} else {
  barChart.updateOptions(barOptions);
}


});




