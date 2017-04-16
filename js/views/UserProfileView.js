(function ($) {

    UserProfileView = Backbone.View.extend({

        source: Handlebars.getTemplate('UserProfileTemplate'),
        template: null,

        events: {},

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function (userProfile) {
            console.log(userProfile);
            this.$el.html(this.template(userProfile.toJSON()));
            return this;
        },

        route: function (event) {
            console.log(event);
        }


    })

})(jQuery);