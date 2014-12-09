/**
 * JavaScript for calendar.html
 */

/**
 * Updates currently stored events.
 */
function updateEvents() {
	$('.responsive-calendar').responsiveCalendar.events = {};
	
	var i = 11;
	
	store.forEach(function(event, id) {
		alert(event.url);
		$('.responsive-calendar').responsiveCalendar.events['2014-12-09'] = {
			'number': shorten(events.name, 10),
			'url': events.url
		};
		
		i ++;
	});
}