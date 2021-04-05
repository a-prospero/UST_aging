var dayspastdue = ["0-30 Days", "31-60 Days", "61-90 Days", "120 + Days"];
var amtpstdue = [4256470, 235026, 16954, 60224];

// Create the Trace
var trace1 = {
  x: dayspastdue,
  y: amtpstdue,
  type: "bar"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "Age Summary",
  xaxis: { title: "Days Past Due"},
  yaxis: { title: "Amount Past Due"}
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);