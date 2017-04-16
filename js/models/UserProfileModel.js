(function ($) {

    UserProfileModel = Backbone.Model.extend({

        login: function (data, options) {
            this.url = "http://umovie.herokuapp.com/login";
            var _this = this;
            this.save(data, {type: 'POST'}).success(function (_data, success, result) {
                // Setting token on success
                _this.attributes.name = result.responseJSON.name;
                $.cookie('token', result.responseJSON.token, {expires: 1});
                _this.attributes.token = $.cookie('token');
                _this.attributes.following = result.responseJSON.following;
                _this.attributes.options = {
                    "searchFilter": "",
                    "moviesGenres": [],
                    "tvshowsGenres": [],
                    "searchLimit": 50
                };
                _this.attributes.watchlists = [];
                _this.attributes.gravatarSrc = "https://secure.gravatar.com/avatar/" + md5((_this.attributes.email).trim().toLowerCase());
                $.cookie('user', JSON.stringify(_this), {expires: 1});
                //

                Backbone.history.navigate('login/authenticate', {trigger: true});
                Materialize.toast('Logged in as ' + userProfile.attributes.email, 3000, 'rounded blue');
            }).fail(function () {
                Materialize.toast('Wrong credentials. Try again.', 3000, "rounded red");
                Backbone.history.navigate('login', {trigger: true});
            });

        },

        register: function (data) {

            this.url = "http://umovie.herokuapp.com/signup";
            this.save(data, {type: "POST"}).success(function (data) {
                Materialize.toast('Account created : ' + data.email, 3000, "rounded blue");
                Backbone.history.navigate('login', {trigger: true});
            }).fail(function (data) {
                Materialize.toast(data.statusText + ' : Invalid field(s). Try again.', 3000, "rounded blue");
            });


        },

        fetchProfile: function (id, caller) {
            this.url = "http://umovie.herokuapp.com/users/" + id;
            this.fetch({
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data) {
                    data.attributes.gravatarSrc = "https://secure.gravatar.com/avatar/" + md5((data.attributes.email).trim().toLowerCase());
                    caller.$el.find(" .Page")[0].innerHTML = $(new UserProfileView().render(data).el).html();
                }

            })

        },

        logout: function () {
            Materialize.toast('Logged out', 3000, 'rounded blue');
            this.url = "http://umovie.herokuapp.com/logout";
            this.fetch();
            userProfile = new UserProfileModel();

        },

        followUser: function (userID) {

            // if (userProfile.attributes.id == userID) {
            //     Materialize.toast("Cannot follow yourself", 3000, 'rounded red');
            //     return;
            // }

            this.url = "http://umovie.herokuapp.com/follow";
            this.save({id: userID}, {
                type: 'POST', dataType: 'application/json',
                headers: {
                    'Authorization': userProfile.attributes.token
                }
            }).success(function (data) {
                console.log(data);
                Materialize.toast("Successfully followed user " + data.responseText.email, 3000, 'rounded blue');
            }).fail(function (data) {
                Materialize.toast("Already following user " + data.responseText.email, 3000, 'rounded red');
            });
        },

        unfollowUser: function (userID) {

            // if (userProfile.attributes.id == userID) {
            //     Materialize.toast("Cannot unfollow yourself", 3000, 'rounded red');
            //     return;
            // }

            this.url = "http://umovie.herokuapp.com/follow/" + userID;
            this.destroy({
                type: 'DELETE', dataType: 'application/json',
                headers: {
                    'Authorization': userProfile.attributes.token
                }

            }).success(function (data) {
                console.log(data);
                Materialize.toast("Successfully unfollowed user " + data.responseText.email, 3000, 'rounded blue');
            }).fail(function (data) {
                Materialize.toast("Not following user " + data.responseText.email, 3000, 'rounded red');
            });
        },

        getWatchlists: function(){
            return watchlistCollection.filterByUserEmail(this.attributes.email);
        },

        createWatchlist: function (name) {
            watchlistCollection.create(
                {
                    name: name,
                    owner: this.attributes
                },
                {
                    success: function(){ console.log("Watchlist " + name + " successfully created")}
                }
            );
        }
    });

    userProfile = new UserProfileModel();

})(jQuery);