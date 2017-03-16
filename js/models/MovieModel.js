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
                self.wrapperType = result.responseJSON.results[0].wrapperType;
                self.kind = result.responseJSON.results[0].kind;
                self.trackId = result.responseJSON.results[0].trackId;
                self.artistName = result.responseJSON.results[0].artistName;
                self.trackName = result.responseJSON.results[0].trackName;
                self.trackCensoredName = result.responseJSON.results[0].trackCensoredName;
                self.trackViewUrl = result.responseJSON.results[0].trackViewUrl;
                self.previewUrl = result.responseJSON.results[0].previewUrl;
                self.artworkUrl30 = result.responseJSON.results[0].artworkUrl30;
                self.artworkUrl60 = result.responseJSON.results[0].artworkUrl60;
                self.artworkUrl100 = result.responseJSON.results[0].artworkUrl100;
                self.collectionPrice = result.responseJSON.results[0].collectionPrice;
                self.trackPrice = result.responseJSON.results[0].trackPrice;
                self.trackRentalPrice = result.responseJSON.results[0].trackRentalPrice;
                self.collectionHdPrice = result.responseJSON.results[0].collectionHdPrice;
                self.trackHdPrice = result.responseJSON.results[0].trackHdPrice;
                self.trackHdRentalPrice = result.responseJSON.results[0].trackHdRentalPrice;
                self.releaseDate = result.responseJSON.results[0].releaseDate;
                self.collectionExplicitness = result.responseJSON.results[0].collectionExplicitness;
                self.trackExplicitness = result.responseJSON.results[0].trackExplicitness;
                self.trackTimeMillis = result.responseJSON.results[0].trackTimeMillis;
                self.country = result.responseJSON.results[0].country;
                self.currency = result.responseJSON.results[0].currency;
                self.primaryGenreName = result.responseJSON.results[0].primaryGenreName;
                self.contentAdvisoryRating = result.responseJSON.results[0].contentAdvisoryRating;
                self.longDescription = result.responseJSON.results[0].longDescription;
                self.radioStationUrl = result.responseJSON.results[0].radioStationUrl;
                self.fetchYoutubeVideo(self.trackName, caller, self);
            });
            return self;
        },

        fetchYoutubeVideo: function (movieName, caller, model) {
            this.url = "https://www.googleapis.com/youtube/v3/search?" +
                "part=snippet&" +
                "key=AIzaSyB5Mzko--UQbWTNhxxGmMHQJVQt4ZW0YbM&" +
                "maxResults=1&" +
                "q= " + movieName + " movie trailer";
            var self = this;
            this.fetch().success(function (_data, success, result) {
                self.youtubePreviewUrl = "https://www.youtube.com/embed/" + result.responseJSON.items[0].id.videoId;

                caller.$el.find(" .Page")[0].innerHTML = $(caller.movieView.render(model).el).html();


            })

        }


    });

    movieModel = new MovieModel();

}(jQuery));