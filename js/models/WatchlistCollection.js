(function ($) {

    WatchlistCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url: "https://umovie.herokuapp.com/unsecure/watchlists/58c5f5ee1b8fb8040090bba3",
        headers:{'Authorization': userProfile.token}
    });

    watchlistCollection = new WatchlistCollection();

}(jQuery));