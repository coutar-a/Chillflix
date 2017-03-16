(function ($) {

    MovieModel = Backbone.Model.extend({

        fetchMovie: function (id, caller) {
            this.url = "https://umovie.herokuapp.com/movies/" + id;
            var self = this;
            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            }).success(function (_data, success, result) {
                // Fetch the video on the youtube API :
                self.fetchYoutubeVideo(result.responseJSON.results[0].trackName, caller, result.responseJSON.results[0]);
            });
            return self;
        },

        fetchYoutubeVideo: function (movieName, caller, data) {
            this.url = "https://www.googleapis.com/youtube/v3/search?" +
                "part=snippet&" +
                "key=AIzaSyB5Mzko--UQbWTNhxxGmMHQJVQt4ZW0YbM&" +
                "maxResults=1&" +
                "q= " + movieName + " movie trailer";
            this.fetch().success(function (_data, success, result) {
                data.youtubePreviewUrl = "https://www.youtube.com/embed/" + result.responseJSON.items[0].id.videoId;
                caller.$el.find(" .Page")[0].innerHTML = $(caller.movieView.render(data).el).html();
            })

        }


    });


}(jQuery));