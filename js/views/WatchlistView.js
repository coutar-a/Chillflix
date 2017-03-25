(function ($) {

    WatchlistView = Backbone.View.extend({

        //source: ($("#WatchlistTemplate").html()),
        source: Handlebars.getTemplate('WatchlistTemplate'),
        template : null,

        events: {

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(watchlist) {
            var data = {
                name: watchlist.attributes.name
            };
            this.$el.html(this.template(data));
            for(i = 0; i<watchlist.attributes.movies.length; i++){
                this.$("#watchlist-movies").append(
                    "<li>"
                        + watchlist.attributes.movies[i].trackName
                    + "</li>");
            }
            return this;
        }
    });

}) (jQuery);