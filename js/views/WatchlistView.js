(function ($) {

    WatchlistView = Backbone.View.extend({

        source: ($("#WatchlistTemplate").html()),
        template : null,

        events: {

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(watchlist) {

            return this;
        }
    });

}) (jQuery);