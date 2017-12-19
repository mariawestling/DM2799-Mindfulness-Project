var BubbleView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.bubbleButton = container.find("#bubbleButton");
  this.currentSpeed;

  model.addObserver(this, "bubble");
//  console.log("HEJ");

  document.getElementById("bubbleVideo").playbackRate += 1.0;


  this.update = function(newSpeed) {

    // this.newSpeed = model.convertHeartRate();
    // console.log("bubble new speed", newSpeed);
    this.currentSpeed = document.getElementById("bubbleVideo").playbackRate;
    // console.log(this.currentSpeed + newSpeed);
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    // if (0.7 <= (this.currentSpeed + newSpeed) && (this.currentSpeed + newSpeed) <= 2.3){
      document.getElementById("bubbleVideo").playbackRate += newSpeed;
      // console.log(document.getElementById("bubbleVideo").playbackRate);
    // }
  }
}
