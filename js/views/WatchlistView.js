(function ($) {

    WatchlistView = Backbone.View.extend({

        source: ($("#WatchlistTemplate").html()),
        template : null,

        events: {

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function() {
            var data = {
                name: this.model.name,
                movies: this.model.movies
            };
            this.$el.html(this.template(data));
            return this;
        }

    });

}) (jQuery);