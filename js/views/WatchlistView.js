(function ($) {

    WatchlistView = Backbone.View.extend({

        source: Handlebars.getTemplate('WatchlistTemplate'),
        template: null,

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        events: {

        },

        render: function(watchlist) {
            this.$el.html(this.template(watchlist.toJSON()));
            return this;
        }
    });

}) (jQuery);