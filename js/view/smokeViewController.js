var SmokeViewController = function(view, model, overallController) {

  // we need a function that will get new values from the model after 30 sec
  view.goBackToMenu.click(function() {
    overallController.goBackToMenu(view);
  });

  view.smokeButton.click(function(){
    overallController.smokeFunction();
  });

}
