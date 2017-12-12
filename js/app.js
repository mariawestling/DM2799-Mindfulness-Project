$(function() {
  // initiate model

  var model = new FitbitModel();

  // create views and controllers
  var menuView = new MenuView($("#menuView"), model);
  var bubbleView = new BubbleView($("#bubbleView"), model);
  var treeView = new TreeView($("#treeView"), model);
  var smokeView = new SmokeView($("#smokeView"), model);

  var overallController = new OverallController(menuView, bubbleView, treeView, smokeView, model);

  var menuViewController = new MenuViewController(menuView, model, overallController);
  var bubbleViewController = new BubbleViewController(bubbleView, model, overallController);
  var treeViewController = new TreeViewController(treeView, model, overallController);
  var smokeViewController = new SmokeViewController(smokeView, model, overallController);

})
