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
            userProfileView: new UserProfileView({}),
            searchResultsView: new SearchResultsView({}),
            footerView: new FooterView({})

        },

        events: {
            "click .link": "route", // Route with data-href attribute
            "click .searchResultsItemButton": "route", // Route with data-action attribute
            "keyup .searchBar": "search", // Starts the search query
            "click .buttonSettings": "settings", // Opens the search settings modal
            "click .buttonLogin": "authenticate",
            "click .buttonRegister": "register",
            "click .buttonLogout": "logout",
            "click .buttonAddToWatchlist" : "addToWatchlist",
            "click .buttonFollowUser" : "followUser",
            "click .buttonUnfollowUser" : "unfollowUser"
        },

        initialize: function () {

            var router = new AppRouter({parentView: this});
            router.on("route", this.validateToken);
            //
            Backbone.history.start();
            this.checkForCookies();

        },

        checkForCookies: function () {

            /*console.log(!!Cookies.get('token'));
            if (!!Cookies.get('token')) {
                userProfile.attributes = JSON.parse(Cookies.get('user'));
                Backbone.history.navigate('login/authenticate', {trigger: true});
            } else {
                Backbone.history.navigate('login', {trigger: true});
            }*/
            console.log(!!$.cookie('token'));
            if (!!$.cookie('token')) {
                userProfile.attributes = JSON.parse($.cookie('user'));
                Backbone.history.navigate('login/authenticate', {trigger: true});
            } else {
                Backbone.history.navigate('login', {trigger: true});
            }

        },

        validateToken: function () {
            /*if (!(!!Cookies.get('token'))) {
                userProfile.logout();
                Backbone.history.navigate('login', {trigger: true});
            }*/
            if (!(!!$.cookie('token'))) {
                userProfile.logout();
                Backbone.history.navigate('login', {trigger: true});
            }
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

        authenticate: function () {
            var email = $("#inputLoginEmail")[0].value;
            var password = $("#inputLoginPassword")[0].value;
            userProfile = new UserProfileModel();
            userProfile.login({email: email, password: password});
        },

        register: function () {

            function validateFormat (email, password, passwordConfirm) {
                return email.includes("@") && password == passwordConfirm;
            }

            var email = $("#inputRegisterEmail")[0].value;
            var password = $("#inputRegisterPassword")[0].value;
            var passwordConfirm = $("#inputRegisterComfirmPassword")[0].value;
            var firstname = $("#inputRegisterFirstname")[0].value;
            var lastname = $("#inputRegisterLastname")[0].value;
            userProfile = new UserProfileModel();

            if (validateFormat(email, password, passwordConfirm)) {
                userProfile.register({email: email, password: password, name: firstname + " " + lastname});
            } else if (!email.includes("@") && password == passwordConfirm) {
                Materialize.toast('Invalid email address', 3000, "rounded red");
            } else if (email.includes("@") && password != passwordConfirm) {
                Materialize.toast('Passwords not matching', 3000, "rounded red");
            } else {
                Materialize.toast('Invalid email address & Passwords not matching', 3000, "rounded red");
            }


        },

        logout: function () {
            userProfile.logout();
            Backbone.history.navigate('login', {trigger: true});
        },

        addToWatchlist : function (e) {
            // var movieId = userProfile.addToWatchlist();
        },

        followUser : function (e) {
            userProfile.followUser(e.target.dataset.href);
        },

        unfollowUser : function (e) {
            userProfile.unfollowUser(e.target.dataset.href);
        }

    });

})(jQuery);