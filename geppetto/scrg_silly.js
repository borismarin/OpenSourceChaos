Simulation.addWatchLists([{name:"useless",variablePaths:["car_entity.electrical.SimulationTree.x"]}]);
Simulation.startWatch();
Simulation.start();


G.addWidget(Widgets.PLOT);
Plot1.setName("x");
options = {yaxis:{min:0,max:200},xaxis:{min:0,max:100,show:false}};
Plot1.setOptions(options);
Plot1.setPosition(93,88);
Plot1.setSize(230,510);
Plot1.plotData(car_entity.electrical.SimulationTree.x);

//Adding silly info
G.addWidget(Widgets.POPUP);
Popup1.setMessage("I am testing Geppetto functionality with generic LEMS models.");
Popup1.setName("Description");
Popup1.setPosition(710,398);
Popup1.setSize(160,498);


