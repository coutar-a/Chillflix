/**
 * Created by Charles on 13/03/2017.
 */
(function ($) {

    SearchResultsModel = Backbone.Model.extend({
        urlRoot: 'https://umovie.herokuapp.com/search/',

        fetchWithKeywords: function (keywords, caller, params) {

            this.fetch({
                url: 'https://umovie.herokuapp.com/search' + params + '?q=' + keywords + '&limit=100',
                headers: {'Authorization': userProfile.token},
                success: function (data) {
                    caller.$el.find(" .Page")[0].innerHTML = $(caller.searchResultsView.render(data.attributes.results).el).html(); // TODO : Refactor.
                }
            })


        }

    });


}(jQuery));