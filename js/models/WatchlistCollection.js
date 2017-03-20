(function ($) {

    WatchlistCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url: "http://umovie.herokuapp.com/unsecure/watchlists",
        headers:{'Authorization': userProfile.token}
    });

    watchlistCollection = new WatchlistCollection();

}(jQuery));