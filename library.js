/**
 * A library of various useful functions.
 */

/**
 * Gets fields of query string, if any (returns empty object if none)
 * 
 * credits: google, stackoverflow
 */
function fields() {
	return fields(document.URL);
}

/**
 * Gets fields of query string, if any (returns empty object if none)
 */
function fields(query) {
	var start = query.indexOf('?');
	var entries = {};
	
	if(start >= 0) {
		var entrystrings = query.substring(i + 1, query.length).split('&');
		
		for(var i = 0; i < entries.length; i ++) {
			data = entrystrings[i].split('=');
			entries[data[0]] = data[1];
		}
	}
	
	return entries;
}

/**
 * Stores the specified event fields as an event with the id as the name.
 */
function storeEvent(id, name, date, description, category) {
	var event = {
			'name': name,
			'date': date,
			'description': description,
			'category': category
	};
	
	store.set(id, event);
}

/**
 * Gets the event with the specified id.
 */
function getEvent(id) {
	return(store.get(id));
}

/**
 * Returns all stored events.
 */
function getEvents() {
	return(store.getAll());
}

/**
 * Returns the n most recent events.
 */
function getRecentEvents(n) {
	var recent = {};
	
	for(var i = 0; i < n; i ++) {
		recent[i] = {
				date: "NONE"
		}
		
		store.forEach(function(event, id) {
			// TODO: implement
		});
	}
}

/**
 * Returns a version of the given string shortened to the given length.
 */
function shorten(string, length) {
	if(string.length > length) {
		return string.substring(0, length - 3) + '...';
	}
}

/**
 * Returns whether date1 precedes date2.
 */
function precedes(date1, date2) {
	
}

/**
 * Parses some common date formats.
 */
function parseDate(date) {
	// TODO: implement parser for date_time_description field
}

/**
 * Converts a date string in the format mm/dd/yy to one in the format
 * yyyy-mm-dd.
 */
function convert(mdy) {
	var split = mdy.split('/');
	return split[2] + '-' + split[0] + '-' + split[1];
}