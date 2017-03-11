(function ($) {

    HomeView = Backbone.View.extend({

        source: ($("#HomeTemplate").html()),
        template : null,

        events: {


        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(userProfile) {

            var data = {name : userProfile.attributes.name,
                email : userProfile.attributes.email,
                id : userProfile.attributes.id,
                following : userProfile.attributes.following};

            this.$el.html(this.template(data));
            return this;
        }

    })

})(jQuery);