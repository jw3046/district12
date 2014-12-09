var articleSearchKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";
var eventListingsKey = "5d65a900f394c8d1f5a2276a9a287120:12:70179591";
var mostPopularKey = "1afeb582103aac31d8d6a2724f32f5aa:7:70179591";
var movieReviewsKey =" bdfdb8e3cb88fed3029cb5a65646f6f5:18:70179591";
var topStoriesKey = "d84ffb842774795b60d4193a6c9e86c2:12:70179591";

var html1="";
html1 += "<div class=\"col-md-4 img-portfolio\">";
html1 += "<h3>";
html1 += "<a href=\""
// URL
var html2 ="";
html2 += "\">";
// Title
var html3="";
html3 += "<\/a>";
html3 += "<\/h3>";
html3 += "<h5>";
// Date
var html4="";
html4 += "<\/h5>";
// Description
var html5 = "";
html5 += "<br /><a class=\"btn btn-success btn-add-to-calendar\" id=\""
// event's index in "event" array
var html6 = "";
html6 += "\">Add to Calendar</a>";
html6 += "<\/div>";

// Row HTML
var start_row_html = "<div class=\"row\">";
var end_row_html = "<\/div>";
var between_row_html = end_row_html + start_row_html;

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
            events = data.results;
            displayEvents();
        },
        error: function () {
            console.log('\nFAIL: ' + requestUrl);
        }
    });

}

function displayEvents(){
    var numberof_events = events.length;
    var numberto_paginate = Math.ceil(numberof_events /3.0);
    //displayPagination(numberto_paginate);
    var paginatenumber = 1
    for (var i = paginatenumber -1; i < paginatenumber*3; i++) {
        if (i == 0) {
            $("#eventsnearmeDiv").append(start_row_html);
        } else if (i%3 == 0) {
            $("#eventsnearmeDiv").append(between_row_html);
        };
        var url = events[i].event_detail_url;
        var title = events[i].event_name;
        // title = title.substring(1, title.length-1);

        var date = formatDate(events[i]);
        var desc = events[i].web_description;
        $("#eventsnearmeDiv").append(html1 + url 
            + html2 + title 
            + html3 + date
            + html4 + desc 
            + html5 + i
            + html6);
    };
    $("#eventsnearmeDiv").append(end_row_html);


// Row HTML
var start_row_html = "<div class=\"row\">";
var end_row_html = "<\/div>";
var between_row_html = end_row_html + start_row_html;


}

function displayPagination(numberto_paginate) {

    var paginateHTML="";
    paginateHTML += "    <div class=\"row center-block\" id = \"paginationID\">";
    paginateHTML += "        <ul class=\"pagination pagination-sm\">";
    for (var i= 1; i<numberto_paginate+1; i++){
        paginateHTML += "            <li><a href=\"#\">" + i + "<\/a><\/li>";
    }  
    paginateHTML += "        <\/ul>";
    paginateHTML += "    <\/div>";
    $("#eventsnearmeDiv").append(paginateHTML);


}
function formatDate(event_data) {
    var date = "";
    // if (event_data.date_time_description === undefined) {
        var date_start = new Date(event_data.recurring_start_date);
        var date_end = new Date(event_data.recurring_end_date);

        if (date_start == "Invalid Date") {             // If recurring start date doesn't exist, put description in
            date = event_data.date_time_description;
        } else if (date_end == "Invalid Date") {        // If recurring end date doesn't exist, only put start date
            date = date_start.toLocaleDateString();
            date = "Starting " + date;
        } else {                                        // Both start and end date exists, put both in
            date_start = date_start.toLocaleDateString();
            date_end = date_end.toLocaleDateString();
            date = date_start + " - " + date_end;
        }
    // } else {
        
    // }
    return date;
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

    getEventsNearMe(eventListingsKey, latitude, longitude);


  };

  function error() {
    console.log("Unable to retrieve your location");
    $("#eventsnearmeDiv").empty();
    var eventsnearmeHEAD="";
    eventsnearmeHEAD += "            <div class=\"col-lg-12\">";
    eventsnearmeHEAD += "            unable to locate. Search near New York Times Office";
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



