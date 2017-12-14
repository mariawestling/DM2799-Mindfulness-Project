var TreeView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.treeButton = container.find("#treeButton");
  this.newSpeed;
  this.currentSpeed;

  model.addObserver(this, "tree");

  document.getElementById("treeVideo").playbackRate += 0.5;

  this.update = function() {
    this.newSpeed = model.convertHeartRate();
    this.currentSpeed = document.getElementById("treeVideo").playbackRate;
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    if (0.7 <= (this.currentSpeed + this.newSpeed) <= 2.3){
      document.getElementById("treeVideo").playbackRate += this.newSpeed;
      console.log(document.getElementById("treeVideo").playbackRate);
    }
  }
}
