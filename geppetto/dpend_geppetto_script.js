Simulation.addWatchLists([{name:"pendvars",variablePaths:["pend.mechanical.SimulationTree.theta", "pend.mechanical.SimulationTree.p",]}]);
Simulation.startWatch();
Simulation.start();


G.addWidget(Widgets.PLOT);
Plot1.setName("angle arm0");
options = {yaxis:{min:-2,max:2},xaxis:{min:0,max:100,show:false}};
Plot1.setOptions(options);
Plot1.setPosition(93,88);
Plot1.setSize(230,510);
Plot1.plotData(pend.mechanical.SimulationTree.theta0);

G.wait(100);

G.addWidget(Widgets.PLOT);
options = {yaxis:{min:-2,max:2},xaxis:{min:0,max:100,show:false}};
Plot2.setPosition(93,339);
Plot2.setSize(230,510);
Plot2.setName("angular momentum arm0");
Plot2.setOptions(options);
Plot2.plotData(pend.mechanical.SimulationTree.p0);


//Adding silly info
G.addWidget(Widgets.POPUP);
Popup1.setMessage("A dynamic double pendulum!");
Popup1.setName("Description");
Popup1.setPosition(710,398);
Popup1.setSize(160,498);

Simulation.addDynamicVisualization(pend.visual, "pivot0", pend.mechanical.SimulationTree.theta0, GEPPETTO.setLocalRotationZ, function(x){return x});
Simulation.addDynamicVisualization(pend.visual, "pivot1", pend.mechanical.SimulationTree.theta1, GEPPETTO.setLocalRotationZ, function(x){return x});