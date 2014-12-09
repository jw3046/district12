/**
 * JavaScript for calendar.html
 */

/**
 * Updates currently stored events.
 */
function updateEvents() {
	$('.responsive-calendar').responsiveCalendar.events = {};
	
	store.forEach(function(event, id) {
		$('.responsive-calendar.').responsiveCalendar.events[id] = {
			'number': shorten(events.name, 10),
			'url': events.url
		};
	});
}