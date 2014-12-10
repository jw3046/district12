/**
 * JavaScript for calendar.html
 */

/**
 * Updates currently stored events.
 */
function updateEvents() {
    var e = {};
	
	store.forEach(function(id, event) {
		e[event.date] = {
			'number': event.name,
			'url': event.url
		};

	});
	
	return e;
} 