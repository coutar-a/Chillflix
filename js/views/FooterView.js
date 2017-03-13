(function ($) {

    FooterView = Backbone.View.extend({

        template: _.template($("#FooterTemplate").html()),

        render: function () {
            this.$el.html(this.template({}));
            return this;
        }

    });

})(jQuery);