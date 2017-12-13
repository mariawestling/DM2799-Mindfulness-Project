var BubbleView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.bubbleButton = container.find("#bubbleButton");
  this.currHR;
  this.prevHR;
  this.newSpeed;
  this.currentSpeed;

  console.log("THIS", this);

  model.addObserver(this, "bubble");
  // function newPage(){
  //   setTimeout(function(){
  //     model.addObserver(this);
  //     newPage();
  //   }, 3000);
  //
  // }
  //
  // newPage();


  this.update = function() {
    newSpeed = model.convertHeartRate();
    this.currentSpeed = document.getElementById("bubbleVideo").playbackRate;
    // console.log(document.getElementById("bubbleVideo").playbackRate);
    if (0.7 <= (currentSpeed + newSpeed) <= 2.3){
      document.getElementById("bubbleVideo").playbackRate += newSpeed;
      console.log(document.getElementById("bubbleVideo").playbackRate);

    }
  }

}
