(function ($) {

    TVShowView = Backbone.View.extend({

        source: Handlebars.getTemplate('TVShowTemplate'),
        template: null,

        events: {},

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function (tvshow) {
            this.$el.html(this.template(tvshow));
            return this;

        }

    })

})(jQuery);