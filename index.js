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
            console.log('\nFAIL: ' + myUrl);
        }
    });
}

/*
* retrieves events around the user 
*/ 
function getEventsNearMe(eventListingsKey) {

    var requestURI = "http://api.nytimes.com/svc/events/v2/listings.json?&ll=" + latitude + "," + longitude+ "&api-key=" + eventListingsKey;


}

var x = document.getElementById("demo");
//get user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;  
}

getEventsListings(eventListingsKey)

