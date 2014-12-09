var articleKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";

var title;
var url;

var related1="";
related1 += "<div class=\"row\">";
related1 += "<div class=\"col-md-12\">";
related1 += "<h3>";
related1 += "<a href=\"";
// URL
var related2="";
related2 += "\">";
// Article Title
var related3="";
related3 += "<\/a>";
related3 += "<\/h3>";
related3 += "<p>";
// Article Summary
var related4="";
related4 += "<\/p>";
related4 += "<a class=\"btn btn-primary\" href=\"";
// URL
var related5="";
related5 += "\">Read More <i class=\"fa fa-angle-right\"><\/i><\/a>";
related5 += "<\/div>";
related5 += "<\/div>";


// Page Loads
$(document).ready(function(){
	title = getUrlParameter('name');
	title = decodeURIComponent(title);
	url = getUrlParameter('url');
	url = decodeURIComponent(url);
	console.log(url);
	$("#title").text(title);


	// $(document).on('click', '.btn-add-to-calendar', function(event) {
	// 	var e = events[$(this).attr('id')];
	// 	storeEvent(e.event_id, e.event_name, formatDate(e), e.web_description, e.category);
	// 	$(this).text('Added to Calendar');
	// 	$(this).attr('class', 'btn btn-success disabled');
	// });

	getRelatedArticles();
});

// Gets Related articles using title
function getRelatedArticles() { 
    $.ajax({
		type: "GET",
		url: "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp",
		data: { 'q': title, 'api-key': articleKey, callback: 'svc_search_v2_articlesearch' },
		dataType: 'jsonp',
		jsonpCallback: 'svc_search_v2_articlesearch',
		success: function(data) { 
			if (data.response.docs[0] === undefined) {
				console.log('ERROR: No articles found');
				// title = 'A New York Times Article';
			} else {
				formatRelated(data.response.docs);
				// title = data.response.docs[0].headline.main;
			}
			// outputComment(articleURL, title, name, location, body, userID);
		},
		error: function () {
			console.log('ERROR: Get request failed');
			// outputComment(articleURL, 'A New York Times Article', name, location, body, userID);
		}
	});	
}

function formatRelated(a) {
	for (var i = 0; i < a.length; i++) {
		// console.log(a[i]);
		console.log(a[i].headline.main);
		console.log(a[i].abstract);
		console.log(a[i].web_url);

	};
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
