(function ($) {

    WatchlistCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url: "http://umovie.herokuapp.com/unsecure/watchlists",
        headers:{'Authorization': userProfile.attributes.token},

        filterByUserEmail: function(email){
            var result = [];
            this.models.forEach(function (watchlist) {
                if(watchlist.attributes.owner != undefined && watchlist.attributes.owner.email === email) {
                    result.push(watchlist);
                }
            });
            return result;
        }
    });

    watchlistCollection = new WatchlistCollection();

}(jQuery));