Simulation.addWatchLists([{name:"pendvars",variablePaths:["pend.electrical.SimulationTree.theta", "pend.electrical.SimulationTree.p",]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);
Plot1.setName("Simple pendulum");
options = {yaxis:{min:-10,max:10},xaxis:{min:0,max:100,show:false}};
Plot1.setOptions(options);
Plot1.setPosition(93,88);
Plot1.setSize(230,510);
Plot1.plotData("pend.electrical.SimulationTree.theta");

G.wait(100);

//Adding silly info
G.addWidget(Widgets.POPUP);
Popup1.setMessage("I am testing Geppetto functionality with generic LEMS models.");
Popup1.setName("Description");
Popup1.setPosition(710,398);
Popup1.setSize(160,498);


