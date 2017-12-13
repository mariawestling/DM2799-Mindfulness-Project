var SmokeView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.smokeButton = container.find("#smokeButton");

  // model.addObserver(this);

  // this.update = function() {
  //   newSpeed = model.convertHeartRate();
  //   if (0.7 <= (document.getElementById("smokeVideo").playbackRate + newSpeed) <= 2.3){
  //     document.getElementById("smokeVideo").playbackRate += newSpeed;
  //   }
  // }
}
