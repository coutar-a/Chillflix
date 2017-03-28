/**
 * Created by Charles on 25/03/2017.
 */
(function ($) {

    RegisterView = Backbone.View.extend({

        source: Handlebars.getTemplate('RegisterTemplate'),
        template: null,

        events: {

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})(jQuery);