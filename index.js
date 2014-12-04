var articleSearchKey = "4b6a8461fa82d7a03846643604c6cfcc:15:70179591";
var eventListingsKey = "5d65a900f394c8d1f5a2276a9a287120:12:70179591";
var mostPopularKey = "1afeb582103aac31d8d6a2724f32f5aa:7:70179591";
var movieReviewsKey =" bdfdb8e3cb88fed3029cb5a65646f6f5:18:70179591";
var topStoriesKey = "d84ffb842774795b60d4193a6c9e86c2:12:70179591";

/*
* retrieves evets data
*/
function getEventListings(eventListingsKey) { 
    var requestURI = "http://api.nytimes.com/svc/events/v2/listings.json?api-key=5d65a900f394c8d1f5a2276a9a287120%3A12%3A70179591";
    var offset = (pagenumber -1) * 25
    $("#pagetitle").empty();
    $("#display").empty();
    var titleofthepage="District12";
    $("#pagetitle").append(titleofthepage);
    var oldnewtop="";
    oldnewtop += "                    <nav>";
    oldnewtop += "                        <ul class=\"pager\">";
    oldnewtop += "                            <li class=\"previous\"><a href=\"#\" id =\"newer\" onClick=\"newerF()\"><span aria-hidden=\"true\">&larr;<\/span> newer<\/a><\/li>";
    oldnewtop += "                            <li class=\"next\"><a href=\"#\" id=\"older\" onClick=\"olderF()\">older <span aria-hidden=\"true\">&rarr;<\/span><\/a><\/li>";
    oldnewtop += "                        <\/ul>";
    oldnewtop += "                    <\/nav>";
    $("#display").append(oldnewtop);
    $.ajax({
        type: "GET",
        url: pageurl + offset + com_key,
        dataType: 'jsonp',
        success: function (data) {
            formatEventListings(data);
            console.log(data);
        },
        error: function () {
            console.log('\nFAIL: ' + myUrl);
        }
    });
}

