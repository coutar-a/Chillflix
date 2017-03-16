(function ($) {

    UserProfileModel = Backbone.Model.extend({

        login: function (data) {
            this.url = "http://umovie.herokuapp.com/login";
            var _this = this;
            this.save(data).success(function (_data, success, result) {
                // Setting token on success
                _this.token = result.responseJSON.token;
                _this.following = result.responseJSON.following;
            });

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

        addToWatchlist: function (movie) {
            this.url = "http://umovie.herokuapp.com/watchlists/58c5f5ee1b8fb8040090bba3/movies";
            this.save(movie, {
                type: 'POST', dataType: 'application/json', headers: {
                    'Authorization': this.token
                }
            })

        }


    });

    userProfile = new UserProfileModel();

})(jQuery);