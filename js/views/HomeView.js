/**
 * Created by Charles on 07/03/2017.
 */
(function ($) {

    HomeView = Backbone.View.extend({

        source: ($("#HomeTemplate").html()),
        template : null,

        events: {


        },

        initialize: function () {
            this.template = Handlebars.compile(this.source);
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }

    })

})(jQuery);