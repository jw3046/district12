#District 12 Personal Event Organizer

##What does the District 12 Personal Event Organizer do?
- Allows you to search for events
- Allows you to manage and organize your events
- Allows you to view detailed information on events
- ...that's pretty much it.
- ...also it (//TODO: )displays Hunger-Games-themed images on the front page

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

Events in the D12PEO use the following fields:
- Event id: use as the name of the javascript object
- Event name: what it sounds like
- Date: date of the event (add support for start and end dates?)
- Description: a short description of the event
- Category: used for sorting (on the calendar page, etc.)
- Location...?: NYT gives city and state, but not sure if we want to include this

##Examples

##NYTimes API Details

###Event Date/Time

Date/Time listed vary between events
- date_time_description: contains a string for humans to read
	- Ex: "Nov. 12-Jan. 4. Weekdays from 11 a.m. to 8 p.m.; Saturdays from 10 a.m. to 9 p.m.; and Sundays from 10 a.m. to 6 p.m. (Shops have the option to close on Christmas Day and New Year’s Day.)"
- recurring_start_date: contains a start date for recurring events in JSON Date format
	- Ex: "2014-11-21T05:00:00.324Z"
- recurring_end_date: contains an end date for recurring events in JSON Date format
	- Ex: "2015-01-04T05:00:00.3Z"
- recur_days: an array that contains days recurring events happen on
	- Ex: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]