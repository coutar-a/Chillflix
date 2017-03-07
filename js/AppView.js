/**
 * Main view of the application. Handles the events
 * of the navigation bar, the side-menu (mobile) and
 * the footer.
 *
 */
(function ($) {

    AppView = Backbone.View.extend({

        el: '.appViewContainer',
        currentUser : {title : "john smith"}, // Dummy user.

        // *******************************************************

        //navbarTemplate : _.template($('#NavbarTemplate').html()),
        //footerTemplate : _.template($('#FooterTemplate').html()),

        homeView : new HomeView({}),
        //movieView : new MovieView({}),
        //tvShowView : new TVShowView({}),
        //actorView : new ActorView({}),
        //watchlistView : new WatchlistView({}),
        userProfileView : new UserProfileView(),

        // *******************************************************

        events: {
            "click .buttonHome": "eventsDelegate",
            "click .buttonWatchlistsPage": "eventsDelegate",
            "click .buttonMoviePage": "eventsDelegate",
            "click .buttonTVShowPage": "eventsDelegate",
            "click .buttonActorPage": "eventsDelegate",
            "click .buttonUserProfile": "eventsDelegate",
            "click .buttonUserParameters": "eventsDelegate"
        },

        // *******************************************************

        /**
         * Called on initialisation.
         */
        initialize: function () {
            this.$el.html(this.homeView.render().el);
        },

        /**
         * Do the events handling and routing.
         * @param event : Event event -> event to process
         */
        eventsDelegate: function (event) {
            var eventClassName = event.target.className;
            switch (eventClassName) {

                case "buttonHome" : {
                    this.$el.html(this.homeView.render().el);
                    break;
                }

                case "buttonMoviePage" : {
                    //this.$el.html(this.movieTemplate());
                    break;
                }

                case "buttonTVShowPage" : {
                    //this.$el.html(this.tvShowTemplate());
                    break;
                }

                case "buttonActorPage" : {
                    //this.$el.html(this.actorTemplate());
                    break;
                }

                case "buttonWatchlistsPage" : {
                    //this.$el.html(this.watchlistTemplate());
                    break;
                }

                case "buttonUserProfile" : {
                    this.$el.html(this.userProfileView.render(this.currentUser).el);
                    break;
                }

                case "buttonUserParameters" : {
                    //this.$el.html(this.settingsTemplate());
                    break;
                }

                case "buttonLogin" : {
                    //this.$el.html(this.loginTemplate());
                    break;
                }

            }
        }

    });

})(jQuery);