/**
 * Created by Nadia on 2017-03-10.
 */
(function ($) {

    TVShowView = Backbone.View.extend({

        source: ($("#TVShowTemplate").html()),
        template: null,

        events: {},

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function (tvshow) {

            var data = {
                seasonTitle: tvshow.seasonTitle,
                artwork: tvshow.artworkUrl,
                seasonLink: tvshow.seasonLink,
                primaryGenre: tvshow.primaryGenreName,
                longDescription: tvshow.longDescription,
                sourceVideo: tvshow.videoURL
            };

            this.$el.html(this.template(data));
            return this;
        }


    })

})(jQuery);