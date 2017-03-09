(function ($) {

    ActorView = Backbone.View.extend({

        source: ($("#ActorTemplate").html()),
        template : null,

        events: {


        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(actor) {

            var data = {actorName :"test"};
            this.$el.html(this.template(data));
            return this;
        }


    })

})(jQuery);