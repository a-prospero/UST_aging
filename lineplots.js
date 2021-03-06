 // Create our first trace
 var totalinv = {
    x: ["January", "February", "March"],
    y: [3832595, 3432667, 1239205],
    mode: 'lines+markers+text',
    name: 'Total invoices for the month',
    type: "scatter"
  };
  
  // Create our second trace
  var invdue = {
    x: ["January", "February", "March"],
    y: [210527, 518822, 478879],
    mode: 'lines+markers+text',
    name: 'Remainder invoices due',
    type: "scatter"
  };
  
  // The data array consists of both traces
  var data = [totalinv, invdue];
  
  // Note that we omitted the layout object this time
  // This will use default parameters for the layout
  Plotly.newPlot("plot", data);