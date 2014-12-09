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
		$('.responsive-calendar.').responsiveCalendar.events[event.date] = {
			'number': shorten(events.name, 10),
			'url': events.url
		};
		
		i ++;
	});
}