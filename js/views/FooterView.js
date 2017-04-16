(function ($) {

    FooterView = Backbone.View.extend({

        //template: _.template($("#FooterTemplate").html()),
        template: Handlebars.getTemplate('FooterTemplate'),

        initialize: function () {
            this.template = Handlebars.compile(this.template);
        },

        render: function () {
        	this.$el.html(this.template);
            return this;
        }

    });

})(jQuery);