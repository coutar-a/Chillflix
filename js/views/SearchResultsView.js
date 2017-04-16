/**
 * Created by Charles on 13/03/2017.
 */
(function ($) {

    SearchResultsView = Backbone.View.extend({

        //source: ($("#SearchResultsTemplate").html()),
        source: Handlebars.getTemplate('SearchResultsTemplate'),
        template: null,


        initialize: function () {
            this.template = Handlebars.compile(this.source);

        },

        render: function (searchResult) {
            searchResult = {"query" : $("#search")[0].value, "searchResults" : searchResult};
            this.$el.html(this.template(searchResult));
            return this;
        }


    })

})(jQuery);