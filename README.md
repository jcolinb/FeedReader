## Feed Reader

An application for loading, organizing, and displaying feeds from your favorite sites and sources, using the Google feedreader API.

### Dependencies

This application utilizes [JQuery](https://jquery.com/) v2.2.1, [Handlebars](https://handlebarsjs.com/) v2.0.0 for CSS templating, [Jasmine](https://jasmine.github.io/) v2.1.2 for testing, as well as the Google Feed API. The Google API, JQuery, and Handlebars are loaded from CDN's, and it dynamically loads feeds from other sites. To run locally, **you must be connected to the internet**.

### To use

1. Clone or download this repository.
2. Make sure you are connected to the internet.
3. Open index.html in your favorite browser.
4. The first feed in the list**\*** will load automatically. Click on the menu to list the other feeds. Click one to load a new feed.

**\*** The allFeeds object in app.js is an array containing all available feeds as objects with 2 properties:
1. a "name" attribute with the feed's name.
2. a "url" property with the feed's url.