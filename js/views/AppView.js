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

        // *******************************************************

        //loginView : new LoginView({}),
        navbarView : new NavbarView({}),
        homeView : new HomeView({}),
        movieView : new MovieView({}),
        tvShowView : new TVShowView({}),
        actorView : new ActorView({}),
        //watchlistsView : new WatchlistsView({}),
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

            userProfile.login({email: "johnsmith@ulaval.ca", password: "motdepasse"}); // Remplacer par le vrai login à la remise 3.
            tvShowModel.fetchSeason(1027617029);
            movieModel.fetchMovie(265727087);

            this.$el.append(this.navbarView.render().el);
            this.$el.append(this.homeView.render(userProfile).el);
            this.$el.append(this.footerView.render().el);
        },

        /**
         * Do the events handling and routing.
         * @param event : Event event -> event to process
         */
        eventsDelegate: function (event) {
            var eventClassName = event.target.dataset.action;
            switch (eventClassName) {
                case "buttonHome" : {
                    this.$el.find(" .Page")[0].innerHTML = $(this.homeView.render(userProfile).el).html();
                    break;
                }

                case "buttonMoviePage" : {
                    this.$el.find(" .Page")[0].innerHTML = $(this.movieView.render(movieModel).el).html();
                    break;
                }

                case "buttonTVShowPage" : {
                    this.$el.find(" .Page")[0].innerHTML = $(this.tvShowView.render(tvShowModel).el).html();
                    break;
                }

                case "buttonActorPage" : {
                    /*var actorId =event.target.dataset.actorId; 
                    var self = this;
                    actorModel.fetchActor(actorId)
                    .then(function(){
                       return actorModel.fetchImage(1);//L'api ne retourne pas d'image on utilise un api bidon
                    })
                    .then(function(){
                        self.$el.find(" .Page")[0].innerHTML = $(self.actorView.render(actorModel).el).html();
                    });*/

                    break;
                }

                case "buttonWatchlistsPage" : {
                    //this.$el.find(" .Page")[0].innerHTML = $(this.watchlistsView.render(this.currentUser).el).html();
                    break;
                }

                case "buttonUserProfile" : {
                    var actorId =event.target.dataset.actorId; 
                    var self = this;
                    actorModel.fetchActor(actorId)
                    .then(function(){
                       return actorModel.fetchImage(1);//L'api ne retourne pas d'image on utilise un api bidon
                    })
                    .then(function(){
                        self.$el.find(" .Page")[0].innerHTML = $(self.actorView.render(actorModel).el).html();
                    });
                    
                    //this.$el.find(" .Page")[0].innerHTML = $(this.userProfileView.render(userProfile).el).html();
                    break;
                }

                case "buttonUserParameters" : {
                    //this.$el.find(" .Page")[0].innerHTML = $(this.userParameters.render(this.currentUser).el).html();
                    break;
                }

                case "buttonUserLogout" : {
                    //this.$el.find(" .Page")[0].innerHTML = $(this.loginView.render().el).html();
                    break;
                }

            }
        }

    });

})(jQuery);