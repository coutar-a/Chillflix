(function ($) {

    MovieView = Backbone.View.extend({

        source: Handlebars.getTemplate('MovieTemplate'),
        template : null,

        events: {

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(movie) {
            this.$el.html(this.template(movie));
            return this;
        }


    });

}) (jQuery);