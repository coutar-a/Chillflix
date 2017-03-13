(function ($) {

    WatchlistCollectionView = Backbone.View.extend({

        tagName: 'ul',
        template: _.template($("#WatchlistCollectionTemplate").html()),

        events: {
            'keypress #newTask': 'createWatchlistOnEnter'
        },

        initialize: function () {
            this.input = $("#newWatchlist");
        },

        render: function() {
            this.$el.html(this.template({}));
            this.$('#watchlists').empty();
            this.refresh();
            return this;
        },

        createWatchlistOnEnter: function(e){
            if(e.which !== 13 || !this.input.val().trim()){
                return;
            }
            console.log('creating watchlist: ' + this.input.val().trim());
            this.model.create({name: this.input.val().trim()});
            this.input.val('');
            this.refresh();
        },

        refresh: function(){
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