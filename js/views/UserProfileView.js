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

            var data = {email : userProfile.attributes.email, id : userProfile.attributes.id, following : userProfile.attributes.following};
            this.$el.html(this.template(data));
            return this;
        }


    })

})(jQuery);