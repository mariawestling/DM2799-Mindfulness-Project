var OverallController = function(menuView, bubbleView, treeView, smokeView, model) {
  //hides and shows views based on user interation
	//controllers of the individual views send messages to
	//the overall controller

  this.menuView = menuView;
  this.bubbleView = bubbleView;
  this.treeView = treeView;
  this.smokeView = smokeView;
  this.model = model;

  // call this function (param = which view to hide) to hide certain view
  this.hideView = function(view) {
		view.container.hide();
	}

  // call this function (param = which view to show) to show certain view
	this.showView = function(view) {
		view.container.show();
	}


  //might not need this one
  // call this function (view = which view to update, arg = ) to update certain view
	this.updateView = function(view, arg) {
		view.update(arg);
	}


  // when function normalBubbleFunction if called, show the specific view and hide menu options
  this.bubbleFunction = function() {
		this.hideView(menuView);
		this.showView(bubbleView);
	}

  this.treeFunction = function() {
		this.hideView(menuView);
		this.showView(treeView);
	}

  this.smokeFunction = function() {
		this.hideView(menuView);
		this.showView(smokeView);
	}

  this.goBackToMenu = function(view) {
    this.hideView(view);
    this.showView(menuView);
  }

}
