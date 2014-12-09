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
	
	store.set(id, event);1
}

/**
 * Parses some common date formats.
 */
function parseDate(date) {
	// TODO: implement parser for date_time_description field
}