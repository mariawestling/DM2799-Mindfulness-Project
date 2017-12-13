var TreeView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.treeButton = container.find("#treeButton");

  // model.addObserver(this);

  // this.update = function() {
  //   newSpeed = model.convertHeartRate();
  //   if (0.7 <= (document.getElementById("treeVideo").playbackRate + newSpeed) <= 2.3){
  //     document.getElementById("treeVideo").playbackRate += newSpeed;
  //   }
  // }
}
