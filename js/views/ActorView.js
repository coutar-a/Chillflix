(function ($) {

    ActorView = Backbone.View.extend({

        //source: ($("#ActorTemplate").html()),
        source: Handlebars.getTemplate("ActorTemplate"),
        template : null,

        events: {


        },

        initialize: function () {

            this.template = Handlebars.compile(this.source);
           
        },

        render: function(actor) {
            this.$el.html(this.template(actor));
            return this;
        }


    })

})(jQuery);