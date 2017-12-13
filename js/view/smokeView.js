var SmokeView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.smokeButton = container.find("#smokeButton");
  this.newSpeed;

  model.addObserver(this, "smoke");

  this.update = function() {
    newSpeed = model.convertHeartRate();
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    if (0.7 <= (document.getElementById("bubbleVideo").playbackRate + newSpeed) <= 2.3){
      document.getElementById("bubbleVideo").playbackRate += newSpeed;
      console.log(document.getElementById("bubbleVideo").playbackRate);

    }
  }
  // this.update = function() {
  //   newSpeed = model.convertHeartRate();
  //   if (0.7 <= (document.getElementById("smokeVideo").playbackRate + newSpeed) <= 2.3){
  //     document.getElementById("smokeVideo").playbackRate += newSpeed;
  //   }
  // }
}
