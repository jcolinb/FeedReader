/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should each have a URL', function() {
            for (feed of allFeeds) {
                expect(feed.url).not.toBe(undefined);
                expect(feed.url).not.toBe("");
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should each have a name', function() {
            for (feed of allFeeds) {
                expect(feed.name).not.toBe(undefined);
                expect(feed.name).not.toBe("");
            }
        });
        
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('the menu',function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden by default',function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should change state when clicked',function() {
            let state = $('body').hasClass('menu-hidden');

            $('.menu-icon-link').click();

            expect($('body').hasClass('menu-hidden')).not.toBe(state);

            $('.menu-icon-link').click(); // reset menu
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0,done);
        });

        it('should contains at least one feed',function() {
            expect($('.feed').children().hasClass('entry-link')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        let state={}; // object to store states for comparison

        beforeEach(function(done) {
            let step = 0;

            // function to control multiple async calls and store a state indicator for comparison
            function nextStep() {
                state[step] = $('.header-title').text(); // store header-title as marker of feed change
                step++; // increment before condition since it will be called recursively
                if (step<2) { // iterates twice
                    loadFeed(step,nextStep); // call recursively from callback of loadFeed
                }
                else { // after 2 cycles, call done()
                    done();
                }
            }
            loadFeed(0,nextStep); // initialize load loop
        });

        it('should change the contents of feed container',function() {
            expect((state[0])).toBe((state[1])); // compare two states to ensure different contents
        });

    });
}());
