(function ($) {

    MovieView = Backbone.View.extend({

        source: ($("#MovieTemplate").html()),
        template : null,

        events: {


        },

        //TODO: button to add a the film to an existing watchlist
        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(movie) {

            var data = {
                    wrapperType: movie.wrapperType,
                    kind: movie.kind,
                    movieId: movie.trackId,
                    artistName: movie.artistName,
                    movieName: movie.trackName,
                    movieCensoredName: movie.trackCensoredName,
                    movieViewUrl: movie.trackViewUrl,
                    previewUrl: movie.previewUrl,
                    youtubePreviewUrl: movie.youtubePreviewUrl,
                    artworkUrl30: movie.artworkUrl30,
                    artworkUrl60: movie.artworkUrl60,
                    artworkUrl100: movie.artworkUrl100,
                    collectionPrice: movie.collectionPrice,
                    moviePrice: movie.trackPrice,
                    movieRentalPrice: movie.trackRentalPrice,
                    collectionHdPrice: movie.collectionHdPrice,
                    movieHdPrice: movie.trackHdPrice,
                    movieHdRentalPrice: movie.trackHdRentalPrice,
                    releaseDate: movie.releaseDate,
                    collectionExplicitness: movie.collectionExplicitness,
                    movieExplicitness: movie.trackExplicitness,
                    movieTrackTimeMillis: movie.trackTimeMillis,
                    country: movie.country,
                    currency: movie.currency,
                    primaryGenreName: movie.primaryGenreName,
                    contentAdvisoryRating: movie.contentAdvisoryRating,
                    longDescription: movie.longDescription,
                    radioStationUrl: movie.radioStationUrl
            };
            this.$el.html(this.template(data));
            return this;
        },


    });

}) (jQuery);