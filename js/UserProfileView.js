/**
 * Created by Charles on 07/03/2017.
 */
(function ($) {

    UserProfileView = Backbone.View.extend({

        template: ($("#UserProfileTemplate").html()),

        events: {


        },

        initialize: function () {
            this.template = Handlebars.compile(this.template);
        },

        render: function(userProfile) {
            this.$el.html(this.template(userProfile));
            return this;

        }

    })

})(jQuery);