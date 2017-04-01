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

        views: {

            loginView: new LoginView({}),
            registerView: new RegisterView({}),
            navbarView: new NavbarView({}),
            homeView: new HomeView({}),
            movieView: new MovieView({}),
            tvShowView: new TVShowView({}),
            actorView: new ActorView({}),
            watchlistCollectionView: new WatchlistCollectionView({}),
            userProfileView: new UserProfileView({}),
            searchResultsView: new SearchResultsView({}),
            footerView: new FooterView({})

        },

        events: {
            "click .link": "route", // Route with data-href attribute
            "click .searchResultsItem": "route", // Route with data-action attribute
            "keyup .searchBar": "search", // Starts the search query
            "click .buttonSettings": "settings", // Opens the search settings modal
            "click .buttonLogin": "authenticate",
            "click .buttonRegister": "register",
            "click .buttonLogout": "logout"
        },

        initialize: function () {

            this.appRouter = new AppRouter({parentView: this});

            this.appRouter.on('route:login', this.appRouter.login);
            this.appRouter.on('route:login/register', this.appRouter.register);
            this.appRouter.on('route:login/authenticate', this.appRouter.initApp);
            this.appRouter.on('route:home', this.appRouter.home);
            this.appRouter.on('route:search/:query', this.appRouter.search);
            this.appRouter.on('route:user/:id', this.appRouter.userProfile);
            this.appRouter.on('route:track/:id', this.appRouter.movie);
            this.appRouter.on('route:artist/:id', this.appRouter.artist);
            this.appRouter.on('route:collection/:id', this.appRouter.collection);
            this.appRouter.on('route:collection/:id/seasons/', this.appRouter.seasons); // TODO

            Backbone.history.start();

            // if (this.validateCookie()) {
            //     this.redirect();
            // }
            // else {
            //     Backbone.history.navigate('login', {trigger: true});
            //     this.appRouter.login();
            // }

            Backbone.history.navigate('login', {trigger: true});
            this.appRouter.login();

        },

        route: function (e) {

            e.preventDefault();
            if (e.target.dataset.hasOwnProperty('href')) {
                Backbone.history.navigate(e.target.dataset.href, {trigger: true});
            } else {
                function _route(event) {

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
                    switch (mediaInfo.type) {

                        case "track" : {
                            var r = {};
                            r.href = mediaInfo.type;
                            r.id = mediaInfo.trackId;
                            return r;
                        }

                        case "collection" : {
                            var r = {};
                            r.href = mediaInfo.type;
                            r.id = mediaInfo.collectionId;
                            return r;
                        }

                        case "artist" : {
                            var r = {};
                            r.href = mediaInfo.type;
                            r.id = mediaInfo.artistId;
                            return r;
                        }

                        case "user" : {
                            var r = {};
                            r.href = mediaInfo.type;
                            r.id = mediaInfo.userId;
                            return r;
                        }

                    }
                }

                var r = _route(e);
                //
                Backbone.history.navigate(r.href + "/" + r.id, {trigger: true});
            }

        },

        search: function (e) {
            if (e.key == 'Enter') {
                var query = ($(document.activeElement)[0].value);
                e.preventDefault();
                Backbone.history.navigate(e.target.dataset.href + query, {trigger: true});
            }
        },

        settings: function () {
            $("#settingsModal").modal('open');
        },

        validateCookie : function() {
            return !!Cookies.get('token');
        },

        redirect : function () {
            userProfile = JSON.parse(Cookies.get('user'));
            console.log("oui");
            Backbone.history.navigate('login/authenticate', {trigger: true});
            this.appRouter.initApp();
        },

        authenticate: function () {
            var email = $("#inputLoginEmail")[0].value;
            var password = $("#inputLoginPassword")[0].value;
            userProfile = new UserProfileModel();
            userProfile.login({email: email, password: password});
        },

        register: function () {
            var email = $("#inputRegisterEmail")[0].value;
            var password = $("#inputRegisterPassword")[0].value;
            var firstname = $("#inputRegisterFirstname")[0].value;
            var lastname = $("#inputRegisterLastname")[0].value;
            userProfile = new UserProfileModel();
            console.log("ok");
            userProfile.register({email: email, password: password, name: firstname + " " + lastname});

        },

        logout: function () {
            userProfile.logout();
            Backbone.history.navigate('login', {trigger: true});
        }

    });

})(jQuery);