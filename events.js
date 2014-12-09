var articleSearchKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";
var eventListingsKey = "5d65a900f394c8d1f5a2276a9a287120:12:70179591";
var mostPopularKey = "1afeb582103aac31d8d6a2724f32f5aa:7:70179591";
var movieReviewsKey =" bdfdb8e3cb88fed3029cb5a65646f6f5:18:70179591";
var topStoriesKey = "d84ffb842774795b60d4193a6c9e86c2:12:70179591";

var event_html="";
event_html += "<div class=\"col-md-4 img-portfolio\">";
event_html += "<h3>";
event_html += "<a href=\""
// URL
var event_html2 ="";
event_html2 += "\">";
// Title
var event_html3="";
event_html3 += "<\/a>";
event_html3 += "<\/h3>";
event_html3 += "<h5>";
// Date
var event_html4="";
event_html4 += "<\/h5>";
event_html4 += "<p>";
// Description
var event_html5 = "<\/p>";
event_html5 += "<\/div>";

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


var events = [];
var category = "";
var query = "";

// Page Loads
$(document).ready(function(){
	category = getUrlParameter('category');
	query = getUrlParameter('q');

	if (category === undefined && query === undefined) {
		$("#search_query").text('Showing All Events');
	} else if (query === undefined) {
		if (category == 'spareTimes') {
			$("#search_query").text('Category: Spare Times');
		} else if (category == 'forChildren') {
			$("#search_query").text('Category: For Children');
		} else {
			$("#search_query").text('Category: ' + category);
		}
	} else {
		$("#search_query").text('Query: ' + query);
	}


	getEventsListings();
});

/*
* retrieves events data
*/
function getEventsListings() { 
	var filters = "";
	if (category === undefined) {

	} else {
		filters += 'category:'+category;
	}
	// if (query === undefined) {

	// } else {
	// 	filters += 'query:'+query;
	// }

    $.ajax({
        type: "GET",
        url: "http://api.nytimes.com/svc/events/v2/listings.jsonp",
        data: {'api-key':eventListingsKey, 'filters':filters, 'query':query},
        dataType: 'jsonp',
        success: function (data) {
            events = data.results;
            displayEvents();
        },
        error: function () {
            console.log('FAIL: ' + url);
        }
    });
}

// Displays events on page
function displayEvents() {
	for (var i = 0; i < events.length; i++) {
		if (i == 0) {
			$("#events").append(start_row_html);
		} else if (i%3 == 0) {
			$("#events").append(between_row_html);
		};
	 	var url = events[i].event_detail_url;
	 	var title = events[i].event_name;
	 	// title = title.substring(1, title.length-1);
	 	// var date = events[i].date_time_description;
	 	// if (events[i].date_time_description === undefined) {
	 		var date = new Date(events[i].recurring_start_date);
	 		date = date.toLocaleDateString();
	 	// } else {
	 	// 	date = date.replace(";", "<br />");
	 	// }
	 	var desc = events[i].web_description;
	 	$("#events").append(event_html + url 
	 		+ event_html2 + title 
	 		+ event_html3 + date 
	 		+ event_html4 + desc 
	 		+ event_html5);
	 };
	 $("#events").append(end_row_html);
}

// Gets parameters from URL
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

