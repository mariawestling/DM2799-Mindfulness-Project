var FitbitModel = function() {



  //declare variables
  this.currHR;
  this.prevHR;
  this.first = true;
  this.meanValues;
  this.sum = 0;
  this.mean = 0;
  this.speed;


  this.observerList = [];

  this.addObserver = function(observer){
    console.log("observer", observer);
    this.observerList.push(observer);
    console.log("list", this.observerList);
  }

  this.notifyObservers = function() {
    for (var j = 0; j < observerList.length; j++){
      this.observerList[j].update();
    }

  }


  this.convertHeartRate = function() {
    for (var i = 0; i < meanValues.length; i++) {
      this.sum += this.meanValues[i];
    }

    this.mean = this.sum/meanValues.length;

    if (this.first) {
      this.currHR = this.mean;
      this.prevHR = this.mean
      this.first = false;
    } else {
      this.prevHR = this.currHR;
      this.currHR = this.mean;
    }

    this.sum = 0;

    return (this.currHR-this.prevHR)/10

  }
  this.newData = function(newValues){
    this.meanValues = newValues;
    this.notifyObservers();
  }






}
