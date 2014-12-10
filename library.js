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
function storeEvent(id, name, date, description, category, url) {
	store.set(id, {
		'name': name,
		'date': date,
		'description': description,
		'category': category,
		'url': url
	});
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
	
	var size = n;
	if(store.getAll().length < n) {
		size = store.getAll().length;
	}
	
	for(var i = 0; i < size; i ++) {
		recent[i] = {
				id: "NONE",
				date: "NONE"
		};
		
		var flag;
		
		store.forEach(function(event, id) {
			flag = false;
			
			for(var j = 0; j < i; j ++) {
				if(id == event[j].id) {
					flag = true;
				}
			}
			
			if(!flag && (recent[i].id == "NONE" ||
					(precedes(event.date, recent[i].date) &&
							id != recent[i].id))) {
				recent[i].id = id;
				recent[i].date = event.date;
			}
		});
	}
}

/**
 * Returns a version of the given string shortened to the given length.
 */
function shorten(s, length) {
	if(s.length > length) {
		return s.substring(0, length - 3) + '...';
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