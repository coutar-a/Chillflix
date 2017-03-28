(function ($) {

    LoginView = Backbone.View.extend({

        source: Handlebars.getTemplate('LoginTemplate'),
        template: null,

        events: {

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        authenticate : function () {



        },

        login : function () {


        }

    });

})(jQuery);