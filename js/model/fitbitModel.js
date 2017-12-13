var FitbitModel = function() {

  if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CG68&redirect_uri=https%3A%2F%2Fmariawestling.github.io%2FDM2799-Mindfulness-Project&scope=heartrate&expires_in=604800');
  } else {
    var fragmentQueryParameters = {};
    window.location.hash.slice(1).replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) {fragmentQueryParameters[$1] = $3;}
    );

    fitbitAccessToken = fragmentQueryParameters.access_token;
    this.updateHeartRate;
  }
  
  //declare variables
  this.currHR;
  this.prevHR;
  this.first = true;
  this.meanValues;
  this.mean;
  this.speed;

  this.fitbitAccessToken;
  this.heartRateArray;



  this.observerList;

  this.addObserver = function(observer){
    console.log("observer", observer);
    this.observerList = observer;
    console.log("list", this.observerList);
  }

  this.notifyObservers = function() {
    console.log("notifyObservers");
  }


  this.convertHeartRate = function() {
    mean = meanValues.mean();

    if (first) {
      currHR = mean;
      prevHR = mean
      first = false;
    } else {
      prevHR = currHR;
      currHR = mean;
    }

    return (currHR-prevHR)/10

  }

  this.updateHeartRate = function() {
    fetch(
        //GET https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec/time/00:00/00:01.json
        'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec.json',
        {
            headers: new Headers({
                'Authorization': 'Bearer ' + fitbitAccessToken
            }),
            mode: 'cors',
            method: 'GET'
        }
    ).then(function(response){
        return response.json();
    }).then(function(data) {
        console.log(data);
        heartRateArray = data['activities-heart-intraday'].dataset;
        //meanValues = heartRateArray.slice(-15, -1);
        meanValues = [];
        for (var j = -15; j < 0; j++) {
          meanValues.push(heartRateArray[heartRateArray.length+j].value);
        }
        console.log("meanValues", meanValues);
        //console.log(heartRateArray[heartRateArray.length-10].value+" "+heartRateArray[heartRateArray.length-10].time);
        //console.log(heartRateArray[heartRateArray.length-2].value+" "+heartRateArray[heartRateArray.length-2].time);
        //console.log(heartRateArray[heartRateArray.length-1].value+" "+heartRateArray[heartRateArray.length-1].time);
        // document.getElementById("hr").innerHTML = heartRateArray[heartRateArray.length-1].value;
        // document.getElementById("time").innerHTML = heartRateArray[heartRateArray.length-1].time;
    ;

    }).catch(function(error) {
        console.log(error);
    });
    console.log("innan notifyObservers anrop");
    // this.notifyObservers;
    for (var i = 0; i < 1; i++) {
      console.log("notifyObserversForLoop");
      this.observerList.update();
    }
    setTimeout(this.updateHeartRate, 30000);
  }




}
