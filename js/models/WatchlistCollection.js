(function ($) {

    WatchlistCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url: "https://umovie.herokuapp.com/unsecure/watchlists",
        headers:{'Authorization': userProfile.token}
    });

    watchlistCollection = new WatchlistCollection();

}(jQuery));