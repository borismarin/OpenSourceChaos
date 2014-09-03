Simulation.addWatchLists([{name:"hhvars",variablePaths:["pend.electrical.SimulationTree.theta", "pend.electrical.SimulationTree.p",]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);

Plot1.setName("Simple pendulum");

options = {yaxis:{min:-10,max:10},xaxis:{min:0,max:400,show:false}};

Plot1.setOptions(options);
Plot1.setPosition(93,88);
Plot1.setSize(230,510);
Plot1.plotData("pend.electrical.SimulationTree.theta");

G.wait(100);

G.addWidget(Widgets.PLOT);

options = {yaxis:{min:0,max:250},xaxis:{min:0,max:400,show:false}};


G.addWidget(Widgets.POPUP);
Popup1.setMessage("I am testing Geppetto functionality with generic LEMS models.");
Popup1.setName("Description");
Popup1.setPosition(710,398);
Popup1.setSize(160,498);

window.setTimeout(function(){Simulation.addBrightnessFunction("pend.electrical", "pend.electrical.SimulationTree.x", function(x){return (x+0.06)/0.06;})},500);

G.incrementCameraZoom(-0.15);

