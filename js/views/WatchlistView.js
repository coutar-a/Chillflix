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
            var data = {
                name: watchlist.attributes.name
            };
            this.$el.html(this.template(data));
            return this;
        }

    });

}) (jQuery);