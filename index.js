var articleSearchKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";
var eventListingsKey = "5d65a900f394c8d1f5a2276a9a287120:12:70179591";
var mostPopularKey = "1afeb582103aac31d8d6a2724f32f5aa:7:70179591";
var movieReviewsKey =" bdfdb8e3cb88fed3029cb5a65646f6f5:18:70179591";
var topStoriesKey = "d84ffb842774795b60d4193a6c9e86c2:12:70179591";



/*
* example request URI's 
*/ 
var basicrequestURI = "http://api.nytimes.com/svc/events/v2/listings.json?api-key=5d65a900f394c8d1f5a2276a9a287120%3A12%3A70179591";
var searchbycategoryURI = "http://api.nytimes.com/svc/events/v2/listings.json?filters=category%3AforChildren&api-key=5d65a900f394c8d1f5a2276a9a287120%3A12%3A70179591";
var spacialsearchURI = "http://api.nytimes.com/svc/events/v2/listings.json?&ll=40.756146,-73.99021&api-key=5d65a900f394c8d1f5a2276a9a287120:12:70179591"
/*
* retrieves events data
*/
function getEventsListings(eventListingsKey) { 

    var requestURI = "http://api.nytimes.com/svc/events/v2/listings.jsonp?api-key=" + eventListingsKey; 

    $.ajax({
        type: "GET",
        url: requestURI,
        dataType: 'jsonp',
        success: function (data) {
            
            console.log(data);
        },
        error: function () {
            console.log('\nFAIL: ' + requestUrl);
        }
    });
}

/*
* retrieves events around the user 
*/ 
function getEventsNearMe(eventListingsKey, latitude, longitude) {

    var requestURI = "http://api.nytimes.com/svc/events/v2/listings.jsonp?&ll=" + latitude + "," + longitude+ "&api-key=" + eventListingsKey;

    $.ajax({
        type: "GET",
        url: requestURI,
        dataType: 'jsonp',
        success: function (data) {
            
            console.log(data);
        },
        error: function () {
            console.log('\nFAIL: ' + requestUrl);
        }
    });


}

//get user's location and call API 
function locate() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    console.log("<p>Geolocation is not supported by your browser");
    error();
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    x = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    console.log(x)
    $("#eventsnearmeDiv").empty();
    var eventsnearmeHEAD="";
    eventsnearmeHEAD += "            <div class=\"col-lg-12\">";
    eventsnearmeHEAD += "                <h2 class=\"page-header\">Events Near Me<\/h2>";
    eventsnearmeHEAD += "            <\/div>";
    eventsnearmeHEAD += "";
    $("#eventsnearmeDiv").append(eventsnearmeHEAD);
    getEventsNearMe(eventListingsKey, latitude, longitude);


  };

  function error() {
    console.log("Unable to retrieve your location");
    $("#eventsnearmeDiv").empty();
    var eventsnearmeHEAD="";
    eventsnearmeHEAD += "            <div class=\"col-lg-12\">";
    eventsnearmeHEAD += "                <h2 class=\"page-header\">Events Near Me<\/h2>unable to locate. Search near New York Times Office";
    eventsnearmeHEAD += "            <\/div>";
    eventsnearmeHEAD += "";
    $("#eventsnearmeDiv").append(eventsnearmeHEAD);
    var latitude = 40.756146
    var longitude = -73.99021
    getEventsNearMe(eventListingsKey, latitude, longitude);

  };

  console.log("Locating…");

  navigator.geolocation.getCurrentPosition(success, error);
}


/*
var geocoder;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
    alert("yay")
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng)
    console.log(lat)
}

function errorFunction(){
    alert("Geocoder failed");
}

function initialize() {
    geocoder = new google.maps.Geocoder();
}

function codeLatLng(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        console.log(results)
        }
        else {
            alert("failed")
        }
    });
}
*/
getEventsListings(eventListingsKey)
locate()



