/**
 * Created by Charles on 07/03/2017.
 */

(function ($) {

    HomeView = Backbone.View.extend({

        template: _.template($("#HomeTemplate").html()),

        events: {


        },

        initialize: function () {

        },

        render: function() {
            this.$el.html(this.template({}));
            return this;
        }

    })

})(jQuery);