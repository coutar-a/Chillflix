(function ($) {

    WatchlistCollectionView = Backbone.View.extend({

        template: _.template($("#WatchlistCollectionTemplate").html()),

        initialize: function () {
            this.input = $("#newWatchlist");
        },

        events: {
            "keypress #newWatchlist": "createWatchlistOnEnter"
        },

        render: function() {
            this.$el.html(this.template({}));
            this.refresh();
            return this;
        },

        createWatchlistOnEnter: function(e){
            if(e.which !== 13 || !this.input.val().trim()){
                return;
            }
            console.log('creating watchlist: ' + this.input.val().trim());
        },

        refresh: function(){
            this.$('#watchlists').empty();
            watchlistCollection.fetch({
                success: function () {
                    watchlistCollection.each(function(watchlist){

                        var view = new WatchlistView({model: watchlist});
                        this.$('#watchlists').append(view.render(watchlist).el);
                    });
                }
            });
        }
    });

}) (jQuery);