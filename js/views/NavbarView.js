(function ($) {

    NavbarView = Backbone.View.extend({

        template: _.template($("#NavbarTemplate").html()),

        render: function () {
            this.$el.html(this.template({}));
            return this;
        }

    });

})(jQuery);