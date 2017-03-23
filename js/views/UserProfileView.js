(function ($) {

    UserProfileView = Backbone.View.extend({

        source: ($("#UserProfileTemplate").html()),
        template: null,

        events: {



        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function (userProfile) {
            this.$el.html(this.template(userProfile.attributes));

            return this;
        },

        route : function (event) {
            console.log(event);
        }


    })

})(jQuery);