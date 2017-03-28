(function ($) {

    HomeView = Backbone.View.extend({

        //source: ($("#HomeTemplate").html()),
        source: Handlebars.getTemplate('HomeTemplate'),
        template : null,

        events : {

          "click .followUser" : "console.log"

        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(userProfile) {



            this.$el.html(this.template(userProfile.attributes));
            return this;
        }



    })

})(jQuery);