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
            })
        },

        setVideoUrl: function(url) {
            var self = this;
            self.videoURL = url;
        }

    });

    tvShowModel = new TVShowModel();

})(jQuery);