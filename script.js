// If user hasn't authed with Fitbit, redirect to Fitbit OAuth Implicit Grant Flow
var fitbitAccessToken;

if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CG68&redirect_uri=https%3A%2F%2Fmariawestling.github.io%2FDM2799-Mindfulness-Project&scope=heartrate&expires_in=604800');
} else {
    var fragmentQueryParameters = {};
    window.location.hash.slice(1).replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) { fragmentQueryParameters[$1] = $3; }
    );

    fitbitAccessToken = fragmentQueryParameters.access_token;
    update();
}

// Make an API request and graph it
var processResponse = function(res) {
    if (!res.ok) {
        throw new Error('Fitbit API request failed: ' + res);
    }
 
    var contentType = res.headers.get('content-type')
    if (contentType && contentType.indexOf("application/json") !== -1) {
        console.log(res.json());
        console.log("processResponse if");
        return res.json();
    } else {
        console.log("processResponse else");
        throw new Error('JSON expected but received ' + contentType);
    }
}

var processHeartRate = function(timeSeries) {
    return timeSeries['activities-heart-intraday'].dataset.map(
        function(measurement) {
            console.log("processHR");
            return [
                measurement.time.split(':').map(
                    function(timeSegment) {
                        return Number.parseInt(timeSegment);
                    }
                ),
                measurement.value
            ];
        }
    );
}

var graphHeartRate = function(timeSeries) {
    console.log(timeSeries);
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Heart Rate');

    data.addRows(timeSeries);

    var options = google.charts.Line.convertOptions({
        height: 450
    });

    var chart = new google.charts.Line(document.getElementById('chart'));

    chart.draw(data, options);
}


function update(){
    fetch(
        'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json',
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
        document.getElementById("hr").innerHTML = heartRateArray[heartRateArray.length-1].value;
        document.getElementById("time").innerHTML = heartRateArray[heartRateArray.length-1].time;
    ;

    }).catch(function(error) {
        console.log(error);
    });

    setTimeout(update, 120000);
}




// fetch(
//     'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json',
//     {
//         headers: new Headers({
//             'Authorization': 'Bearer ' + fitbitAccessToken
//         }),
//         mode: 'cors',
//         method: 'GET'
//     }
// ).then(processResponse)
// .then(processHeartRate)
// .then(graphHeartRate)
// .catch(function(error) {
//     console.log(error);
// });
