/**
 * Main view of the application. Handles the events
 * of the navigation bar, the side-menu (mobile) and
 * the footer, the login and registration of new users (**work in progress)
 * and in general what is shown to the user.
 *
 */
(function ($) {

    AppView = Backbone.View.extend({

        el: '.appViewContainer',
        currentUser : {title : "john smith"}, // Dummy user.

        // *******************************************************

        //loginView : new LoginView({}),
        navbarView : new NavbarView({}),
        homeView : new HomeView({}),
        //movieView : new MovieView({}),
        //tvShowView : new TVShowView({}),
        //actorView : new ActorView({}),
        //watchlistView : new WatchlistView({}),
        userProfileView : new UserProfileView(),
        //userParametersView : new UserParametersView(),
        footerView : new FooterView({}),

        // *******************************************************

        events : {
            "click .buttonHome" : "eventsDelegate",
            "click .buttonMoviePage" : "eventsDelegate",
            "click .buttonTVShowPage" : "eventsDelegate",
            "click .buttonActorPage" : "eventsDelegate",
            "click .buttonWatchlistsPage" : "eventsDelegate",
            "click .buttonUserProfile" : "eventsDelegate",
            "click .buttonUserParameters" : "eventsDelegate",
            "click .buttonUserLogout" : "eventsDelegate"
        },

        // *******************************************************

        /**
         * Called on initialisation.
         */
        initialize: function () {
            this.$el.append(this.navbarView.render().el);
            this.$el.append(this.homeView.render().el);
            this.$el.append(this.footerView.render().el);
        },

        /**
         * Do the events handling and routing.
         * @param event : Event event -> event to process
         */
        eventsDelegate: function (event) {
            var eventClassName = event.target.className;
            switch (eventClassName) {

                case "buttonHome" : {
                    console.log((this.$el.find(" .Page"))[0].innerHTML);
                    $(this.$el).find(" .Page")[0].replaceWith(this.homeView.render().el);
                    break;
                }

                case "buttonMoviePage" : {
                    //$(this.$el).find(" .Page")[0].replaceWith(this.movieView.render().el);
                    break;
                }

                case "buttonTVShowPage" : {
                    //$(this.$el).find(" .Page")[0].replaceWith(this.tvShowView.render().el);
                    break;
                }

                case "buttonActorPage" : {
                    //$(this.$el).find(" .Page")[0].replaceWith(this.actorView.render().el);
                    break;
                }

                case "buttonWatchlistsPage" : {
                    //$(this.$el).find(" .Page")[0].replaceWith(this.watchlistView.render(this.currentUser).el);
                    break;
                }

                case "buttonUserProfile" : {
                    $(this.$el).find(" .Page")[0].replaceWith(this.userProfileView.render(this.currentUser).el);
                    break;
                }

                case "buttonUserParameters" : {
                    //$(this.$el).find(" .Page")[0].replaceWith(this.userParametersView.render(this.currentUser).el);
                    break;
                }

                case "buttonUserLogout" : {
                    //$(this.$el).find(" .Page")[0].replaceWith(this.loginView.render().el);
                    break;
                }

            }
        }

    });

})(jQuery);