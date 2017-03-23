(function ($) {

    WatchlistModel = Backbone.Model.extend({
        defaults:{
            name:'',
            movies:[]
        },
        urlRoot: 'https://umovie.herokuapp.com/unsecure/watchlists/',
        headers:{'Authorization': userProfile.attributes.token}
    });

}(jQuery));
