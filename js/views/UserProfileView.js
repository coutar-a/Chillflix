/**
 * Created by Charles on 07/03/2017.
 */
(function ($) {

    UserProfileView = Backbone.View.extend({

        source: ($("#UserProfileTemplate").html()),
        template : null,

        events: {


        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function(userProfile) {
            this.$el.html(this.template(userProfile));
            return this;
        }


    })

})(jQuery);