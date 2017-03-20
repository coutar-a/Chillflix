/**
 * Created by Charles on 15/03/2017.
 */
(function ($) {

    SearchResultsCollection = Backbone.Collection.extend({
        model: SearchResultsModel,
        url: "http://umovie.herokuapp.com/search",
        headers:{'Authorization': userProfile.token}
    });

}(jQuery));