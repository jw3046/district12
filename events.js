var articleSearchKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";
var eventListingsKey = "5d65a900f394c8d1f5a2276a9a287120:12:70179591";
var mostPopularKey = "1afeb582103aac31d8d6a2724f32f5aa:7:70179591";
var movieReviewsKey =" bdfdb8e3cb88fed3029cb5a65646f6f5:18:70179591";
var topStoriesKey = "d84ffb842774795b60d4193a6c9e86c2:12:70179591";

var event_html1="";
event_html1 += "<div class=\"col-md-4 img-portfolio\">";
event_html1 += "<h3>";
event_html1 += "<a href=\""
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
// Description
var event_html5 = "";
event_html5 += "<br /><a class=\"btn btn-success btn-add-to-calendar\" id=\""
// event's index in "event" array
var event_html6 = "";
event_html6 += "\">Add to Calendar</a>";
event_html6 += "<\/div>";

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

	$(document).on('click', '.btn-add-to-calendar', function(event) {
		var e = events[$(this).attr('id')];
		storeEvent(e.event_id, e.event_name, formatDate(e), e.web_description, e.category);
		$(this).text('Added to Calendar');
		$(this).attr('class', 'btn btn-success disabled');
	});
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

	 	var date = formatDate(events[i]);
	 	var desc = events[i].web_description;
	 	$("#events").append(event_html1 + url 
	 		+ event_html2 + title 
	 		+ event_html3 + date
	 		+ event_html4 + desc 
	 		+ event_html5 + i
	 		+ event_html6);
	 };
	 $("#events").append(end_row_html);
}

function formatDate(event_data) {
 	var date = "";
 	// if (event_data.date_time_description === undefined) {
 		var date_start = new Date(event_data.recurring_start_date);
 		var date_end = new Date(event_data.recurring_end_date);

 		if (date_start == "Invalid Date") {				// If recurring start date doesn't exist, put description in
 			date = event_data.date_time_description;
 		} else if (date_end == "Invalid Date") {		// If recurring end date doesn't exist, only put start date
 			date = date_start.toLocaleDateString();
 			date = "Starting " + date;
 		} else {										// Both start and end date exists, put both in
 			date_start = date_start.toLocaleDateString();
 			date_end = date_end.toLocaleDateString();
 			date = date_start + " - " + date_end;
 		}
 	// } else {
 		
 	// }
 	return date;
}

// Gets parameters from URL
// http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
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

