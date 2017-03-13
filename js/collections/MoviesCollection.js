(function ($) {

    MoviesCollection = Backbone.Collection.extend({
        model: MovieModel,
        url: 'https://umovie.herokuapp.com/unsecure/movies'
    });

    movies = new MoviesCollection();

}) (jQuery);