(function ($) {

    WatchlistModel = Backbone.Model.extend({
        defaults:{
            name:'',
            movies:[]
        },
        urlRoot: 'https://umovie.herokuapp.com/unsecure/watchlists/',
        headers:{'Authorization': userProfile.attributes.token},

        addMovie: function(movie){
            $.ajax(
                {
                    method: "POST",
                    url: this.urlRoot + this.id + "/movies",
                    success: function(){ console.log("Movie successfully added to watchlist"); }
                }
            )
        },

        removeMovie: function(trackId){
            $.ajax(
                {
                    method: "DELETE",
                    url: this.urlRoot + this.id + "/movies/" + trackId,
                    success: function(){ console.log("Movie successfully removed from watchlist"); }
                }
            )
        },

        rename: function(newName){
            $.ajax(
                {
                    method: "PUT",
                    url: this.urlRoot + this.id,
                    data: { name: newName },
                    success: function(){ console.log("Watchlist renamed to " + newName); }
                }
            )
        },

        getMovies: function(){
            var result = [];
            this.attributes.movies.forEach(
                function(movie){
                    result.push( new MovieModel( movie ) );
                }
            );
            return result;
        }
    });

}(jQuery));
