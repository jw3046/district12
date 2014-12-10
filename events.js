var articleSearchKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";
var eventListingsKey = "5d65a900f394c8d1f5a2276a9a287120:12:70179591";
var mostPopularKey = "1afeb582103aac31d8d6a2724f32f5aa:7:70179591";
var movieReviewsKey =" bdfdb8e3cb88fed3029cb5a65646f6f5:18:70179591";
var topStoriesKey = "d84ffb842774795b60d4193a6c9e86c2:12:70179591";

var date_pick="";
date_pick += "			<select name=\"Month\" id=\"mm\">";
date_pick += "				<option> - Month - <\/option>";
date_pick += "				<option value=\"01\">January<\/option>";
date_pick += "				<option value=\"02\">Febuary<\/option>";
date_pick += "				<option value=\"03\">March<\/option>";
date_pick += "				<option value=\"04\">April<\/option>";
date_pick += "				<option value=\"05\">May<\/option>";
date_pick += "				<option value=\"06\">June<\/option>";
date_pick += "				<option value=\"07\">July<\/option>";
date_pick += "				<option value=\"08\">August<\/option>";
date_pick += "				<option value=\"09\">September<\/option>";
date_pick += "				<option value=\"10\">October<\/option>";
date_pick += "				<option value=\"11\">November<\/option>";
date_pick += "				<option value=\"12\">December<\/option>";
date_pick += "			<\/select>";
date_pick += "			<select name=\"Day\" id=\"dd\">";
date_pick += "				<option> - Day - <\/option>";
date_pick += "				<option value=\"01\">1<\/option>";
date_pick += "				<option value=\"02\">2<\/option>";
date_pick += "				<option value=\"03\">3<\/option>";
date_pick += "				<option value=\"04\">4<\/option>";
date_pick += "				<option value=\"05\">5<\/option>";
date_pick += "				<option value=\"06\">6<\/option>";
date_pick += "				<option value=\"07\">7<\/option>";
date_pick += "				<option value=\"08\">8<\/option>";
date_pick += "				<option value=\"09\">9<\/option>";
date_pick += "				<option value=\"10\">10<\/option>";
date_pick += "				<option value=\"11\">11<\/option>";
date_pick += "				<option value=\"12\">12<\/option>";
date_pick += "				<option value=\"13\">13<\/option>";
date_pick += "				<option value=\"14\">14<\/option>";
date_pick += "				<option value=\"15\">15<\/option>";
date_pick += "				<option value=\"16\">16<\/option>";
date_pick += "				<option value=\"17\">17<\/option>";
date_pick += "				<option value=\"18\">18<\/option>";
date_pick += "				<option value=\"19\">19<\/option>";
date_pick += "				<option value=\"20\">20<\/option>";
date_pick += "				<option value=\"21\">21<\/option>";
date_pick += "				<option value=\"22\">22<\/option>";
date_pick += "				<option value=\"23\">23<\/option>";
date_pick += "				<option value=\"24\">24<\/option>";
date_pick += "				<option value=\"25\">25<\/option>";
date_pick += "				<option value=\"26\">26<\/option>";
date_pick += "				<option value=\"27\">27<\/option>";
date_pick += "				<option value=\"28\">28<\/option>";
date_pick += "				<option value=\"29\">29<\/option>";
date_pick += "				<option value=\"30\">30<\/option>";
date_pick += "				<option value=\"31\">31<\/option>";
date_pick += "			<\/select>";
date_pick += "			<select name=\"Year\" id=\"yyyy\">";
date_pick += "				<option> - Year - <\/option>";
date_pick += "				<option value=\"2014\">2014<\/option>";
date_pick += "				<option value=\"2013\">2013<\/option>";
date_pick += "				<option value=\"2012\">2012<\/option>";
date_pick += "				<option value=\"2011\">2011<\/option>";
date_pick += "				<option value=\"2010\">2010<\/option>";
date_pick += "				<option value=\"2009\">2009<\/option>";
date_pick += "				<option value=\"2008\">2008<\/option>";
date_pick += "				<option value=\"2007\">2007<\/option>";
date_pick += "				<option value=\"2006\">2006<\/option>";
date_pick += "				<option value=\"2005\">2005<\/option>";
date_pick += "				<option value=\"2004\">2004<\/option>";
date_pick += "				<option value=\"2003\">2003<\/option>";
date_pick += "				<option value=\"2002\">2002<\/option>";
date_pick += "				<option value=\"2001\">2001<\/option>";
date_pick += "				<option value=\"2000\">2000<\/option>";
date_pick += "				<option value=\"1999\">1999<\/option>";
date_pick += "				<option value=\"1998\">1998<\/option>";
date_pick += "				<option value=\"1997\">1997<\/option>";
date_pick += "				<option value=\"1996\">1996<\/option>";
date_pick += "				<option value=\"1995\">1995<\/option>";
date_pick += "				<option value=\"1994\">1994<\/option>";
date_pick += "				<option value=\"1993\">1993<\/option>";
date_pick += "				<option value=\"1992\">1992<\/option>";
date_pick += "				<option value=\"1991\">1991<\/option>";
date_pick += "				<option value=\"1990\">1990<\/option>	";
date_pick += "			<\/select>";


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
var event_html5 = "<em>Select date to attend:<\/em><br \/>" + date_pick;
event_html5 += "<br /><br /><a class=\"btn btn-success btn-add-to-calendar\" id=\""
// event's index in "event" array
var event_html6 = "";
event_html6 += "\">Add to Calendar</a>&nbsp;<a class=\"btn btn-primary btn-see-related\" id=\""
// event's index in "event" array
var event_html7 = "";
event_html7 += "\">See Related Articles</a>";
event_html7 += "<\/div>";

// Row HTML
var start_row_html = "<div class=\"row\">";
var end_row_html = "<\/div>";
var between_row_html = end_row_html + start_row_html;

// Pagination HTML
var pagination_begin="";
pagination_begin += "<li id=\"prev-page\"><a href=\"#\">&laquo;<\/a><\/li>";

var pagination_end="";
pagination_end += "<li id=\"next-page\"><a href=\"#\">&raquo;<\/a><\/li>";

var current_page_begin="";
current_page_begin += "<li class=\"active\"><a>";

var page_begin="";
page_begin += "<li><a href=\"#\" id=\"change-page\">";

var page_end="";
page_end += "<\/a><\/li>";

function createPagination(curpage, totalpage) {
	var pagination = pagination_begin;
	for (var i = 1; i <= totalpage; i++) {
		if (i == curpage) {
			pagination += current_page_begin + i + page_end;
		} else {
			pagination += page_begin + i + page_end;
		}
	};
	pagination += pagination_end;
	$(".pagination").html(pagination);
}

/*
* example request URI's 
*/ 
var basicrequestURI = "http://api.nytimes.com/svc/events/v2/listings.json?api-key=5d65a900f394c8d1f5a2276a9a287120%3A12%3A70179591";
var searchbycategoryURI = "http://api.nytimes.com/svc/events/v2/listings.json?filters=category%3AforChildren&api-key=5d65a900f394c8d1f5a2276a9a287120%3A12%3A70179591";
var spacialsearchURI = "http://api.nytimes.com/svc/events/v2/listings.json?&ll=40.756146,-73.99021&api-key=5d65a900f394c8d1f5a2276a9a287120:12:70179591"


var events = [];
var category = "";
var query = "";
var curpage;
var totalpage;

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
	} else if (query == "") {
		$("#search_query").text('Showing All Events');
	} else {
		$("#search_query").text('Events found matching: \"' + query + '\"');
	}

	curpage = 1;
	getEventsListings();

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

	$(document).on('click', '#next-page', function(event) {
		if (curpage < totalpage) {
			curpage++;
			displayEvents(curpage);
		}
	});
	$(document).on('click', '#prev-page', function(event) {
		if (curpage > 1) {
			curpage--;
			displayEvents(curpage);
		}
	});
	$(document).on('click', '#change-page', function(event) {
		curpage = $(this).text();
		displayEvents(curpage);
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

    $.ajax({
        type: "GET",
        url: "http://api.nytimes.com/svc/events/v2/listings.jsonp",
        data: {'api-key':eventListingsKey, 'filters':filters, 'query':query, 'limit':'81'},
        dataType: 'jsonp',
        success: function (data) {
            events = data.results;
            totalpage = Math.ceil(events.length/9);
            displayEvents(curpage);
        },
        error: function () {
            console.log('FAIL: ' + url);
        }
    });
}

// Displays events on page
function displayEvents(curpage) {
	$("#events").html("");
	
	createPagination(curpage, totalpage);

	var start_index = (curpage-1)*9;
	var end_index = start_index + 9;
	for (var i = start_index; i < end_index && i < events.length; i++) {
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
	 		+ event_html6 + i
	 		+ event_html7);
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

