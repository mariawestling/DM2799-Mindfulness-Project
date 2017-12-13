var FitbitModel = function() {



  //declare variables
  this.currHR;
  this.prevHR;
  this.first = true;
  this.meanValues;
  this.sum = 0;
  this.mean = 0;
  this.speed;


  this.observerList;

  this.addObserver = function(observer){
    console.log("observer", observer);
    this.observerList = observer;
    console.log("list", this.observerList);
  }

  this.notifyObservers = function() {
    this.observerList.update();
  }


  this.convertHeartRate = function() {
    for (var i = 0; i < meanValues.length; i++) {
      this.sum += meanValues[i];
    }

    this.mean = sum/meanValues.length;

    if (first) {
      currHR = mean;
      prevHR = mean
      first = false;
    } else {
      prevHR = currHR;
      currHR = mean;
    }

    sum = 0;

    return (currHR-prevHR)/10

  }
  this.newData = function(newValues){
    meanValues = newValues;
    this.notifyObservers();
  }






}
