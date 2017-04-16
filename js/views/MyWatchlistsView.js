(function ($) {

    MyWatchlistsView = Backbone.View.extend({

        template: _.template($("#MyWatchlistsTemplate").html()),

        initialize: function () {

        },

        events: {

        },

        render: function() {
            watchlistCollection.fetch(
                { success: this.onFetchSuccess }
            );
            return this;
        },

        onFetchSuccess: function(){
            this.$el.html(this.template({}));
            var myWatchlists = userProfile.getWatchlists();

            console.log(myWatchlists);

            for(var i=0; i<myWatchlists.length; i++){
                console.log(myWatchlists[i]);
            }
        }
    });

}) (jQuery);