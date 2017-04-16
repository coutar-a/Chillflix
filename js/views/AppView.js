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
        watchlistCollectionView: new MyWatchlistsView({}),
        userProfileView: new UserProfileView({}),
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
            "click .button-collapse": "eventsDelegate",
            "click .buttonSearchParameters": "eventsDelegate",
            "click .followUser": "eventsDelegate",
            "click .createWatchlist": "eventsDelegate",
            "click .removeWatchlist": "eventsDelegate",
            "click .searchResultsItem": "route",
            "keyup": "startSearch"

        },

        // *******************************************************

        /**
         * Called on initialisation.
         */
        initialize: function () {

            userProfile.login({email: "johnsmith@ulaval.ca", password: "motdepasse"}); // Remplacer par le vrai login à la remise 3.
            navbarModel = new NavbarModel();
            navbarModel.fetchGenres(this);

            //

            this.$el.append(this.navbarView.render().el);
            this.$el.append(this.homeView.render(userProfile).el);
            this.$el.append(this.footerView.render().el);


        },

        cssInitialize: function () {
            $('.modal').modal();

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

                case "buttonWatchlistsPage" : {
                    this.$el.find(" .Page")[0].innerHTML = $(this.watchlistCollectionView.render(watchlistCollection).el).html();
                    break;
                }

                case "buttonUserProfile" : {
                    this.$el.find(" .Page")[0].innerHTML = $(this.userProfileView.render(userProfile).el).html();
                    this.cssInitialize();
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

                case "buttonCreateWatchlist" : {
                    console.log(event.target);
                    break;
                }

                case "buttonRemoveWatchlist" : {
                    console.log(event.target);
                    break;
                }

                case "buttonFollowUser" : {
                    console.log(event.target);
                    break;
                }


            }
        },

        startSearch: function (key) {
            if (key.keyCode == 13) {

                var keywords = $(document.activeElement)[0].value.replace(" ", "%20");
                var search = new SearchResultsModel({});
                search.fetchWithKeywords(keywords, this);

            }


        },

        route: function (event) {

            function aux(infos) {
                var mediaInfos = {};
                mediaInfos.type = infos[0];
                mediaInfos.trackId = infos[1].substring(2, infos[1].length);
                mediaInfos.artistId = infos[2].substring(2, infos[2].length);
                mediaInfos.collectionId = infos[3].substring(2, infos[3].length);
                mediaInfos.userId = infos[4].substring(2, infos[4].length);
                return mediaInfos;
            }

            // Contains media ID and media type.
            var mediaInfo = aux(event.currentTarget.dataset.action.split(" "));

            console.log(mediaInfo);

            switch (mediaInfo.type) {

                case "track" : {
                    var movie = new MovieModel({});
                    movie.fetchMovie(mediaInfo.trackId, this);
                    localStorage.setItem(mediaInfo.trackId, JSON.stringify(mediaInfo));
                    break;
                }

                case "collection" : {
                    var tvShow = new TVShowModel({});
                    tvShow.fetchSeason(mediaInfo.collectionId, this);
                    localStorage.setItem(mediaInfo.collectionId, JSON.stringify(mediaInfo));
                    break;
                }

                case "artist" : {
                    var actor = new ActorModel({});
                    actor.fetchActor(mediaInfo.artistId, this);
                    localStorage.setItem(mediaInfo.artistId, JSON.stringify(mediaInfo));
                    break;
                }

                case "userProfile" : {
                    var user = new UserProfileModel({});
                    user.fetchProfile(mediaInfo.userId, this);
                    localStorage.setItem(mediaInfo.userId, JSON.stringify(mediaInfo));
                    break;
                }

            }


        }
    });

})(jQuery);