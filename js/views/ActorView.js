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

            var data = {actorName: actor.artistName, primaryGenre: actor.primaryGenreName, artistLink: actor.artistLinkUrl};
            this.$el.html(this.template(data));
            return this;
        }


    })

})(jQuery);