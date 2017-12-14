var SmokeView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.smokeButton = container.find("#smokeButton");
  this.newSpeed;
  this.currentSpeed;

  model.addObserver(this, "smoke");

  document.getElementById("smokeVideo").playbackRate += 0.5;

  this.update = function() {
    this.newSpeed = model.convertHeartRate();
    console.log("tree new speed");
    this.currentSpeed = document.getElementById("smokeVideo").playbackRate;
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    if (0.7 <= (this.currentSpeed + this.newSpeed) <= 2.3){
      document.getElementById("smokeVideo").playbackRate += this.newSpeed;
      console.log(document.getElementById("smokeVideo").playbackRate);
    }
  }
}
