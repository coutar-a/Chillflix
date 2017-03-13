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

            this.model = actor;
            this.model.on('change',this.render,this);
            //this.model = {actorName: actor.artistName, primaryGenre: actor.primaryGenreName, artistLink: actor.artistLinkUrl, artistImage: actor.artistImage};
            this.$el.html(this.template(this.model));
            return this;
        }


    })

})(jQuery);