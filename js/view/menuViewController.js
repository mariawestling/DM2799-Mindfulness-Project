var MenuViewController = function(view, model, overallController) {

  view.bubbleButton.click(function(){
    overallController.bubbleFunction();
  });

  view.treeButton.click(function(){
    overallController.treeFunction();
  });

  view.smokeButton.click(function(){
    overallController.smokeFunction();
  });

}
