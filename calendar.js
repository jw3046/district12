/**
 * JavaScript for calendar.html
 */

/**
 * Updates currently stored events.
 */
function updateEvents() {
	$('.responsive-calendar').responsiveCalendar.events = {};
	
	var i = 1;
	
	store.forEach(function(event, id) {
		$('.responsive-calendar.').responsiveCalendar.events[id] = {
			'number': shorten(events.name, 10),
			'url': events.url,
			'date': '2014-12-' + i;
		};
		
		i ++;
	});
}