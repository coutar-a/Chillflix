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
        navbarView: new NavbarView({}),
        homeView: new HomeView({}),
        movieView: new MovieView({}),
        tvShowView: new TVShowView({}),
        actorView: new ActorView({}),
        watchlistCollectionView: new WatchlistCollectionView({}),
        userProfileView: new UserProfileView(),
        //userParametersView : new UserParametersView(),
        searchResultsView: new SearchResultsView({}),
        footerView: new FooterView({}),

        // *******************************************************

        events: {
            "click .buttonHome": "eventsDelegate",
            "click .buttonMoviePage": "eventsDelegate",
            "click .buttonTVShowPage": "eventsDelegate",
            "click .buttonActorPage": "eventsDelegate",
            "click .buttonWatchlistsPage": "eventsDelegate",
            "click .buttonUserProfile": "eventsDelegate",
            "click .buttonUserParameters": "eventsDelegate",
            "click .buttonUserLogout": "eventsDelegate",
            'keyup': 'processKey',
            "click .searchResultsItem": "route"

        },

        // *******************************************************

        /**
         * Called on initialisation.
         */
        initialize: function () {

            userProfile.login({email: "johnsmith@ulaval.ca", password: "motdepasse"}); // Remplacer par le vrai login à la remise 3.
            actorModel.fetchActor(15506997);
            tvShowModel.fetchSeason(1027617029);
            movieModel.fetchMovie(265727087);

            //

            this.$el.append(this.navbarView.render().el);
            this.$el.append(this.homeView.render(userProfile).el);
            this.$el.append(this.footerView.render().el);

            //

            this.listenTo(this.homeView, "click", this.eventsDelegate);

        },

        /**
         * Do the events handling and routing.
         * @param event : Event event -> event to process
         */
        eventsDelegate: function (event) {
            var dataset = event.target.dataset.action;
            switch (dataset) {
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
                    this.$el.find(" .Page")[0].innerHTML = $(this.actorView.render(actorModel).el).html();
                    break;
                }

                case "buttonWatchlistsPage" : {
                    this.$el.find(" .Page")[0].innerHTML = $(this.watchlistCollectionView.render(watchlistCollection).el).html();
                    break;
                }

                case "buttonUserProfile" : {
                    this.$el.find(" .Page")[0].innerHTML = $(this.userProfileView.render(userProfile).el).html();
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

                case "buttonAddToWatchlist" : {
                    console.log(movieModel);
                    userProfile.addToWatchlist(movieModel.toJSON());
                    break;
                }


            }
        },

        processKey: function (key) {
            console.log(key);
            if (key.keyCode == 13) {

                var keywords = $(document.activeElement)[0].value;
                var search = new SearchResultsModel({});
                search.fetchWithKeywords(keywords, this);

            }


        },

        route: function (event) {

            // Contains media ID and media type.
            var mediaInfo = event.currentTarget.dataset.action.split(" ");
            switch (mediaInfo[1]) {

                case "track" : {
                    var movie = new MovieModel({});
                    movie.fetchMovie(mediaInfo[0], this);

                    break;
                }

                case "collection" : {
                    var tvShow = new TVShowModel({});
                    tvShow.fetchSeason(mediaInfo[0], this);

                    break;
                }

            }

        }

    });

})(jQuery);