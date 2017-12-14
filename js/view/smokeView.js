var SmokeView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.smokeButton = container.find("#smokeButton");

  this.currentSpeed;

  model.addObserver(this, "smoke");

  document.getElementById("smokeVideo").playbackRate += 0.5;

  this.update = function(newSpeed) {
    this.newSpeed = model.convertHeartRate();
    console.log("smoke new speed", newSpeed);
    this.currentSpeed = document.getElementById("smokeVideo").playbackRate;
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    if (0.7 <= (this.currentSpeed + newSpeed) <= 2.3){
      document.getElementById("smokeVideo").playbackRate += newSpeed;
      console.log(document.getElementById("smokeVideo").playbackRate);
    }
  }
}
