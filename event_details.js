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
	$("#title").html('Articles Relating to: <em>' + title + '</em>');

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
			} else {
				displayRelated(data.response.docs);
			}
		},
		error: function () {
			console.log('ERROR: Get request failed');
		}
	});	
}

function displayRelated(a) {
	for (var i = 0; i < a.length; i++) {
		var url = a[i].web_url;
		var title = a[i].headline.main;
		var summary = a[i].snippet;

		console.log(a[i]);

		$("#related").append(related1 + url
			+ related2 + title 
			+ related3 + summary
			+ related4 + url 
			+ related5);
	};
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
