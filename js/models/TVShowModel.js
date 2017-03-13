(function ($) {

    TVShowModel = Backbone.Model.extend({
        fetchSeason: function (id) {
            this.url = "https://umovie.herokuapp.com/unsecure/tvshows/seasons/" + id;
            // todo encode/encrypt the line above

            var self = this;

            this.fetch({
                headers: {
                    'Authorization': userProfile.token
                }
            }).success(function (_data, success, result) {
                self.seasonTitle = result.responseJSON.results[0].collectionName;
                self.seasonLink = result.responseJSON.results[0].collectionViewUrl;
                self.primaryGenreName = result.responseJSON.results[0].primaryGenreName;
                self.longDescription = result.responseJSON.results[0].longDescription;
                self.artworkUrl = result.responseJSON.results[0].artworkUrl100;
                self.fetchYoutubeVideo(self.seasonTitle);
            })
        },

        fetchYoutubeVideo : function (tvshowName) {
            this.url = "https://www.googleapis.com/youtube/v3/search?" +
                "part=snippet&" +
                "key=AIzaSyB5Mzko--UQbWTNhxxGmMHQJVQt4ZW0YbM&" +
                "maxResults=1&" +
                "q= " + tvshowName + " trailer";
            var self = this;
            this.fetch().success(function(_data, success, result) {
                self.sourceVideo = "https://www.youtube.com/embed/" + result.responseJSON.items[0].id.videoId;
            })

        }

    });

    tvShowModel = new TVShowModel();

})(jQuery);