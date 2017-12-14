var BubbleView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.bubbleButton = container.find("#bubbleButton");
  this.currentSpeed;

  model.addObserver(this, "bubble");

  document.getElementById("bubbleVideo").playbackRate += 0.5;

  this.update = function(newSpeed) {
    // this.newSpeed = model.convertHeartRate();
    console.log("bubble new speed", newSpeed);
    this.currentSpeed = document.getElementById("bubbleVideo").playbackRate;
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    if (0.7 <= (this.currentSpeed + newSpeed) <= 2.3){
      document.getElementById("bubbleVideo").playbackRate += newSpeed;
      console.log(document.getElementById("bubbleVideo").playbackRate);
    }
  }
}
