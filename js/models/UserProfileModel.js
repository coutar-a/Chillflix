(function ($) {

    UserProfileModel = Backbone.Model.extend({

        // TODO : Refactor pour le livrable 3.
        login: function (data) {
            this.url = "http://umovie.herokuapp.com/login";
            var _this = this;
            this.save(data).success(function (_data, success, result) {
                // Setting token on success
                _this.attributes.name = "John";
                _this.attributes.lastName = "Smith";
                _this.attributes.token = result.responseJSON.token;
                _this.attributes.following = result.responseJSON.following;
                _this.attributes.options = {"searchFilter": "", "moviesGenres": [], "tvshowsGenres": [], "searchLimit" : 50};
                _this.attributes.watchlists = [];

            });

        },

        fetchProfile: function (id, caller) {
            this.url = "http://umovie.herokuapp.com/users/" + id;
            this.fetch({
                headers: {'Authorization': userProfile.attributes.token},
                success: function (data) {
                    console.log(data);
                    caller.$el.find(" .Page")[0].innerHTML = $(caller.userProfileView.render(data).el).html();
                }

            })

        },

        logout: function () {
            this.url = "http://umovie.herokuapp.com/logout";
            this.fetch();
        },

        followUser: function (userID) {
            this.url = "http://umovie.herokuapp.com/follow";
            this.save({id: userID}, {
                type: 'POST', dataType: 'application/json',
                headers: {
                    'Authorization': this.token
                }
            });
        },

        unfollowUser: function (userID) {
            this.url = "http://umovie.herokuapp.com/follow/" + userID;
            this.destroy({
                type: 'DELETE', dataType: 'application/json',
                headers: {
                    'Authorization': this.token
                }
            });
        },

        addToWatchlist: function (movie, watchlistId) {
            this.url = "http://umovie.herokuapp.com/watchlists/58c5f5ee1b8fb8040090bba3/movies";
            this.save(movie, {
                type: 'POST', dataType: 'application/json', headers: {
                    'Authorization': this.attributes.token
                }
            })

        },

        createWatchlist: function (name) {
            watchlistCollection.create(
                {
                    name: name,
                    owner: userProfile.attributes
                },
                {
                    success: function(){ console.log("Watchlist " + name + " successfully created")}
                }
            );
        }


    });

    userProfile = new UserProfileModel();

})(jQuery);