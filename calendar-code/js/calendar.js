/**
 * JavaScript for calendar.html
 */

/**
 * Updates currently stored events.
 */
function updateEvents() {
	alert('beginning of update');
    var e = {};
	
	store.forEach(function(id, event) {
		alert('in forEach ' + event.name);
		e[event.date] = {
			'number': event.name,
			'url': event.url
		};
		
		//alert('e: ' + JSON.stringify(e));

	});
	
	//alert('e: ' + JSON.stringify(e));
	
	return e;
} 