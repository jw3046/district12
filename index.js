var articleSearchKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";
var eventListingsKey = "5d65a900f394c8d1f5a2276a9a287120:12:70179591";
var mostPopularKey = "1afeb582103aac31d8d6a2724f32f5aa:7:70179591";
var movieReviewsKey =" bdfdb8e3cb88fed3029cb5a65646f6f5:18:70179591";
var topStoriesKey = "d84ffb842774795b60d4193a6c9e86c2:12:70179591";

var date_pick="";
date_pick += "          <select name=\"Month\" id=\"mm\">";
date_pick += "              <option> - Month - <\/option>";
date_pick += "              <option value=\"01\">January<\/option>";
date_pick += "              <option value=\"02\">Febuary<\/option>";
date_pick += "              <option value=\"03\">March<\/option>";
date_pick += "              <option value=\"04\">April<\/option>";
date_pick += "              <option value=\"05\">May<\/option>";
date_pick += "              <option value=\"06\">June<\/option>";
date_pick += "              <option value=\"07\">July<\/option>";
date_pick += "              <option value=\"08\">August<\/option>";
date_pick += "              <option value=\"09\">September<\/option>";
date_pick += "              <option value=\"10\">October<\/option>";
date_pick += "              <option value=\"11\">November<\/option>";
date_pick += "              <option value=\"12\">December<\/option>";
date_pick += "          <\/select>";
date_pick += "          <select name=\"Day\" id=\"dd\">";
date_pick += "              <option> - Day - <\/option>";
date_pick += "              <option value=\"01\">1<\/option>";
date_pick += "              <option value=\"02\">2<\/option>";
date_pick += "              <option value=\"03\">3<\/option>";
date_pick += "              <option value=\"04\">4<\/option>";
date_pick += "              <option value=\"05\">5<\/option>";
date_pick += "              <option value=\"06\">6<\/option>";
date_pick += "              <option value=\"07\">7<\/option>";
date_pick += "              <option value=\"08\">8<\/option>";
date_pick += "              <option value=\"09\">9<\/option>";
date_pick += "              <option value=\"10\">10<\/option>";
date_pick += "              <option value=\"11\">11<\/option>";
date_pick += "              <option value=\"12\">12<\/option>";
date_pick += "              <option value=\"13\">13<\/option>";
date_pick += "              <option value=\"14\">14<\/option>";
date_pick += "              <option value=\"15\">15<\/option>";
date_pick += "              <option value=\"16\">16<\/option>";
date_pick += "              <option value=\"17\">17<\/option>";
date_pick += "              <option value=\"18\">18<\/option>";
date_pick += "              <option value=\"19\">19<\/option>";
date_pick += "              <option value=\"20\">20<\/option>";
date_pick += "              <option value=\"21\">21<\/option>";
date_pick += "              <option value=\"22\">22<\/option>";
date_pick += "              <option value=\"23\">23<\/option>";
date_pick += "              <option value=\"24\">24<\/option>";
date_pick += "              <option value=\"25\">25<\/option>";
date_pick += "              <option value=\"26\">26<\/option>";
date_pick += "              <option value=\"27\">27<\/option>";
date_pick += "              <option value=\"28\">28<\/option>";
date_pick += "              <option value=\"29\">29<\/option>";
date_pick += "              <option value=\"30\">30<\/option>";
date_pick += "              <option value=\"31\">31<\/option>";
date_pick += "          <\/select>";
date_pick += "          <select name=\"Year\" id=\"yyyy\">";
date_pick += "              <option> - Year - <\/option>";
date_pick += "              <option value=\"2014\">2014<\/option>";
date_pick += "              <option value=\"2013\">2013<\/option>";
date_pick += "              <option value=\"2012\">2012<\/option>";
date_pick += "              <option value=\"2011\">2011<\/option>";
date_pick += "              <option value=\"2010\">2010<\/option>";
date_pick += "              <option value=\"2009\">2009<\/option>";
date_pick += "              <option value=\"2008\">2008<\/option>";
date_pick += "              <option value=\"2007\">2007<\/option>";
date_pick += "              <option value=\"2006\">2006<\/option>";
date_pick += "              <option value=\"2005\">2005<\/option>";
date_pick += "              <option value=\"2004\">2004<\/option>";
date_pick += "              <option value=\"2003\">2003<\/option>";
date_pick += "              <option value=\"2002\">2002<\/option>";
date_pick += "              <option value=\"2001\">2001<\/option>";
date_pick += "              <option value=\"2000\">2000<\/option>";
date_pick += "              <option value=\"1999\">1999<\/option>";
date_pick += "              <option value=\"1998\">1998<\/option>";
date_pick += "              <option value=\"1997\">1997<\/option>";
date_pick += "              <option value=\"1996\">1996<\/option>";
date_pick += "              <option value=\"1995\">1995<\/option>";
date_pick += "              <option value=\"1994\">1994<\/option>";
date_pick += "              <option value=\"1993\">1993<\/option>";
date_pick += "              <option value=\"1992\">1992<\/option>";
date_pick += "              <option value=\"1991\">1991<\/option>";
date_pick += "              <option value=\"1990\">1990<\/option>   ";
date_pick += "          <\/select>";

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
var html5 = "<em>Select date to attend:<\/em><br \/>" + date_pick;
html5 += "<br /><br /><a class=\"btn btn-success btn-add-to-calendar\" id=\""
// event's index in "event" array
var html6 = "";
html6 += "\">Add to Calendar</a>&nbsp;<a class=\"btn btn-primary btn-see-related\" id=\"";
// event's index in "event" array
var html7 = "";
html7 += "\">See Related Articles</a>";
html7 += "<\/div>";

// Row HTML
var start_row_html = "<div class=\"row\">";
var end_row_html = "<\/div>";
var between_row_html = end_row_html + start_row_html;



// for pagination
var num_events = 0;
var num_paginate = 0;
var current_page = 1;

//
var latitude = 0;
var longitude = 0;

/*
* example request URI's 
*/ 
var basicrequestURI = "http://api.nytimes.com/svc/events/v2/listings.json?api-key=5d65a900f394c8d1f5a2276a9a287120%3A12%3A70179591";
var searchbycategoryURI = "http://api.nytimes.com/svc/events/v2/listings.json?filters=category%3AforChildren&api-key=5d65a900f394c8d1f5a2276a9a287120%3A12%3A70179591";
var spacialsearchURI = "http://api.nytimes.com/svc/events/v2/listings.json?&ll=40.756146,-73.99021&api-key=5d65a900f394c8d1f5a2276a9a287120:12:70179591"

$(document).ready(function(){

    $(document).on('click', '.btn-add-to-calendar', function(event) {
        var e = events[$(this).attr('id')];
        var mm = $(this).siblings("#mm").val();
        var dd = $(this).siblings("#dd").val();
        var yyyy = $(this).siblings("#yyyy").val();
        // var date = new Date();
        // date.setFullYear(yyyy);
        // date.setMonth(mm-1);
        // date.setDate(dd);
        if (mm == '- Month -' || dd == '- Day -' || yyyy == '- Year -') {
            alert('Please enter a date');
        } else {
            var date = yyyy + '-' + mm + '-' + dd;
            storeEvent(e.event_id, e.event_name, date, e.web_description, e.category, e.event_detail_url);
            $(this).text('Added to Calendar');
            $(this).attr('class', 'btn btn-success disabled');
        }
    });

    $(document).on('click', '.btn-see-related', function(event) {
        var e = events[$(this).attr('id')];
        // storeEvent(e.event_id, e.event_name, formatDate(e), e.web_description, e.category);
        // $(this).text('Added to Calendar');
        // $(this).attr('class', 'btn btn-success disabled');
        var href = "event_details.html?name=" + e.event_name + "&url=" + e.event_detail_url
        window.location.href = href;
    });
})

/*
* retrieves events around the user 
*/ 
function getEventsNearMe(eventListingsKey) {

    var offset = (current_page-1)*3
    var requestURI = "http://api.nytimes.com/svc/events/v2/listings.jsonp?&ll=" + latitude + "," + longitude+ "&limit=3&offset=" + offset +"&api-key=" + eventListingsKey;

    $.ajax({
        type: "GET",
        url: requestURI,
        dataType: 'jsonp',
        success: function (data) {
            
            // console.log(data);
            events = data.results;
            num_events = data.num_results;
            num_paginate = Math.ceil(num_events/3.0)
            displayEvents();
        },
        error: function () {
            console.log('\nFAIL: ' + requestUrl);
        }
    });

}


function displayEvents(){
    var paginatenumber = 1
    $("#eventsnearmeDiv").empty();
    for (var i = 0; i < events.length; i++) {
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
            + html6 + i
            + html7);
    };
    $("#eventsnearmeDiv").append(end_row_html);


// Row HTML
var start_row_html = "<div class=\"row\">";
var end_row_html = "<\/div>";
var between_row_html = end_row_html + start_row_html;


}



/*
* gets called when next button is pressed
*/
function next() {
    current_page = current_page + 1;
    if (current_page > num_paginate) {
        // alert("no more results!");
        current_page = current_page -1;
        locate()
    }
    else {
        locate();
    }
}

/*
* gets called when prev button is pressed
*/
function prev() {
    current_page = current_page - 1;
    if (current_page == 0) {
        // alert("first page!");
        current_page = 1;
        locate();
    } else {
        locate();
    }
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
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;

    x = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    console.log(x)
    $("#eventsnearmeDiv").empty();

    getEventsNearMe(eventListingsKey);


  };

  function error() {
    alert("Unable to retrieve your location");
    $("#eventsnearmeDiv").empty();
    latitude = 40.756146
    longitude = -73.99021
    getEventsNearMe(eventListingsKey);

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
locate()



