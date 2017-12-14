var BubbleView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.bubbleButton = container.find("#bubbleButton");
  this.newSpeed;
  this.currentSpeed;

  model.addObserver(this, "bubble");

  document.getElementById("bubbleVideo").playbackRate += 0.5;

  this.update = function() {
    this.newSpeed = model.convertHeartRate();
    console.log("bubble new speed", this.newSpeed);
    this.currentSpeed = document.getElementById("bubbleVideo").playbackRate;
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    if (0.7 <= (this.currentSpeed + this.newSpeed) <= 2.3){
      document.getElementById("bubbleVideo").playbackRate += this.newSpeed;
      console.log(document.getElementById("bubbleVideo").playbackRate);
    }
  }
}
