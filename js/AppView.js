/**
 * Created by Charles on 05/03/2017.
 */



var AppView = Backbone.View.extend({

    el: '#container',

    //homeTemplate : _.template($('#HomeTemplate').html()),
    //movieTemplate : _.template($('#MovieTemplate').html()),
    //tvShowTemplate : _.template($('#TVShowTemplate').html()),
    //actorTemplate : _.template($('#ActorTemplate').html()),
    //watchlistTemplate : _.template($('#WatchlistTemplate').html()),

    //homeView : new HomeView({}),
    //movieView : new MovieView({}),
    //tvShowView : new TVShowView({}),
    //actorView : new ActorView({}),
    //watchlistView : new WatchlistView({}),

    initialize: function() {

    },

    load: function (objectID) {

    },

    /**
     * Load the page with the
     * name passed as argument.
     * @param page : String page -> name of the page.
     *
     * ex :
     *      appView.loadPage("movie");
     */
    loadPage : function(page) {
        switch (page.toLowerCase()) {

            case "home" : {
                //this.$el.html(this.homeTemplate());
                break;
            }

            case "movie" : {
                console.log("lol");
                //this.$el.html(this.movieTemplate());
                break;
            }

            case "tvshow" : {
                //this.$el.html(this.tvShowTemplate());
                break;
            }

            case "actor" : {
                //this.$el.html(this.actorTemplate());
                break;
            }

            case "watchlist" : {
                //this.$el.html(this.watchlistTemplate());
                break;
            }

            case "userprofile" : {
                //this.$el.html(this.userProfileTemplate());
                break;
            }

            case "settings" : {
                //this.$el.html(this.settingsTemplate());
                break;
            }

            case "login" : {
                //this.$el.html(this.loginTemplate());
                break;
            }

        }
    },

    loadPageWithObject : function(page, object) {

        switch (page) {

            case "movie" : {
                console.log(object);
                //this.$el.html(this.movieTemplate(object));
                break;
            }

            case "tvshow" : {
                console.log(object);
                //this.$el.html(this.tvShowTemplate(object));
                break;
            }

            case "actor" : {
                console.log(object);
                //this.$el.html(this.actorTemplate(object));
                break;
            }

        }

    }

});

var appView = new AppView();