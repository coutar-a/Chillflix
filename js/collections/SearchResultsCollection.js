(function ($) {

    SearchResultsCollection = Backbone.Collection.extend({
        model: SearchResultsModel,
        url: "http://umovie.herokuapp.com/search",
        headers:{'Authorization': userProfile.token}
    });

}(jQuery));