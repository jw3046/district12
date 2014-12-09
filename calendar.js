/**
 * gets fields of query string, if any (returns empty object if none)
 * string
 * 
 * credits: google, stackoverflow
 */
function fields() {
	var start = document.URL.indexOf('?');
	var entries = {};
	
	if(start >= 0) {
		var entrystrings = document.URL.substring(i + 1, document.URL.length).split('&');
		
		for(var i = 0; i < entries.length; i ++) {
			data = entrystrings[i].split('=');
			entries[data[0]] = data[1];
		}
	}
	
	return entries;
}