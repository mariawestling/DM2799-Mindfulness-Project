var BubbleView = function(container, model) {
  this.container = container;
  this.goBackToMenu = container.find("#goBackToMenu");
  this.bubbleButton = container.find("#bubbleButton");
  this.currHR;
  this.prevHR;
  this.newSpeed;

  console.log("THIS", this);

  model.addObserver(this);
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
    console.log(document.getElementById("bubbleVideo").playbackRate += newSpeed);
    if (0.7 <= (document.getElementById("bubbleVideo").playbackRate + newSpeed) <= 2.3){
      document.getElementById("bubbleVideo").playbackRate += newSpeed;

    }
  }

}
