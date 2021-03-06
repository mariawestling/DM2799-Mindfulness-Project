var FitbitModel = function() {



  //declare variables
  this.currHR;
  this.prevHR;
  this.first = true;
  this.meanValues;
  this.sum = 0;
  this.mean = 0;
  this.speed;

  this.bubble;
  this.tree;
  this.smoke;

  this.newSpeed;

  this.observerList = [];

  this.addObserver = function(observer, name){
    if(name == "bubble"){
      this.bubble = observer;
    }else if(name == "tree"){
      this.tree = observer;
    }else if(name == "smoke"){
      this.smoke = observer;
    }
    // console.log("observer bubble", this.bubble);
    //this.observerList.push(observer);
    // console.log("list", this.observerList);
  }

  this.notifyObservers = function() {
    //for (var j = 0; j < observerList.length; j++){
      //this.observerList[j].update();
    //}

    this.newSpeed = this.convertHeartRate();
    this.bubble.update(this.newSpeed);
    this.tree.update(this.newSpeed);
    this.smoke.update(this.newSpeed);

  }

  this.getMedian = function(meanValues) {
    meanValues.sort(function(a, b) {
      return a-b;
    });

    if (meanValues.length === 0) {
      return 0;
    }

    var half = Math.floor(meanValues.length/2);

    if (meanValues.length % 2){
      return meanValues[half];
    } else {
      return (meanValues[half-1] + meanValues[half]) / 2.0;
    }

  }


  this.convertHeartRate = function() {
    // for (var i = 0; i < meanValues.length; i++) {
    //   this.sum += this.meanValues[i];
    // }
    this.median  = this.getMedian(meanValues);
    console.log("median", this.median);
    // this.mean = this.sum/meanValues.length;

    if (this.first) {
      this.currHR = this.median;
      this.prevHR = this.median
      this.first = false;
    } else {
      this.prevHR = this.currHR;
      this.currHR = this.median;
    }

    this.sum = 0;

    return (this.currHR-this.prevHR)/10

  }
  this.newData = function(newValues){
    this.meanValues = newValues;
    this.notifyObservers();
  }






}
