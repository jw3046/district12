#District 12 Personal Event Organizer

##Miscellaneous Info

####The NYT Event Listings API provides the following fields for each event:
- Event id
- Event schedule id
- Last modified
- Event name
- Event detail url
- Web description
- City
- State
- Film rating
- Critic name
- Category
- Times pick
- Free
- Kid friendly
- Last chance
- Festival
- Long running show
- Previews and openings
- Recurring start date
- Recur days

####Store.js basics:
- `store.get('...')` gets value associated with key '...'
- `store.set('...', object)` sets the value associated with key '...' to object
- `store.remove('...')` removes the key-value pairing with key '...'
- `store.clear()` clears all key-value pairings from storage
- `store.getAll()` gets all stored values
- `store.forEach(function(...) { ....... })` executes the specified function for
	all stored values

##Storage conventions

Events are stored as javascript objects via store.js.

Events in the D12POE use the following fields:
- Event id: use as the name of the javascript object
- Event name: what it sounds like
- Date: date of the event (add support for start and end dates?)
- Description: a short description of the event
- Category: used for sorting (on the calendar page, etc.)
- Location...?: NYT gives city and state, but not sure if we want to include this
