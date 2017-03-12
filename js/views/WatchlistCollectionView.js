(function ($) {

    WatchlistCollectionView = Backbone.View.extend({

        tagName: 'ul',
        source: ($("#WatchlistCollectionTemplate").html()),
        template : null,

        events: {

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(collection) {
            var data = {
                watchlists: collection.models
            };
            this.$el.html(this.template(data));
            return this;
        }

    });

}) (jQuery);